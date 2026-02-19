'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { CountdownStrip } from '@/components/home/countdown-strip';
import { DropCard } from '@/components/home/drop-card';
import { LabelBadge } from '@/components/home/label-badge';
import { drops } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

export default function HomePage() {
  useEffect(() => {
    trackEvent('view_home');
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-brand-orange p-5 text-white shadow-soft">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide">REBOX STORE</p>
            <h1 className="text-3xl font-black leading-tight">MEGA OCCASIONE</h1>
            <p className="text-sm">Ogni box è un’occasione.</p>
          </div>
          <Image src="/assets/logo-placeholder.svg" alt="Logo Rebox Store" width={72} height={72} />
        </div>
        <div className="mt-4 space-y-2">
          <LabelBadge text="Fino alle 19:00" />
          <CountdownStrip endAt={drops[0].endAt} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">Nuovi Arrivi</h2>
        {drops.map((drop) => (
          <DropCard key={drop.id} {...drop} />
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">Tesori trovati</h2>
        <div className="rounded-3xl bg-white p-4 shadow-soft">
          <p className="text-sm">“Sorpresa garantita, ho trovato cuffie e accessori top.”</p>
        </div>
      </section>
    </div>
  );
}
