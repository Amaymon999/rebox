'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { trackEvent } from '@/lib/analytics';

export default function AlertsPage() {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Bergamo');
  const [time, setTime] = useState('18:00');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('subscribe_alert', { email, city, time });
    alert('Iscrizione salvata!');
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Avvisami</h1>
      <Card>
        <form className="space-y-3" onSubmit={onSubmit}>
          <Input aria-label="Email" type="email" placeholder="la-tua-email@esempio.it" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input aria-label="Città" value={city} onChange={(e) => setCity(e.target.value)} required />
          <Input aria-label="Orario preferito" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <Button className="w-full" type="submit">Avvisami</Button>
        </form>
      </Card>
      <a className="focus-ring inline-flex text-sm font-semibold underline" href="https://wa.me/390000000000" target="_blank">
        Ricevi alert anche su WhatsApp (Phase 2)
      </a>
    </div>
  );
}
