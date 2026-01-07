
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

async function addColumns() {
    console.log('--- Adding price columns to games table ---');

    const connection = await mysql.createConnection({
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
    });

    try {
        // Add price column
        try {
            await connection.query(`ALTER TABLE games ADD COLUMN price VARCHAR(50) DEFAULT NULL`);
            console.log('Added price column');
        } catch (e) {
            if (e.code === 'ER_DUP_FIELDNAME') console.log('price column already exists');
            else throw e;
        }

        // Add original_price column
        try {
            await connection.query(`ALTER TABLE games ADD COLUMN original_price VARCHAR(50) DEFAULT NULL`);
            console.log('Added original_price column');
        } catch (e) {
            if (e.code === 'ER_DUP_FIELDNAME') console.log('original_price column already exists');
            else throw e;
        }

        // Add discount column
        try {
            await connection.query(`ALTER TABLE games ADD COLUMN discount VARCHAR(20) DEFAULT NULL`);
            console.log('Added discount column');
        } catch (e) {
            if (e.code === 'ER_DUP_FIELDNAME') console.log('discount column already exists');
            else throw e;
        }

    } catch (error) {
        console.error('Error modifying schema:', error);
    } finally {
        await connection.end();
    }
}

addColumns();
