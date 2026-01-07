
'use client';

import React, { useState } from 'react';
import styles from './GameCard.module.css';
import { Game, addToLibrary } from '@/lib/game-actions';
import { useRouter } from 'next/navigation';

interface GameCardProps {
    game: Game;
    isOwned?: boolean;
}

export default function GameCard({ game, isOwned = false }: GameCardProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handlePurchase = async (e: React.MouseEvent) => {
        if (isOwned) return;

        e.stopPropagation(); // Prevent card click
        e.preventDefault();

        setLoading(true);
        try {
            const result = await addToLibrary(game.id);
            if (result.success) {
                alert(result.message);
                router.refresh();
            } else {
                alert(result.message);
                if (result.message.includes('sign in')) {
                    router.push('/login');
                }
            }
        } catch (error) {
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={game.image_url} alt={game.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title} title={game.title}>{game.title}</h3>
                <p className={styles.developer}>{game.developer}</p>
                <div className={styles.footer}>
                    {game.price === 0 ? (
                        <span className={styles.free}>Free</span>
                    ) : (
                        <span className={styles.price}>${game.price}</span>
                    )}

                    <button
                        className={isOwned ? styles.ownedBtn : styles.buyBtn}
                        onClick={handlePurchase}
                        disabled={loading || isOwned}
                    >
                        {loading ? '...' : (isOwned ? 'IN LIBRARY' : (game.price === 0 ? 'GET' : 'BUY'))}
                    </button>
                </div>
            </div>
        </div>
    );
}
