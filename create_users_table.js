const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const envPath = path.resolve(__dirname, '.env.local');

// Parse .env.local manually
let dbConfig = {};
try {
    const envConfig = fs.readFileSync(envPath, 'utf8').split('\n').reduce((acc, line) => {
        const [key, value] = line.split('=');
        if (key && value) acc[key.trim()] = value.trim();
        return acc;
    }, {});
    dbConfig = {
        host: envConfig.DB_HOST,
        user: envConfig.DB_USER,
        password: envConfig.DB_PASSWORD,
        database: envConfig.DB_NAME,
    };
} catch (e) {
    console.error("Error reading .env.local", e);
}

async function createUsersTable() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database at:', dbConfig.host);

        // 1. Create table if not exists (updated schema)
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                full_name VARCHAR(255),
                first_name VARCHAR(100),
                last_name VARCHAR(100),
                country VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_login TIMESTAMP NULL
            )
        `;
        await connection.execute(createTableQuery);

        // 2. Check and add columns if they are missing (for existing tables)
        const checkColumns = async (colName, colType) => {
            try {
                // Try to select the column to see if it exists
                await connection.execute(`SELECT ${colName} FROM users LIMIT 1`);
            } catch (err) {
                // If error (column likely doesn't exist), add it
                if (err.code === 'ER_BAD_FIELD_ERROR') {
                    console.log(`Column ${colName} missing. Adding...`);
                    await connection.execute(`ALTER TABLE users ADD COLUMN ${colName} ${colType}`);
                    console.log(`✅ Added column: ${colName}`);
                }
            }
        };

        await checkColumns('first_name', 'VARCHAR(100)');
        await checkColumns('last_name', 'VARCHAR(100)');
        await checkColumns('country', 'VARCHAR(100)');

        console.log('✅ Users table checked/updated successfully.');
        await connection.end();
    } catch (error) {
        console.error('Error creating/updating users table:', error);
    }
}

createUsersTable();
