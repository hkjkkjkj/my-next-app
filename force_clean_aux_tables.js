
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

async function clean() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Cleaning auxiliary tables in ${config.database}...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

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
            'reviews',
            'cart'
        ];

        for (const table of tables) {
            console.log(`Processing ${table}...`);
            try {
                // 1. Try to fix IDs by Slug pairing
                // Must ensure slug column exists first
                const [cols] = await connection.query(`SHOW COLUMNS FROM ${table} LIKE 'slug'`);
                if (cols.length > 0) {
                    await connection.query(`
                        UPDATE ${table} t
                        JOIN games g ON t.slug = g.slug
                        SET t.game_id = g.id
                    `);
                    console.log(`  - Synced IDs via slug.`);
                }
            } catch (e) { console.log(`  - Sync failed: ${e.message}`); }

            try {
                // 2. Delete rows that STILL have non-numeric game_id (orphaned strings)
                // Using a regex to identify non-digits. 
                // MySQL 8.0 supports REGEXP_LIKE, older use REGEXP
                // Safe basic regex: everything that contains a non-digit
                // Or simplified: id = 0 usually catches string='abc' in some modes, but here causes error.
                // We'll use a string length check + implicit conversion check if possible??
                // No, explicit regex is best.

                // NOT REGEXP '^[0-9]+$' means "does not consist entirely of digits"
                const [res] = await connection.query(`DELETE FROM ${table} WHERE game_id NOT REGEXP '^[0-9]+$'`);
                console.log(`  - Deleted ${res.affectedRows} entries with invalid string IDs.`);
            } catch (e) {
                console.log(`  - Cleanup failed (maybe valid?): ${e.message}`);
            }
        }

        console.log('Cleanup complete.');

    } catch (e) {
        console.error('Script Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

clean();
