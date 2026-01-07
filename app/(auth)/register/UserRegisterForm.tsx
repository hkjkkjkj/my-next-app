'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth-actions';
import styles from './UserRegisterForm.module.css';
import Link from 'next/link';


import { verifyUser } from '@/lib/auth-actions';

export default function UserRegisterForm() {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('Vietnam');

    // Verification State
    const [isVerification, setIsVerification] = useState(false);
    const [otpCode, setOtpCode] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('fullName', fullName);
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('country', country);

            const result = await registerUser(formData);

            if (result.success) {
                if (result.verify) {
                    setIsVerification(true);
                    setLoading(false);
                    alert('Verification code sent to your email!');
                } else {
                    alert('Account created! Please sign in.');
                    router.push('/login');
                }
            } else {
                setError(result.message);
                setLoading(false);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setLoading(false);
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await verifyUser(email, otpCode);
            if (result.success) {
                alert('Account Verified! Logging you in...');
                router.push('/login');
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Verification failed');
        } finally {
            setLoading(false);
        }
    };

    if (isVerification) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.mainTitle}>Verify Email</h1>
                    <p className={styles.subtext}>Enter the 6-digit code sent to {email}</p>

                    <form onSubmit={handleVerify} className={styles.form}>
                        {error && <div className={styles.error}>{error}</div>}

                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Verification Code</label>
                            <input
                                type="text"
                                className={styles.inputField}
                                value={otpCode}
                                onChange={(e) => setOtpCode(e.target.value)}
                                placeholder="123456"
                                maxLength={6}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.continueBtn} disabled={loading}>
                            {loading ? 'Verifying...' : 'Verify Email'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Normal Registration Form
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.mainTitle}>Join Epic Games</h1>
                <p className={styles.subTitle}>Sign up with email</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {error && <div className={styles.error}>{error}</div>}

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Country / Region</label>
                        <select
                            className={styles.inputField}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="Vietnam">Vietnam</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>

                    <div className={styles.nameRow}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>First Name</label>
                            <input
                                type="text"
                                className={styles.inputField}
                                placeholder="Optional"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Last Name</label>
                            <input
                                type="text"
                                className={styles.inputField}
                                placeholder="Optional"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Display Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.inputField}
                            required
                        />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" id="news" />
                        <label htmlFor="news">I would like to receive news, surveys and special offers from Epic Games.</label>
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I have read and agree to the Terms of Service.</label>
                    </div>

                    <button type="submit" className={styles.continueBtn} disabled={loading}>
                        {loading ? 'Creating Account...' : 'Continue'}
                    </button>
                </form>

                <div className={styles.loginSection}>
                    <span>Already have an account? </span>
                    <Link href="/login" className={styles.link}>Sign In</Link>
                </div>

                <div className={styles.footer}>
                    <a href="#" className={styles.footerLink}>Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}