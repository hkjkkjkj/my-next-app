import React from 'react';
import styles from './FeaturedGameBanner.module.css';
import { FeaturedGame } from '@/lib/data';

interface FeaturedGameBannerProps {
    game: FeaturedGame | null;
}

export default function FeaturedGameBanner({ game }: FeaturedGameBannerProps) {
    if (!game) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* Cột Trái: Hình Ảnh */}
                    <div className={styles.imageWrapper}>
                        <img
                            src={game.image}
                            alt={game.title}
                            className={styles.image}
                            // Fallback nếu ảnh lỗi để demo không bị vỡ
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://cdn2.unrealengine.com/egs-wuchang-fallen-feathers-carousel-desktop-1920x1080-c6d2c4c70308.jpg";
                            }}
                        />
                    </div>

                    {/* Cột Phải: Thông tin & Nút bấm */}
                    <div className={styles.content}>
                        <h2 className={styles.title}>{game.title}</h2>
                        <p className={styles.description}>{game.description}</p>
                        <div className={styles.price}>{game.price}</div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.btnPrimary}>{game.ctaPrimary}</button>
                            <button className={styles.btnSecondary}>{game.ctaSecondary}</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}