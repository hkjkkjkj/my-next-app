
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

async function checkData() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Checking data in ${config.database}...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

        const slug = 'where-winds-meet';
        console.log(`Looking for slug: ${slug}`);

        // Check games
        const [games] = await connection.query(`SELECT id, slug, title FROM games WHERE slug = ?`, [slug]);
        console.log('Main Games Table:', games);

        // Check discover_items
        const [items] = await connection.query(`SELECT id, game_id, slug FROM discover_items WHERE slug = ?`, [slug]);
        console.log('Discover Items:', items);

        // Check trending
        const [trending] = await connection.query(`SELECT id, game_id, slug FROM trending_items WHERE slug = ?`, [slug]);
        console.log('Trending Items:', trending);

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

checkData();
