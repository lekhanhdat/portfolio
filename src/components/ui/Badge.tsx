import type { ReactNode } from 'react';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/cn';

const variants = {
  neutral: 'border-border text-text-muted',
  accent: 'border-transparent bg-accent-subtle text-accent',
  confidential: 'border-border text-text-muted',
  status: 'border-border text-text',
} as const;

interface BadgeProps {
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}

/** Meaning is always carried by text; icons/dots are supplementary (WCAG 1.4.1). */
export function Badge({ variant = 'neutral', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'label-mono inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
        variants[variant],
        className,
      )}
    >
      {variant === 'confidential' && <Lock aria-hidden="true" className="size-3" />}
      {variant === 'status' && (
        <span aria-hidden="true" className="size-2 rounded-full bg-status-ok" />
      )}
      {children}
    </span>
  );
}
