import { query } from '@/lib/db';
import GameForm from '../../GameForm';
import { notFound } from 'next/navigation';
import styles from '../../form.module.css';

export default async function EditGamePage({ params }: { params: Promise<{ slug: string }> }) {
    let slug = 'unknown';
    try {
        const resolvedParams = await params;
        slug = decodeURIComponent(resolvedParams.slug);

        // Get game by slug (since ID column contains slug)
        // Note: We used to query by ID, but since ID column holds slugs, we query both checks just in case.
        const rows = await query('SELECT * FROM games WHERE id = ? OR slug = ?', [slug, slug]) as any[];
        const game = rows[0];

        if (!game) {
            notFound();
        }

        return (
            <div className={styles.formPage}>
                <h1 className={styles.pageTitle}>Edit Game: {game.title}</h1>
                <GameForm mode="edit" initialData={game} gameId={game.id} />
            </div>
        );
    } catch (error: any) {
        console.error('[EditGamePage] Error:', error);
        return (
            <div className={styles.formPage}>
                <h1 style={{ color: 'red' }}>Error Loading Game</h1>
                <p>Slug: <code>{slug}</code></p>
                <div style={{ background: '#333', padding: '15px', borderRadius: '5px', marginTop: '10px' }}>
                    <p><strong>Message:</strong> {error.message}</p>
                    {error.digest && <p><strong>Digest:</strong> {error.digest}</p>}
                </div>
            </div>
        );
    }
}
