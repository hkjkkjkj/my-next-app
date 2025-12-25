import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiscoverItem } from '@/lib/data';
import styles from './GameCard.module.css';

interface GameCardProps {
    game: DiscoverItem;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    // Determine if it's free or has a price
    const isFree = game.currentPrice === 'Free' || game.currentPrice === '0';
    const hasDiscount = !!game.discount && game.discount !== '' && game.discount !== '0%';

    // Use currentPrice
    const displayPrice = game.currentPrice;

    // Clean up original price if it exists
    const originalPrice = game.originalPrice;

    return (
        <Link href={`/p/${game.slug || game.id}`} className={styles.card}>
            <div className={styles.imageContainer}>
                {game.imageUrl && (
                    <Image
                        src={game.imageUrl}
                        alt={game.title}
                        width={300}
                        height={400}
                        className={styles.image}
                        loading="lazy"
                    />
                )}
            </div>

            <div className={styles.info}>
                <div className={styles.details}>
                    {game.category || 'Base Game'}
                </div>
                <h3 className={styles.title} title={game.title}>{game.title}</h3>

                <div className={styles.priceContainer}>
                    {hasDiscount && (
                        <>
                            <span className={styles.discountBadge}>{game.discount}</span>
                            {originalPrice && (
                                <span className={styles.originalPrice}>{originalPrice}</span>
                            )}
                        </>
                    )}

                    <span className={isFree ? styles.freePrice : styles.currentPrice}>
                        {displayPrice}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
