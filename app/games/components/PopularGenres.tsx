import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PopularGenres.module.css';

// Mock data for genres as they heavily rely on composite images we might not have perfectly ready
// We will use placeholders or try to reuse game covers if possible.
interface Genre {
    id: string;
    name: string;
    image: string; // Just one image for simplicity in this iteration
}

const genres: Genre[] = [
    { id: 'action', name: 'Action Games', image: '/images/where-winds-meet.png' }, // Reuse existing images
    { id: 'adventure', name: 'Adventure Games', image: '/images/arc-raiders.jpg' },
    { id: 'rpg', name: 'RPG', image: '/images/marvel-rivals.jpg' },
    { id: 'strategy', name: 'Strategy Games', image: '/images/anno-117-pax-romana.jpg' },
    { id: 'shooter', name: 'Shooter Games', image: '/images/cronos-the-new-dawn.jpg' },
];

const PopularGenres: React.FC = () => {
    return (
        <div className={styles.section}>
            <div className={styles.titleHeader}>
                <h2 className={styles.title}>Popular Genres</h2>
                <div className={styles.controls}>
                    <button className={styles.controlButton}>{'<'}</button>
                    <button className={styles.controlButton}>{'>'}</button>
                </div>
            </div>

            <div className={styles.grid}>
                {genres.map((genre) => (
                    // Since we need valid images, we will try to use the ones from data.ts or placeholders.
                    // For now, I'm using the paths from data.ts I saw earlier.
                    // Note: If images don't load, NextImage might complain, but we'll try best effort.
                    <Link href={`/games?genre=${genre.id}`} key={genre.id} className={styles.genreCard}>
                        <Image
                            src={genre.image}
                            alt={genre.name}
                            width={300}
                            height={170}
                            className={styles.genreImage}
                            style={{ objectFit: 'cover' }}
                        />
                        <span className={styles.genreTitle}>{genre.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularGenres;
