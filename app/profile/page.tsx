'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Profilo</h1>
      <Card className="space-y-3 text-center">
        <p className="font-semibold">Mostra questo QR in cassa</p>
        <div className="flex justify-center">
          <QRCodeSVG value="rebox-user-123" size={180} bgColor="#FFF5E3" fgColor="#192134" />
        </div>
        <Button onClick={() => trackEvent('show_qr')}>Mostra QR in cassa</Button>
      </Card>
    </div>
  );
}
