// app/components/Sidebar/Sidebar.tsx
"use client";

import styles from './Sidebar.module.css';
// import { sidebarGames } from '@/lib/data'; // REMOVED static import
import { SidebarGame } from '@/lib/data'; // Import interface

// 2. Định nghĩa kiểu dữ liệu cho props
interface SidebarProps {
  sidebarGames: SidebarGame[]; // Added prop
  currentSlide: number;
  handleThumbnailClick: (index: number) => void;
}

// 3. Nhận props làm tham số
export default function Sidebar({ sidebarGames, currentSlide, handleThumbnailClick }: SidebarProps) {

  // 4. Xóa logic gọi 'useHeroSlider'

  return (
    <aside className={styles.sidebarContainer}>
      {sidebarGames.map((game, index) => {
        // 5. Dùng 'currentSlide' từ props
        const isActive = index === currentSlide;

        return (
          <div
            key={game.id}
            className={`${styles.gameCard} ${isActive ? styles.gameCardActive : ''}`}
            // 6. Dùng 'handleThumbnailClick' từ props
            onClick={() => handleThumbnailClick(index)}
          >
            {isActive && (
              <div
                className={styles.progressBar}
                key={currentSlide}
              ></div>
            )}
            <img
              src={game.imageUrl || game.imageUrl}
              alt={game.title}
              className={styles.gameImage}
            />
            <div className={styles.gameInfo}>
              <span className={styles.gameTitle}>{game.title}</span>
              <span className={styles.gameExtra}>{game.extra}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
}