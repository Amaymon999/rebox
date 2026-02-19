'use client';

import { PointsProgress } from '@/components/home/points-progress';
import { Card } from '@/components/ui/card';
import { useAppStore } from '@/store/use-app-store';

export default function LoyaltyPage() {
  const { points, tier } = useAppStore();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Punti & Livelli</h1>
      <Card className="space-y-2">
        <p className="text-sm">Livello attuale: <span className="font-bold">{tier}</span></p>
        <PointsProgress points={points} />
      </Card>
      <Card>
        <h2 className="text-lg font-bold">Missione della settimana</h2>
        <p className="text-sm">2 acquisti verificati = +50 punti bonus</p>
      </Card>
    </div>
  );
}
