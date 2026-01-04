import mysql from 'mysql2/promise';

// Use a global variable to store the pool instance in development
// to prevent creating a new pool on every hot reload.
const globalForDb = global as unknown as { db: mysql.Pool | undefined };

const pool = globalForDb.db ?? mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'game_data',
    waitForConnections: true,
    connectionLimit: 5, // Lower limit to be safe
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

if (process.env.NODE_ENV !== 'production') globalForDb.db = pool;

export async function query(sql: string, params: any[] = []) {
    try {
        const [results] = await pool.execute(sql, params);
        return results;
    } catch (error: any) {
        console.error('Database Error:', error.message);
        console.error('DB Config:', {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            passwordLength: process.env.DB_PASSWORD ? process.env.DB_PASSWORD.length : 0
        });
        throw error;
    }
}
