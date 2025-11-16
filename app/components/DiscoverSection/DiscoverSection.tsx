// app/components/DiscoverSection/DiscoverSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './DiscoverSection.module.css'; // Import file CSS mới
import { mainGameList, Game } from '../../../lib/data'; // Import data và interface
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'; // Thêm icon FaPlus

const VISIBLE_COUNT = 5;
const CARD_GAP = 16; // Phải khớp với --card-gap trong file CSS

interface DiscoverSectionProps {
  title: string;
  games: Game[];
}

export default function DiscoverSection({ title, games }: DiscoverSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // Logic useEffect để ĐỌC kích thước card từ CSS 'calc()'
  useEffect(() => {
    const updateCardWidth = () => {
      if (!viewportRef.current) return;
      // Dùng công thức từ CSS để tính toán
      const viewportWidth = viewportRef.current.offsetWidth;
      const width = (viewportWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;
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
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const translateX = -(cardWidth + CARD_GAP) * currentIndex;

  return (
    // Dùng class mới: discover-section
    <section className={styles.discoverSection}>
      
      {/* Thêm lại Header (dựa trên style "kính mờ" bạn thích) */}
      <div className={styles.discoverHeaderRow}>
        <div>
          <p className={styles.discoverEyebrow}>Curated Picks</p>
          <h2 className={styles.discoverTitle}>Discover Something New</h2>
        </div>
        <div className={styles.discoverControls}>
          <button
            type="button"
            className={styles.arrowButton}
            aria-label="Xem game trước"
            onClick={handlePrev}
            disabled={!canGoPrev}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            aria-label="Xem game tiếp theo"
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
          {mainGameList.map((game) => (
            // Dùng class mới: discover-card
            <div
              key={game.id}
              className={styles.discoverCard}
              // KHÔNG cần style={{width}} vì CSS đã tự tính
            >
              {/* Dùng class mới: discover-image-wrapper */}
              <div className={styles.discoverImageWrapper}>
                <img src={game.imageUrl} alt={game.name} className={styles.discoverImage} />
                
                {/* THÊM MỚI: Nút Wishlist */}
                <a href="#" className={styles.wishlistBtn} aria-label="Add to Wishlist">
                  <FaPlus />
                </a>
              </div>
              
              {/* Dùng class mới: discover-info */}
              <div className={styles.discoverInfo}>
                <span className={styles.gameCategory}>{game.category}</span>
                <h3 className={styles.discoverTitleText}>{game.name}</h3>
                
                {/* Bạn có thể thêm logic giá ở đây nếu muốn */}
                <p className={styles.discoverPrice}>{game.currentPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}