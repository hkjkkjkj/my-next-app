'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './UserMenu.module.css';

interface UserMenuProps {
    firstName?: string;
    lastName?: string;
    fullName: string;
    email: string;
}

export default function UserMenu({ firstName, lastName, fullName, email }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Get display name (prefer First Name, then Display Name)
    const displayName = firstName ? firstName : fullName;
    const initial = displayName.charAt(0).toUpperCase();

    return (
        <div className={styles.container} ref={menuRef} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className={styles.userTrigger}>
                <div className={styles.avatar}>{initial}</div>
                <span className={styles.name}>{displayName}</span>
            </div>

            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.userInfo}>
                        <div className={styles.dropdownName}>{fullName}</div>
                        <div className={styles.dropdownEmail}>{email}</div>
                    </div>
                    <div className={styles.divider}></div>


                    <Link href="/profile" className={styles.menuItem}>
                        Account
                    </Link>

                    <Link href="/library" className={styles.menuItem}>
                        My Library
                    </Link>

                    <Link href="/wishlist" className={styles.menuItem}>
                        My Wishlist
                    </Link>

                    <Link href="#" className={styles.menuItem}>
                        My Achievements
                    </Link>
                    <Link href="#" className={styles.menuItem}>
                        Coupons
                    </Link>
                    <Link href="#" className={styles.menuItem}>
                        Wallet
                    </Link>
                    <div className={styles.divider}></div>
                    <Link href="/profile" className={styles.menuItem}>
                        Sign Out
                    </Link>
                </div>
            )}
        </div>
    );
}
