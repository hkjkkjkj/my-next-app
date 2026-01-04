import React from 'react';
import { getGameBySlug } from '@/lib/data-db';
import GameDetailClient from './GameDetailClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function GameDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const game = await getGameBySlug(slug);

    return <GameDetailClient game={game} />;
}