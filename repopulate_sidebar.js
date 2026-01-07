
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

async function repopulateSidebar() {
    console.log('--- Repopulating sidebar_games ---');
    const connection = await mysql.createConnection({
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
    });

    try {
        // Get 3 games
        const [games] = await connection.query('SELECT id, title, hero_image FROM games LIMIT 3');

        if (games.length === 0) {
            console.log('No games found in games table to populate sidebar.');
            return;
        }

        // Clear existing (should be empty anyway)
        await connection.query('TRUNCATE TABLE sidebar_games');
        console.log('Truncated sidebar_games.');

        for (const game of games) {
            const extraLabel = 'Now Available';
            await connection.query(
                'INSERT INTO sidebar_games (game_id, title, extra_label, thumbnail_url) VALUES (?, ?, ?, ?)',
                [game.id, game.title, extraLabel, game.hero_image]
            );
            console.log(`Inserted sidebar item for game: ${game.title} (ID: ${game.id})`);
        }

    } catch (error) {
        console.error('Error repopulating sidebar:', error);
    } finally {
        await connection.end();
    }
}

repopulateSidebar();
