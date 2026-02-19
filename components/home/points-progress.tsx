import { Progress } from '@/components/ui/progress';

export function PointsProgress({ points }: { points: number }) {
  const target = points < 500 ? 500 : 900;
  const percentage = Math.min(100, (points / target) * 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-semibold">
        <span>{points} punti</span>
        <span>Prossimo premio: {target}</span>
      </div>
      <Progress value={percentage} />
    </div>
  );
}
