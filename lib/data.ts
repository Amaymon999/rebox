export type Drop = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  badge: string;
  quantityLeft: number;
  total: number;
  image: string;
  endAt: string;
};

export const drops: Drop[] = [
  {
    id: 'drop-oggi',
    title: 'Box Mega Occasione',
    subtitle: 'Valore superiore al prezzo, box sigillati',
    price: 10,
    oldPrice: 15,
    badge: 'Nuovi arrivi',
    quantityLeft: 63,
    total: 100,
    image: '/assets/placeholder-drop-1.svg',
    endAt: '2026-12-31T19:00:00.000Z'
  },
  {
    id: 'bundle-3',
    title: 'Bundle 3 box',
    subtitle: 'Solo oggi fino alle 19:00',
    price: 25,
    oldPrice: 30,
    badge: 'Bundle conveniente',
    quantityLeft: 18,
    total: 40,
    image: '/assets/placeholder-drop-2.svg',
    endAt: '2026-12-31T19:00:00.000Z'
  }
];

export const rewards = [
  { id: 'r1', name: 'Sconto €5', pointsCost: 500, type: 'discount', value: 5 },
  { id: 'r2', name: 'Box gratis', pointsCost: 900, type: 'free_box', value: 1 }
];
