
const mysql = require('mysql2/promise');
// Env vars loaded via --env-file

async function checkSchema() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        console.log('Connected to database');

        const tables = ['trending_items', 'discover_items', 'top_new_releases', 'epic_first_run', 'now_on'];

        for (const table of tables) {
            console.log(`\n--- Schema for ${table} ---`);
            const [rows] = await connection.query(`DESCRIBE ${table}`);
            rows.forEach(row => {
                console.log(`${row.Field}: ${row.Type}`);
            });
        }

        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

checkSchema();
