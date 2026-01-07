
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { createSession } from '@/lib/session';
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error || !code) {
        return NextResponse.redirect(new URL('/login?error=GoogleAuthFailed', request.url));
    }

    try {
        // Exchange code for tokens
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code,
                client_id: process.env.GOOGLE_CLIENT_ID!,
                client_secret: process.env.GOOGLE_CLIENT_SECRET!,
                redirect_uri: 'http://localhost:3000/api/auth/google/callback',
                grant_type: 'authorization_code',
            }),
        });

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
            console.error('Token Error:', tokenData);
            throw new Error('Failed to get tokens');
        }

        // Get User Info
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${tokenData.access_token}` },
        });
        const userData = await userResponse.json();

        // userData: { id, email, verified_email, name, given_name, family_name, picture, locale }

        // Check if user exists
        const existingUser = await query(
            'SELECT * FROM users WHERE google_id = ? OR email = ?',
            [userData.id, userData.email]
        ) as any[];

        let userId;

        if (existingUser.length > 0) {
            const user = existingUser[0];
            userId = user.id;

            // If found by email but no google_id, link it
            if (!user.google_id) {
                await query('UPDATE users SET google_id = ? WHERE id = ?', [userData.id, user.id]);
            }
        } else {
            // Create new user
            // Generate a random password (user can't login with password unless they reset it, strictly Google login)
            const randomPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const passwordHash = await bcrypt.hash(randomPassword, 10);

            const result = await query(
                'INSERT INTO users (email, password_hash, full_name, first_name, last_name, google_id, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
                [
                    userData.email,
                    passwordHash,
                    userData.name,
                    userData.given_name,
                    userData.family_name,
                    userData.id
                ]
            ) as any;
            userId = result.insertId;
        }

        // Create Session
        await createSession(userId, userData.email, 'user');

        return NextResponse.redirect(new URL('/', request.url));

    } catch (err) {
        console.error('Google Auth Error:', err);
        return NextResponse.redirect(new URL('/login?error=GoogleAuthError', request.url));
    }
}
