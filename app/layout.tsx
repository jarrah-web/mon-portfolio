import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mon Portfolio - Développeuse Full Stack',
  description: 'Portfolio de développeuse Full Stack spécialisée en Node.js et Laravel',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-16 min-h-screen bg-background text-foreground">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

