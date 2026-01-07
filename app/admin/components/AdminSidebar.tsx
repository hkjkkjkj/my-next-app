'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminSidebar.module.css';

import { logoutAdmin } from '@/lib/auth-actions';

export default function AdminSidebar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: '📊' },
        { href: '/admin/games', label: 'Games', icon: '🎮' },
        { href: '/admin/users', label: 'Users', icon: '👥' },
    ];

    const sectionItems = [
        { href: '/admin/sections/discover', label: 'Discover', icon: '🔍' },
        { href: '/admin/sections/top-new', label: 'Top New Releases', icon: '🆕' },
        { href: '/admin/sections/trending', label: 'Trending', icon: '🔥' },
        { href: '/admin/sections/epic-first', label: 'Epic First Run', icon: '⭐' },
        { href: '/admin/sections/now-on', label: 'Now On', icon: '🎯' },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <h1 className={styles.title}>Admin Panel</h1>
                <p className={styles.subtitle}>Game Management</p>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}

                <div className={styles.sectionGroup}>
                    <div className={styles.sectionHeader}>Homepage Sections</div>
                    {sectionItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${styles.subLink} ${pathname === item.href ? styles.active : ''}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            <div className={styles.footer}>
                <Link href="/" className={styles.backLink}>
                    ← Back to Store
                </Link>
                <button
                    onClick={() => logoutAdmin()}
                    className={styles.logoutBtn}
                >
                    🚪 Sign Out
                </button>
            </div>
        </aside>
    );
}
