"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './DiscoverSection.module.css';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import { mainGameList } from '@/lib/data';

const VISIBLE_COUNT = 5;
const CARD_GAP = 24; // Matches --card-gap in CSS
const PADDING_X = 32; // Total padding left (16) + right (16) of sliderViewport

export default function DiscoverSection() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;
      // Trừ đi padding để lấy không gian thực tế chứa thẻ. Trừ thêm 1px để tránh lỗi làm tròn sub-pixel gây cắt thẻ cuối.
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

  const maxIndex = Math.max(0, mainGameList.length - VISIBLE_COUNT);
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
    <section className={styles.discoverSection}>
      {/* Header */}
      <div className={styles.discoverHeaderRow}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.discoverTitle}>Discover Something New</h2>
          <svg className={styles.discoverTitleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div className={styles.discoverControls}>
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
          {mainGameList.map((game) => (
            <div
              key={game.id}
              className={styles.discoverCard}
              style={{ width: `${cardWidth}px`, flex: `0 0 ${cardWidth}px` }}
            >
              <div className={styles.discoverImageWrapper}>
                <img
                  src={game.imageUrl}
                  alt={game.name}
                  className={styles.discoverImage}
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x400/333/fff?text=Discover"; }}
                />
                <button className={styles.wishlistBtn} aria-label="Add to Wishlist">
                  <FaPlus />
                </button>
              </div>

              <div className={styles.discoverInfo}>
                <span className={styles.gameCategory}>{game.category}</span>
                <h3 className={styles.discoverTitleText}>{game.name}</h3>
                <p className={styles.discoverPrice}>{game.currentPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
