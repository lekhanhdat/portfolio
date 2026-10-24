import type { CSSProperties } from 'react';
import { cn } from '@/lib/cn';

export interface FlowStep {
  title: string;
  detail: string;
}

interface FlowStepsProps {
  /** Short name of the workflow, read before the steps, e.g. "Semantic search". */
  label: string;
  steps: readonly FlowStep[];
  /** Optional note under the steps, e.g. how failures are handled. */
  note?: string;
  /**
   * "column": steps stacked with a vertical connector. "row": steps side by side from md
   * (stacked below), so a workflow fits on one screen under its diagram.
   */
  layout?: 'column' | 'row';
  className?: string;
}

/**
 * Text-first workflow diagram: an ordered list styled as connected steps. It stays accessible
 * on its own and sits next to the slide diagrams (PLAN §4.5).
 */
export function FlowSteps({ label, steps, note, layout = 'column', className }: FlowStepsProps) {
  const row = layout === 'row';

  return (
    <figure
      className={cn(
        'not-prose rounded-lg border border-border bg-surface p-5 sm:p-6',
        row ? 'mt-5' : 'my-8',
        className,
      )}
    >
      <figcaption className="label-mono text-text-muted">Workflow · {label}</figcaption>
      <ol
        className={cn(
          'mt-5',
          row && 'md:grid md:grid-cols-[repeat(var(--steps),minmax(0,1fr))] md:gap-4',
        )}
        style={row ? ({ '--steps': steps.length } as CSSProperties) : undefined}
      >
        {steps.map((step, index) => {
          const last = index === steps.length - 1;
          return (
            <li
              key={step.title}
              className={cn(
                'relative flex gap-4 pb-6 last:pb-0',
                row && 'md:flex-col md:gap-3 md:pb-0',
              )}
            >
              {!last && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-8 bottom-1 left-[0.9375rem] w-px bg-border-strong',
                    // Row: a horizontal connector from this step's number to the next one.
                    row && 'md:top-4 md:right-[-1rem] md:bottom-auto md:left-9 md:h-px md:w-auto',
                  )}
                />
              )}
              <span
                aria-hidden="true"
                className="label-mono relative flex size-8 shrink-0 items-center justify-center rounded-full border border-accent bg-accent-subtle text-accent"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={cn('pt-1', row && 'md:pt-0')}>
                <p className="text-sm font-medium text-text">{step.title}</p>
                <p className="mt-1 text-sm text-text-muted">{step.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
      {note && <p className="mt-5 border-t border-border pt-4 text-sm text-text-muted">{note}</p>}
    </figure>
  );
}
