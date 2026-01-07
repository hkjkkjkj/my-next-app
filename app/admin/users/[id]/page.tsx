import { getUserDetails, getUserLibrary, getUserWishlist } from '@/lib/admin-user-actions';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth-actions';
import UserDetailView from './UserDetailView';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function UserDetailPage({ params }: PageProps) {
    const session = await getSession();

    if (!session || session.role !== 'admin') {
        redirect('/admin/login');
    }

    const { id } = await params;
    const userId = parseInt(id);

    const [userResult, libraryResult, wishlistResult] = await Promise.all([
        getUserDetails(userId),
        getUserLibrary(userId),
        getUserWishlist(userId)
    ]);

    if (!userResult.success) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2>Error loading user</h2>
                <p>{userResult.error}</p>
            </div>
        );
    }

    return (
        <UserDetailView
            user={userResult.user}
            library={libraryResult.games || []}
            wishlist={wishlistResult.games || []}
        />
    );
}
