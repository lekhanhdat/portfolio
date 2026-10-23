import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface PagerLink {
  title: string;
  /** Already resolved through withBase(). */
  href: string;
}

interface PrevNextNavProps {
  label: string;
  prev?: PagerLink;
  next?: PagerLink;
  className?: string;
}

export function PrevNextNav({ label, prev, next, className }: PrevNextNavProps) {
  if (!prev && !next) return null;

  const linkClass =
    'group flex min-h-20 flex-col justify-center gap-1 rounded-lg border border-border p-4 transition-colors hover:border-accent';

  return (
    <nav aria-label={label} className={cn('grid gap-4 sm:grid-cols-2', className)}>
      {prev ? (
        <a href={prev.href} rel="prev" className={linkClass}>
          <span className="label-mono flex items-center gap-1.5 text-text-muted">
            <ArrowLeft
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Previous
          </span>
          <span className="font-medium group-hover:text-accent">{prev.title}</span>
        </a>
      ) : (
        <span aria-hidden="true" className="hidden sm:block" />
      )}
      {next && (
        <a href={next.href} rel="next" className={cn(linkClass, 'sm:items-end sm:text-right')}>
          <span className="label-mono flex items-center gap-1.5 text-text-muted">
            Next
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
          <span className="font-medium group-hover:text-accent">{next.title}</span>
        </a>
      )}
    </nav>
  );
}
