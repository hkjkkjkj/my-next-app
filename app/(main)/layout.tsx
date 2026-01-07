// app/(main)/layout.tsx
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}
