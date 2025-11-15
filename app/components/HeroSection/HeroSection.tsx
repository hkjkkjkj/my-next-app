// app/components/HeroSection/HeroSection.tsx
"use client";

import { useState } from 'react';
import styles from './HeroSection.module.css';
import { heroData } from '../../lib/data';
import { FaChevronLeft, FaChevronRight, FaPlus, FaEye } from 'react-icons/fa';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentHero = heroData[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.background}
        key={currentHero.imageUrl}
        style={{ backgroundImage: `url(${currentHero.imageUrl})` }}
      ></div>

      {/* --- SỬA ĐỔI CHÍNH Ở ĐÂY --- */}
      {/* Key được cập nhật để React biết khi nào
        cần render lại (khi title hoặc logoUrl thay đổi)
      */}
      <div className={styles.content} key={currentHero.title || currentHero.logoUrl}>
        
        {/* Kiểm tra xem 'currentHero.logoUrl' có tồn tại không.
          - Nếu CÓ: Hiển thị thẻ <img> với logo.
          - Nếu KHÔNG: Hiển thị thẻ <h2> với title như cũ.
        */}
        {currentHero.logoUrl ? (
          <img 
            src={currentHero.logoUrl} 
            alt={currentHero.date} // Dùng date làm alt text
            className={styles.heroLogo} 
          />
        ) : (
          <h2 
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: currentHero.title || '' }}
          ></h2>
        )}
        
        {/* --- PHẦN CÒN LẠI GIỮ NGUYÊN --- */}

        <p className={styles.date}>{currentHero.date}</p>

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: currentHero.description }}
        ></p>

        <div className={styles.buttonGroup}>
          <button className={styles.saveButton}>
            {currentHero.buttonText}
          </button>

          {currentHero.showWishlistButton && (
            <button className={styles.wishlistButton}>
              <FaPlus className={styles.wishlistIcon} />
              <span>Add to Wishlist</span>
            </button>
          )}

          {currentHero.showPreviewButton && (
            <button className={styles.previewButton}> 
              <FaEye className={styles.previewIcon} />
              <span>Preview</span>
            </button>
          )}
        </div>
      </div>

      <div className={styles.sliderControls}>
        <button className={styles.prevButton} onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.sliderDots}>
        {heroData.map((item, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}