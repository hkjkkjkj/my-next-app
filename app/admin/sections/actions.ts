'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Get all games in a specific section
export async function getSectionGames(tableName: string) {
    const sql = `
    SELECT s.*, 
           g.title as original_title, 
           g.slug as original_slug,
           g.hero_image as original_hero_image,
           g.description as original_description,
           g.developer,
           g.publisher,
           g.release_date,
           g.release_date,
           g.gallery_json,
           g.specs_json
    FROM ${tableName} s
    LEFT JOIN games g ON s.game_id = g.id
    ORDER BY s.id DESC
  `;
    const rows = await query(sql, []) as any[];
    return rows;
}

// Get games NOT in a section (available to add)
export async function getAvailableGames(tableName: string) {
    const sql = `
    SELECT id, title, slug, hero_image
    FROM games
    WHERE id NOT IN (SELECT game_id FROM ${tableName} WHERE game_id IS NOT NULL)
    ORDER BY title ASC
  `;
    const rows = await query(sql, []) as any[];
    return rows;
}

// Add game to section
export async function addGameToSection(
    tableName: string,
    gameId: number | string,
    options: { price?: string; discount?: string; category?: string } = {}
) {
    try {
        // Get game info
        const gameRows = await query('SELECT * FROM games WHERE id = ?', [gameId]) as any[];
        if (gameRows.length === 0) {
            throw new Error('Game not found');
        }

        const game = gameRows[0];
        const price = options.price || 'Free';
        const category = options.category || 'Base Game';
        const discount = options.discount || null;

        const sql = `
      INSERT INTO ${tableName} (game_id, slug, title, image_url, category, price, discount)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

        await query(sql, [gameId, game.slug, game.title, game.hero_image, category, price, discount]);

        revalidatePath('/admin/sections');
        revalidatePath('/', 'page');
        revalidatePath('/');
        return { success: true };
    } catch (error: any) {
        console.error('Error adding game to section:', error);
        // Throw detailed error including SQL message if available
        throw new Error(error.sqlMessage || error.message || 'Failed to add game');
    }
}

// Remove game from section
export async function removeGameFromSection(tableName: string, itemId: number) {
    try {
        await query(`DELETE FROM ${tableName} WHERE id = ?`, [itemId]);

        revalidatePath('/admin/sections');
        revalidatePath('/', 'page');
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error removing game from section:', error);
        throw new Error('Failed to remove game');
    }
}

// Update section item (price, discount, etc.) AND core game data
export async function updateSectionItem(
    tableName: string,
    itemId: number,
    // Provide both section-specific overrides and core game updates
    data: {
        // Section Overrides
        title?: string;
        slug?: string;
        image_url?: string;
        logo_url?: string;
        price?: string;
        original_price?: string;
        discount?: string;
        category?: string;

        // Core Game Updates (optional)
        description?: string;
        developer?: string;
        publisher?: string;
        release_date?: string;
        gallery_json?: string; // JSON string of images/video
        video_url?: string;   // Separate video field if needed
        specs_json?: string;
    }
) {
    try {
        // 1. Update Section Table (Overrides)
        const sectionUpdates: string[] = [];
        const sectionValues: any[] = [];

        if (data.title !== undefined) { sectionUpdates.push('title = ?'); sectionValues.push(data.title); }
        if (data.slug !== undefined) { sectionUpdates.push('slug = ?'); sectionValues.push(data.slug); }
        if (data.image_url !== undefined) { sectionUpdates.push('image_url = ?'); sectionValues.push(data.image_url); }
        if (data.logo_url !== undefined) { sectionUpdates.push('logo_url = ?'); sectionValues.push(data.logo_url); }
        if (data.price !== undefined) { sectionUpdates.push('price = ?'); sectionValues.push(data.price); }
        if (data.original_price !== undefined) { sectionUpdates.push('original_price = ?'); sectionValues.push(data.original_price); }
        if (data.discount !== undefined) { sectionUpdates.push('discount = ?'); sectionValues.push(data.discount); }
        if (data.category !== undefined) { sectionUpdates.push('category = ?'); sectionValues.push(data.category); }

        if (sectionUpdates.length > 0) {
            sectionValues.push(itemId);
            await query(`UPDATE ${tableName} SET ${sectionUpdates.join(', ')} WHERE id = ?`, sectionValues);
        }

        // 2. Update Core Game Table
        // We need the game_id first
        const [row] = await query(`SELECT game_id FROM ${tableName} WHERE id = ?`, [itemId]) as any[];
        if (row && row.game_id) {
            const gameUpdates: string[] = [];
            const gameValues: any[] = [];

            if (data.description !== undefined) { gameUpdates.push('description = ?'); gameValues.push(data.description); }
            if (data.developer !== undefined) { gameUpdates.push('developer = ?'); gameValues.push(data.developer); }
            if (data.publisher !== undefined) { gameUpdates.push('publisher = ?'); gameValues.push(data.publisher); }
            if (data.release_date !== undefined) { gameUpdates.push('release_date = ?'); gameValues.push(data.release_date); }

            // Handle Gallery & Video (Merged into gallery_json)
            if (data.gallery_json !== undefined || data.video_url !== undefined) {
                let images: string[] = [];
                let currentVideo = "";

                // Get existing data if not provided (to avoid overwriting with empty)
                // However, since we expect full state from frontend, we can construct strictly from input if provided
                if (data.gallery_json) {
                    try {
                        const parsed = JSON.parse(data.gallery_json);
                        // If frontend sends raw array of strings (old format) or object (new format)
                        if (Array.isArray(parsed)) images = parsed;
                        else if (parsed.images) images = parsed.images;
                    } catch (e) { }
                }

                if (data.video_url) currentVideo = data.video_url;

                const newGalleryJson = JSON.stringify({
                    images: images,
                    video: currentVideo || null
                });

                gameUpdates.push('gallery_json = ?');
                gameValues.push(newGalleryJson);
            }

            if (data.specs_json !== undefined) {
                gameUpdates.push('specs_json = ?');
                gameValues.push(data.specs_json);
            }

            if (gameUpdates.length > 0) {
                gameValues.push(row.game_id);
                await query(`UPDATE games SET ${gameUpdates.join(', ')} WHERE id = ?`, gameValues);
            }
        }

        revalidatePath('/admin/sections');
        revalidatePath('/', 'page');
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error updating section item:', error);
        throw new Error('Failed to update item');
    }
}
