'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { trackEvent } from '@/lib/analytics';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LabelBadge } from './label-badge';
import { PricePill } from './price-pill';

export function DropCard({
  id,
  title,
  subtitle,
  image,
  price,
  oldPrice,
  badge,
  quantityLeft,
  total
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge: string;
  quantityLeft: number;
  total: number;
}) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <Card className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <LabelBadge text={badge} />
          <span className="text-xs font-semibold text-brand-navy/70">Disponibilità: {quantityLeft}/{total}</span>
        </div>
        <div className="flex gap-3">
          <Image src={image} alt={title} width={96} height={96} className="rounded-2xl bg-brand-cream object-cover" />
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
          <Link href="/drop">Scopri il drop</Link>
        </Button>
      </Card>
    </motion.div>
  );
}
