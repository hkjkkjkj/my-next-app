'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Library.module.css';
import { FaPlay } from 'react-icons/fa';

interface Game {
    id: string;
    slug: string;
    title: string;
    image_url: string;
    developer?: string;
    price?: string;
}

interface LibraryClientProps {
    games: Game[];
}

export default function LibraryClient({ games }: LibraryClientProps) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>My Library</h1>
                <p>{games.length} {games.length === 1 ? 'game' : 'games'}</p>
            </div>

            {games.length === 0 ? (
                <div className={styles.empty}>
                    <h2>Your library is empty</h2>
                    <p>Purchase games from the store to add them to your library</p>
                    <Link href="/" className={styles.browseBtn}>
                        Browse Store
                    </Link>
                </div>
            ) : (
                <div className={styles.gameGrid}>
                    {games.map((game) => (
                        <div key={game.id} className={styles.gameCard}>
                            <Link href={`/p/${game.slug}`} className={styles.gameLink}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={game.image_url || '/placeholder-game.png'}
                                        alt={game.title}
                                        className={styles.gameImage}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=' + encodeURIComponent(game.title);
                                        }}
                                    />
                                    <div className={styles.playOverlay}>
                                        <FaPlay size={32} />
                                    </div>
                                </div>
                                <div className={styles.gameInfo}>
                                    <h3 className={styles.gameTitle}>{game.title}</h3>
                                    {game.developer && (
                                        <p className={styles.developer}>{game.developer}</p>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
