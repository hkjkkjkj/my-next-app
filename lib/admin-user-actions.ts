'use server';

import { getSession } from './auth-actions';
import { query } from './db';

// Check if user is admin
async function isAdmin() {
    const session = await getSession();
    return session?.role === 'admin';
}

export async function getAllUsers() {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        const users = (await query(`
            SELECT 
                u.id,
                u.email,
                u.full_name,
                u.first_name,
                u.last_name,
                u.created_at,
                COUNT(DISTINCT ul.id) as total_games,
                COUNT(DISTINCT w.id) as wishlist_count
            FROM users u
            LEFT JOIN user_library ul ON u.id = ul.user_id
            LEFT JOIN wishlist w ON u.id = w.user_id
            GROUP BY u.id
            ORDER BY u.created_at DESC
        `)) as any[];

        return { success: true, users };
    } catch (error) {
        console.error('Error fetching users:', error);
        return { success: false, error: 'Failed to fetch users' };
    }
}

export async function getUserDetails(userId: number) {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        const users = (await query(`
            SELECT 
                id, email, full_name, first_name, last_name, country, created_at
            FROM users
            WHERE id = ?
        `, [userId])) as any[];

        if (users.length === 0) {
            return { success: false, error: 'User not found' };
        }

        return { success: true, user: users[0] };
    } catch (error) {
        console.error('Error fetching user details:', error);
        return { success: false, error: 'Failed to fetch user details' };
    }
}

export async function getUserLibrary(userId: number) {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        const games = (await query(`
            SELECT 
                g.id, g.slug, g.title, g.developer,
                COALESCE(d.image_url, ti.image_url, efr.image_url, no.image_url, tnr.image_url, g.hero_image) as image_url,
                COALESCE(d.price, ti.price, efr.price, no.price, tnr.price) as price,
                ul.purchase_date
            FROM user_library ul
            JOIN games g ON ul.game_id = g.id
            LEFT JOIN discover_items d ON g.id = d.game_id
            LEFT JOIN trending_items ti ON g.id = ti.game_id
            LEFT JOIN epic_first_run efr ON g.id = efr.game_id
            LEFT JOIN now_on no ON g.id = no.game_id
            LEFT JOIN top_new_releases tnr ON g.id = tnr.game_id
            WHERE ul.user_id = ?
            ORDER BY ul.purchase_date DESC
        `, [userId])) as any[];

        return { success: true, games };
    } catch (error) {
        console.error('Error fetching user library:', error);
        return { success: false, error: 'Failed to fetch library' };
    }
}

export async function getUserWishlist(userId: number) {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        const games = (await query(`
            SELECT 
                g.id, g.slug, g.title, g.developer,
                COALESCE(d.image_url, ti.image_url, efr.image_url, no.image_url, tnr.image_url, g.hero_image) as image_url,
                COALESCE(d.price, ti.price, efr.price, no.price, tnr.price) as price,
                w.added_date
            FROM wishlist w
            JOIN games g ON w.game_id = g.id
            LEFT JOIN discover_items d ON g.id = d.game_id
            LEFT JOIN trending_items ti ON g.id = ti.game_id
            LEFT JOIN epic_first_run efr ON g.id = efr.game_id
            LEFT JOIN now_on no ON g.id = no.game_id
            LEFT JOIN top_new_releases tnr ON g.id = tnr.game_id
            WHERE w.user_id = ?
            ORDER BY w.added_date DESC
        `, [userId])) as any[];

        return { success: true, games };
    } catch (error) {
        console.error('Error fetching user wishlist:', error);
        return { success: false, error: 'Failed to fetch wishlist' };
    }
}

export async function createUser(formData: FormData) {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const fullName = formData.get('fullName') as string;
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const country = formData.get('country') as string;

        if (!email || !password || !fullName) {
            return { success: false, error: 'Email, password, and full name are required' };
        }

        // Check if email exists
        const existing = (await query('SELECT id FROM users WHERE email = ?', [email])) as any[];
        if (existing.length > 0) {
            return { success: false, error: 'Email already exists' };
        }

        // Hash password
        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        await query(
            'INSERT INTO users (email, password, full_name, first_name, last_name, country) VALUES (?, ?, ?, ?, ?, ?)',
            [email, hashedPassword, fullName, firstName || null, lastName || null, country || null]
        );

        return { success: true, message: 'User created successfully' };
    } catch (error) {
        console.error('Error creating user:', error);
        return { success: false, error: 'Failed to create user' };
    }
}

export async function updateUser(userId: number, formData: FormData) {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        const email = formData.get('email') as string;
        const fullName = formData.get('fullName') as string;
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const country = formData.get('country') as string;

        if (!email || !fullName) {
            return { success: false, error: 'Email and full name are required' };
        }

        // Check if email exists for other users
        const existing = (await query(
            'SELECT id FROM users WHERE email = ? AND id != ?',
            [email, userId]
        )) as any[];

        if (existing.length > 0) {
            return { success: false, error: 'Email already exists' };
        }

        // Update user
        await query(
            'UPDATE users SET email = ?, full_name = ?, first_name = ?, last_name = ?, country = ? WHERE id = ?',
            [email, fullName, firstName || null, lastName || null, country || null, userId]
        );

        return { success: true, message: 'User updated successfully' };
    } catch (error) {
        console.error('Error updating user:', error);
        return { success: false, error: 'Failed to update user' };
    }
}

export async function deleteUser(userId: number) {
    try {
        if (!await isAdmin()) {
            return { success: false, error: 'Unauthorized' };
        }

        // Delete user (cascade will delete library and wishlist)
        await query('DELETE FROM users WHERE id = ?', [userId]);

        return { success: true, message: 'User deleted successfully' };
    } catch (error) {
        console.error('Error deleting user:', error);
        return { success: false, error: 'Failed to delete user' };
    }
}
