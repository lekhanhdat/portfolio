import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { BrandIcon } from '@/components/ui/BrandIcon';
import type { PersonalProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';

interface CaseStudyFooterProps {
  id: string;
  links: PersonalProject['data']['links'];
}

/** Links to the live demo and repositories, with the way onward to the company projects beside them. */
export function CaseStudyFooter({ id, links }: CaseStudyFooterProps) {
  return (
    <div className="grid gap-8 border-t border-border pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <section aria-labelledby={id}>
        <h2 id={id} className="text-h3 font-semibold">
          Links
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {links.demo && (
            <LinkButton href={links.demo.url} external>
              {links.demo.label}
            </LinkButton>
          )}
          {links.repos.map((repo) => (
            <LinkButton key={repo.url} href={repo.url} variant="secondary" external>
              <BrandIcon name="github" />
              {repo.label}
            </LinkButton>
          ))}
        </div>
        {links.demo?.note && (
          <p className="label-mono mt-3 text-text-muted">
            {links.demo.label} · {links.demo.note}
          </p>
        )}
      </section>

      <nav aria-label="Next">
        <a
          href={withBase('/company-projects/')}
          className="group inline-flex flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="label-mono flex items-center gap-1.5 text-text-muted">
            Next
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
          <span className="font-medium group-hover:text-accent">Company projects</span>
        </a>
      </nav>
    </div>
  );
}
