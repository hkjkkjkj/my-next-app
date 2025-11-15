// app/components/Sidebar/Sidebar.tsx
import styles from './Sidebar.module.css';
// Bước 1: Import dữ liệu từ file tập trung
// (Đường dẫn '../../lib/data' là đi ra 2 cấp thư mục)
import { sidebarGames } from '../../lib/data';

// Bước 2: XÓA 'const sidebarGames = [...]' đã từng ở đây.

export default function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      
      {/* Bước 3: Đoạn code map này vẫn hoạt động y hệt
          vì nó đang dùng 'sidebarGames' được import vào 
      */}
      {sidebarGames.map((game) => {
        // Xử lý thẻ đặc biệt 'Epic Savings'
        if (game.id === 'savings') {
          return (
            <div key={game.id} className={`${styles.gameCard} ${styles.savingsCard}`}>
              <div 
                className={styles.gameImage} 
                style={{ backgroundImage: `url(${game.imageUrl})` }}
              ></div>
              <div className={styles.gameInfo}>
                <span className={styles.gameTitle}>{game.title}</span>
              </div>
            </div>
          );
        }

        // Các thẻ game bình thường
        return (
          <div key={game.id} className={styles.gameCard}>
            <div 
              className={styles.gameImage}
              style={{ backgroundImage: `url(${game.imageUrl})` }}
            ></div>
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