import { ArrowUp } from 'lucide-react';

/**
 * Floating "back to top" button on every page (the site has no footer). With scripts it
 * appears once the page is scrolled past the first screen (src/scripts/header.ts); without
 * them it simply stays visible. `invisible` also takes it out of the tab order while hidden.
 */
export function BackToTop() {
  return (
    <a
      href="#top"
      data-back-to-top
      aria-label="Back to top"
      className="fixed right-4 bottom-4 z-30 inline-flex size-11 items-center justify-center rounded-full border border-border-control bg-surface text-text-muted shadow-popover transition-[opacity,translate,visibility,color,border-color] duration-200 ease-out-soft hover:border-accent hover:text-accent in-[.js]:not-data-[visible]:invisible in-[.js]:not-data-[visible]:translate-y-2 in-[.js]:not-data-[visible]:opacity-0 sm:right-6 sm:bottom-6"
    >
      <ArrowUp aria-hidden="true" className="size-[18px]" />
    </a>
  );
}
