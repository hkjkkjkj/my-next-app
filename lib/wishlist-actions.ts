'use server';

import { getSession } from './auth-actions';
import { query } from './db';
import { revalidatePath } from 'next/cache';

export async function addToWishlist(gameId: string) {
    try {
        const session = await getSession();

        if (!session?.userId) {
            return { success: false, error: 'Please log in to add to wishlist' };
        }

        // Check if already in wishlist
        const existing = (await query(
            'SELECT id FROM wishlist WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        )) as any[];

        if (existing && existing.length > 0) {
            return { success: false, error: 'Already in wishlist' };
        }

        // Add to wishlist
        await query(
            'INSERT INTO wishlist (user_id, game_id) VALUES (?, ?)',
            [session.userId, gameId]
        );

        revalidatePath('/wishlist');
        revalidatePath(`/p/${gameId}`);

        return { success: true };
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        return { success: false, error: 'Failed to add to wishlist' };
    }
}

export async function removeFromWishlist(gameId: string) {
    try {
        const session = await getSession();

        if (!session?.userId) {
            return { success: false, error: 'Please log in' };
        }

        await query(
            'DELETE FROM wishlist WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        );

        revalidatePath('/wishlist');
        revalidatePath(`/p/${gameId}`);

        return { success: true };
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        return { success: false, error: 'Failed to remove from wishlist' };
    }
}

export async function isInWishlist(gameId: string): Promise<boolean> {
    try {
        const session = await getSession();

        if (!session?.userId) {
            return false;
        }

        const rows = (await query(
            'SELECT id FROM wishlist WHERE user_id = ? AND game_id = ?',
            [session.userId, gameId]
        )) as any[];

        return rows && rows.length > 0;
    } catch (error) {
        console.error('Error checking wishlist:', error);
        return false;
    }
}

interface WishlistGame {
    id: string;
    slug: string;
    title: string;
    image_url: string;
    developer?: string;
    price?: string;
}

export async function getWishlist(): Promise<WishlistGame[]> {
    try {
        const session = await getSession();

        if (!session?.userId) {
            return [];
        }

        const rows = (await query(`
            SELECT 
                g.id, g.slug, g.title, g.developer,
                COALESCE(d.image_url, ti.image_url, efr.image_url, no.image_url, tnr.image_url, g.hero_image) as image_url,
                COALESCE(d.price, ti.price, efr.price, no.price, tnr.price) as price
            FROM wishlist w
            JOIN games g ON w.game_id = g.id
            LEFT JOIN discover_items d ON g.id = d.game_id
            LEFT JOIN trending_items ti ON g.id = ti.game_id
            LEFT JOIN epic_first_run efr ON g.id = efr.game_id
            LEFT JOIN now_on no ON g.id = no.game_id
            LEFT JOIN top_new_releases tnr ON g.id = tnr.game_id
            WHERE w.user_id = ?
            ORDER BY w.added_date DESC
        `, [session.userId])) as WishlistGame[];

        return rows || [];
    } catch (error) {
        console.error('Error getting wishlist:', error);
        return [];
    }
}
