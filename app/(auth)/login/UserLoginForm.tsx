'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/auth-actions';
import styles from './UserLoginForm.module.css';
import Link from 'next/link';
// Import các icon cần thiết
import { FaPlaystation, FaXbox, FaGoogle, FaSteam, FaApple, FaFacebook } from 'react-icons/fa';
import { SiNintendoswitch, SiAutodesk } from 'react-icons/si';
import { TbLego } from "react-icons/tb";

export default function UserLoginForm() {
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

            const result = await loginUser(formData);

            if (result.success) {
                router.push('/');
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
                <div className={styles.logoPlaceholder}>
                    {/* Bạn có thể chèn Logo Epic Games ở đây nếu muốn */}
                </div>

                <h1 className={styles.mainTitle}>Sign in to Epic Games</h1>

                <div className={styles.scrollableContent}>
                    {/* Section 1: Console (Top) */}
                    <div className={styles.consoleSection}>
                        <p className={styles.sectionText}>
                            Only played on console? Sign in to access your progress and purchases.
                        </p>
                        <div className={styles.btnStack}>
                            <button className={styles.socialBtn} style={{ backgroundColor: '#00439c' }}>
                                <FaPlaystation className={styles.btnIcon} /> <span className={styles.btnText}>PlayStation™Network</span>
                            </button>
                            <button className={styles.socialBtn} style={{ backgroundColor: '#107c10' }}>
                                <FaXbox className={styles.btnIcon} /> <span className={styles.btnText}>Xbox network</span>
                            </button>
                            <button className={styles.socialBtn} style={{ backgroundColor: '#e60012' }}>
                                <SiNintendoswitch className={styles.btnIcon} /> <span className={styles.btnText}>Nintendo Account</span>
                            </button>
                        </div>
                    </div>

                    {/* Section 2: Email Form */}
                    <div className={styles.emailSection}>
                        <p className={styles.sectionHeader}>Played on PC or mobile?</p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {error && <div className={styles.error}>{error}</div>}

                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Sign in with email</label>
                                <input
                                    type="email"
                                    className={styles.inputField}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Hiển thị password field (Logic Epic thật thường tách 2 bước, nhưng ta gộp lại cho đơn giản) */}
                            <div className={styles.inputGroup} style={{ marginTop: '15px' }}>
                                <label className={styles.inputLabel}>Password</label>
                                <input
                                    type="password"
                                    className={styles.inputField}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.continueBtn} disabled={loading}>
                                {loading ? 'Please Wait...' : 'Continue'}
                            </button>
                        </form>
                    </div>

                    {/* Section 3: Register Link */}
                    <div className={styles.registerSection}>
                        <span>New here? </span>
                        <Link href="/register" className={styles.link}>Create an account</Link>
                    </div>

                    {/* Section 4: Other Ways */}
                    <div className={styles.otherWaysSection}>
                        <p className={styles.sectionHeader}>Other ways to sign in</p>
                        <div className={styles.btnStack}>
                            <a href="/api/auth/google" className={styles.socialBtn}>
                                <FaGoogle className={styles.btnIcon} /> <span className={styles.btnText}>Google</span>
                            </a>
                            <button className={styles.socialBtn}>
                                <FaSteam className={styles.btnIcon} /> <span className={styles.btnText}>Steam</span>
                            </button>
                            <button className={styles.socialBtn}>
                                <FaApple className={styles.btnIcon} /> <span className={styles.btnText}>Sign in with Apple</span>
                            </button>
                            <button className={styles.socialBtn}>
                                <FaFacebook className={styles.btnIcon} /> <span className={styles.btnText}>Facebook</span>
                            </button>
                            <button className={styles.socialBtn}>
                                <TbLego className={styles.btnIcon} /> <span className={styles.btnText}>LEGO® Account</span>
                            </button>
                            <button className={styles.socialBtn}>
                                <SiAutodesk className={styles.btnIcon} /> <span className={styles.btnText}>Autodesk</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className={styles.footer}>
                    <a href="#" className={styles.footerLink}>Trouble signing in?</a>
                    <a href="#" className={styles.footerLink}>Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}