export type Drop = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  badge: string;
  quantityLeft: number;
  total: number;
  endAt: string;
  tone: 'orange' | 'navy' | 'yellow';
};

export const drops: Drop[] = [
  {
    id: 'drop-oggi',
    title: 'Box Mega Occasione',
    subtitle: 'Sorpresa garantita · box sigillati',
    price: 10,
    oldPrice: 15,
    badge: 'Nuovi arrivi',
    quantityLeft: 63,
    total: 100,
    endAt: '2026-12-31T19:00:00.000Z',
    tone: 'orange'
  },
  {
    id: 'solo-oggi',
    title: 'Sprint fino alle 19:00',
    subtitle: 'Prezzi giù ogni giorno, solo per oggi',
    price: 12,
    oldPrice: 18,
    badge: 'Solo oggi',
    quantityLeft: 24,
    total: 50,
    endAt: '2026-12-31T19:00:00.000Z',
    tone: 'navy'
  },
  {
    id: 'bundle-3',
    title: 'Bundle conveniente 3 box',
    subtitle: '3 box a €25 invece di €30',
    price: 25,
    oldPrice: 30,
    badge: 'Bundle',
    quantityLeft: 18,
    total: 40,
    endAt: '2026-12-31T19:00:00.000Z',
    tone: 'yellow'
  }
];

export const rewards = [
  { id: 'r1', name: 'Sconto €5', pointsCost: 500, type: 'discount', value: 5 },
  { id: 'r2', name: 'Box gratis', pointsCost: 900, type: 'free_box', value: 1 }
];
