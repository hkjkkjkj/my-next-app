// app/components/TrendingSection/TrendingSection.tsx
import React from 'react';
import styles from './TrendingSection.module.css';
import { trendingGames } from '@/lib/data';

export default function TrendingSection() {

    // LOGIC QUAN TRỌNG: Chỉ lấy 4 game đầu tiên
    const visibleGames = trendingGames.slice(0, 4);

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.titleGroup}>
                        <h2 className={styles.title}>Trending</h2>
                        <svg
                            className={styles.titleIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                    <a href="#" className={styles.viewMoreBtn}>View More</a>
                </div>

                {/* Grid Danh Sách (Sẽ hiển thị 4 cột do CSS) */}
                <div className={styles.grid}>
                    {visibleGames.map((game) => (
                        <a key={game.id} href="#" className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className={styles.image}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x533?text=Trending+Game";
                                    }}
                                />
                            </div>

                            <div className={styles.category}>{game.category}</div>
                            <h3 className={styles.gameTitle}>{game.title}</h3>
                            <div className={styles.price}>{game.price}</div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}