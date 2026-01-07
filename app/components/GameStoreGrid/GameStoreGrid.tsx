
'use client';

import React from 'react';
import styles from './GameStoreGrid.module.css';
import { Game } from '@/lib/game-actions';
import GameCard from '../GameCard/GameCard';

interface GameStoreGridProps {
    games: Game[];
    title?: string;
}

export default function GameStoreGrid({ games, title = "Browse Store" }: GameStoreGridProps) {
    if (!games || games.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.grid}>
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    );
}
