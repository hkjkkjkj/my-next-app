
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
            ['/trending/arknights-endfield.png', 'arknights-endfield'],
            ['/trending/assassins-creed-valhalla.png', 'assassins-creed-valhalla'],
            ['/epic-form-epic-first-run/back-4-blood.jpg', 'back-4-blood'],
            ['/epic-form-epic-first-run/batman-arkham-knight.png', 'batman-arkham-knight']
        ];

        for (const [newPath, slug] of updates) {
            console.log(`Updating ${slug} -> ${newPath}`);
            const [result] = await connection.query(
                `UPDATE games SET hero_image = ? WHERE slug = ?`,
                [newPath, slug]
            );
            // Also act on the section tables just in case, though they usually join or duplicate
            // We'll update the main game table first. The admin view likely pulls from `games` or joins.
        }

        console.log('Updates complete.');

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

fix();
