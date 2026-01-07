
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

async function repair() {
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

        // List of tables that have game_id and slug
        // We know these from previous steps
        const tables = [
            'discover_items',
            'top_new_releases',
            'trending_items',
            'epic_first_run',
            'now_on',
            'hero_banners',
            'sidebar_games',
            'coming_soon',
            'featured_game_banner',
            'user_library',
            'wishlist',
            'library', // Just in case
            'users_games_library', // Just in case
            'users_wishlist', // Just in case
            'reviews',
            'cart'
        ];

        for (const table of tables) {
            console.log(`Repairing ${table}...`);
            try {
                // Check if table exists and has slug column
                const [cols] = await connection.query(`SHOW COLUMNS FROM ${table} LIKE 'slug'`);
                if (cols.length === 0) {
                    console.log(`  Skipping (no slug column)`);
                    continue;
                }

                // Update game_id to match games.id where slugs match
                // We use a multi-table update
                const [res] = await connection.query(`
                    UPDATE ${table} t
                    JOIN games g ON t.slug = g.slug
                    SET t.game_id = g.id
                `);
                console.log(`  Updated ${res.affectedRows} rows.`);
            } catch (e) {
                console.log(`  Error/Skip: ${e.message}`);
            }
        }

        console.log('Repair complete.');

    } catch (e) {
        console.error('Script Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

repair();
