
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

try {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) process.env[parts[0].trim()] = parts.slice(1).join('=').trim().replace(/^["'](.*)["']$/, '$1');
        });
    }
} catch (e) { }

async function check() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    });

    console.log('--- trending_items ---');
    const [rows] = await connection.query('SELECT * FROM trending_items');
    console.log(rows);

    console.log('--- games (limit 2) ---');
    const [games] = await connection.query('SELECT id, title, slug FROM games LIMIT 2');
    console.log(games);

    await connection.end();
}
check();
