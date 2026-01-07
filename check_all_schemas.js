
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

    const tables = ['trending_items', 'discover_items', 'top_new_releases', 'epic_first_run', 'now_on'];

    for (const t of tables) {
        console.log(`\n--- ${t} ---`);
        const [cols] = await connection.query(`DESCRIBE ${t}`);
        cols.forEach(c => console.log(`${c.Field} (${c.Type})`));
    }

    await connection.end();
}
check();
