'use server';

import { getSession } from './auth-actions';
import { query } from './db';
import { revalidatePath } from 'next/cache';

export async function purchaseGame(gameId: string) {
    try {
        const session = await getSession();

        if (!session?.userId) {
            return { success: false, error: 'Please log in to purchase games' };
        }

        // Check if already owned
        const existing = (await query(
            'SELECT id FROM user_library WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        )) as any[];

        if (existing && existing.length > 0) {
            return { success: false, error: 'You already own this game' };
        }

        // Add to library (simulated purchase)
        await query(
            'INSERT INTO user_library (user_id, game_id) VALUES (?, ?)',
            [session.userId, gameId]
        );

        // Remove from wishlist if it was there
        await query(
            'DELETE FROM wishlist WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        );

        revalidatePath('/library');
        revalidatePath('/wishlist');
        revalidatePath(`/p/${gameId}`);

        return { success: true, message: 'Game added to your library!' };
    } catch (error) {
        console.error('Error purchasing game:', error);
        return { success: false, error: 'Failed to purchase game' };
    }
}

export async function isInLibrary(gameId: string): Promise<boolean> {
    try {
        const session = await getSession();

        if (!session?.userId) {
            return false;
        }

        const rows = (await query(
            'SELECT id FROM user_library WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        )) as any[];

        return rows && rows.length > 0;
    } catch (error) {
        console.error('Error checking library:', error);
        return false;
    }
}
