import { ArrowRight, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { SpecList } from '@/components/ui/SpecList';
import { Badge } from '@/components/ui/Badge';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { profile } from '@/data/profile';
import { totalExperience } from '@/data/experience';
import { sectionIds } from '@/data/navigation';
import { withBase } from '@/lib/with-base';

interface HeroProps {
  /** Case study of the personal project, already resolved through withBase(). */
  caseStudyHref: string;
}

export function Hero({ caseStudyHref }: HeroProps) {
  const { availability } = profile;

  return (
    <section aria-labelledby="hero-heading" className="pt-14 pb-16 lg:pt-24 lg:pb-24">
      <Container>
        <div data-reveal-group>
          <p className="label-mono text-text-muted" data-reveal>
            {profile.title} · React · TypeScript
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-[20ch] text-display font-semibold text-text"
            data-reveal
          >
            I build clear, reliable interfaces for data-heavy web applications.
          </h1>
          <p className="mt-6 max-w-[60ch] text-text-muted" data-reveal>
            Frontend developer in {profile.location} with {totalExperience} of experience building
            enterprise data platforms, manufacturing monitoring dashboards, and an AI-assisted
            travel product I built end to end with React and TypeScript.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal>
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
              <LinkButton href={withBase(profile.resumePath)} variant="ghost" download>
                <Download aria-hidden="true" className="size-4" />
                Download résumé
              </LinkButton>
            )}
            <SocialLinks className="sm:ml-2" />
          </div>
        </div>

        <SpecList
          className="mt-14 lg:mt-20"
          columns={4}
          items={[
            { label: 'Experience', value: totalExperience },
            { label: 'Based in', value: 'Da Nang, VN' },
            { label: 'Focus', value: 'React · TypeScript · Web' },
            {
              label: 'Status',
              value: availability.open ? (
                <span className="flex flex-col items-start gap-2">
                  <Badge variant="status">{availability.label}</Badge>
                  <span className="text-text-muted">
                    {availability.arrangements} · {availability.locations.join(' · ')}
                  </span>
                </span>
              ) : (
                'Not looking'
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
}
