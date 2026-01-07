'use client';

import { useState } from 'react';
import styles from './Users.module.css';
import { FaTimes } from 'react-icons/fa';
import { createUser, updateUser } from '@/lib/admin-user-actions';

interface UserFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    user?: {
        id: number;
        email: string;
        full_name: string;
        first_name?: string;
        last_name?: string;
        country?: string;
    };
}

export default function UserFormModal({ isOpen, onClose, onSuccess, user }: UserFormModalProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const isEdit = !!user;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        try {
            const result = isEdit
                ? await updateUser(user.id, formData)
                : await createUser(formData);

            if (result.success) {
                onSuccess();
                onClose();
            } else {
                setError(result.error || 'An error occurred');
            }
        } catch (err) {
            setError('Failed to process request');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>{isEdit ? 'Edit User' : 'Create New User'}</h2>
                    <button onClick={onClose} className={styles.modalClose}>
                        <FaTimes />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {error && <div className={styles.errorMessage}>{error}</div>}

                    <div className={styles.formGroup}>
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            required
                            className={styles.formInput}
                        />
                    </div>

                    {!isEdit && (
                        <div className={styles.formGroup}>
                            <label>Password *</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className={styles.formInput}
                                minLength={6}
                            />
                        </div>
                    )}

                    <div className={styles.formGroup}>
                        <label>Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            defaultValue={user?.full_name}
                            required
                            className={styles.formInput}
                        />
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                defaultValue={user?.first_name}
                                className={styles.formInput}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                defaultValue={user?.last_name}
                                className={styles.formInput}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            defaultValue={user?.country}
                            className={styles.formInput}
                        />
                    </div>

                    <div className={styles.formActions}>
                        <button
                            type="button"
                            onClick={onClose}
                            className={styles.btnCancel}
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={styles.btnSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : (isEdit ? 'Update User' : 'Create User')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
