
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

async function checkSidebar() {
    console.log('--- Checking sidebar_games table ---');

    const connection = await mysql.createConnection({
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
    });

    try {
        const [rows] = await connection.query(`
            SELECT sg.id, sg.title, sg.game_id, g.id as linked_game_id, g.slug 
            FROM sidebar_games sg 
            LEFT JOIN games g ON sg.game_id = g.id
        `);
        console.log(`Found ${rows.length} rows in sidebar_games.`);

        rows.forEach(row => {
            console.log(`- ID: ${row.id}, Title: ${row.title}, GameID: ${row.game_id}, Linked: ${row.linked_game_id ? 'YES (' + row.slug + ')' : 'NO'}`);
        });

    } catch (error) {
        console.error('Error querying data:', error);
    } finally {
        await connection.end();
    }
}

checkSidebar();
