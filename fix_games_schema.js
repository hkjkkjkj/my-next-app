
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

    console.log(`Fixing schema for table 'games'...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

        // Check current state again to be sure
        const [rows] = await connection.query(`SHOW COLUMNS FROM games WHERE Field = 'id'`);
        const idCol = rows[0];
        console.log('Current state:', idCol);

        if (idCol.Extra.includes('auto_increment')) {
            console.log('Already AUTO_INCREMENT, nothing to do.');
        } else {
            console.log('Applying AUTO_INCREMENT...');
            await connection.query(`ALTER TABLE games MODIFY COLUMN id INT AUTO_INCREMENT`);
            console.log('Success!');
        }

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

fix();
