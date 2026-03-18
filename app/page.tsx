'use client';

import { useEffect } from 'react';

import { CountdownStrip } from '@/components/home/countdown-strip';
import { DropCard } from '@/components/home/drop-card';
import { LabelBadge } from '@/components/home/label-badge';
import { OpeningEventHero } from '@/components/home/opening-event-hero';
import { drops } from '@/lib/data';
import { trackEvent } from '@/lib/analytics';

export default function HomePage() {
  useEffect(() => {
    trackEvent('view_home');
  }, []);

  return (
    <div className="space-y-6 pb-4">
      <OpeningEventHero />

      <section className="rounded-3xl border border-brand-navy/10 bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">Drop del giorno</p>
            <h2 className="text-2xl font-black">PREZZI GIÙ OGNI GIORNO</h2>
          </div>
          <LabelBadge text="Fino alle 19:00" />
        </div>
        <div className="mt-3">
          <CountdownStrip endAt={drops[0].endAt} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">Nuovi Arrivi</h2>
        <DropCard {...drops[0]} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">Solo oggi / Fino alle 19:00</h2>
        <DropCard {...drops[1]} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">Bundle convenienti</h2>
        <DropCard {...drops[2]} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-black">Tesori trovati</h2>
        <div className="rounded-3xl bg-white p-4 shadow-soft">
          <p className="text-sm font-medium">“Valore superiore al prezzo: nella box ho trovato accessori top e gadget utili.”</p>
        </div>
      </section>
    </div>
  );
}
