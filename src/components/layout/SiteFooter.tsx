import { ArrowUp, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { profile } from '@/data/profile';

const REPO_URL = 'https://github.com/lekhanhdat/portfolio';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const iconLink =
    'inline-flex size-11 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-muted hover:text-text';

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
          <a
            href={profile.links.github}
            className={iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            <BrandIcon name="github" size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            className={iconLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <BrandIcon name="linkedin" size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={iconLink}
            aria-label={`Email ${profile.email}`}
          >
            <Mail aria-hidden="true" className="size-[18px]" />
          </a>
          <a href="#top" className={`${iconLink} ml-2`} aria-label="Back to top">
            <ArrowUp aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
