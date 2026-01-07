'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createGame, updateGame } from './actions';
import { compressImage } from '@/lib/imageCompression';
import styles from './form.module.css';

interface GameFormProps {
    mode: 'create' | 'edit';
    initialData?: any;
    gameId?: number | string;
}

export default function GameForm({ mode, initialData, gameId }: GameFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [uploadingImages, setUploadingImages] = useState<{ [key: string]: boolean }>({});
    const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({
        heroImage: initialData?.hero_image || '',
        galleryImage1: '',
        galleryImage2: '',
        galleryImage3: '',
        galleryImage4: '',
        galleryImage5: '',
        videoUrl: '',
    });

    // Parse specs from initialData
    const specs = initialData?.specs_json
        ? (typeof initialData.specs_json === 'string'
            ? JSON.parse(initialData.specs_json)
            : initialData.specs_json)
        : {};

    const minSpecs = specs.minimum || {};
    const recSpecs = specs.recommended || {};

    const handleImageUpload = async (file: File, fieldName: string) => {
        if (!file) return;

        setUploadingImages(prev => ({ ...prev, [fieldName]: true }));

        try {
            // Compress image before upload
            const compressedFile = await compressImage(file);

            // Upload to Cloudinary (25GB free storage)
            const formData = new FormData();
            formData.append('file', compressedFile);
            formData.append('upload_preset', 'game_images'); // Your unsigned preset

            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dzwpfwvyc/image/upload',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.secure_url) {
                const imageUrl = data.secure_url;
                setImageUrls(prev => ({ ...prev, [fieldName]: imageUrl }));
                // alert(`✅ Image uploaded successfully!`); // Removed alert for smoother UX
            } else {
                alert('Failed to upload image. Error: ' + (data.error?.message || 'Unknown'));
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Error uploading image. Please try again.');
        } finally {
            setUploadingImages(prev => ({ ...prev, [fieldName]: false }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            // Add image URLs to formData
            Object.keys(imageUrls).forEach(key => {
                if (imageUrls[key]) {
                    formData.set(key, imageUrls[key]);
                }
            });

            if (mode === 'create') {
                await createGame(formData);
                alert('Game created successfully!');
                router.push('/admin/games');
            } else if (mode === 'edit' && gameId) {
                await updateGame(gameId, formData);
                alert('Game updated successfully!');
                router.push('/admin/games');
            }
        } catch (error) {
            alert('Error saving game');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Title *</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={initialData?.title || ''}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Slug *</label>
                    <input
                        type="text"
                        name="slug"
                        defaultValue={initialData?.slug || ''}
                        required
                        className={styles.input}
                    />
                    <p className={styles.hint}>Unique identifier, lowercase, no spaces (e.g., "gta-v")</p>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Developer</label>
                    <input
                        type="text"
                        name="developer"
                        defaultValue={initialData?.developer || ''}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Publisher</label>
                    <input
                        type="text"
                        name="publisher"
                        defaultValue={initialData?.publisher || ''}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Release Date</label>
                    <input
                        type="date"
                        name="releaseDate"
                        defaultValue={initialData?.release_date || ''}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Price</label>
                    <input
                        type="text"
                        name="price"
                        defaultValue={initialData?.price || ''}
                        placeholder="e.g. 19.99, Free, or ₫500,000"
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Original Price</label>
                    <input
                        type="text"
                        name="originalPrice"
                        defaultValue={initialData?.original_price || ''}
                        placeholder="e.g. 29.99"
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Discount</label>
                    <input
                        type="text"
                        name="discount"
                        defaultValue={initialData?.discount || ''}
                        placeholder="e.g. -33%"
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Hero Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(file, 'heroImage');
                        }}
                        className={styles.fileInput}
                        disabled={uploadingImages.heroImage}
                    />
                    {uploadingImages.heroImage && <p className={styles.uploading}>Uploading...</p>}
                    {imageUrls.heroImage && (
                        <div className={styles.preview}>
                            <img src={imageUrls.heroImage} alt="Hero preview" className={styles.previewImage} />
                            <p className={styles.urlText}>{imageUrls.heroImage}</p>
                        </div>
                    )}
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Gallery Images (for detail page)</label>
                    <p className={styles.hint}>Upload up to 5 images for game gallery</p>

                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className={styles.imageUploadRow}>
                            <label className={styles.fileLabel}>
                                Image {num}:
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) handleImageUpload(file, `galleryImage${num}`);
                                    }}
                                    className={styles.fileInput}
                                    disabled={uploadingImages[`galleryImage${num}`]}
                                />
                            </label>
                            {uploadingImages[`galleryImage${num}`] && <span className={styles.uploading}>Uploading...</span>}
                            {imageUrls[`galleryImage${num}`] && (
                                <span className={styles.uploadSuccess}>✅ Uploaded</span>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Video (Trailer)</label>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                // Check file size (Cloudinary free tier unsigned limit is often around 100MB)
                                if (file.size > 100 * 1024 * 1024) {
                                    alert('Video file is too large (>100MB). Please upload to YouTube/Vimeo and use the URL instead.');
                                    return;
                                }

                                setUploadingImages(prev => ({ ...prev, videoUrl: true }));

                                try {
                                    // Upload to Cloudinary (free tier)
                                    const formData = new FormData();
                                    formData.append('file', file);
                                    formData.append('upload_preset', 'game_images'); // Your unsigned preset

                                    // Use 'auto' resource type for better compatibility
                                    const response = await fetch(
                                        'https://api.cloudinary.com/v1_1/dzwpfwvyc/auto/upload',
                                        {
                                            method: 'POST',
                                            body: formData,
                                        }
                                    );

                                    const data = await response.json();

                                    if (data.secure_url) {
                                        setImageUrls(prev => ({ ...prev, videoUrl: data.secure_url }));
                                        alert('✅ Video uploaded successfully!');
                                    } else {
                                        throw new Error(data.error?.message || 'Unknown error');
                                    }
                                } catch (error: any) {
                                    console.error('Video upload error:', error);
                                    alert(`Failed to upload video: ${error.message || 'Network error'}. Please try using a URL instead.`);
                                } finally {
                                    setUploadingImages(prev => ({ ...prev, videoUrl: false }));
                                }
                            }
                        }}
                        className={styles.fileInput}
                        disabled={uploadingImages.videoUrl}
                    />
                    {uploadingImages.videoUrl && <p className={styles.uploading}>Uploading video...</p>}
                    {imageUrls.videoUrl && (
                        <div className={styles.preview}>
                            <p className={styles.uploadSuccess}>✅ Video uploaded</p>
                            <p className={styles.urlText}>{imageUrls.videoUrl}</p>
                        </div>
                    )}
                    <p className={styles.hint}>Or paste YouTube/Vimeo URL:</p>
                    <input
                        type="url"
                        name="videoUrl"
                        value={imageUrls.videoUrl || ''}
                        onChange={(e) => setImageUrls(prev => ({ ...prev, videoUrl: e.target.value }))}
                        className={styles.input}
                        placeholder="https://youtube.com/watch?v=..."
                    />
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Description</label>
                    <textarea
                        name="description"
                        defaultValue={initialData?.description || ''}
                        rows={6}
                        className={styles.textarea}
                    />
                </div>

                {/* --- System Requirements Section --- */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>System Requirements</label>
                    <div className={styles.specsContainer} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                        {/* Minimum Specs */}
                        <div className={styles.specsColumn}>
                            <h3 className={styles.subTitle} style={{ color: '#ccc', marginBottom: '1rem', borderBottom: '1px solid #444', paddingBottom: '0.5rem' }}>Minimum</h3>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>OS</label>
                                <input type="text" name="min_os" defaultValue={minSpecs.os || ''} className={styles.input} placeholder="Windows 10" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>CPU</label>
                                <input type="text" name="min_cpu" defaultValue={minSpecs.cpu || ''} className={styles.input} placeholder="Intel Core i5..." />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Memory</label>
                                <input type="text" name="min_memory" defaultValue={minSpecs.memory || ''} className={styles.input} placeholder="8 GB RAM" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>GPU</label>
                                <input type="text" name="min_gpu" defaultValue={minSpecs.gpu || ''} className={styles.input} placeholder="NVIDIA GTX 1060..." />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Storage</label>
                                <input type="text" name="min_storage" defaultValue={minSpecs.storage || ''} className={styles.input} placeholder="50 GB available space" />
                            </div>
                        </div>

                        {/* Recommended Specs */}
                        <div className={styles.specsColumn}>
                            <h3 className={styles.subTitle} style={{ color: '#ccc', marginBottom: '1rem', borderBottom: '1px solid #444', paddingBottom: '0.5rem' }}>Recommended</h3>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>OS</label>
                                <input type="text" name="rec_os" defaultValue={recSpecs.os || ''} className={styles.input} placeholder="Windows 11" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>CPU</label>
                                <input type="text" name="rec_cpu" defaultValue={recSpecs.cpu || ''} className={styles.input} placeholder="Intel Core i7..." />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Memory</label>
                                <input type="text" name="rec_memory" defaultValue={recSpecs.memory || ''} className={styles.input} placeholder="16 GB RAM" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>GPU</label>
                                <input type="text" name="rec_gpu" defaultValue={recSpecs.gpu || ''} className={styles.input} placeholder="NVIDIA RTX 3060..." />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Storage</label>
                                <input type="text" name="rec_storage" defaultValue={recSpecs.storage || ''} className={styles.input} placeholder="50 GB available space" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Display Sections</label>
                    <p className={styles.hint}>Select where this game should appear on the homepage</p>
                    <div className={styles.checkboxGrid}>
                        <label className={styles.checkbox}>
                            <input type="checkbox" name="showInDiscover" />
                            <span>Discover Something New</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" name="showInTopNew" />
                            <span>Top New Releases</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" name="showInTrending" />
                            <span>Trending</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" name="showInEpicFirst" />
                            <span>Featured from Epic First Run</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" name="showInNowOn" />
                            <span>Now On The Epic Games Store</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className={styles.formActions}>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className={styles.cancelBtn}
                    disabled={loading}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                >
                    {loading ? 'Saving...' : mode === 'create' ? 'Create Game' : 'Update Game'}
                </button>
            </div>
        </form>
    );
}
