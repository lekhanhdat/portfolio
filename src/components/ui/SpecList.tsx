import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface SpecItem {
  label: string;
  value: ReactNode;
}

const columnClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
} as const;

interface SpecListProps {
  items: readonly SpecItem[];
  columns?: keyof typeof columnClasses;
  /** "row": horizontal strip with hairlines (hero). "stack": vertical key/value list (sidebars). */
  layout?: 'row' | 'stack';
  className?: string;
}

/** The "spec sheet" strip: mono keys over plain values, separated by hairlines. */
export function SpecList({ items, columns = 4, layout = 'row', className }: SpecListProps) {
  if (layout === 'stack') {
    return (
      <dl className={cn('divide-y divide-border border-y border-border', className)}>
        {items.map(({ label, value }) => (
          <div key={label} className="flex items-baseline justify-between gap-6 py-3">
            <dt className="label-mono shrink-0 text-text-muted">{label}</dt>
            <dd className="text-right text-sm text-text">{value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl
      className={cn(
        'grid gap-px overflow-hidden border-y border-border bg-border',
        columnClasses[columns],
        className,
      )}
    >
      {items.map(({ label, value }) => (
        <div key={label} className="bg-bg py-4 pr-4">
          <dt className="label-mono text-text-muted">{label}</dt>
          <dd className="mt-1.5 text-sm text-text">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
