import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mon Portfolio - Développeuse Full Stack',
  description: 'Portfolio de développeuse Full Stack spécialisée en Node.js et Laravel',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

