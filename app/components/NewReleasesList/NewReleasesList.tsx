import React from 'react';
import Link from 'next/link';
import styles from './NewReleasesList.module.css';
import { GameItem } from '@/lib/data';

interface NewReleasesListProps {
    newReleases: GameItem[];
    topRated: GameItem[];
    comingSoon: GameItem[];
}

export default function NewReleasesList({ newReleases, topRated, comingSoon }: NewReleasesListProps) {

    // Hàm render item tái sử dụng
    const renderItem = (game: GameItem) => (
        <Link key={game.id} href={game.slug ? `/p/${game.slug}` : '#'} className={styles.item}>
            <div className={styles.imageWrapper}>
                <img
                    src={game.image}
                    alt={game.title}
                    className={styles.image}
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/64x85?text=Game"; }}
                />
            </div>

            <div className={styles.info}>
                <h4 className={styles.gameTitle}>{game.title}</h4>

                {/* LOGIC HIỂN THỊ CÁC DÒNG THÔNG TIN */}

                {/* 1. Nếu có Availability (Coming Soon) */}
                {game.availability && (
                    <span className={styles.subText}>{game.availability}</span>
                )}

                {/* 2. Nếu có Badge (Now On Epic) */}
                {game.badge && (
                    <div className={styles.tagsRow}>
                        <span className={styles.badgeGray}>{game.badge}</span>
                    </div>
                )}

                {/* 3. Phần Giá Tiền (Có giảm giá hoặc không) */}
                <div className={styles.priceRow}>
                    {game.discount && <span className={styles.badgeBlue}>{game.discount}</span>}
                    {game.originalPrice && <span className={styles.originalPrice}>{game.originalPrice}</span>}
                    {game.price && <span className={styles.finalPrice}>{game.price}</span>}
                </div>
            </div>
        </Link>
    );

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* CỘT 1 */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <h3 className={styles.columnTitle}>New Releases</h3>
                            <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className={styles.list}>
                            {newReleases.map(renderItem)}
                        </div>
                    </div>

                    {/* CỘT 2 */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <h3 className={styles.columnTitle}>Top Player Rated</h3>
                            <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className={styles.list}>
                            {topRated.map(renderItem)}
                        </div>
                    </div>

                    {/* CỘT 3 */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <h3 className={styles.columnTitle}>Coming Soon</h3>
                            <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className={styles.list}>
                            {comingSoon.map(renderItem)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}