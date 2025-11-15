// app/page.tsx
import HeroSection from './components/HeroSection/HeroSection';
import Sidebar from './components/Sidebar/Sidebar'; // <-- 1. Import Sidebar
import styles from './HomePage.module.css'; // <-- 2. Import style trang chủ

export default function HomePage() {
  return (
    // 3. Áp dụng bố cục lưới
    <div className={styles.pageContainer}>
      
      {/* 4. Hero Section */}
      <div className={styles.mainContent}>
        <HeroSection />
      </div>

      {/* 5. Sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

    </div>
  );
}