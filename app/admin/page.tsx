import Link from 'next/link';
import { getDashboardStats } from './actions';
import styles from './dashboard.module.css';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const stats = await getDashboardStats();

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.pageTitle}>Dashboard</h1>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon}>🎮</div>
                    <div className={styles.statContent}>
                        <h3 className={styles.statValue}>{stats.totalGames}</h3>
                        <p className={styles.statLabel}>Total Games</p>
                        <Link href="/admin/games/new" className={styles.quickAction}>
                            + Add Game
                        </Link>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={styles.statIcon}>👥</div>
                    <div className={styles.statContent}>
                        <h3 className={styles.statValue}>{stats.totalUsers}</h3>
                        <p className={styles.statLabel}>Total Users</p>
                        <Link href="/admin/users" className={styles.quickAction}>
                            Manage Users
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Quick Links</h2>
                <div className={styles.linkGrid}>
                    <Link href="/admin/games" className={styles.linkCard}>
                        <span className={styles.linkIcon}>🕹️</span>
                        <span className={styles.linkText}>Manage Games</span>
                        <span className={styles.linkArrow}>→</span>
                    </Link>

                    <Link href="/admin/sections/discover" className={styles.linkCard}>
                        <span className={styles.linkIcon}>🔍</span>
                        <span className={styles.linkText}>Discover Section</span>
                        <span className={styles.linkArrow}>→</span>
                    </Link>

                    <Link href="/admin/sections/top-new" className={styles.linkCard}>
                        <span className={styles.linkIcon}>🔥</span>
                        <span className={styles.linkText}>Top New Releases</span>
                        <span className={styles.linkArrow}>→</span>
                    </Link>

                    <Link href="/admin/sections/trending" className={styles.linkCard}>
                        <span className={styles.linkIcon}>📈</span>
                        <span className={styles.linkText}>Trending</span>
                        <span className={styles.linkArrow}>→</span>
                    </Link>

                    <Link href="/admin/sections/epic-first" className={styles.linkCard}>
                        <span className={styles.linkIcon}>⭐</span>
                        <span className={styles.linkText}>Epic First Run</span>
                        <span className={styles.linkArrow}>→</span>
                    </Link>

                    <Link href="/admin/sections/now-on" className={styles.linkCard}>
                        <span className={styles.linkIcon}>🎯</span>
                        <span className={styles.linkText}>Now On Epic</span>
                        <span className={styles.linkArrow}>→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
