
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function seedGames() {
    console.log('--- Seeding Games with Full Schema ---');

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
        console.log('Connected to DB');

        // 1. Reset tables
        await connection.execute('DROP TABLE IF EXISTS user_library');
        await connection.execute('DROP TABLE IF EXISTS games');
        console.log('Dropped existing tables');

        // 2. Create games table
        await connection.execute(`
            CREATE TABLE games (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE,
                description TEXT,
                price DECIMAL(10, 2) DEFAULT 0.00,
                image_url VARCHAR(500),
                hero_image VARCHAR(500),
                developer VARCHAR(255),
                publisher VARCHAR(255),
                release_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                specs_json JSON,
                gallery_json JSON,
                languages_json JSON,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB
        `);
        console.log('Created games table');

        // 3. Create user_library table
        await connection.execute(`
            CREATE TABLE user_library (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                game_id INT NOT NULL,
                purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_ownership (user_id, game_id),
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
            ) ENGINE=InnoDB
        `);
        console.log('Created user_library table');


        // 4. Seed sample games
        const games = [
            {
                title: 'Fortnite',
                description: 'Build, battle, and create in the constantly evolving, free-to-play world of Fortnite.',
                price: 0.00,
                image_url: 'https://cdn2.unrealengine.com/fortnite-chapter-5-season-1-1920x1080-95e0e1c4e7b4.jpg',
                developer: 'Epic Games',
                publisher: 'Epic Games'
            },
            {
                title: 'Rocket League',
                description: 'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem!',
                price: 0.00,
                image_url: 'https://cdn1.epicgames.com/offer/233c46b5394246839352654359cl7154/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-e2b251218e38817765108t50315',
                developer: 'Psyonix',
                publisher: 'Psyonix'
            },
            {
                title: 'Grand Theft Auto V',
                description: 'Explore the stunning world of Los Santos and Blaine County in the ultimate Grand Theft Auto V experience.',
                price: 29.99,
                image_url: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1920x1080_Hero-1920x1080-638515f44a37.jpg',
                developer: 'Rockstar Games',
                publisher: 'Rockstar Games'
            },
            {
                title: 'Red Dead Redemption 2',
                description: 'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan.',
                price: 59.99,
                image_url: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2_Vision_F_R-1920x1080-c02579540b2b.jpg',
                developer: 'Rockstar Games',
                publisher: 'Rockstar Games'
            },
            {
                title: 'Alan Wake 2',
                description: 'A string of ritualistic murders threatens Bright Falls. Saga Anderson arrives to investigate users.',
                price: 49.99,
                image_url: 'https://cdn1.epicgames.com/offer/c4cb363748246e7f8d6f8a442880c107/EGS_AlanWake2_RemedyEntertainment_S1_2560x1440-2051280336215',
                developer: 'Remedy Entertainment',
                publisher: 'Epic Games Publishing'
            }
        ];

        for (const game of games) {
            const slug = game.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
            await connection.execute(
                `INSERT INTO games (
                    title, slug, description, price, image_url, hero_image, developer, publisher, 
                    specs_json, gallery_json, languages_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    game.title,
                    slug,
                    game.description,
                    game.price,
                    game.image_url,
                    game.image_url,
                    game.developer,
                    game.publisher,
                    JSON.stringify({}),
                    JSON.stringify([]),
                    JSON.stringify([])
                ]
            );
            console.log(`Inserted ${game.title}`);
        }

        console.log('Seeding Completed!');
        await connection.end();
    } catch (err) {
        console.error('FAILURE:', err);
    }
}

seedGames();
