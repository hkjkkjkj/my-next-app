
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
            ['/epic-form-epic-first-run/doom-the-dark-ages.png', 'doom-the-dark-ages'],
            ['/game-covers/dying-light-the-beast.png', 'dying-light-the-beast'],
            ['/epic-form-epic-first-run/felix-the-reaper.png', 'felix-the-reaper'],
            ['/top-new-releases/florence.png', 'florence'],
            // Adding a few more potentially missing ones based on file list just in case
            ['/top-new-releases/lies-of-p.png', 'lies-of-p'],
            ['/top-new-releases/lords-of-the-fallen-ii.png', 'lords-of-the-fallen-ii'],
            ['/game-covers/mouse-p-i-for-hire.png', 'mouse-p-i-for-hire'],
        ];

        for (const [newPath, slug] of updates) {
            console.log(`Updating ${slug} -> ${newPath}`);
            await connection.query(
                `UPDATE games SET hero_image = ? WHERE slug = ?`,
                [newPath, slug]
            );

            const tables = ['trending_items', 'top_new_releases', 'epic_first_run', 'now_on', 'discover_items'];
            for (const table of tables) {
                try {
                    await connection.query(
                        `UPDATE ${table} SET image_url = ? WHERE slug = ?`,
                        [newPath, slug]
                    );
                } catch (e) { }
            }
        }

        console.log('Round 3 updates complete.');

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

fix();
