const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function updateGalleryJson() {
    console.log('--- Updating gallery_json for Games ---\n');

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

        // Get all games
        const [games] = await connection.execute('SELECT id, slug, title, gallery_json FROM games');

        console.log(`Found ${games.length} games in database\n`);

        for (const game of games) {
            const slug = game.slug;
            const currentGallery = game.gallery_json ? JSON.parse(JSON.stringify(game.gallery_json)) : [];

            // Skip if gallery already has 3+ items
            if (currentGallery.length >= 3) {
                console.log(`⏭️  ${game.title}: Already has ${currentGallery.length} gallery items`);
                continue;
            }

            const newImages = new Set(currentGallery); // Use Set to avoid duplicates

            // Check each section table for images
            const sections = [
                { table: 'top_new_releases', field: 'image_url' },
                { table: 'trending_items', field: 'image_url' },
                { table: 'epic_first_run', field: 'image_url' },
                { table: 'now_on', field: 'image_url' },
                { table: 'discover_items', field: 'image_url' },
                { table: 'hero_banners', field: 'image_url' }
            ];

            for (const section of sections) {
                try {
                    const [rows] = await connection.execute(
                        `SELECT ${section.field} FROM ${section.table} WHERE game_id = ? OR slug = ?`,
                        [game.id, slug]
                    );

                    if (rows.length > 0 && rows[0][section.field]) {
                        newImages.add(rows[0][section.field]);
                    }
                } catch (err) {
                    // Table might not exist or query failed, skip
                }
            }

            // Also add hero_image if exists
            const [gameData] = await connection.execute(
                'SELECT hero_image FROM games WHERE id = ?',
                [game.id]
            );

            if (gameData[0]?.hero_image) {
                newImages.add(gameData[0].hero_image);
            }

            // Convert Set to Array
            const finalGallery = Array.from(newImages).filter(img => img); // Remove null/undefined

            // Only update if we found new images
            if (finalGallery.length > currentGallery.length) {
                await connection.execute(
                    'UPDATE games SET gallery_json = ? WHERE id = ?',
                    [JSON.stringify(finalGallery), game.id]
                );
                console.log(`✅ ${game.title}: Updated gallery (${currentGallery.length} → ${finalGallery.length} images)`);
            } else {
                console.log(`⚠️  ${game.title}: No additional images found`);
            }
        }

        console.log('\n✅ Gallery update completed!');
        await connection.end();
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

updateGalleryJson();
