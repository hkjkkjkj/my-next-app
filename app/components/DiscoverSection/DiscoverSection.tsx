// app/components/DiscoverSection/DiscoverSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './DiscoverSection.module.css';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import { mainGameList } from '@/lib/data';
import Link from 'next/link'; // [1] Import thêm Link

const VISIBLE_COUNT = 5;
// [2] Sửa lại thành 16 để khớp với file CSS (nếu CSS bạn để 16px)
const CARD_GAP = 24;
const PADDING_X = 32;

export default function DiscoverSection() {

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
            // [3] Thay thẻ div bằng Link và trỏ tới slug
            <Link
              href={`/p/${game.slug || '#'}`} // Dùng slug từ data
              key={game.id}
              className={styles.discoverCard}
              // Thêm minWidth để đảm bảo thẻ không bị trình duyệt ép nhỏ lại
              style={{
                width: `${cardWidth}px`,
                minWidth: `${cardWidth}px`,
                flex: `0 0 ${cardWidth}px`
              }}
            >
              <div className={styles.discoverImageWrapper}>
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className={styles.discoverImage}
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

              <div className={styles.discoverInfo}>
                <span className={styles.gameCategory}>{game.category}</span>
                <h3 className={styles.discoverTitleText}>{game.title}</h3>
                <p className={styles.discoverPrice}>{game.currentPrice}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}