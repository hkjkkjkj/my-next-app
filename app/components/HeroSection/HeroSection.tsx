// app/components/HeroSection/HeroSection.tsx
"use client";

import styles from './HeroSection.module.css';
// import { heroData } from '../../../lib/data'; // REMOVED static import
import { HeroBanner } from '@/lib/data'; // Import interface
import { FaPlus, FaEye, } from 'react-icons/fa';
import Link from 'next/link';

interface HeroSectionProps {
  heroData: HeroBanner[]; // Added prop
  currentSlide: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleThumbnailClick: (index: number) => void;
}

export default function HeroSection({
  heroData, // Added prop
  currentSlide,
  handleNext,
  handlePrev,
  handleThumbnailClick
}: HeroSectionProps) {

  return (
    <div className={styles.heroContainer}>
      {heroData.map((hero, index) => (
        <div
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          key={hero.imageUrl || hero.imageUrl || index}
        >
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${hero.imageUrl || hero.imageUrl})` }}
          ></div>
          <div className={styles.content}>
            {hero.logoUrl || hero.logoUrl ? (
              <img src={hero.logoUrl || hero.logoUrl} alt={hero.date} className={styles.heroLogo} />
            ) : (
              <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: hero.title || '' }}></h2>
            )}
            <p className={styles.date}>{hero.date}</p>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: hero.description }}></p>
            <div className={styles.buttonGroup}>
              <Link href={`/p/${hero.slug?.replace(/^\//, '')}`} className={styles.saveButton}>
                {hero.buttonText}
              </Link>
              {hero.showWishlistButton && (
                <button className={styles.wishlistButton}><FaPlus /> <span>Add to Wishlist</span></button>
              )}
              {hero.showPreviewButton && (
                <button className={styles.previewButton}><FaEye /> <span>Preview</span></button>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className={styles.sliderControls}>
        <button
          className={styles.prevButton}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          {/*<FaChevronLeft />*/}
        </button>
        <button
          className={styles.nextButton}
          onClick={handleNext}
          aria-label="Next slide"
        >
          {/*<FaChevronRight />*/}
        </button>
      </div>

      <div className={styles.sliderThumbnails}>
        {heroData.map((item, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${index === currentSlide ? styles.thumbnailActive : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            {index === currentSlide && (
              <div
                className={styles.thumbnailProgressBar}
                key={currentSlide}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}