import { getAllUsers } from '@/lib/admin-user-actions';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth-actions';
import UsersClient from './UsersClientMain';

export default async function AdminUsersPage() {
    const session = await getSession();

    if (!session || session.role !== 'admin') {
        redirect('/admin/login');
    }

    const result = await getAllUsers();

    if (!result.success) {
        return (
            <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2>Error loading users</h2>
                <p>{result.error}</p>
            </div>
        );
    }

    return <UsersClient users={result.users || []} />;
}
