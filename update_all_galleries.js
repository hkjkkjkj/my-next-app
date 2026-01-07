const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function updateAllGalleries() {
    console.log('=== Auto-Updating Gallery for All Games ===\n');

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

    // Scan public directories for images/videos
    const publicPath = path.join(__dirname, 'public');
    const imagesDir = path.join(publicPath, 'images-discover-game');
    const videosDir = path.join(publicPath, 'video-for-discover-game');

    const gameAssets = {};

    // Scan images directory
    if (fs.existsSync(imagesDir)) {
        const gameFolders = fs.readdirSync(imagesDir);
        gameFolders.forEach(folder => {
            const folderPath = path.join(imagesDir, folder);
            if (fs.statSync(folderPath).isDirectory()) {
                const files = fs.readdirSync(folderPath);
                const images = files
                    .filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i))
                    .map(f => `/images-discover-game/${folder}/${f}`);

                if (!gameAssets[folder]) gameAssets[folder] = [];
                gameAssets[folder].push(...images);
            }
        });
    }

    // Scan videos directory
    if (fs.existsSync(videosDir)) {
        const gameFolders = fs.readdirSync(videosDir);
        gameFolders.forEach(folder => {
            const folderPath = path.join(videosDir, folder);
            if (fs.statSync(folderPath).isDirectory()) {
                const files = fs.readdirSync(folderPath);
                const videos = files
                    .filter(f => f.match(/\.(mp4|webm|mov)$/i))
                    .map(f => `/video-for-discover-game/${folder}/${f}`);

                if (!gameAssets[folder]) gameAssets[folder] = [];
                // Add video first
                gameAssets[folder].unshift(...videos);
            }
        });
    }

    console.log(`Found assets for ${Object.keys(gameAssets).length} games\n`);

    try {
        const connection = await mysql.createConnection(config);
        console.log('✓ Connected to DB\n');

        // Get all games
        const [games] = await connection.execute('SELECT id, slug, title FROM games');

        let updated = 0;
        let skipped = 0;

        for (const game of games) {
            const slug = game.slug;

            // Try to find assets by slug
            let assets = gameAssets[slug];

            // If not found by slug, try to find by partial match
            if (!assets) {
                const matchingKey = Object.keys(gameAssets).find(key =>
                    slug.includes(key) || key.includes(slug)
                );
                if (matchingKey) {
                    assets = gameAssets[matchingKey];
                }
            }

            if (assets && assets.length > 0) {
                await connection.execute(
                    'UPDATE games SET gallery_json = ? WHERE id = ?',
                    [JSON.stringify(assets), game.id]
                );
                console.log(`✅ ${game.title}: ${assets.length} items`);
                updated++;
            } else {
                console.log(`⏭️  ${game.title}: No assets found`);
                skipped++;
            }
        }

        console.log(`\n=== Summary ===`);
        console.log(`Updated: ${updated} games`);
        console.log(`Skipped: ${skipped} games`);
        console.log(`✅ Done!`);

        await connection.end();
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

updateAllGalleries();
