import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** Technology chip, e.g. "React", "TypeScript". */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-border bg-surface-muted px-2 py-0.5 font-mono text-xs text-text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}

interface TagListProps {
  items: readonly string[];
  label?: string;
  className?: string;
}

export function TagList({ items, label = 'Technologies', className }: TagListProps) {
  return (
    <ul aria-label={label} className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
