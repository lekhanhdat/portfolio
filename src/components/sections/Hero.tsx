import { ArrowRight, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { SpecList } from '@/components/ui/SpecList';
import { Badge } from '@/components/ui/Badge';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { fullPageSectionClasses } from '@/components/ui/Section';
import { profile } from '@/data/profile';
import { totalExperience } from '@/data/experience';
import { education, languages } from '@/data/education';
import { sectionIds } from '@/data/navigation';
import { withBase } from '@/lib/with-base';
import type { ResponsiveImage } from '@/lib/image';

interface HeroProps {
  /** Case study of the personal project, already resolved through withBase(). */
  caseStudyHref: string;
  portrait: ResponsiveImage;
}

/** Intro and summary in one screen: pitch on the left, profile facts on the right. */
export function Hero({ caseStudyHref, portrait }: HeroProps) {
  const { availability } = profile;

  return (
    <section
      id={sectionIds.intro}
      aria-labelledby="hero-heading"
      className={fullPageSectionClasses}
    >
      {/* No reveal here: above-the-fold content must paint immediately (LCP). */}
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-8">
          <p className="label-mono text-text-muted">{profile.title} · React · TypeScript</p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-[22ch] text-[clamp(2.5rem,1.75rem+2.6vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-text"
          >
            I build clear, reliable interfaces for data-heavy web applications.
          </h1>
          <p className="mt-6 max-w-[62ch] text-text-muted">
            {totalExperience} with React and TypeScript: an enterprise data governance platform at
            AvePoint, and Industrial IoT / MES monitoring dashboards plus an energy management
            mobile app at MIND Technology. Outside work I built Da Nang Smart Tourism end to end.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href={`#${sectionIds.companyProjects}`}>
              View company projects
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </LinkButton>
            <LinkButton href={caseStudyHref} variant="secondary">
              See the case study
            </LinkButton>
            {profile.resumePath && (
              <LinkButton href={withBase(profile.resumePath)} variant="ghost" external>
                <FileText aria-hidden="true" className="size-4" />
                View résumé
              </LinkButton>
            )}
            <SocialLinks className="sm:ml-2" />
          </div>
        </div>

        <aside
          aria-label="Profile facts"
          className="grid gap-6 sm:grid-cols-[11rem_1fr] sm:items-start lg:col-span-4 lg:grid-cols-1"
        >
          <img
            src={portrait.src}
            srcSet={portrait.srcSet}
            sizes="(min-width: 1024px) 240px, 176px"
            width={portrait.width}
            height={portrait.height}
            alt={`Portrait of ${profile.name}`}
            decoding="async"
            className="aspect-[4/5] h-auto w-full max-w-44 rounded-lg border border-border object-cover sm:max-w-none lg:max-w-60 lg:justify-self-center"
          />
          <div>
            <SpecList
              layout="stack"
              items={[
                { label: 'Experience', value: totalExperience },
                { label: 'Based in', value: profile.location },
                {
                  label: 'Education',
                  value: `${education.shortName}, ${education.classification}`,
                },
                {
                  label: 'English',
                  value: languages[0].level,
                },
                {
                  label: 'Status',
                  value: availability.open ? (
                    <Badge variant="status">{availability.label}</Badge>
                  ) : (
                    'Not looking'
                  ),
                },
              ]}
            />
            {availability.open && (
              <p className="mt-3 text-sm text-text-muted">
                {availability.arrangements} · {availability.locations.join(' · ')}
              </p>
            )}
          </div>
        </aside>
      </Container>
    </section>
  );
}
