// app/components/HeroSection/HeroSection.tsx
"use client"; 

// 1. Xóa import 'useHeroSlider', 'useState', 'useEffect', 'useRef'
import styles from './HeroSection.module.css';
import { heroData } from '../../../lib/data';
import { FaChevronLeft, FaChevronRight, FaPlus, FaEye } from 'react-icons/fa';

// 2. Định nghĩa kiểu dữ liệu cho props (mệnh lệnh) nhận từ cha
interface HeroSectionProps {
  currentSlide: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleThumbnailClick: (index: number) => void;
}

// 3. Nhận props làm tham số
export default function HeroSection({ 
  currentSlide, 
  handleNext, 
  handlePrev, 
  handleThumbnailClick 
}: HeroSectionProps) {
  
  // 4. Xóa toàn bộ logic (useState, useEffect, resetTimer...)
  // Component giờ chỉ còn JSX (giao diện)

  return (
    <div className={styles.heroContainer}>
      {heroData.map((hero, index) => (
        <div 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          key={hero.imageUrl || hero.imageUrl || index}
        >
          {/* ... (Toàn bộ nội dung slide giữ nguyên: background, content, logo, v.v...) ... */}
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${hero.imageUrl || hero.imageUrl})` }}
          ></div>
          <div className={styles.content}>
             {/* (logo, title, date, description, buttons...) */}
             {hero.logoUrl || hero.logoUrl ? (
              <img src={hero.logoUrl || hero.logoUrl} alt={hero.date} className={styles.heroLogo} />
             ) : (
              <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: hero.title || '' }}></h2>
             )}
            <p className={styles.date}>{hero.date}</p>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: hero.description }}></p>
            <div className={styles.buttonGroup}>
              <button className={styles.saveButton}>{hero.buttonText}</button>
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

      {/* 5. Các nút bấm giờ gọi hàm từ props */}
      <div className={styles.sliderControls}>
        <button className={styles.prevButton} onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.sliderThumbnails}>
        {heroData.map((item, index) => (
          <div 
            key={index}
            className={`${styles.thumbnail} ${index === currentSlide ? styles.thumbnailActive : ''}`}
            onClick={() => handleThumbnailClick(index)} // Gọi hàm từ props
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