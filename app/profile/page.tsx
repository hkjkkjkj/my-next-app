import { getSession } from '@/lib/session';
import { getUserData, logoutUser } from '@/lib/auth-actions';
import { redirect } from 'next/navigation';
import styles from './profile.module.css';

export default async function ProfilePage() {
    const session = await getSession();

    if (!session || session.role !== 'user') {
        redirect('/login');
    }

    const user = await getUserData(session.userId);

    if (!user) {
        // Handle edge case where session exists but user deleted?
        await logoutUser(); // Clear invalid session
        return null;
    }

    // Format date
    const joinDate = new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Account Settings</h1>
                    <p className={styles.subtitle}>Manage your account details</p>
                </div>

                <div className={styles.section}>
                    <div className={styles.label}>Display Name</div>
                    <div className={styles.value}>{user.full_name || 'N/A'}</div>
                </div>

                <div className={styles.section}>
                    <div className={styles.label}>Email Address</div>
                    <div className={styles.value}>{user.email}</div>
                </div>

                <div className={styles.row}>
                    <div className={`${styles.section} ${styles.group}`}>
                        <div className={styles.label}>First Name</div>
                        <div className={styles.value}>{user.first_name || '-'}</div>
                    </div>
                    <div className={`${styles.section} ${styles.group}`}>
                        <div className={styles.label}>Last Name</div>
                        <div className={styles.value}>{user.last_name || '-'}</div>
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.label}>Country / Region</div>
                    <div className={styles.value}>{user.country || 'N/A'}</div>
                </div>

                <div className={styles.section}>
                    <div className={styles.label}>Joined</div>
                    <div className={styles.value}>{joinDate}</div>
                </div>

                <div className={styles.actions}>
                    <form action={logoutUser}>
                        <button type="submit" className={styles.logoutBtn}>
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
