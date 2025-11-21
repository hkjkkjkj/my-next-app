import React from 'react';
import Image from 'next/image';
import styles from './FreeGamesSection.module.css';
import { freeData } from '@/lib/data';

interface FreeGamesSectionProps {
    title?: string;
}

const FreeGamesSection = ({ title = "Free Games" }: FreeGamesSectionProps) => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Card Wrapper Lớn bao quanh toàn bộ section */}
                <div className={styles.cardWrapper}>

                    {/* Header: Icon + Title + Button */}
                    <div className={styles.header}>
                        <div className={styles.titleGroup}>
                            <Image
                                src="/icons/icon_gift.png"
                                alt="Gift Icon"
                                width={40}
                                height={40}
                                className={styles.icon}
                            />
                            <h2 className={styles.title}>{title}</h2>
                        </div>

                        <a href="#" className={styles.viewMoreBtn}>View More</a>
                    </div>

                    {/* Danh sách Game */}
                    <div className={styles.grid}>
                        {freeData.map((game) => (
                            <div key={game.id} className={styles.card}>

                                {/* Container chứa ảnh và thanh trạng thái */}
                                <div className={styles.imageContainer}>
                                    <img
                                        src={game.imageUrl}
                                        alt={game.title}
                                        className={styles.image}
                                    />

                                    {/* Status bar - showing "Free Now" for all free games */}
                                    <div className={`${styles.statusBar} ${styles.statusBlue}`}>
                                        Free Now
                                    </div>
                                </div>

                                {/* Thông tin text bên dưới */}
                                <h3 className={styles.gameTitle}>{game.title}</h3>
                                <p className={styles.gameDate}>{game.date}</p>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FreeGamesSection;