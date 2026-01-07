'use server';

import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const key = new TextEncoder().encode(secretKey);

export type SessionPayload = {
    userId: number;
    email: string;
    role: 'admin' | 'user';
    expiresAt: Date;
};

export async function encrypt(payload: SessionPayload) {
    return await new SignJWT(payload as any)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(key);
}

export async function decrypt(token: string): Promise<SessionPayload | null> {
    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'],
        });
        return payload as any;
    } catch (error) {
        return null;
    }
}

export async function createSession(userId: number, email: string, role: 'admin' | 'user' = 'user') {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = await encrypt({ userId, email, role, expiresAt });

    (await cookies()).set('session', session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

export async function getSession(): Promise<SessionPayload | null> {
    const cookie = (await cookies()).get('session')?.value;
    if (!cookie) return null;
    return await decrypt(cookie);
}

export async function deleteSession() {
    (await cookies()).delete('session');
}
