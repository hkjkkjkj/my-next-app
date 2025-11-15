// app/components/Navigation/Navigation.tsx
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li>
          {/* Tạm thời chúng ta sẽ thêm class 'active'
              cho link "Discover" để xem trước 
          */}
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
    </nav>
  );
}