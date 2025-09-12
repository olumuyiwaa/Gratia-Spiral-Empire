import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Gratia Spiral Empire - Global Commodity Trading',
    description: 'Your trusted partner in global commodity trade, connecting Africa\'s natural wealth to global markets through ethical sourcing and strategic partnerships.',
    keywords: 'commodity trading, solid minerals, precious stones, agricultural products, West Africa, export, sourcing',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}