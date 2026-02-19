import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function RewardCard({ name, pointsCost }: { name: string; pointsCost: number }) {
  return (
    <Card className="space-y-3">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm">Riscatta con {pointsCost} punti.</p>
      <Button variant="secondary" className="w-full">
        Riscatta
      </Button>
    </Card>
  );
}
