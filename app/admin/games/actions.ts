'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createGame(formData: FormData) {
  // Basic game info
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const developer = formData.get('developer') as string;
  const publisher = formData.get('publisher') as string;
  const releaseDate = formData.get('releaseDate') as string;
  const description = formData.get('description') as string;
  const heroImage = formData.get('heroImage') as string;
  const price = formData.get('price') as string;
  const originalPrice = formData.get('originalPrice') as string;
  const discount = formData.get('discount') as string;

  // Gallery images
  const galleryImages = [
    formData.get('galleryImage1'),
    formData.get('galleryImage2'),
    formData.get('galleryImage3'),
    formData.get('galleryImage4'),
    formData.get('galleryImage5'),
  ].filter(url => url && url.toString().trim() !== '');

  // Video URL
  const videoUrl = formData.get('videoUrl') as string;

  // Build JSON specs
  const specs = {
    minimum: {
      os: formData.get('min_os') as string,
      cpu: formData.get('min_cpu') as string,
      memory: formData.get('min_memory') as string,
      gpu: formData.get('min_gpu') as string,
      storage: formData.get('min_storage') as string
    },
    recommended: {
      os: formData.get('rec_os') as string,
      cpu: formData.get('rec_cpu') as string,
      memory: formData.get('rec_memory') as string,
      gpu: formData.get('rec_gpu') as string,
      storage: formData.get('rec_storage') as string
    }
  };
  const specsJson = JSON.stringify(specs);

  // Build gallery JSON
  const galleryJson = galleryImages.length > 0
    ? JSON.stringify({ images: galleryImages, video: videoUrl || null })
    : null;

  try {
    // Insert game into games table
    const gameResult = await query(
      `INSERT INTO games (slug, title, developer, publisher, release_date, description, hero_image, gallery_json, specs_json, price, original_price, discount)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [slug, title, developer, publisher, releaseDate, description, heroImage, galleryJson, specsJson, price, originalPrice, discount]
    ) as any;

    const gameId = gameResult.insertId;

    // Section checkboxes
    const showInDiscover = formData.get('showInDiscover') === 'on';
    const showInTopNew = formData.get('showInTopNew') === 'on';
    const showInTrending = formData.get('showInTrending') === 'on';
    const showInEpicFirst = formData.get('showInEpicFirst') === 'on';
    const showInNowOn = formData.get('showInNowOn') === 'on';

    // Insert into selected sections
    if (showInDiscover) {
      await query(
        `INSERT INTO discover_items (game_id, slug, title, image_url, category, price, original_price, discount)
         VALUES (?, ?, ?, ?, 'Base Game', ?, ?, ?)`,
        [gameId, slug, title, heroImage, price || 'Free', originalPrice, discount]
      );
    }

    if (showInTopNew) {
      await query(
        `INSERT INTO top_new_releases (game_id, slug, title, image_url, category, price, original_price, discount)
         VALUES (?, ?, ?, ?, 'Base Game', ?, ?, ?)`,
        [gameId, slug, title, heroImage, price || 'Free', originalPrice, discount]
      );
    }

    if (showInTrending) {
      await query(
        `INSERT INTO trending_items (game_id, slug, title, image_url, category, price, original_price, discount)
         VALUES (?, ?, ?, ?, 'Base Game', ?, ?, ?)`,
        [gameId, slug, title, heroImage, price || 'Free', originalPrice, discount]
      );
    }

    if (showInEpicFirst) {
      await query(
        `INSERT INTO epic_first_run (game_id, slug, title, image_url, category, price, original_price, discount)
         VALUES (?, ?, ?, ?, 'Base Game', ?, ?, ?)`,
        [gameId, slug, title, heroImage, price || 'Free', originalPrice, discount]
      );
    }

    if (showInNowOn) {
      await query(
        `INSERT INTO now_on (game_id, slug, title, image_url, category, price, original_price, discount)
         VALUES (?, ?, ?, ?, 'Base Game', ?, ?, ?)`,
        [gameId, slug, title, heroImage, price || 'Free', originalPrice, discount]
      );
    }

    revalidatePath('/admin/games');
    revalidatePath('/', 'page');
    revalidatePath('/');
    return { success: true, gameId };
  } catch (error: any) {
    console.error('Error creating game:', error);
    throw new Error(error.message || 'Failed to create game');
  }
}

export async function updateGame(id: number | string, formData: FormData) {
  console.log('--- updateGame Triggered ---');
  console.log('Update ID:', id);

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const developer = formData.get('developer') as string;
  const publisher = formData.get('publisher') as string;
  const releaseDate = formData.get('releaseDate') as string;
  const description = formData.get('description') as string;
  const heroImage = formData.get('heroImage') as string;
  const price = formData.get('price') as string;
  const originalPrice = formData.get('originalPrice') as string;
  const discount = formData.get('discount') as string;

  console.log('Update Data:', { title, slug, developer, price, discount });

  // Gallery images
  const galleryImages = [
    formData.get('galleryImage1'),
    formData.get('galleryImage2'),
    formData.get('galleryImage3'),
    formData.get('galleryImage4'),
    formData.get('galleryImage5'),
  ].filter(url => url && url.toString().trim() !== '');

  const videoUrl = formData.get('videoUrl') as string;

  // Build JSON specs
  const specs = {
    minimum: {
      os: formData.get('min_os') as string,
      cpu: formData.get('min_cpu') as string,
      memory: formData.get('min_memory') as string,
      gpu: formData.get('min_gpu') as string,
      storage: formData.get('min_storage') as string
    },
    recommended: {
      os: formData.get('rec_os') as string,
      cpu: formData.get('rec_cpu') as string,
      memory: formData.get('rec_memory') as string,
      gpu: formData.get('rec_gpu') as string,
      storage: formData.get('rec_storage') as string
    }
  };
  const specsJson = JSON.stringify(specs);
  const galleryJson = galleryImages.length > 0
    ? JSON.stringify({ images: galleryImages, video: videoUrl || null })
    : null;

  const sql = `
    UPDATE games
    SET slug = ?, title = ?, developer = ?, publisher = ?, release_date = ?, description = ?, hero_image = ?, gallery_json = ?, specs_json = ?, price = ?, original_price = ?, discount = ?
    WHERE id = ?
  `;

  try {
    const result = await query(sql, [slug, title, developer, publisher, releaseDate, description, heroImage, galleryJson, specsJson, price, originalPrice, discount, id]) as any;
    console.log('Update Result:', result);

    // Also try to update section tables if slug matches, to keep pricing in sync
    // Ideally we'd update by game_id, but some legacy might need slug check. Using game_id is cleaner if relations are fixed.
    // Given the previous fixes, we should rely on game_id.
    const updates = [
      query('UPDATE discover_items SET price=?, original_price=?, discount=? WHERE game_id=?', [price, originalPrice, discount, id]),
      query('UPDATE top_new_releases SET price=?, original_price=?, discount=? WHERE game_id=?', [price, originalPrice, discount, id]),
      query('UPDATE trending_items SET price=?, original_price=?, discount=? WHERE game_id=?', [price, originalPrice, discount, id]),
      query('UPDATE epic_first_run SET price=?, original_price=?, discount=? WHERE game_id=?', [price, originalPrice, discount, id]),
      query('UPDATE now_on SET price=?, original_price=?, discount=? WHERE game_id=?', [price, originalPrice, discount, id])
    ];
    await Promise.allSettled(updates);

  } catch (err) {
    console.error('Update Query Failed:', err);
    throw err;
  }

  revalidatePath('/admin/games');
  revalidatePath(`/admin/games/${slug}/edit`); // Redirect to new slug if changed, or just revalidate
  revalidatePath('/', 'page');
  revalidatePath('/');
  return { success: true };
}

export async function deleteGame(idOrSlug: number | string) {
  try {
    let gameId = idOrSlug;
    let slug = '';

    // Check if input is likely a slug (string)
    if (typeof idOrSlug === 'string' && isNaN(Number(idOrSlug))) {
      // It's a slug, find the ID
      const rows = await query('SELECT id, slug FROM games WHERE slug = ?', [idOrSlug]) as any[];
      if (rows.length > 0) {
        gameId = rows[0].id; // Use the found integer ID
        slug = rows[0].slug;
      } else {
        // Maybe it's already deleted or doesn't exist?
        console.warn(`Could not find game with slug: ${idOrSlug}`);
        return { success: false, error: 'Game not found' };
      }
    } else {
      // Input is an ID (number or numeric string). 
      // We should still lookup the slug, because we might need to delete legacy string rows by slug.
      const rows = await query('SELECT slug FROM games WHERE id = ?', [idOrSlug]) as any[];
      if (rows.length > 0) {
        slug = rows[0].slug;
      }
    }

    const id = gameId; // This is now surely an ID (or number string)
    console.log(`[deleteGame] Final ID to delete: ${id} (type: ${typeof id})`);

    // Delete from all section tables and related tables first
    // We try deleting by ID. 
    // BUT we also try deletion by SLUG because legacy data might have string IDs
    if (slug) {
      await query('DELETE FROM discover_items WHERE slug = ?', [slug]);
      await query('DELETE FROM top_new_releases WHERE slug = ?', [slug]);
      await query('DELETE FROM trending_items WHERE slug = ?', [slug]);
      await query('DELETE FROM epic_first_run WHERE slug = ?', [slug]);
      await query('DELETE FROM now_on WHERE slug = ?', [slug]);
      await query('DELETE FROM hero_banners WHERE slug = ?', [slug]);
      // sidebar_games and featured_game_banner do NOT have slug column, skip them here
      await query('DELETE FROM coming_soon WHERE slug = ?', [slug]);
    }

    // Fallback: Delete by game_id (for rows that might have been updated correctly)
    await query('DELETE FROM discover_items WHERE game_id = ?', [id]);
    await query('DELETE FROM top_new_releases WHERE game_id = ?', [id]);
    await query('DELETE FROM trending_items WHERE game_id = ?', [id]);
    await query('DELETE FROM epic_first_run WHERE game_id = ?', [id]);
    await query('DELETE FROM now_on WHERE game_id = ?', [id]);

    // Additional tables found via FK check and schema scan
    await query('DELETE FROM hero_banners WHERE game_id = ?', [id]);
    await query('DELETE FROM sidebar_games WHERE game_id = ?', [id]);
    await query('DELETE FROM coming_soon WHERE game_id = ?', [id]);
    await query('DELETE FROM featured_game_banner WHERE game_id = ?', [id]);

    // User related tables
    try { await query('DELETE FROM user_library WHERE game_id = ?', [id]); } catch (e) { }
    try { await query('DELETE FROM wishlist WHERE game_id = ?', [id]); } catch (e) { }
    try { await query('DELETE FROM reviews WHERE game_id = ?', [id]); } catch (e) { }
    try { await query('DELETE FROM cart WHERE game_id = ?', [id]); } catch (e) { }

    // Then delete the game
    await query('DELETE FROM games WHERE id = ?', [id]);

    revalidatePath('/admin/games');
    revalidatePath('/', 'page');
    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting game:', error);
    throw new Error(error.message || 'Failed to delete game');
  }
}

export async function getGameById(id: number | string) {
  const sql = 'SELECT * FROM games WHERE id = ?';
  const rows = await query(sql, [id]) as any[];
  return rows.length > 0 ? rows[0] : null;
}
