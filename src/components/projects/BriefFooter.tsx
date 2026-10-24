import { PrevNextNav, type PagerLink } from './PrevNextNav';
import { Callout } from '@/components/ui/Callout';
import { TagList } from '@/components/ui/Tag';

interface BriefFooterProps {
  stack: readonly string[];
  prev?: PagerLink;
  next?: PagerLink;
}

/**
 * Closing block of a company brief: full stack, confidentiality note, C1 → C4 pager.
 * Rendered from the MDX file so it shares the last screen with Engineering highlights.
 */
export function BriefFooter({ stack, prev, next }: BriefFooterProps) {
  return (
    <footer className="not-prose">
      <section aria-labelledby="tech-stack-heading" className="mt-9 border-t border-border pt-6">
        <h2 id="tech-stack-heading" className="text-h3 font-semibold">
          Tech stack
        </h2>
        <TagList items={stack} label="Tech stack" className="mt-4" />
      </section>

      <Callout variant="confidential" title="Confidentiality" className="mt-8">
        Details are generalized to respect confidentiality. No proprietary code, data, or client
        materials are shown.
      </Callout>

      <PrevNextNav label="Company projects" prev={prev} next={next} className="mt-8" />
    </footer>
  );
}
