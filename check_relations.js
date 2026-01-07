
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

try {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
            const parts = line.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim().replace(/^["'](.*)["']$/, '$1');
                if (key && !process.env[key]) process.env[key] = value;
            }
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

    console.log('\n--- trending_items table ---');
    const [trendCols] = await connection.query(`DESCRIBE trending_items`);
    trendCols.filter(c => c.Field === 'game_id').forEach(c => console.log(c));

    await connection.end();
}
check();
