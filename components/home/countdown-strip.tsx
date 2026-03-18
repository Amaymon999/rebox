'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function calc(endAt: string) {
  const diff = Math.max(0, new Date(endAt).getTime() - Date.now());
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { h, m, s };
}

export function CountdownStrip({ endAt }: { endAt: string }) {
  const [time, setTime] = useState(calc(endAt));

  useEffect(() => {
    const timer = setInterval(() => setTime(calc(endAt)), 1000);
    return () => clearInterval(timer);
  }, [endAt]);

  return (
    <motion.div
      className="flex items-center gap-2 rounded-2xl border border-brand-navy/10 bg-white px-3 py-2"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 1.3, repeat: Infinity }}
      aria-label="Countdown drop"
    >
      {[time.h, time.m, time.s].map((unit, index) => (
        <div key={index} className="rounded-lg bg-brand-navy px-2 py-1 text-lg font-black text-white">
          {String(unit).padStart(2, '0')}
        </div>
      ))}
      <span className="text-xs font-semibold uppercase">ore • min • sec</span>
    </motion.div>
  );
}
