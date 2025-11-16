// app/page.tsx
"use client"; 

import HeroSection from './components/HeroSection/HeroSection';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './HomePage.module.css';
import { useHeroSlider } from '../lib/hooks/useHeroSlider';
import { heroData, mainGameList } from '../lib/data';

// 1. IMPORT component MỚI
import DiscoverSection from './components/DiscoverSection/DiscoverSection';
// 2. XÓA Bất kỳ import nào đến 'GameRow' (nếu có)

export default function HomePage() {
  const { 
    currentSlide, 
    handleNext, 
    handlePrev, 
    handleThumbnailClick 
  } = useHeroSlider(heroData.length);

  return (
    <main className={styles.pageContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.mainContent}>
          <HeroSection 
            currentSlide={currentSlide}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleThumbnailClick={handleThumbnailClick}
          />
        </div>
        <div className={styles.sidebar}>
          <Sidebar 
            currentSlide={currentSlide}
            handleThumbnailClick={handleThumbnailClick}
          />
        </div>
      </div>

      {/* 3. GỌI component MỚI TẠI ĐÂY */}
      <DiscoverSection title="Discover Something New" games={mainGameList} />

      {/* 4. XÓA Bất kỳ dòng <GameRow ... /> (component CŨ) nào */}

    </main>
  );
}