
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
});

async function checkSchema() {
    console.log('--- Checking sidebar_games schema ---');
    const connection = await mysql.createConnection({
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
    });
    try {
        const [columns] = await connection.query(`DESCRIBE sidebar_games`);
        columns.forEach(col => console.log(`${col.Field} (${col.Type})`));
    } finally {
        await connection.end();
    }
}
checkSchema();
