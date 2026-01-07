import React from 'react';
import { getGameBySlug } from '@/lib/data-db';
import { isInWishlist } from '@/lib/wishlist-actions';
import { isInLibrary } from '@/lib/purchase-actions';
import GameDetailClient from './GameDetailClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function GameDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const game = await getGameBySlug(slug);

    // Check if game is in wishlist or library
    const inWishlist = game ? await isInWishlist(game.id) : false;
    const inLibrary = game ? await isInLibrary(game.id) : false;

    return <GameDetailClient game={game} initialInWishlist={inWishlist} initialInLibrary={inLibrary} />;
}