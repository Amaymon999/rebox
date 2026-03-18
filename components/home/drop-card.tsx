'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { trackEvent } from '@/lib/analytics';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LabelBadge } from './label-badge';
import { PricePill } from './price-pill';

const toneStyles = {
  orange: 'bg-brand-orange text-white',
  navy: 'bg-brand-navy text-white',
  yellow: 'bg-brand-yellow text-brand-navy'
};

export function DropCard({
  id,
  title,
  subtitle,
  price,
  oldPrice,
  badge,
  quantityLeft,
  total,
  tone
}: {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  badge: string;
  quantityLeft: number;
  total: number;
  tone: 'orange' | 'navy' | 'yellow';
}) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Card className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <LabelBadge text={badge} />
          <span className="text-xs font-semibold text-brand-navy/70">Disponibilità: {quantityLeft}/{total}</span>
        </div>
        <div className="flex gap-3">
          <div className={`flex h-24 w-24 items-center justify-center rounded-2xl text-center text-xs font-black uppercase shadow-soft ${toneStyles[tone]}`}>
            CORRI
            <br />
            SUBITO
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-extrabold">{title}</h3>
            <p className="text-sm text-brand-navy/80">{subtitle}</p>
            <PricePill price={price} oldPrice={oldPrice} />
          </div>
        </div>
        <Button
          asChild
          className="w-full"
          onClick={() => trackEvent('click_drop', { dropId: id })}
          aria-label={`Scopri ${title}`}
        >
          <Link href="/drop">Scopri ora</Link>
        </Button>
      </Card>
    </motion.div>
  );
}
