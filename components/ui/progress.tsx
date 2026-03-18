'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <ProgressPrimitive.Root className={cn('relative h-3 w-full overflow-hidden rounded-full bg-brand-navy/10', className)} value={value}>
      <ProgressPrimitive.Indicator
        className="h-full bg-brand-yellow transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
