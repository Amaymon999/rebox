'use client';

import { Gift, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const openingAgenda = [
  {
    day: 'Giorno 1',
    date: '19 APR',
    prizes: ['iPhone 17 Pro arancio', '1 iPad'],
    highlight: true
  },
  {
    day: 'Giorno 2',
    date: '20 APR',
    prizes: ['1 iPad'],
    highlight: false
  },
  {
    day: 'Giorno 3',
    date: '21 APR',
    prizes: ['1 iPad'],
    highlight: false
  }
];

export function OpeningEventHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-orange p-6 text-white shadow-soft">
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand-yellow/30 blur-2xl" aria-hidden />
      <div className="relative space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="h-4 w-4" />
          Apertura ufficiale · 3 giorni
        </div>
        <h1 className="text-4xl font-black leading-none md:text-5xl">ESTRAZIONE A SORPRESA</h1>
        <p className="max-w-md text-sm font-medium text-white/95">
          Premi ancora nascosti nei box dei primi 3 giorni: valore reale, regole trasparenti, ritiro in negozio.
        </p>

        <div className="grid gap-3">
          {openingAgenda.map((slot, index) => (
            <motion.div
              key={slot.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-2xl border px-4 py-3 ${
                slot.highlight
                  ? 'border-brand-yellow bg-brand-navy text-white'
                  : 'border-white/30 bg-white/10 text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wide">{slot.day}</p>
                <p className="text-xs font-bold">{slot.date}</p>
              </div>
              <div className="mt-2 flex items-start gap-2 text-sm font-semibold">
                {slot.highlight ? <Trophy className="mt-0.5 h-4 w-4 text-brand-yellow" /> : <Gift className="mt-0.5 h-4 w-4" />}
                <p>{slot.prizes.join(' + ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
