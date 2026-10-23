import { FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { buttonClasses } from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import { profile } from '@/data/profile';
import { mainNav } from '@/data/navigation';
import { withBase } from '@/lib/with-base';

export interface ResolvedNavItem {
  label: string;
  /** Final href, already resolved through withBase(). */
  href: string;
  /** The link leads to the page being viewed (or one of its children). */
  current: boolean;
}

interface SiteHeaderProps {
  /** Pathname of the page being rendered (Astro.url.pathname). */
  currentPath: string;
  /** Hide section links on pages that stand outside the site flow (404). */
  showNav?: boolean;
}

/** Scroll hairline behavior: src/scripts/header.ts. Section highlight: src/scripts/active-section.ts. */
export function SiteHeader({ currentPath, showNav = true }: SiteHeaderProps) {
  const isHome = currentPath === withBase('/');
  const navItems: ResolvedNavItem[] = mainNav.map((item) => {
    const isPage = !item.href.includes('#');
    return {
      label: item.label,
      href: withBase(isHome && item.homeHref ? item.homeHref : item.href),
      current: !isHome && isPage && currentPath.startsWith(withBase(item.href)),
    };
  });

  return (
    <header
      data-site-header
      className="sticky top-0 z-40 border-b border-transparent bg-bg/85 backdrop-blur-md transition-colors data-[scrolled]:border-border"
    >
      <Container className="flex h-16 items-center gap-4">
        <a
          href={withBase('/')}
          className="group mr-auto flex items-center gap-3"
          aria-label={`${profile.name}, home`}
        >
          <span
            aria-hidden="true"
            className="label-mono rounded-sm border border-border-strong px-1.5 py-0.5 text-text transition-colors group-hover:border-accent group-hover:text-accent"
          >
            {profile.initials}
          </span>
          <span aria-hidden="true" className="hidden text-sm font-medium text-text sm:inline">
            {profile.name}
          </span>
        </a>

        {showNav && (
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-nav-link
                    aria-current={item.current ? 'page' : undefined}
                    className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:text-text aria-[current]:text-text aria-[current]:underline aria-[current]:decoration-accent aria-[current]:underline-offset-8"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex items-center gap-1">
          <ThemeToggle />
          {profile.resumePath && (
            <a
              href={withBase(profile.resumePath)}
              className={buttonClasses({
                variant: 'secondary',
                size: 'sm',
                className: 'ml-2 hidden sm:inline-flex',
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText aria-hidden="true" className="size-4" />
              Résumé
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          )}
          {showNav && <MobileNav items={navItems} />}
        </div>
      </Container>
    </header>
  );
}
