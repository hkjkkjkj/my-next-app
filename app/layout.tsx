// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Game Store',
  description: 'Một trang web bán game giống Epic',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Chỉ render children - KHÔNG có Header, Navigation, Footer */}
        {children}
      </body>
    </html>
  );
}