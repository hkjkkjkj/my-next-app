
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Manually load env
try {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim();
                const cleanValue = value.replace(/^["'](.*)["']$/, '$1');
                if (key && !process.env[key]) {
                    process.env[key] = cleanValue;
                }
            }
        });
    }
} catch (e) { }

async function fix() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Connecting to ${config.database}...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

        const updates = [
            // [New Path, Slug]
            ['/game-covers/black-ops-7.png', 'black-ops-7'],
            ['/game-covers/cyberpunk-2077.png', 'cyberpunk-2077'],
            ['/top-new-releases/celeste.png', 'celeste'],
            ['/top-new-releases/crystal-of-atlantean.png', 'crystal-of-atlantean'],
            ['/epic-form-epic-first-run/clair-obscur.png', 'clair-obscur'],
            // Fixing any potential legacy paths for crosshair/constance if needed, though they appeared correct
            // Adding them to be safe if they are using different tables
        ];

        for (const [newPath, slug] of updates) {
            console.log(`Updating ${slug} -> ${newPath}`);
            await connection.query(
                `UPDATE games SET hero_image = ? WHERE slug = ?`,
                [newPath, slug]
            );

            // Also try to update section tables if they have entries
            const tables = ['trending_items', 'top_new_releases', 'epic_first_run', 'now_on', 'discover_items'];
            for (const table of tables) {
                // Check if column exists first? No, assume schema or catch error
                try {
                    await connection.query(
                        `UPDATE ${table} SET image_url = ? WHERE slug = ?`,
                        [newPath, slug]
                    );
                } catch (e) {
                    // Table might not have slug or image_url, ignore
                }
            }
        }

        console.log('Updates complete.');

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

fix();
