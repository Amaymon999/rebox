import { RewardCard } from '@/components/home/reward-card';
import { rewards } from '@/lib/data';

export default function RewardsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Catalogo premi</h1>
      <div className="grid gap-3">
        {rewards.map((reward) => (
          <RewardCard key={reward.id} name={reward.name} pointsCost={reward.pointsCost} />
        ))}
      </div>
    </div>
  );
}
