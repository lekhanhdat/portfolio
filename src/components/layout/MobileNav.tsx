import { Menu, X } from 'lucide-react';
import type { ResolvedNavItem } from './SiteHeader';

interface MobileNavProps {
  items: readonly ResolvedNavItem[];
}

/**
 * Full-height sheet on the native <dialog>: modal focus trapping, Escape to close and an
 * inert background come from the browser. Behavior: src/scripts/mobile-nav.ts.
 */
export function MobileNav({ items }: MobileNavProps) {
  return (
    <>
      <button
        type="button"
        data-mobile-nav-open
        aria-haspopup="dialog"
        aria-controls="mobile-nav"
        aria-label="Open menu"
        className="inline-flex size-11 items-center justify-center rounded-md text-text transition-colors hover:bg-surface-muted lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        id="mobile-nav"
        data-mobile-nav
        aria-label="Site menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-text backdrop:bg-transparent"
      >
        <div className="flex h-16 items-center justify-end border-b border-border px-5 sm:px-8">
          <button
            type="button"
            data-mobile-nav-close
            aria-label="Close menu"
            className="inline-flex size-11 items-center justify-center rounded-md transition-colors hover:bg-surface-muted"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
        <nav aria-label="Main" className="px-5 py-6 sm:px-8">
          <ul className="divide-y divide-border border-b border-border">
            {items.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-nav-link
                  aria-current={item.current ? 'page' : undefined}
                  className="flex items-baseline gap-4 py-4 text-h3 font-medium transition-colors hover:text-accent aria-[current]:text-accent"
                >
                  <span className="label-mono text-text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  );
}
