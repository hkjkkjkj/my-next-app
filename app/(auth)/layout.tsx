// app/(auth)/layout.tsx
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Game Store',
    description: 'Một trang web bán game giống Epic',
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Không có Header và Navigation ở đây */}
            {children}
        </>
    );
}
