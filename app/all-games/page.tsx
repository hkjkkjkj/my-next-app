
import { getAllGames } from '@/lib/data-db';
import AllGamesClient from './AllGamesClient';

// Ensure fresh data on each request (or use revalidation if preferred)
export const dynamic = 'force-dynamic';

export default async function AllGamesPage() {
    const allGames = await getAllGames();

    return (
        <AllGamesClient games={allGames} />
    );
}
