// app/components/DiscoverSection/DiscoverSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './DiscoverSection.module.css'; 
import { mainGameList, Game } from '../../../lib/data'; 
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa'; 

const VISIBLE_COUNT = 5;
const CARD_GAP = 16; 

interface DiscoverSectionProps {
  title: string;
  games: Game[];
}

export default function DiscoverSection({ title, games }: DiscoverSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (!viewportRef.current) return;
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
    setCurrentIndex((prev) => Math.max(0, prev - VISIBLE_COUNT));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + VISIBLE_COUNT));
  };

  const translateX = -(cardWidth + CARD_GAP) * currentIndex;

  return (
    <section className={styles.discoverSection}>
      
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
            <div
              key={game.id}
              className={styles.discoverCard}
            >
              <div className={styles.discoverImageWrapper}>
                <img src={game.imageUrl} alt={game.name} className={styles.discoverImage} />
                
                <a href="#" className={styles.wishlistBtn} aria-label="Add to Wishlist">
                  <FaPlus />
                </a>
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