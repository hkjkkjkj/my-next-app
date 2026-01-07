
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

async function fix() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Force fixing schema for table 'games'...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

        // Drop existing ID column (it's varchar and causing issues)
        console.log('Dropping ID column...');
        try {
            await connection.query(`ALTER TABLE games DROP COLUMN id`);
        } catch (e) {
            console.log('Drop failed (maybe pk?), ignore if re-adding works.');
        }

        // Re-add as INT AUTO_INCREMENT
        console.log('Adding ID column as INT AUTO_INCREMENT...');
        await connection.query(`ALTER TABLE games ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST`);

        console.log('Success!');

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

fix();
