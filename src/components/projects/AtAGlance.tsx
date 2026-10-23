import type { PersonalProject } from '@/lib/projects';

type Surface = PersonalProject['data']['surfaces'][number];

/** First case study section: one column per surface, web admin first (PLAN §5.2). */
export function AtAGlance({ id, surfaces }: { id: string; surfaces: readonly Surface[] }) {
  return (
    <section aria-labelledby={id} className="not-prose">
      <h2 id={id} className="text-h3 font-semibold">
        At a glance
      </h2>
      <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        {surfaces.map((surface, index) => (
          <li key={surface.name} className="bg-bg p-5">
            <p className="label-mono text-accent">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-2 font-semibold">{surface.name}</h3>
            <p className="mt-2 text-sm text-text-muted">{surface.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
