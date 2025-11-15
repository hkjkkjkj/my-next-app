// app/components/Navigation/Navigation.tsx
import styles from './Navigation.module.css';
import { FaSearch } from 'react-icons/fa'; // <-- 1. Import icon

export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
      
      {/* 2. Phần link (như cũ) */}
      <ul className={styles.navList}>
        <li>
          <a href="/" className={`${styles.navLink} ${styles.active}`}>
            Discover
          </a>
        </li>
        <li>
          <a href="/games" className={styles.navLink}>
            Browse
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            News
          </a>
        </li>
      </ul>

      {/* 3. Thêm thanh tìm kiếm vào đây */}
      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon} /> 
        <input 
          type="text" 
          placeholder="Search store" 
          className={styles.searchInput} 
        />
      </div>

    </nav>
  );
}