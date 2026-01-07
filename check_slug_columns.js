
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

async function checkColumns() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Checking columns in ${config.database}...`);
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
            'featured_game_banner'
        ];

        for (const table of tables) {
            try {
                const [cols] = await connection.query(`SHOW COLUMNS FROM ${table} LIKE 'slug'`);
                if (cols.length === 0) {
                    console.log(`[MISSING SLUG] Table '${table}' does NOT have a 'slug' column.`);
                } else {
                    console.log(`[OK] Table '${table}' has 'slug' column.`);
                }
            } catch (e) {
                console.log(`[ERROR] Table '${table}': ${e.message}`);
            }
        }

    } catch (e) {
        console.error('Script Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

checkColumns();
