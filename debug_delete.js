
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

async function debugDelete() {
    const config = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'game_data',
    };

    console.log(`Connecting to ${config.database}...`);
    let connection;

    try {
        connection = await mysql.createConnection(config);

        // 1. Create a dummy game
        const [res] = await connection.query(`INSERT INTO games (title, slug) VALUES ('Delete Me', 'delete-me')`);
        const gameId = res.insertId;
        console.log(`Created dummy game ID: ${gameId}`);

        // 2. Insert into dependent tables if they exist
        const tables = ['discover_items', 'hero_banners', 'sidebar_games', 'trending_items'];
        for (const t of tables) {
            try {
                // assume tables have game_id
                await connection.query(`INSERT INTO ${t} (game_id, slug, title) VALUES (?, 'delete-me', 'Delete Me')`, [gameId]);
                console.log(`Inserted into ${t}`);
            } catch (e) {
                // Ignore if table doesn't have these cols or doesn't exist
                // console.log(`Skipped ${t}: ${e.message}`);
            }
        }

        // 3. Try to DELETE from games ONLY (to see if it fails like user reported)
        console.log('Attempting DELETE from games...');
        try {
            await connection.query(`DELETE FROM games WHERE id = ?`, [gameId]);
            console.log('DELETE SUCCESS (No foreign key blocked it)');
        } catch (e) {
            console.error('DELETE FAILED:', e.message);

            // If failed, try to clean up manually using the "fix" logic
            console.log('Attempting cleanup delete...');
            for (const t of tables) {
                await connection.query(`DELETE FROM ${t} WHERE game_id = ?`, [gameId]);
            }
            await connection.query(`DELETE FROM games WHERE id = ?`, [gameId]);
            console.log('Cleanup complete.');
        }

    } catch (e) {
        console.error('Script Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

debugDelete();
