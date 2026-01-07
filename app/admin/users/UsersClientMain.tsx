'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Users.module.css';
import { FaSearch, FaUser, FaGamepad, FaHeart, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import UserFormModal from './UserFormModal';
import { deleteUser } from '@/lib/admin-user-actions';

interface User {
    id: number;
    email: string;
    full_name: string;
    first_name?: string;
    last_name?: string;
    created_at: string;
    total_games: number;
    wishlist_count: number;
}

interface UsersClientProps {
    users: User[];
}

export default function UsersClient({ users: initialUsers }: UsersClientProps) {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState<User | undefined>();
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const router = useRouter();

    const filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (userId: number) => {
        if (!confirm('Are you sure? This will delete the user and all their library/wishlist data.')) {
            return;
        }

        setDeletingId(userId);
        const result = await deleteUser(userId);

        if (result.success) {
            setUsers(users.filter(u => u.id !== userId));
        } else {
            alert(result.error);
        }
        setDeletingId(null);
    };

    const handleSuccess = () => {
        router.refresh();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1>User Management</h1>
                    <p>{users.length} registered users</p>
                </div>
                <button
                    onClick={() => {
                        setEditingUser(undefined);
                        setShowModal(true);
                    }}
                    className={styles.btnAdd}
                >
                    <FaPlus /> Add User
                </button>
            </div>

            <div className={styles.searchBox}>
                <FaSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Registered</th>
                            <th>Library</th>
                            <th>Wishlist</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    <div className={styles.userCell}>
                                        <div className={styles.avatar}>
                                            {user.full_name.charAt(0).toUpperCase()}
                                        </div>
                                        <span>{user.full_name}</span>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{new Date(user.created_at).toISOString().split('T')[0]}</td>
                                <td>
                                    <div className={styles.stat}>
                                        <FaGamepad className={styles.statIcon} />
                                        <span>{user.total_games}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.stat}>
                                        <FaHeart className={styles.statIcon} />
                                        <span>{user.wishlist_count}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.actionBtns}>
                                        <button
                                            onClick={() => {
                                                setEditingUser(user);
                                                setShowModal(true);
                                            }}
                                            className={styles.btnEdit}
                                            title="Edit user"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className={styles.btnDelete}
                                            disabled={deletingId === user.id}
                                            title="Delete user"
                                        >
                                            <FaTrash />
                                        </button>
                                        <Link
                                            href={`/admin/users/${user.id}`}
                                            className={styles.btnView}
                                            title="View details"
                                        >
                                            View
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredUsers.length === 0 && (
                <div className={styles.empty}>
                    <FaUser size={48} />
                    <p>No users found</p>
                </div>
            )}

            <UserFormModal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    setEditingUser(undefined);
                }}
                onSuccess={handleSuccess}
                user={editingUser}
            />
        </div>
    );
}
