
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

async function findTables() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Searching tables in ${config.database}...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

        const [rows] = await connection.query(`
            SELECT TABLE_NAME 
            FROM INFORMATION_SCHEMA.COLUMNS 
            WHERE TABLE_SCHEMA = ? AND COLUMN_NAME = 'game_id'
        `, [config.database]);

        console.log('Tables with game_id column:');
        rows.forEach(r => console.log(`- ${r.TABLE_NAME}`));

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

findTables();
