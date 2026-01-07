
'use server';

import { query } from '@/lib/db';
import { getSession } from '@/lib/session';
import { revalidatePath } from 'next/cache';

export type Game = {
    id: number;
    title: string;
    description: string;
    price: number;
    image_url: string;
    developer: string;
};

export async function getStoreGames(): Promise<Game[]> {
    try {
        const games = await query('SELECT * FROM games ORDER BY created_at DESC') as Game[];
        // Ensure price is a number (mysql decimal comes as string sometimes)
        return games.map(g => ({ ...g, price: Number(g.price) }));
    } catch (error) {
        console.error('Error fetching games:', error);
        return [];
    }
}

export async function getMyLibrary(): Promise<Game[]> {
    const session = await getSession();
    if (!session) return [];

    try {
        const sql = `
            SELECT g.* 
            FROM games g
            JOIN user_library ul ON g.id = ul.game_id
            WHERE ul.user_id = ?
            ORDER BY ul.purchase_date DESC
        `;
        const games = await query(sql, [session.userId]) as Game[];
        return games.map(g => ({ ...g, price: Number(g.price) }));
    } catch (error) {
        console.error('Error fetching library:', error);
        return [];
    }
}

export type PurchaseResult = { success: boolean; message: string };

export async function addToLibrary(gameId: number): Promise<PurchaseResult> {
    const session = await getSession();
    if (!session) return { success: false, message: 'Please sign in to purchase games' };

    try {
        // Check if already owned
        const existing = await query(
            'SELECT id FROM user_library WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        ) as any[];

        if (existing.length > 0) {
            return { success: false, message: 'Game already in library' };
        }

        // Add to library
        await query(
            'INSERT INTO user_library (user_id, game_id) VALUES (?, ?)',
            [session.userId, gameId]
        );

        revalidatePath('/library');
        return { success: true, message: 'Game added to library!' };
    } catch (error) {
        console.error('Purchase error:', error);
        return { success: false, message: 'Failed to add game. Try again.' };
    }
}
