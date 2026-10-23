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
}

/**
 * Text-first workflow diagram: an ordered list styled as connected steps. It stays accessible
 * on its own and remains next to the slide diagrams once they are added (PLAN §4.5).
 */
export function FlowSteps({ label, steps, note }: FlowStepsProps) {
  return (
    <figure className="not-prose my-8 rounded-lg border border-border bg-surface p-5 sm:p-6">
      <figcaption className="label-mono text-text-muted">Workflow · {label}</figcaption>
      <ol className="mt-5 space-y-0">
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-8 bottom-1 left-[0.9375rem] w-px bg-border-strong"
              />
            )}
            <span
              aria-hidden="true"
              className="label-mono relative flex size-8 shrink-0 items-center justify-center rounded-full border border-accent bg-accent-subtle text-accent"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="pt-1">
              <p className="text-sm font-medium text-text">{step.title}</p>
              <p className="mt-1 text-sm text-text-muted">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      {note && <p className="mt-5 border-t border-border pt-4 text-sm text-text-muted">{note}</p>}
    </figure>
  );
}
