export interface TocItem {
  id: string;
  text: string;
}

/**
 * "On this page" list for the case study. Links carry data-nav-link so
 * src/scripts/active-section.ts highlights the section being read.
 */
export function CaseStudyToc({ items }: { items: readonly TocItem[] }) {
  return (
    <nav aria-labelledby="toc-heading">
      <h2 id="toc-heading" className="label-mono text-text-muted">
        On this page
      </h2>
      <ol className="mt-4 space-y-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-nav-link
              className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-text-muted transition-colors hover:text-text aria-[current]:border-accent aria-[current]:text-text"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
