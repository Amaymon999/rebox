'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { trackEvent } from '@/lib/analytics';
import { useAppStore } from '@/store/use-app-store';

export default function InvitePage() {
  const code = useAppStore((s) => s.referralCode);

  const onShare = async () => {
    trackEvent('referral_share', { code });
    await navigator.clipboard.writeText(`Usa il mio codice ${code} su REBOX STORE`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Invita un amico</h1>
      <Card className="space-y-3">
        <p className="text-sm">Porta un amico: bonus punti per entrambi alla prima transazione verificata.</p>
        <p className="rounded-xl bg-brand-cream p-3 font-bold">Codice: {code}</p>
        <Button onClick={onShare}>Condividi codice</Button>
      </Card>
    </div>
  );
}
