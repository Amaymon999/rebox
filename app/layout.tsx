import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { BottomNav } from '@/components/layout/bottom-nav';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'REBOX STORE',
  description: 'Ogni box è un’occasione.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${montserrat.variable} pb-20 md:pb-0`}>
        <main className="mx-auto min-h-screen w-full max-w-xl px-4 py-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
