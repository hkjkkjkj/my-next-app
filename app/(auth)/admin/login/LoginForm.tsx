'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAdmin } from '@/lib/auth-actions';
import styles from './LoginForm.module.css';

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const result = await loginAdmin(formData);

            if (result.success) {
                // Redirect to admin panel
                router.push('/admin');
                router.refresh();
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Admin Login</h1>
                <p className={styles.subtitle}>
                    Sign in to access admin panel
                </p>

                <form onSubmit={handleSubmit} className={styles.emailForm}>
                    {error && (
                        <div className={styles.error}>
                            {error}
                        </div>
                    )}

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.emailInput}
                        required
                        autoComplete="email"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.emailInput}
                        required
                        autoComplete="current-password"
                    />

                    <button
                        type="submit"
                        className={styles.continueButton}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className={styles.footer}>
                    <a href="/admin/register" className={styles.footerLink}>Create admin account</a>
                </div>
            </div>

            <div className={styles.bottomLinks}>
                <a href="/" className={styles.bottomLink}>Back to Store</a>
            </div>
        </div>
    );
}
