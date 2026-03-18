import { create } from 'zustand';

type Tier = 'Bronze' | 'Silver' | 'Gold';

type AppState = {
  points: number;
  tier: Tier;
  referralCode: string;
  addPoints: (value: number) => void;
};

export const useAppStore = create<AppState>((set) => ({
  points: 320,
  tier: 'Bronze',
  referralCode: 'REBOX-MARIO-24',
  addPoints: (value) =>
    set((state) => {
      const nextPoints = state.points + value;
      const tier: Tier = nextPoints >= 900 ? 'Gold' : nextPoints >= 500 ? 'Silver' : 'Bronze';
      return { points: nextPoints, tier };
    })
}));
