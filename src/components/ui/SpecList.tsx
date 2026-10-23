import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface SpecItem {
  label: string;
  value: ReactNode;
}

// Column counts always divide the item count at each breakpoint, so no empty cell shows.
const columnClasses = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
} as const;

interface SpecListProps {
  items: readonly SpecItem[];
  columns?: keyof typeof columnClasses;
  /** "row": panel of cells split by hairlines (hero, headers). "stack": key/value list (sidebars). */
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

  // The 1px gap over a border-colored background draws the dividers between cells.
  return (
    <dl
      className={cn(
        'grid gap-px overflow-hidden rounded-lg border border-border bg-border',
        columnClasses[columns],
        className,
      )}
    >
      {items.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-2.5 bg-surface px-5 py-4 sm:px-6 sm:py-5">
          <dt className="label-mono flex items-center gap-2 text-text-muted">
            <span aria-hidden="true" className="h-px w-3 bg-accent" />
            {label}
          </dt>
          <dd className="text-[0.9375rem] leading-snug font-medium text-text">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
