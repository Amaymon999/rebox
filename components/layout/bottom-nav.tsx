'use client';

import Link from 'next/link';
import { Home, Gift, Trophy, User, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/drop', label: 'Drop', icon: Sparkles },
  { href: '/loyalty', label: 'Punti', icon: Trophy },
  { href: '/rewards', label: 'Premi', icon: Gift },
  { href: '/profile', label: 'Profilo', icon: User }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-navy/10 bg-white/95 backdrop-blur md:hidden" aria-label="Navigazione principale mobile">
      <ul className="mx-auto flex max-w-xl justify-around px-2 py-2">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link href={item.href} className={`focus-ring flex flex-col items-center rounded-xl px-3 py-1 text-xs ${active ? 'text-brand-orange' : 'text-brand-navy/80'}`}>
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
