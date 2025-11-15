// app/components/Header/Header.tsx
import styles from './Header.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      
      {/* --- PHẦN BÊN TRÁI --- */}
      <div className={styles.leftSection}>
        {/* Logo (chữ tạm) */}
        <div className={styles.logo}>GAME STORE</div>

        {/* Nav chính */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Store</a>
          <a href="#" className={styles.navLink}>Support</a>
          <a href="#" className={styles.navLink}>Distribute</a>
        </nav>

        {/* Thanh tìm kiếm */}
        <div className={styles.searchBar}>
          
          {/* Thay thế '?' bằng component icon */}
          <FaSearch className={styles.searchIcon} /> 

          <input 
            type="text" 
            placeholder="Search store" 
            className={styles.searchInput} 
          />
        </div>
      </div>

      {/* --- PHẦN BÊN PHẢI --- */}
      <div className={styles.rightSection}>
        <a href="#" className={styles.navLink}>Wishlist</a>
        <a href="#" className={styles.navLink}>Cart</a>
        
        {/* Thông tin user (tạm thời) */}
        <span className={styles.userBalance}>1337DVD</span>
        
        <button className={styles.downloadButton}>Download</button>
      </div>
      
    </header>
  );
}