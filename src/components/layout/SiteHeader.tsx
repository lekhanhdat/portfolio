import { Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { buttonClasses } from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { MobileNav } from './MobileNav';
import { profile } from '@/data/profile';
import { mainNav } from '@/data/navigation';
import { withBase } from '@/lib/with-base';

interface SiteHeaderProps {
  /** Hide section links on pages where their targets do not exist yet. */
  showNav?: boolean;
}

/** Scroll hairline behavior: src/scripts/header.ts. */
export function SiteHeader({ showNav = true }: SiteHeaderProps) {
  const navItems = mainNav.map((item) => ({ ...item, href: withBase(item.href) }));

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
                    className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:text-text aria-[current=true]:text-text aria-[current=true]:underline aria-[current=true]:decoration-accent aria-[current=true]:underline-offset-8"
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
              download
            >
              <Download aria-hidden="true" className="size-4" />
              Résumé
            </a>
          )}
          {showNav && <MobileNav items={navItems} />}
        </div>
      </Container>
    </header>
  );
}
