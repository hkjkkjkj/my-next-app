
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

async function fix() {
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

        const updates = [
            // [New Path, Slug]
            ['/game-covers/the-midnight-walkers.png', 'the-midnight-walkers'],
            ['/top-new-releases/the-hunter-call-of-the-wild.png', 'the-hunter-call-of-the-wild'],
            ['/top-new-releases/when-the-past-was-around.png', 'when-the-past-was-around'],
            ['/epic-form-epic-first-run/hell-is-us.png', 'hell-is-us'],
            ['/game-covers/jurassic-world-3.jpg', 'jurassic-world-3'], // Fixed extension .jpg
            ['/top-new-releases/lies-of-p.png', 'lies-of-p'],
            ['/top-new-releases/lords-of-the-fallen-ii.png', 'lords-of-the-fallen-ii'],
            ['/game-covers/mouse-p-i-for-hire.png', 'mouse-p-i-for-hire'],
            ['/epic-form-epic-first-run/octopath-traveler.jpg', 'octopath-traveler'], // Fixed extension .jpg
            ['/epic-form-epic-first-run/once-human.png', 'once-human'],
            ['/game-covers/subnautica-2.png', 'subnautica-2'],
            ['/top-new-releases/stray.jpg', 'stray'], // Fixed extension .jpg
            ['/top-new-releases/rusty-lake-hotel.png', 'rusty-lake-hotel'],
            ['/game-covers/resident-evil-requiem.jpg', 'resident-evil-requiem'], // Fixed extension .jpg
            ['/epic-form-epic-first-run/reanimal.png', 'reanimal'],
            ['/trending/the-wolf-among-us-2.png', 'the-wolf-among-us-2'],
            ['/epic-form-epic-first-run/vampire-the-masquerade.jpg', 'vampire-the-masquerade'] // Fixed extension .jpg
        ];

        for (const [newPath, slug] of updates) {
            console.log(`Updating ${slug} \t-> ${newPath}`);

            // 1. Update main games table
            await connection.query(
                `UPDATE games SET hero_image = ? WHERE slug = ?`,
                [newPath, slug]
            );

            // 2. Update auxiliary tables with 'image_url' column
            const imageUrlTables = [
                'discover_items',
                'hero_banners',
                'trending_items',
                'top_new_releases',
                'epic_first_run',
                'now_on',
                'coming_soon'
            ];

            for (const table of imageUrlTables) {
                try {
                    await connection.query(
                        `UPDATE ${table} SET image_url = ? WHERE slug = ?`,
                        [newPath, slug]
                    );
                } catch (e) { /* Ignore if table/col missing */ }
            }

            // 3. Update 'sidebar_games' (thumbnail_url)
            try {
                await connection.query(
                    `UPDATE sidebar_games SET thumbnail_url = ? WHERE slug = ?`,
                    [newPath, slug]
                );
            } catch (e) { }

            // 4. Update 'new_releases' (image)
            try {
                await connection.query(
                    `UPDATE new_releases SET image = ? WHERE slug = ?`,
                    [newPath, slug]
                );
            } catch (e) { }
        }

        console.log('Final Round updates complete.');

    } catch (e) {
        console.error('Error:', e);
    } finally {
        if (connection) await connection.end();
    }
}

fix();
