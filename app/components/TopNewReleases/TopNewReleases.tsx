// app/components/TopNewReleases/TopNewReleases.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './TopNewReleases.module.css'; // Import file CSS riêng của component này
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import { Game } from '../../../lib/data';

// Hằng số cấu hình giống DiscoverSection
const VISIBLE_COUNT = 5; // Hiển thị 5 game
const CARD_GAP = 24;     // Khoảng cách giữa các thẻ (Lưu ý: TopNewReleases thường rộng hơn Discover chút, tôi để 24px cho thoáng)

// Interface cho props
interface TopNewReleasesProps {
    title: string;
    games: Game[];
}

export default function TopNewReleases({ title, games }: TopNewReleasesProps) {
    // LOGIC GIỐNG DISCOVER SECTION
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const viewportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateCardWidth = () => {
            if (!viewportRef.current) return;
            const viewportWidth = viewportRef.current.offsetWidth;
            // Tính toán width động cho card: (Tổng chiều rộng - Tổng Gap) / Số lượng thẻ
            const width = (viewportWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;
            setCardWidth(width);
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => {
            window.removeEventListener('resize', updateCardWidth);
        };
    }, []);

    const maxIndex = Math.max(0, games.length - VISIBLE_COUNT);
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < maxIndex;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - VISIBLE_COUNT)); // Nhảy lùi 5 thẻ
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + VISIBLE_COUNT)); // Nhảy tới 5 thẻ
    };

    const translateX = -(cardWidth + CARD_GAP) * currentIndex;

    return (
        <section className={styles.section}>

            <div className={styles.headerRow}>
                <div className={styles.titleGroup}>
                    <h2 className={styles.title}>{title}</h2>
                    {/* Icon mũi tên nhỏ bên cạnh title */}
                    <svg className={styles.titleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <div className={styles.controls}>
                    <button
                        type="button"
                        className={styles.arrowButton}
                        aria-label="Previous"
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        type="button"
                        className={styles.arrowButton}
                        aria-label="Next"
                        onClick={handleNext}
                        disabled={!canGoNext}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div className={styles.sliderViewport} ref={viewportRef}>
                <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className={styles.card}
                            // Quan trọng: Phải gán width cứng bằng style inline vì width này được tính toán bằng JS
                            style={{ width: `${cardWidth}px`, flex: `0 0 ${cardWidth}px` }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={game.imageUrl} alt={game.name} className={styles.image} />

                                <a href="#" className={styles.wishlistBtn} aria-label="Add to Wishlist">
                                    <FaPlus />
                                </a>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.category}>{game.category}</span>
                                <h3 className={styles.gameTitle}>{game.name}</h3>

                                <p className={styles.price}>{game.currentPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}