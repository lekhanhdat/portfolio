import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeaderProps {
  /** Two-digit index shown in the mono label, e.g. "01". */
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Id of the heading, used by the parent section's aria-labelledby. */
  headingId?: string;
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  intro,
  headingId,
  as: Heading = 'h2',
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn('max-w-prose', className)}>
      <p className="label-mono text-text-muted">
        {index && <span className="text-accent">{index}</span>}
        {index && <span aria-hidden="true"> — </span>}
        {label}
      </p>
      <Heading
        id={headingId}
        className={cn(
          'mt-3 font-semibold text-text',
          Heading === 'h1' ? 'text-display' : 'text-h2',
        )}
      >
        {title}
      </Heading>
      {intro && <div className="mt-4 text-text-muted">{intro}</div>}
    </header>
  );
}
