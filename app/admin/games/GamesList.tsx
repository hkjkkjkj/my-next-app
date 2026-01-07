'use client';

import { useState } from 'react';
import Link from 'next/link';
import { deleteGame } from './actions';
import styles from './games.module.css';

interface Game {
    id: number | string;
    slug: string;
    title: string;
    hero_image?: string;
    developer?: string;
    publisher?: string;
    release_date?: string;
    description?: string;
    specs_json?: string;
    gallery_json?: string;
}

export default function GamesList({ initialGames }: { initialGames: any[] }) {
    const [games, setGames] = useState<Game[]>(initialGames);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState<number | string | null>(null);

    const filteredGames = games.filter(game =>
        game.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.slug?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id: number | string) => {
        try {
            await deleteGame(id);
            setGames(games.filter(g => g.id !== id));
            setDeleteConfirm(null);
            alert('Game deleted successfully!');
        } catch (error) {
            alert('Error deleting game');
            console.error(error);
        }
    };

    return (
        <div className={styles.listContainer}>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    placeholder="Search games by title or slug..."
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
                            <th>Image</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Developer</th>
                            <th>Publisher</th>
                            <th>Release Date</th>
                            <th>Description</th>
                            <th>Gallery</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGames.map((game) => (
                            <tr key={game.id}>
                                <td>{game.id}</td>
                                <td>
                                    {game.hero_image ? (
                                        <img src={game.hero_image} alt={game.title} className={styles.thumbnail} />
                                    ) : (
                                        <div className={styles.noImage}>No image</div>
                                    )}
                                </td>
                                <td><strong>{game.title}</strong></td>
                                <td><code className={styles.slug}>{game.slug}</code></td>
                                <td>{game.developer || '—'}</td>
                                <td>{game.publisher || '—'}</td>
                                <td>{game.release_date || '—'}</td>
                                <td>
                                    {game.description ? (
                                        <div className={styles.description} title={game.description}>
                                            {game.description.substring(0, 50)}...
                                        </div>
                                    ) : '—'}
                                </td>
                                <td>
                                    {game.gallery_json ? (
                                        <span className={styles.badge}>
                                            {(() => {
                                                try {
                                                    const gallery = JSON.parse(game.gallery_json);
                                                    const count = Object.values(gallery).filter(v => v).length;
                                                    return `${count} items`;
                                                } catch {
                                                    return 'Yes';
                                                }
                                            })()}
                                        </span>
                                    ) : '—'}
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <Link href={`/admin/games/${game.slug}/edit`} className={styles.editBtn}>
                                            ✏️ Edit
                                        </Link>
                                        {deleteConfirm === game.id ? (
                                            <div className={styles.confirmDelete}>
                                                <button onClick={() => handleDelete(game.id)} className={styles.confirmBtn}>
                                                    Confirm
                                                </button>
                                                <button onClick={() => setDeleteConfirm(null)} className={styles.cancelBtn}>
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <button onClick={() => setDeleteConfirm(game.id)} className={styles.deleteBtn}>
                                                🗑️ Delete
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredGames.length === 0 && (
                    <div className={styles.emptyState}>
                        <p>No games found</p>
                    </div>
                )}
            </div>

            <div className={styles.tableInfo}>
                Showing {filteredGames.length} of {games.length} games
            </div>
        </div>
    );
}
