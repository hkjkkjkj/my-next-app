// app/games/page.tsx
import styles from './GamesPage.module.css'; // <-- Bước 1: Import file CSS

// Dữ liệu giả
const mockGames = [
  { id: 1, name: 'Cyberpunk 2077', price: '59.99$' },
  { id: 2, name: 'Elden Ring', price: '69.99$' },
  { id: 3, name: 'Stardew Valley', price: '14.99$' },
];

export default function GamesPage() {
  return (
    // Bước 2: Dùng className từ object 'styles'
    <main className={styles.pageContainer}>
      <h1 className={styles.title}>Danh Sách Game</h1>

      <div className={styles.grid}>
        {mockGames.map((game) => (
          // Đây là một "Game Card"
          <div key={game.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{game.name}</h2>
            <p className={styles.cardPrice}>{game.price}</p>
            <button className={styles.cardButton}>
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}