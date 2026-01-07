'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { removeFromWishlist } from '@/lib/wishlist-actions';
import styles from './Wishlist.module.css';
import { FaTrash } from 'react-icons/fa';

interface Game {
    id: string;
    slug: string;
    title: string;
    image_url: string;
    developer?: string;
    price?: string;
}

interface WishlistClientProps {
    games: Game[];
}

export default function WishlistClient({ games: initialGames }: WishlistClientProps) {
    const [games, setGames] = useState(initialGames);
    const [removing, setRemoving] = useState<string | null>(null);
    const router = useRouter();

    const handleRemove = async (gameId: string) => {
        setRemoving(gameId);
        const result = await removeFromWishlist(gameId);

        if (result.success) {
            setGames(games.filter(g => g.id !== gameId));
        }
        setRemoving(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>My Wishlist</h1>
                <p>{games.length} {games.length === 1 ? 'game' : 'games'}</p>
            </div>

            {games.length === 0 ? (
                <div className={styles.empty}>
                    <h2>Your wishlist is empty</h2>
                    <p>Browse the store to add games to your wishlist</p>
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
                                    />
                                </div>
                                <div className={styles.gameInfo}>
                                    <h3 className={styles.gameTitle}>{game.title}</h3>
                                    {game.developer && (
                                        <p className={styles.developer}>{game.developer}</p>
                                    )}
                                    <p className={styles.price}>{game.price || 'Free'}</p>
                                </div>
                            </Link>
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemove(game.id)}
                                disabled={removing === game.id}
                                title="Remove from wishlist"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
