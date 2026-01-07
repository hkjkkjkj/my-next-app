'use server';

import { query } from '@/lib/db';

export async function getDashboardStats() {
    try {
        // Run queries in parallel
        const [gamesRows, usersRows] = await Promise.all([
            query('SELECT COUNT(*) as count FROM games'),
            query('SELECT COUNT(*) as count FROM users')
        ]) as [any[], any[]];

        return {
            totalGames: gamesRows[0]?.count || 0,
            totalUsers: usersRows[0]?.count || 0,
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return {
            totalGames: 0,
            totalUsers: 0,
        };
    }
}
