import { getWishlist } from '@/lib/wishlist-actions';
import { getSession } from '@/lib/auth-actions';
import { redirect } from 'next/navigation';
import WishlistClient from './WishlistClient';

export default async function WishlistPage() {
    const session = await getSession();

    if (!session) {
        redirect('/login');
    }

    const wishlistGames = await getWishlist();

    return <WishlistClient games={wishlistGames} />;
}
