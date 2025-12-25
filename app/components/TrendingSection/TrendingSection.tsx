// app/components/TrendingSection/TrendingSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './TrendingSection.module.css';
import { FaPlus } from 'react-icons/fa';
import { trendingGames } from '@/lib/data';
import Link from 'next/link';

const VISIBLE_COUNT = 4;
const CARD_GAP = 24;
const PADDING_X = 32;

export default function TrendingSection() {

    const [cardWidth, setCardWidth] = useState(0);
    const viewportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateCardWidth = () => {
            if (!viewportRef.current) return;

            const viewportWidth = viewportRef.current.offsetWidth;
            // Trừ padding và 1px sub-pixel
            const availableWidth = viewportWidth - PADDING_X - 1;
            const width = (availableWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;

            setCardWidth(width);
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => {
            window.removeEventListener('resize', updateCardWidth);
        };
    }, []);

    // Logic điều hướng (prev/next) đã được loại bỏ theo yêu cầu

    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.headerRow}>
                <div className={styles.titleGroup}>
                    <h2 className={styles.title}>Trending</h2>
                    <svg className={styles.titleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <div className={styles.controls}>
                    <a href="#" className={styles.viewMoreBtn}>View More</a>
                </div>
            </div>

            {/* Slider / Grid Viewport */}
            <div className={styles.sliderViewport} ref={viewportRef}>
                <div className={styles.sliderTrack}>
                    {trendingGames.slice(0, VISIBLE_COUNT).map((game) => (
                        <Link
                            href={`/p/${game.slug || '#'}`}
                            key={game.id}
                            className={styles.card}
                            style={{
                                width: `${cardWidth}px`,
                                minWidth: `${cardWidth}px`,
                                flex: `0 0 ${cardWidth}px`
                            }}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={game.imageUrl || undefined}
                                    alt={game.title}
                                    className={styles.image}
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/333/fff?text=Trending"; }}
                                />
                                <button
                                    className={styles.wishlistBtn}
                                    aria-label="Add to Wishlist"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert(`Added ${game.title} to Wishlist!`);
                                    }}
                                >
                                    <FaPlus />
                                </button>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.category}>{game.category}</span>
                                <h3 className={styles.gameTitle}>{game.title}</h3>
                                <p className={styles.price}>{game.currentPrice}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}