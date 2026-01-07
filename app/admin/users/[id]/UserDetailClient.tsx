'use client';

// Force recompile

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../Users.module.css';
import { FaArrowLeft, FaGamepad, FaHeart, FaEnvelope, FaCalendar, FaGlobe } from 'react-icons/fa';

interface Game {
    id: string;
    slug: string;
    title: string;
    image_url: string;
    developer?: string;
    price?: string;
    purchase_date?: string;
    added_date?: string;
}

interface User {
    id: number;
    email: string;
    full_name: string;
    first_name?: string;
    last_name?: string;
    country?: string;
    created_at: string;
}

interface UserDetailClientProps {
    user: User;
    library: Game[];
    wishlist: Game[];
}

export default function UserDetailClient({ user, library, wishlist }: UserDetailClientProps) {
    const [activeTab, setActiveTab] = useState<'library' | 'wishlist'>('library');
    const router = useRouter();

    const games = activeTab === 'library' ? library : wishlist;

    return (
        <div className={styles.container}>
            <button onClick={() => router.back()} className={styles.backBtn}>
                <FaArrowLeft /> Back to Users
            </button>

            <div className={styles.userDetailHeader}>
                <div className={styles.userAvatar}>
                    {user.full_name.charAt(0).toUpperCase()}
                </div>
                <div className={styles.userInfo}>
                    <h1>{user.full_name}</h1>
                    <div className={styles.userMeta}>
                        <span><FaEnvelope /> {user.email}</span>
                        {user.country && <span><FaGlobe /> {user.country}</span>}
                        <span><FaCalendar /> Joined {new Date(user.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.statCard}>
                    <FaGamepad size={24} />
                    <div>
                        <div className={styles.statNumber}>{library.length}</div>
                        <div className={styles.statLabel}>Games Owned</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <FaHeart size={24} />
                    <div>
                        <div className={styles.statNumber}>{wishlist.length}</div>
                        <div className={styles.statLabel}>Wishlist Items</div>
                    </div>
                </div>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'library' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('library')}
                >
                    <FaGamepad /> Library ({library.length})
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'wishlist' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('wishlist')}
                >
                    <FaHeart /> Wishlist ({wishlist.length})
                </button>
            </div>

            {games.length === 0 ? (
                <div className={styles.empty}>
                    <p>No games in {activeTab}</p>
                </div>
            ) : (
                <div className={styles.gamesGrid}>
                    {games.map((game) => (
                        <Link key={game.id} href={`/p/${game.slug}`} className={styles.gameCard}>
                            <div className={styles.gameImage}>
                                <img
                                    src={game.image_url || '/placeholder-game.png'}
                                    alt={game.title}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400?text=' + encodeURIComponent(game.title);
                                    }}
                                />
                            </div>
                            <div className={styles.gameInfo}>
                                <h3>{game.title}</h3>
                                {game.developer && <p className={styles.developer}>{game.developer}</p>}
                                <p className={styles.price}>{game.price || 'Free'}</p>
                                {game.purchase_date && (
                                    <p className={styles.date}>Purchased: {new Date(game.purchase_date).toLocaleDateString()}</p>
                                )}
                                {game.added_date && (
                                    <p className={styles.date}>Added: {new Date(game.added_date).toLocaleDateString()}</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
