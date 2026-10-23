import { ArrowUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SocialLinks } from './SocialLinks';
import { profile } from '@/data/profile';

const REPO_URL = 'https://github.com/lekhanhdat/portfolio';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-text">
            © {year} {profile.name}
          </p>
          <p className="label-mono text-text-muted">
            Built with Astro, React &amp; TypeScript ·{' '}
            <a
              href={REPO_URL}
              className="link-underline hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>

        <div className="flex items-center gap-1">
          <SocialLinks />
          <a
            href="#top"
            className="ml-2 inline-flex size-11 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
            aria-label="Back to top"
          >
            <ArrowUp aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
