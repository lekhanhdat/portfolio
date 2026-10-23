import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { profile } from '@/data/profile';
import { totalExperience } from '@/data/experience';
import { education, languages } from '@/data/education';
import { sectionIds } from '@/data/navigation';
import type { ResponsiveImage } from '@/lib/image';

const howIWork = [
  'Build typed, reusable components and keep existing behavior intact when refactoring.',
  'Design for the unhappy paths: loading, empty, error and disabled states, retries and cancelled requests.',
  'Work closely with product, QA and backend engineers to clarify requirements, review code and debug across environments.',
] as const;

export function Summary({ portrait }: { portrait: ResponsiveImage }) {
  return (
    <Section
      id={sectionIds.summary}
      index="01"
      label="Summary"
      title="Frontend engineer for data-heavy products"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7" data-reveal>
          <p>
            I&apos;m a frontend engineer with {totalExperience} of experience building web
            applications with React and TypeScript. At AvePoint I worked on an enterprise data
            governance and records management platform; at MIND Technology I built manufacturing
            monitoring dashboards for Industrial IoT and MES products, and a mobile app for a
            factory energy management system.
          </p>
          <p className="text-text-muted">
            Most of my work involves data-heavy interfaces: server-side tables, filters and
            pagination, business workflows such as approvals and permissions, real-time charts, and
            REST API integration. Outside work, I built Da Nang Smart Tourism end to end — a web
            admin dashboard, a mobile app, and the APIs and AI services behind them.
          </p>

          <div className="pt-6">
            <h3 className="label-mono text-text-muted">How I work</h3>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {howIWork.map((item, index) => (
                <li key={item} className="flex gap-4 py-3 text-sm">
                  <span aria-hidden="true" className="label-mono pt-0.5 text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside
          aria-label="Profile facts"
          className="grid gap-8 sm:grid-cols-[10rem_1fr] lg:col-span-4 lg:col-start-9 lg:grid-cols-1"
          data-reveal
        >
          <img
            src={portrait.src}
            srcSet={portrait.srcSet}
            sizes="(min-width: 1024px) 320px, 160px"
            width={portrait.width}
            height={portrait.height}
            alt={`Portrait of ${profile.name}`}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] h-auto w-full max-w-40 rounded-md border border-border object-cover sm:max-w-none lg:max-w-80"
          />
          <SpecList
            layout="stack"
            items={[
              { label: 'Experience', value: totalExperience },
              { label: 'Education', value: `${education.shortName}, ${education.classification}` },
              { label: 'English', value: languages[0].level },
              { label: 'Open to', value: 'Onsite / Remote' },
            ]}
          />
        </aside>
      </div>
    </Section>
  );
}
