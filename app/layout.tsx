// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header/Header'; // <-- Bước 1: Import Header
import Navigation from './components/Navigation/Navigation'; // <-- Bước 1: Import Navigation

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
        
        <Header /> {/* <-- Bước 2: Đặt component Header ở đây */}
        <Navigation /> {/* <-- Bước 2: Đặt component Navigation ngay dưới Header */}

        <main>
          {children}
        </main>

        {/* Chúng ta sẽ thêm Footer ở đây sau */}
      </body>
    </html>
  );
}