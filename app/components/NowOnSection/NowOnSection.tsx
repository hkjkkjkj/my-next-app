// app/components/NowOnSection/NowOnSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './NowOnSection.module.css';
import { FaChevronLeft, FaChevronRight, FaPlus, FaCrown } from 'react-icons/fa';
import { nowOn } from '@/lib/data';

const VISIBLE_COUNT = 5;
const CARD_GAP = 24;
const PADDING_X = 32; // Tổng padding trái (16) + phải (16) của sliderViewport

export default function NowOnSection() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const viewportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateCardWidth = () => {
            if (!viewportRef.current) return;

            const viewportWidth = viewportRef.current.offsetWidth;

            // Trừ đi padding để lấy không gian thực tế chứa thẻ
            const availableWidth = viewportWidth - PADDING_X;

            // Tính toán width cho từng card
            const width = (availableWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;

            setCardWidth(width);
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => {
            window.removeEventListener('resize', updateCardWidth);
        };
    }, []);

    const maxIndex = Math.max(0, nowOn.length - VISIBLE_COUNT);
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < maxIndex;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - VISIBLE_COUNT));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + VISIBLE_COUNT));
    };

    const translateX = -(cardWidth + CARD_GAP) * currentIndex;

    return (
        <section className={styles.section}>

            {/* Header */}
            <div className={styles.headerRow}>
                <div className={styles.titleGroup}>
                    <h2 className={styles.title}>Now On The Epic Games Store</h2>
                    <svg className={styles.titleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <div className={styles.controls}>
                    <button
                        type="button"
                        className={styles.arrowButton}
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        type="button"
                        className={styles.arrowButton}
                        onClick={handleNext}
                        disabled={!canGoNext}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div className={styles.sliderViewport} ref={viewportRef}>
                <div
                    className={styles.sliderTrack}
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {nowOn.map((game) => (
                        <div
                            key={game.id}
                            className={styles.card}
                            // Gán cứng width + flex-basis
                            style={{ width: `${cardWidth}px`, flex: `0 0 ${cardWidth}px` }}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className={styles.image}
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/333/fff?text=FirstRun"; }}
                                />
                                <a href="#" className={styles.wishlistBtn} aria-label="Add to Wishlist">
                                    <FaPlus />
                                </a>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.category}>{game.category}</span>
                                <h3 className={styles.gameTitle}>{game.title}</h3>

                                {/* Badge First Run */}
                                <div className={styles.firstRunBadge}>
                                    <FaCrown className={styles.crownIcon} />
                                    <span>First Run</span>
                                </div>

                                <p className={styles.price}>{game.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}