
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

async function fix() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    });

    const tables = ['trending_items', 'discover_items', 'top_new_releases', 'epic_first_run', 'now_on'];

    for (const table of tables) {
        process.stdout.write(`Processing ${table}... `);
        try {
            const [cols] = await connection.query(`SHOW COLUMNS FROM ${table} WHERE Field = 'id'`);
            if (cols.length > 0) {
                const col = cols[0];
                // Check if it's already int auto_increment
                if (col.Type.includes('int') && col.Extra.includes('auto_increment')) {
                    console.log('OK.');
                    continue;
                }

                console.log(`Needs fix (Type: ${col.Type}).`);

                // If it's varchar, we drop and recreate.
                // If it's int but missing auto_increment (and empty/converting), modify.
                if (col.Type.includes('varchar') || col.Type.includes('text')) {
                    console.log(`  Dropping string ID...`);
                    // Check if it's PK
                    if (col.Key === 'PRI') {
                        await connection.query(`ALTER TABLE ${table} DROP PRIMARY KEY`);
                    }
                    await connection.query(`ALTER TABLE ${table} DROP COLUMN id`);
                    console.log(`  Adding new ID...`);
                    await connection.query(`ALTER TABLE ${table} ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST`);
                } else {
                    // Start integer
                    console.log(`  Modifying integer ID...`);
                    if (col.Key === 'PRI') {
                        await connection.query(`ALTER TABLE ${table} MODIFY id INT AUTO_INCREMENT`);
                    } else {
                        await connection.query(`ALTER TABLE ${table} MODIFY id INT AUTO_INCREMENT PRIMARY KEY`);
                    }
                }
                console.log(`  Fixed.`);
            } else {
                console.log('No ID column. Adding...');
                await connection.query(`ALTER TABLE ${table} ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST`);
                console.log(`  Added.`);
            }
        } catch (err) {
            console.error(`\n  Error: ${err.message}`);
        }
    }
    await connection.end();
}
fix();
