import * as React from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'focus-ring flex h-11 w-full rounded-xl border border-brand-navy/20 bg-white px-3 text-sm placeholder:text-brand-navy/50',
        className
      )}
      {...props}
    />
  );
}
