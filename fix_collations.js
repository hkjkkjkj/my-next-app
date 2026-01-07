const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function fixCollations() {
    console.log('--- Fixing Database Collations ---\n');

    // Load env
    const envPath = path.join(__dirname, '.env.local');
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    envContent.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) {
            envVars[parts[0].trim()] = parts.slice(1).join('=').trim();
        }
    });

    const config = {
        host: envVars.DB_HOST || 'localhost',
        user: envVars.DB_USER || 'root',
        password: envVars.DB_PASSWORD || '',
        database: envVars.DB_NAME || 'game_data'
    };

    try {
        const connection = await mysql.createConnection(config);
        console.log('✓ Connected to DB\n');

        // Get database name
        const dbName = config.database;

        // Set database default collation
        console.log('Setting database default collation...');
        await connection.query(`
            ALTER DATABASE \`${dbName}\` 
            CHARACTER SET utf8mb4 
            COLLATE utf8mb4_unicode_ci
        `);
        console.log('✅ Database collation updated\n');

        // Get all tables
        const [tables] = await connection.query(`
            SELECT TABLE_NAME 
            FROM information_schema.TABLES 
            WHERE TABLE_SCHEMA = '${dbName}'
        `);

        console.log(`Found ${tables.length} tables to update\n`);

        // Update each table
        for (const table of tables) {
            const tableName = table.TABLE_NAME;

            try {
                // Convert table collation
                await connection.query(`
                    ALTER TABLE \`${tableName}\` 
                    CONVERT TO CHARACTER SET utf8mb4 
                    COLLATE utf8mb4_unicode_ci
                `);
                console.log(`✅ ${tableName}`);
            } catch (err) {
                console.error(`❌ ${tableName}: ${err.message}`);
            }
        }

        console.log('\n✅ Collation fix completed!');
        await connection.end();
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

fixCollations();
