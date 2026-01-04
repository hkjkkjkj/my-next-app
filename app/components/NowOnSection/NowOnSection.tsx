// app/components/NowOnSection/NowOnSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './NowOnSection.module.css';
import { FaChevronLeft, FaChevronRight, FaPlus, FaCrow, FaCrown } from 'react-icons/fa';
import { NowOn } from '@/lib/data';
import Link from 'next/link'; // [1] Import thêm Link

const VISIBLE_COUNT = 5;
// [2] Sửa lại thành 16 để khớp với file CSS (nếu CSS bạn để 16px)
const CARD_GAP = 24;
const PADDING_X = 32;

interface NowOnSectionProps {
    games: NowOn[];
}

export default function NowOnSection({ games }: NowOnSectionProps) {

    const [currentIndex, setCurrentIndex] = useState(0);
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

    const maxIndex = Math.max(0, games.length - VISIBLE_COUNT);
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
                    {games.map((game) => (
                        // [3] Thay thẻ div bằng Link và trỏ tới slug
                        <Link
                            href={`/p/${game.slug || '#'}`} // Dùng slug từ data
                            key={game.id}
                            className={styles.card}
                            // Thêm minWidth để đảm bảo thẻ không bị trình duyệt ép nhỏ lại
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
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/333/fff?text=Discover"; }}
                                />
                                {/* Nút thêm wishlist cần preventDefault để không kích hoạt Link cha */}
                                <button
                                    className={styles.wishlistBtn}
                                    aria-label="Add to Wishlist"
                                    onClick={(e) => {
                                        e.preventDefault(); // Chặn sự kiện click lan ra thẻ Link
                                        alert(`Added ${game.title} to Wishlist!`);
                                    }}
                                >
                                    <FaPlus />
                                </button>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.category}>{game.category}</span>
                                <h3 className={styles.gameTitle}>{game.title}</h3>
                                <div className={styles.priceContainer}>
                                    {game.originalPrice && game.discount && (
                                        <>
                                            <span className={styles.discountBadge}>{game.discount}</span>
                                            <div className={styles.priceGroup}>
                                                <span className={styles.originalPrice}>{game.originalPrice}</span>
                                                <span className={styles.currentPrice}>{game.currentPrice}</span>
                                            </div>
                                        </>
                                    )}
                                    {(!game.originalPrice || !game.discount) && (
                                        <p className={styles.price}>{game.currentPrice}</p>
                                    )}
                                </div>
                            </div>

                            <div className={styles.NowOnBadge}>
                                <span>Now On</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}