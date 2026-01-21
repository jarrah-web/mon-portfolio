import './globals.css';
import Link from 'next/link';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body >
        
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold">
              <span className="bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                Mon Portfolio
              </span>
            </Link>
            <div className="flex gap-6 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <Link href="/projets" className="hover:text-white">Projets</Link>
              <Link href="/a-propos" className="hover:text-white">À propos</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </nav>
        

        <main className="flex-1">
          {children}
        </main>

       
        <footer className="border-t border-slate-800 bg-slate-950/90">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-slate-400 md:flex-row">
    <p>Bachelor3</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
