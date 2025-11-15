// app/components/HeroSection/HeroSection.tsx
"use client"; 

// 1. Import hook mới của chúng ta
import { useHeroSlider } from '../../lib/hooks/useHeroSlider'; 

import styles from './HeroSection.module.css';
import { heroData } from '../../lib/data';
import {  FaPlus, FaEye, } from 'react-icons/fa';

export default function HeroSection() {
  
  // 2. Tách toàn bộ logic ra hook
  // Chỉ cần gọi 1 dòng này
  const { 
    currentSlide, 
    handleNext, 
    handlePrev, 
    handleThumbnailClick 
  } = useHeroSlider(heroData.length); // Truyền vào số lượng slide

  // 3. Component bây giờ chỉ tập trung vào việc render (JSX)
  return (
    <div className={styles.heroContainer}>
      {heroData.map((hero, index) => (
        <div 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          // Đã sửa lỗi key
          key={hero.imageUrl || hero.imageUrl || index} 
        >
          {/* Ảnh nền (Đã sửa lỗi copy-paste) */}
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${hero.imageUrl || hero.imageUrl})` }}
          ></div>
          
          {/* Lớp nội dung */}
          <div className={styles.content}>
            {/* Đã sửa lỗi copy-paste (hỗ trợ cả 'logoUrl' và 'logo') */}
            {hero.logoUrl || hero.logoUrl ? (
              <img 
                src={hero.logoUrl || hero.logoUrl} 
                alt={hero.date}
                className={styles.heroLogo} 
              />
            ) : (
              <h2 
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: hero.title || '' }}
              ></h2>
            )}
            
            <p className={styles.date}>{hero.date}</p>
            
            <p 
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: hero.description }}
            ></p>
            
            <div className={styles.buttonGroup}>
              <button className={styles.saveButton}>
                {hero.buttonText}
              </button>
              {hero.showWishlistButton && (
                <button className={styles.wishlistButton}>
                  <FaPlus className={styles.wishlistIcon} />
                  <span>Add to Wishlist</span>
                </button>
              )}
              {hero.showPreviewButton && (
                <button className={styles.previewButton}> 
                  <FaEye className={styles.previewIcon} />
                  <span>Preview</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Các nút bấm giờ gọi hàm từ hook */}
      <div className={styles.sliderControls}>
        <button className={styles.prevButton} onClick={handlePrev}>

        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          
        </button>
      </div>

      {/* Thumbnails (ĐÃ SỬA LỖI - Thêm lại <img>) */}
      <div className={styles.sliderThumbnails}>
        {heroData.map((item, index) => (
          <div 
            key={index}
            className={`${styles.thumbnail} ${index === currentSlide ? styles.thumbnailActive : ''}`}
            onClick={() => handleThumbnailClick(index)} // Gọi hàm từ hook
          >
            {/* Thanh tiến trình */}
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