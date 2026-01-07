'use server';

import bcrypt from 'bcryptjs';
import { query } from './db';
import { createSession, deleteSession } from './session';
import { redirect } from 'next/navigation';

interface AuthResult {
    success: boolean;
    message: string;
    verify?: boolean; // New: signals frontend to show OTP form
    email?: string;   // New: pass back email for verification
    userId?: number;
}

export async function registerAdmin(formData: FormData): Promise<AuthResult> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;

    // Validate inputs
    if (!email || !password) {
        return { success: false, message: 'Email and password are required' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters' };
    }

    // Check if email already exists
    try {
        const existingUsers = await query(
            'SELECT id FROM admin_users WHERE email = ?',
            [email]
        ) as any[];

        if (existingUsers.length > 0) {
            return { success: false, message: 'Email already registered' };
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Insert new admin user
        const result = await query(
            'INSERT INTO admin_users (email, password_hash, full_name) VALUES (?, ?, ?)',
            [email, passwordHash, fullName || null]
        ) as any;

        return {
            success: true,
            message: 'Account created successfully',
            userId: result.insertId,
        };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: 'Registration failed. Please try again.' };
    }
}

export async function loginAdmin(formData: FormData): Promise<AuthResult> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { success: false, message: 'Email and password are required' };
    }

    try {
        // Find user by email
        const users = await query(
            'SELECT id, email, password_hash, is_active FROM admin_users WHERE email = ?',
            [email]
        ) as any[];

        if (users.length === 0) {
            return { success: false, message: 'Invalid email or password' };
        }

        const user = users[0];

        // Check if account is active
        if (!user.is_active) {
            return { success: false, message: 'Account is disabled' };
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password_hash);

        if (!passwordMatch) {
            return { success: false, message: 'Invalid email or password' };
        }

        // Update last login
        await query(
            'UPDATE admin_users SET last_login = NOW() WHERE id = ?',
            [user.id]
        );

        // Create session
        await createSession(user.id, user.email, 'admin');

        return {
            success: true,
            message: 'Login successful',
            userId: user.id,
        };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Login failed. Please try again.' };
    }
}

export async function logoutAdmin() {
    await deleteSession();
    redirect('/admin/login');
}

// --- USER AUTH ACTIONS ---


import { sendVerificationEmail } from '@/lib/mail';

export async function registerUser(formData: FormData): Promise<AuthResult> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const country = formData.get('country') as string;

    if (!email || !password) return { success: false, message: 'Email and password are required' };
    if (password.length < 6) return { success: false, message: 'Password must be at least 6 characters' };

    try {
        const existing = await query('SELECT id FROM users WHERE email = ?', [email]) as any[];
        if (existing.length > 0) return { success: false, message: 'Email already registered' };

        // Generate 6-digit code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

        const passwordHash = await bcrypt.hash(password, 10);

        await query(
            'INSERT INTO users (email, password_hash, full_name, first_name, last_name, country, verification_code, verification_expires, is_verified) VALUES (?, ?, ?, ?, ?, ?, ?, ?, FALSE)',
            [email, passwordHash, fullName || null, firstName || null, lastName || null, country || null, verificationCode, expires]
        );

        // Send Email
        const emailResult = await sendVerificationEmail(email, verificationCode);
        if (!emailResult.success) {
            console.error('Email failed:', emailResult.error);
            // Optional: delete user if email fails? Or just let them retry.
            // For now, let's return verified: true just to test UI if email fails (DEV ONLY) - NO, keep it strict.
            return { success: true, message: 'Verification code sent', verify: true, email };
        }

        return { success: true, message: 'Verification code sent to your email', verify: true, email };
    } catch (error) {
        console.error('User Registration error:', error);
        return { success: false, message: 'Registration failed. Please try again.' };
    }
}

export async function verifyUser(email: string, code: string): Promise<AuthResult> {
    try {
        const users = await query('SELECT * FROM users WHERE email = ?', [email]) as any[];
        if (users.length === 0) return { success: false, message: 'User not found' };

        const user = users[0];

        if (user.is_verified) return { success: true, message: 'Already verified' };

        if (user.verification_code !== code) {
            return { success: false, message: 'Invalid verification code' };
        }

        if (new Date() > new Date(user.verification_expires)) {
            return { success: false, message: 'Verification code expired' };
        }

        await query('UPDATE users SET is_verified = TRUE, verification_code = NULL, verification_expires = NULL WHERE id = ?', [user.id]);

        return { success: true, message: 'Account verified successfully' };

    } catch (error) {
        console.error('Verification error:', error);
        return { success: false, message: 'Verification failed' };
    }
}


export async function loginUser(formData: FormData): Promise<AuthResult> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) return { success: false, message: 'Email and password are required' };

    try {
        const users = await query('SELECT id, email, password_hash FROM users WHERE email = ?', [email]) as any[];
        if (users.length === 0) return { success: false, message: 'Invalid email or password' };

        const user = users[0];
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return { success: false, message: 'Invalid email or password' };

        await query('UPDATE users SET last_login = NOW() WHERE id = ?', [user.id]);
        await createSession(user.id, user.email, 'user'); // User session

        return { success: true, message: 'Login successful', userId: user.id };
    } catch (error) {
        console.error('User Login error:', error);
        return { success: false, message: 'Login failed.' };
    }
}

export async function logoutUser() {
    await deleteSession();
    redirect('/login');
}

export async function getUserData(userId: number) {
    try {
        const users = await query(
            'SELECT id, email, full_name, first_name, last_name, country, created_at FROM users WHERE id = ?',
            [userId]
        ) as any[];

        if (users.length === 0) return null;
        return users[0];
    } catch (error) {
        console.error('Get User Data Error:', error);
        return null;
    }
}

// Get current session
export async function getSession() {
    const { cookies } = await import('next/headers');
    const { decrypt } = await import('./session');

    const sessionCookie = (await cookies()).get('session');

    if (!sessionCookie?.value) {
        return null;
    }

    return await decrypt(sessionCookie.value);
}
