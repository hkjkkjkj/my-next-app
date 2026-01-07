import Link from 'next/link';
import { getAllGames } from '@/lib/data-db';
import GamesList from './GamesList';
import styles from './games.module.css';

export default async function GamesPage() {
    const games = await getAllGames();

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.pageTitle}>Games Management</h1>
                <Link href="/admin/games/new" className={styles.addButton}>
                    ➕ Add New Game
                </Link>
            </div>

            <GamesList initialGames={games} />
        </div>
    );
}
