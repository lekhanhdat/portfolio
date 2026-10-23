import type { ReactNode } from 'react';
import { Info, Lock } from 'lucide-react';
import { cn } from '@/lib/cn';

const icons = {
  info: Info,
  confidential: Lock,
} as const;

interface CalloutProps {
  variant?: keyof typeof icons;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ variant = 'info', title, children, className }: CalloutProps) {
  const Icon = icons[variant];
  return (
    <aside
      role="note"
      aria-label={title}
      className={cn(
        'flex gap-3 rounded-md border border-l-2 border-border border-l-accent bg-surface-muted p-4 text-sm text-text-muted',
        className,
      )}
    >
      <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
      <div>
        {title && <p className="font-medium text-text">{title}</p>}
        <div className={cn(title && 'mt-1')}>{children}</div>
      </div>
    </aside>
  );
}
