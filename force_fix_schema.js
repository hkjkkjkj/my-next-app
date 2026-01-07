
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

    let connection;
    try {
        connection = await mysql.createConnection(config);
        const tables = ['trending_items', 'discover_items', 'top_new_releases', 'epic_first_run', 'now_on'];

        for (const table of tables) {
            console.log(`\nProcessing ${table}...`);
            try {
                // Check current ID column type
                const [cols] = await connection.query(`SHOW COLUMNS FROM ${table} WHERE Field = 'id'`);
                if (cols.length === 0) {
                    console.log('  Column id not found. Creating it...');
                    await connection.query(`ALTER TABLE ${table} ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST`);
                    console.log('  Added id column.');
                    continue;
                }

                const col = cols[0];
                console.log(`  Current id type: ${col.Type}, Extra: ${col.Extra}`);

                if (!col.Extra.includes('auto_increment')) {
                    console.log('  Fixing schema: Dropping incompatible ID column and adding new AUTO_INCREMENT ID...');

                    // 1. Drop Primary Key (if exists) - usually on ID
                    if (col.Key === 'PRI') {
                        try {
                            await connection.query(`ALTER TABLE ${table} DROP PRIMARY KEY`);
                            console.log('  Dropped Primary Key.');
                        } catch (e) {
                            console.log('  Warning: Could not drop PK (might not exist):', e.message);
                        }
                    }

                    // 2. Drop the ID column
                    try {
                        await connection.query(`ALTER TABLE ${table} DROP COLUMN id`);
                        console.log('  Dropped old id column.');
                    } catch (e) {
                        console.error('  Failed to drop column:', e.message);
                        continue;
                    }

                    // 3. Add new ID column
                    try {
                        await connection.query(`ALTER TABLE ${table} ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST`);
                        console.log('  Created new id INT AUTO_INCREMENT PRIMARY KEY.');
                    } catch (e) {
                        console.error('  Failed to create new id column:', e.message);
                    }
                } else {
                    console.log('  Already correct.');
                }
            } catch (err) {
                console.error(`  Error processing ${table}:`, err.message);
            }
        }
    } catch (err) {
        console.error('Connection failed:', err.message);
    } finally {
        if (connection) await connection.end();
        console.log('\nDone.');
    }
}

fix();
