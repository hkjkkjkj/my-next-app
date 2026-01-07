'use client';

import { useState, useEffect } from 'react';
import { getSectionGames, getAvailableGames, addGameToSection, removeGameFromSection, updateSectionItem } from '../actions';
import styles from './SectionManager.module.css';

interface SectionManagerProps {
    sectionName: string;
    tableName: string;
}

export default function SectionManager({ sectionName, tableName }: SectionManagerProps) {
    const [games, setGames] = useState<any[]>([]);
    const [availableGames, setAvailableGames] = useState<any[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingGame, setEditingGame] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [uploadingImages, setUploadingImages] = useState<{ [key: string]: boolean }>({});
    const [imageStates, setImageStates] = useState({
        image_url: '',
        logo_url: '',
        gallery: [] as string[],
        video_url: '',
        original_hero_image: '',
        specs: { minimum: {}, recommended: {} } as any
    });

    useEffect(() => {
        if (editingGame) {
            let gallery: string[] = [];
            let video = '';
            let specs = { minimum: {}, recommended: {} };
            try {
                if (editingGame.gallery_json) {
                    let rawData = editingGame.gallery_json;
                    let parsed = null;

                    if (typeof rawData === 'string') {
                        const jsonStr = rawData.trim();
                        if (jsonStr.startsWith('{') || jsonStr.startsWith('[')) {
                            try {
                                parsed = JSON.parse(jsonStr);
                            } catch (e) { console.error("JSON Parse Error", e); }
                        } else if (jsonStr.length > 0) {
                            // Legacy handling: string treated as video URL
                            video = jsonStr;
                        }
                    } else if (typeof rawData === 'object') {
                        // Already parsed (e.g. by mysql2 driver for JSON columns)
                        parsed = rawData;
                    }

                    if (parsed) {
                        if (Array.isArray(parsed)) {
                            gallery = parsed;
                        } else if (typeof parsed === 'object') {
                            if (parsed.images) gallery = parsed.images;
                            if (parsed.video) video = parsed.video;
                        }
                    }
                }
            } catch (e) { console.error("Error processing gallery data", e); }

            try {
                if (editingGame.specs_json) {
                    const s = typeof editingGame.specs_json === 'string'
                        ? JSON.parse(editingGame.specs_json)
                        : editingGame.specs_json;
                    if (s) specs = s;
                }
            } catch (e) { console.error("Error processing specs data", e); }

            // If we fetched video_url from column (old implementation logic), fallback to it
            // But since column doesn't exist, we rely on parsed video

            setImageStates({
                image_url: editingGame.image_url || '',
                logo_url: editingGame.logo_url || '',
                gallery: gallery,
                video_url: video || editingGame.video_url || '', // Fallback just in case
                original_hero_image: editingGame.original_hero_image || '',
                specs: specs
            });
        }
    }, [editingGame]);

    const handleImageUpload = async (file: File, fieldName: string, index?: number) => {
        if (!file) return;
        setUploadingImages(prev => ({ ...prev, [fieldName + (index !== undefined ? index : '')]: true }));

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'game_images');

            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dzwpfwvyc/image/upload',
                { method: 'POST', body: formData }
            );
            const data = await response.json();

            if (data.secure_url) {
                if (fieldName === 'gallery') {
                    const newGallery = [...(imageStates.gallery || [])];
                    if (index !== undefined) {
                        newGallery[index] = data.secure_url;
                        // Fill gaps if any
                        for (let i = 0; i < index; i++) if (!newGallery[i]) newGallery[i] = "";
                    } else {
                        newGallery.push(data.secure_url);
                    }
                    setImageStates(prev => ({ ...prev, gallery: newGallery }));
                } else {
                    setImageStates(prev => ({ ...prev, [fieldName]: data.secure_url }));
                }
            } else {
                alert('Upload failed: ' + (data.error?.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error uploading image');
        } finally {
            setUploadingImages(prev => ({ ...prev, [fieldName + (index !== undefined ? index : '')]: false }));
        }
    };

    useEffect(() => {
        loadGames();
    }, [tableName]);

    const loadGames = async () => {
        setLoading(true);
        try {
            const [sectionGames, available] = await Promise.all([
                getSectionGames(tableName),
                getAvailableGames(tableName),
            ]);
            setGames(sectionGames);
            setAvailableGames(available);
        } catch (error) {
            console.error('Error loading games:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddGame = async (gameId: number | string) => {
        try {
            await addGameToSection(tableName, gameId);
            await loadGames();
            setShowAddModal(false);
            alert('✅ Game added to section!');
        } catch (error: any) {
            alert('Error adding game: ' + error.message);
        }
    };

    const handleRemoveGame = async (itemId: number) => {
        if (!confirm('Remove this game from the section?')) return;

        try {
            await removeGameFromSection(tableName, itemId);
            await loadGames();
            alert('✅ Game removed from section');
        } catch (error) {
            alert('Error removing game');
        }
    };

    const handleEdit = (game: any) => {
        setEditingGame(game);
        setShowEditModal(true);
    };

    const handleSaveEdit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            await updateSectionItem(tableName, editingGame.id, {
                // Section Overrides
                title: formData.get('title') as string,
                slug: formData.get('slug') as string,
                price: formData.get('price') as string,
                original_price: formData.get('original_price') as string,
                discount: formData.get('discount') as string,
                category: formData.get('category') as string,
                image_url: formData.get('image_url') as string,
                logo_url: formData.get('logo_url') as string,

                // Core Game Data
                description: formData.get('description') as string,
                developer: formData.get('developer') as string,
                publisher: formData.get('publisher') as string,
                release_date: formData.get('release_date') as string,
                gallery_json: JSON.stringify(imageStates.gallery.filter(Boolean)),
                video_url: imageStates.video_url,
                specs_json: JSON.stringify({
                    minimum: {
                        os: formData.get('min_os') as string,
                        cpu: formData.get('min_cpu') as string,
                        memory: formData.get('min_memory') as string,
                        gpu: formData.get('min_gpu') as string,
                        storage: formData.get('min_storage') as string
                    },
                    recommended: {
                        os: formData.get('rec_os') as string,
                        cpu: formData.get('rec_cpu') as string,
                        memory: formData.get('rec_memory') as string,
                        gpu: formData.get('rec_gpu') as string,
                        storage: formData.get('rec_storage') as string
                    }
                })
            });
            await loadGames();
            setShowEditModal(false);
            setEditingGame(null);
            alert('✅ Game updated!');
        } catch (error) {
            alert('Error updating game');
        }
    };

    const filteredGames = games.filter(game =>
        game.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredAvailable = availableGames.filter(game =>
        game.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>{sectionName}</h1>
                    <p className={styles.subtitle}>{games.length} games in this section</p>
                </div>
                <button onClick={() => setShowAddModal(true)} className={styles.addBtn}>
                    ➕ Add Game
                </button>
            </div>

            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.table}>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Original Price</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGames.length === 0 ? (
                            <tr>
                                <td colSpan={7} style={{ textAlign: 'center', padding: '40px' }}>
                                    No games in this section. Click "Add Game" to get started.
                                </td>
                            </tr>
                        ) : (
                            filteredGames.map((game) => (
                                <tr key={game.id}>
                                    <td>
                                        {game.image_url && (
                                            <img src={game.image_url} alt={game.title} className={styles.thumbnail} />
                                        )}
                                    </td>
                                    <td>{game.title}</td>
                                    <td>{game.category || 'Base Game'}</td>
                                    <td>{game.original_price || '—'}</td>
                                    <td>{game.price || 'Free'}</td>
                                    <td>{game.discount || '—'}</td>
                                    <td>
                                        <div className={styles.actionBtns}>
                                            <button onClick={() => handleEdit(game)} className={styles.editBtn}>
                                                ✏️ Edit
                                            </button>
                                            <button onClick={() => handleRemoveGame(game.id)} className={styles.removeBtn}>
                                                🗑️ Remove
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add Modal */}
            {showAddModal && (
                <div className={styles.modal} onClick={() => setShowAddModal(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2>Add Game to {sectionName}</h2>
                            <button onClick={() => setShowAddModal(false)} className={styles.closeBtn}>✕</button>
                        </div>

                        <div className={styles.modalSearch}>
                            <input
                                type="text"
                                placeholder="Search available games..."
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                                autoFocus
                            />
                        </div>

                        <div className={styles.gameList}>
                            {filteredAvailable.length === 0 ? (
                                <p className={styles.empty}>No available games!</p>
                            ) : (
                                filteredAvailable.map((game) => (
                                    <div key={game.id} className={styles.gameItem}>
                                        {game.hero_image && (
                                            <img src={game.hero_image} alt={game.title} className={styles.gameThumb} />
                                        )}
                                        <div className={styles.gameInfo}>
                                            <div className={styles.gameTitle}>{game.title}</div>
                                            <div className={styles.gameSlug}>{game.slug}</div>
                                        </div>
                                        <button onClick={() => handleAddGame(game.id)} className={styles.addGameBtn}>
                                            Add
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && editingGame && (
                <div className={styles.modal} onClick={() => setShowEditModal(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2>Edit {editingGame.title}</h2>
                            <button onClick={() => setShowEditModal(false)} className={styles.closeBtn}>✕</button>
                        </div>

                        <form onSubmit={handleSaveEdit} className={styles.editForm}>
                            {/* --- Section Overrides --- */}
                            <h3 className={styles.sectionHeader}>Section Overrides</h3>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Title (Override)</label>
                                    <input type="text" name="title" defaultValue={editingGame.title} className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Slug</label>
                                    <input type="text" name="slug" defaultValue={editingGame.slug} className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Image URL (Override)</label>
                                <input type="hidden" name="image_url" value={imageStates.image_url} />
                                <div className={styles.fileUploadWrapper}>
                                    <input type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) handleImageUpload(file, 'image_url'); }} className={styles.fileInput} disabled={uploadingImages.image_url} />
                                    {uploadingImages.image_url && <span className={styles.uploading}>Uploading...</span>}
                                </div>
                                {imageStates.image_url && (
                                    <div className={styles.preview}>
                                        <img src={imageStates.image_url} alt="Preview" className={styles.previewImage} />
                                        <p className={styles.urlText}>{imageStates.image_url}</p>
                                    </div>
                                )}
                            </div>

                            <div className={styles.formGroup}>
                                <label>Logo URL (Section Specific)</label>
                                <input type="hidden" name="logo_url" value={imageStates.logo_url} />
                                <div className={styles.fileUploadWrapper}>
                                    <input type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) handleImageUpload(file, 'logo_url'); }} className={styles.fileInput} disabled={uploadingImages.logo_url} />
                                    {uploadingImages.logo_url && <span className={styles.uploading}>Uploading...</span>}
                                </div>
                                {imageStates.logo_url && (
                                    <div className={styles.preview}>
                                        <img src={imageStates.logo_url} alt="Preview" className={styles.previewImage} />
                                        <p className={styles.urlText}>{imageStates.logo_url}</p>
                                    </div>
                                )}
                            </div>


                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Price</label>
                                    <input type="text" name="price" defaultValue={editingGame.price || 'Free'} className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Original Price</label>
                                    <input type="text" name="original_price" defaultValue={editingGame.original_price || ''} className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Discount</label>
                                    <input type="text" name="discount" defaultValue={editingGame.discount || ''} className={styles.input} placeholder="-50%" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Category</label>
                                    <input type="text" name="category" defaultValue={editingGame.category || 'Base Game'} className={styles.input} />
                                </div>
                            </div>

                            <hr style={{ borderColor: '#333', margin: '20px 0' }} />

                            {/* --- Core Game Details --- */}
                            <h3 className={styles.sectionHeader}>Original Game Details</h3>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Developer</label>
                                    <input type="text" name="developer" defaultValue={editingGame.developer || ''} className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Publisher</label>
                                    <input type="text" name="publisher" defaultValue={editingGame.publisher || ''} className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Release Date</label>
                                <input type="date" name="release_date" defaultValue={editingGame.release_date || ''} className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Description</label>
                                <textarea name="description" defaultValue={editingGame.original_description || ''} className={styles.textarea} rows={5}></textarea>
                            </div>

                            {/* Gallery Uploads */}
                            <div className={styles.formGroup}>
                                <label>Gallery Images (Max 5)</label>
                                {[0, 1, 2, 3, 4].map(idx => (
                                    <div key={idx} className={styles.galleryRow}>
                                        <div className={styles.fileUploadWrapper}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => { const file = e.target.files?.[0]; if (file) handleImageUpload(file, 'gallery', idx); }}
                                                className={styles.fileInput}
                                                disabled={uploadingImages['gallery' + idx]}
                                            />
                                            {uploadingImages['gallery' + idx] && <span className={styles.uploading}>Up...</span>}
                                        </div>
                                        {imageStates.gallery?.[idx] && <img src={imageStates.gallery[idx]} className={styles.miniThumb} />}
                                    </div>
                                ))}
                            </div>

                            {/* Video */}
                            <div className={styles.formGroup}>
                                <label>Video Trailer</label>
                                <input type="hidden" name="video_url" value={imageStates.video_url} />
                                <div className={styles.fileUploadWrapper}>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={async (e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                setUploadingImages(prev => ({ ...prev, video_url: true }));
                                                try {
                                                    const formData = new FormData();
                                                    formData.append('file', file);
                                                    formData.append('upload_preset', 'game_images');
                                                    const res = await fetch('https://api.cloudinary.com/v1_1/dzwpfwvyc/video/upload', { method: 'POST', body: formData });
                                                    const d = await res.json();
                                                    if (d.secure_url) setImageStates(p => ({ ...p, video_url: d.secure_url }));
                                                } catch (err) { console.error(err); alert('Video upload failed'); }
                                                finally { setUploadingImages(prev => ({ ...prev, video_url: false })); }
                                            }
                                        }}
                                        className={styles.fileInput}
                                        disabled={uploadingImages.video_url}
                                    />
                                    {uploadingImages.video_url && <span className={styles.uploading}>Uploading Video...</span>}
                                </div>
                                <input
                                    type="text"
                                    value={imageStates.video_url}
                                    onChange={(e) => setImageStates(p => ({ ...p, video_url: e.target.value }))}
                                    placeholder="Or paste video URL"
                                    className={styles.input}
                                    style={{ marginTop: 5 }}
                                />
                            </div>

                            <hr style={{ borderColor: '#333', margin: '20px 0' }} />

                            {/* --- System Requirements --- */}
                            <h3 className={styles.sectionHeader}>System Requirements</h3>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {/* Minimum */}
                                <div>
                                    <h4 style={{ color: '#aaa', marginBottom: '10px', fontSize: '14px', borderBottom: '1px solid #444', paddingBottom: '5px' }}>Minimum</h4>
                                    <div className={styles.formGroup}>
                                        <label>OS</label>
                                        <input type="text" name="min_os" defaultValue={imageStates.specs?.minimum?.os || ''} className={styles.input} placeholder="Windows 10" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>CPU</label>
                                        <input type="text" name="min_cpu" defaultValue={imageStates.specs?.minimum?.cpu || ''} className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Memory</label>
                                        <input type="text" name="min_memory" defaultValue={imageStates.specs?.minimum?.memory || ''} className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>GPU</label>
                                        <input type="text" name="min_gpu" defaultValue={imageStates.specs?.minimum?.gpu || ''} className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Storage</label>
                                        <input type="text" name="min_storage" defaultValue={imageStates.specs?.minimum?.storage || ''} className={styles.input} />
                                    </div>
                                </div>

                                {/* Recommended */}
                                <div>
                                    <h4 style={{ color: '#aaa', marginBottom: '10px', fontSize: '14px', borderBottom: '1px solid #444', paddingBottom: '5px' }}>Recommended</h4>
                                    <div className={styles.formGroup}>
                                        <label>OS</label>
                                        <input type="text" name="rec_os" defaultValue={imageStates.specs?.recommended?.os || ''} className={styles.input} placeholder="Windows 11" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>CPU</label>
                                        <input type="text" name="rec_cpu" defaultValue={imageStates.specs?.recommended?.cpu || ''} className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Memory</label>
                                        <input type="text" name="rec_memory" defaultValue={imageStates.specs?.recommended?.memory || ''} className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>GPU</label>
                                        <input type="text" name="rec_gpu" defaultValue={imageStates.specs?.recommended?.gpu || ''} className={styles.input} />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Storage</label>
                                        <input type="text" name="rec_storage" defaultValue={imageStates.specs?.recommended?.storage || ''} className={styles.input} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modalActions}>
                                <button type="button" onClick={() => setShowEditModal(false)} className={styles.cancelBtn}>
                                    Cancel
                                </button>
                                <button type="submit" className={styles.saveBtn}>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
