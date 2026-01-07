// app/components/Header/Header.tsx
import styles from './Header.module.css';
import Link from 'next/link';
import { getSession } from '@/lib/session';
import { getUserData } from '@/lib/auth-actions';
import UserMenu from './UserMenu';

export default async function Header() {
  const session = await getSession();
  let user = null;

  if (session && session.userId) {
    user = await getUserData(session.userId);
  }

  return (
    <header className={styles.headerContainer}>

      {/* --- PHẦN BÊN TRÁI --- */}
      <div className={styles.leftSection}>

        <div className={styles.logo}>GAME STORE</div>

        {/* Nav chính */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Store</a>
          <a href="#" className={styles.navLink}>Support</a>
          <a href="#" className={styles.navLink}>Distribute</a>
        </nav>

      </div>

      {/* --- PHẦN BÊN PHẢI --- */}
      <div className={styles.rightSection}>
        <a href="#" className={styles.navLink}>Wishlist</a>
        <a href="#" className={styles.navLink}>Cart</a>

        {/* Nút đăng nhập HOẶC User Dropdown */}
        {user ? (
          <UserMenu
            fullName={user.full_name || 'User'}
            email={user.email}
            firstName={user.first_name}
            lastName={user.last_name}
          />
        ) : (
          <Link href="/login" className={styles.downloadButton}>Login</Link>
        )}

        {/* Nút Download */}
        <button className={styles.downloadButton}>Download</button>
      </div>

    </header>
  );
}