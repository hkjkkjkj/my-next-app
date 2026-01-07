import { getSession } from '@/lib/auth-actions';
import { redirect } from 'next/navigation';
import LibraryClient from './LibraryClient';
import { query } from '@/lib/db';

export default async function LibraryPage() {
    const session = await getSession();

    if (!session) {
        redirect('/login');
    }

    // Get user's library
    const libraryGames = (await query(`
        SELECT 
            g.id, g.slug, g.title, g.developer,
            COALESCE(d.image_url, ti.image_url, efr.image_url, no.image_url, tnr.image_url, g.hero_image) as image_url,
            COALESCE(d.price, ti.price, efr.price, no.price, tnr.price) as price
        FROM user_library ul
        JOIN games g ON ul.game_id = g.id
        LEFT JOIN discover_items d ON g.id = d.game_id
        LEFT JOIN trending_items ti ON g.id = ti.game_id
        LEFT JOIN epic_first_run efr ON g.id = efr.game_id
        LEFT JOIN now_on no ON g.id = no.game_id
        LEFT JOIN top_new_releases tnr ON g.id = tnr.game_id
        WHERE ul.user_id = ?
        ORDER BY ul.purchase_date DESC
    `, [session.userId])) as any[];

    return <LibraryClient games={libraryGames || []} />;
}
