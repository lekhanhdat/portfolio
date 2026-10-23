import { homeSections } from '@/data/navigation';

/**
 * Fixed "On this page" rail for Home. From 1440px it is a labelled list like the case study
 * TOC; on narrower screens the gutter only fits the rail itself, so labels show on hover or
 * focus. Links carry data-nav-link, so src/scripts/active-section.ts marks the current one.
 */
export function SectionCatalog() {
  return (
    <nav
      aria-label="Sections"
      className="fixed top-1/2 left-2 z-30 hidden -translate-y-1/2 md:block min-[90rem]:left-4"
    >
      <p className="label-mono mb-4 hidden text-text-muted min-[90rem]:block">On this page</p>
      <ol className="border-l border-border-strong min-[90rem]:border-border">
        {homeSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              data-nav-link
              className="group relative -ml-px flex h-8 w-6 items-center border-l-2 border-transparent text-sm text-text-muted transition-colors duration-200 hover:border-border-strong hover:text-text aria-[current]:border-accent aria-[current]:text-text min-[90rem]:h-auto min-[90rem]:w-auto min-[90rem]:py-1.5 min-[90rem]:pl-3"
            >
              <span className="pointer-events-none absolute top-1/2 left-full ml-1 -translate-y-1/2 rounded-md border border-border bg-surface px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-popover transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 min-[90rem]:pointer-events-auto min-[90rem]:static min-[90rem]:ml-0 min-[90rem]:translate-y-0 min-[90rem]:rounded-none min-[90rem]:border-0 min-[90rem]:bg-transparent min-[90rem]:p-0 min-[90rem]:text-[0.8125rem] min-[90rem]:opacity-100 min-[90rem]:shadow-none">
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
