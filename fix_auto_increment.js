
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
                // Remove quotes if present
                const cleanValue = value.replace(/^["'](.*)["']$/, '$1');
                if (key && !process.env[key]) {
                    process.env[key] = cleanValue;
                }
            }
        });
        console.log('Loaded .env.local');
    }
} catch (e) {
    console.log('Error reading .env.local:', e.message);
}

async function fix() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };
    console.log(`Connecting to ${config.database} as ${config.user}...`);

    try {
        const connection = await mysql.createConnection(config);
        const tables = ['trending_items', 'discover_items', 'top_new_releases', 'epic_first_run', 'now_on'];

        for (const table of tables) {
            process.stdout.write(`Checking ${table}... `);
            try {
                // Check if auto_increment exists
                const [rows] = await connection.query(`SHOW COLUMNS FROM ${table} WHERE Field = 'id'`);
                if (rows.length === 0) {
                    console.log('Column id not found!');
                    continue;
                }

                const extra = rows[0].Extra;
                const key = rows[0].Key;

                if (!extra.includes('auto_increment')) {
                    console.log(`Missing AUTO_INCREMENT. Fixing...`);

                    if (key === 'PRI') {
                        await connection.query(`ALTER TABLE ${table} MODIFY id INT AUTO_INCREMENT`);
                    } else {
                        // If checking fails, try forcing PK drop/add or just add AI
                        try {
                            await connection.query(`ALTER TABLE ${table} MODIFY id INT AUTO_INCREMENT PRIMARY KEY`);
                        } catch (alterErr) {
                            // If PK already exists but Key field didn't report it correctly?
                            console.log('First attempt failed, trying without PRIMARY KEY...');
                            await connection.query(`ALTER TABLE ${table} MODIFY id INT AUTO_INCREMENT`);
                        }
                    }
                    console.log(`Fixed ${table}.`);
                } else {
                    console.log(`OK (Already has AUTO_INCREMENT).`);
                }
            } catch (err) {
                console.error(`\nError processing ${table}:`, err.message);
            }
        }
        await connection.end();
        console.log('Done.');
    } catch (err) {
        console.error('Connection failed:', err.message);
    }
}

fix();
