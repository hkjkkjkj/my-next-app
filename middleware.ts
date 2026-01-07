import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/session';

export async function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get('session')?.value;
    const session = sessionCookie ? await decrypt(sessionCookie) : null;

    // 1. Protect Admin Routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Allow access to login/register pages inside admin (if any) - currently /admin/login is inside (auth)
        // Wait, URL structure: /admin/login is mapped from app/(auth)/admin/login
        // So /admin/login STARTS with /admin
        // We must allowing /admin/login and /admin/register
        if (request.nextUrl.pathname.startsWith('/admin/login') || request.nextUrl.pathname.startsWith('/admin/register')) {
            return NextResponse.next();
        }

        if (!session || session.role !== 'admin') {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // 2. Protect User Routes (Optional, e.g. /profile)
    // if (request.nextUrl.pathname.startsWith('/profile')) { ... }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
