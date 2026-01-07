const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const envPath = path.resolve(__dirname, '.env.local');
const envConfig = fs.readFileSync(envPath, 'utf8').split('\n').reduce((acc, line) => {
    const [key, value] = line.split('=');
    if (key && value) acc[key.trim()] = value.trim();
    return acc;
}, {});
process.env = { ...process.env, ...envConfig };

async function checkTables() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        const [rows] = await connection.execute('SHOW TABLES');
        console.log('Tables:', rows);

        // Check if users table exists and describe it
        try {
            const [desc] = await connection.execute('DESCRIBE users');
            console.log('Users Table Schema:', desc);
        } catch (e) {
            console.log('Users table does not exist or error:', e.message);
        }

        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

checkTables();
