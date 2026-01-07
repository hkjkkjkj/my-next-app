
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
    try {
        console.log('Seeding database...');

        // 1. Create games table
        await query(`
            CREATE TABLE IF NOT EXISTS games (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) DEFAULT 0.00,
                image_url VARCHAR(500),
                developer VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Created games table');

        // 2. Create user_library table
        await query(`
            CREATE TABLE IF NOT EXISTS user_library (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                game_id INT NOT NULL,
                purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_ownership (user_id, game_id),
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
            )
        `);
        console.log('Created user_library table');

        // 3. Seed sample games
        const games = [
            {
                title: 'Fortnite',
                description: 'Build, battle, and create in the constantly evolving, free-to-play world of Fortnite.',
                price: 0.00,
                image_url: 'https://cdn2.unrealengine.com/fortnite-chapter-5-season-1-1920x1080-95e0e1c4e7b4.jpg',
                developer: 'Epic Games'
            },
            {
                title: 'Rocket League',
                description: 'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem!',
                price: 0.00,
                image_url: 'https://cdn1.epicgames.com/offer/233c46b5394246839352654359cl7154/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-e2b251218e38817765108t50315',
                developer: 'Psyonix'
            },
            {
                title: 'Grand Theft Auto V',
                description: 'Explore the stunning world of Los Santos and Blaine County in the ultimate Grand Theft Auto V experience.',
                price: 29.99,
                image_url: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1920x1080_Hero-1920x1080-638515f44a37.jpg',
                developer: 'Rockstar Games'
            },
            {
                title: 'Red Dead Redemption 2',
                description: 'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan.',
                price: 59.99,
                image_url: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2_Vision_F_R-1920x1080-c02579540b2b.jpg',
                developer: 'Rockstar Games'
            },
            {
                title: 'Alan Wake 2',
                description: 'A string of ritualistic murders threatens Bright Falls. Saga Anderson arrives to investigate users.',
                price: 49.99,
                image_url: 'https://cdn1.epicgames.com/offer/c4cb363748246e7f8d6f8a442880c107/EGS_AlanWake2_RemedyEntertainment_S1_2560x1440-2051280336215',
                developer: 'Remedy Entertainment'
            }
        ];

        for (const game of games) {
            // Check if game exists
            const existing = await query('SELECT id FROM games WHERE title = ?', [game.title]) as any[];
            if (existing.length === 0) {
                await query(
                    'INSERT INTO games (title, description, price, image_url, developer) VALUES (?, ?, ?, ?, ?)',
                    [game.title, game.description, game.price, game.image_url, game.developer]
                );
                console.log(`Inserted ${game.title}`);
            }
        }

        return NextResponse.json({ success: true, message: 'Database seeded successfully' });
    } catch (error: any) {
        console.error('Seeding error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
