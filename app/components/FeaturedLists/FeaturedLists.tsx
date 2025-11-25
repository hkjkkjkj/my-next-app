import React from 'react';
import styles from './FeaturedLists.module.css';
import { topSellers, mostPlayed, topUpcoming, } from '@/lib/data';
import { GameItem } from '@/lib/data';

export default function FeaturedLists() {

    // Hàm render item tái sử dụng
    const renderItem = (game: GameItem) => (
        <a key={game.id} href="#" className={styles.item}>
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
        </a>
    );

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* CỘT 1 */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <h3 className={styles.columnTitle}>Top Sellers</h3>
                            <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className={styles.list}>
                            {topSellers.map(renderItem)}
                        </div>
                    </div>

                    {/* CỘT 2 */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <h3 className={styles.columnTitle}>Most Played</h3>
                            <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className={styles.list}>
                            {mostPlayed.map(renderItem)}
                        </div>
                    </div>

                    {/* CỘT 3 */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <h3 className={styles.columnTitle}>Top Upcoming Wishlisted</h3>
                            <svg className={styles.headerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </div>
                        <div className={styles.list}>
                            {topUpcoming.map(renderItem)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}