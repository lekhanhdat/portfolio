import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/Tag';
import { experience, totalExperience } from '@/data/experience';
import { sectionIds } from '@/data/navigation';
import { companyProjectPath, type CompanyProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';

export function Experience({ projects }: { projects: readonly CompanyProject[] }) {
  const titleOf = (slug: string) => {
    const project = projects.find((item) => item.id === slug);
    if (!project) throw new Error(`experience.ts links to an unknown project: ${slug}`);
    return project.data.title;
  };

  return (
    <Section
      id={sectionIds.experience}
      index="02"
      label="Experience"
      title="Work experience"
      intro="Two product companies in Da Nang, building enterprise web applications with React and TypeScript."
    >
      <ol className="border-t border-border">
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-4 border-b border-border py-10 lg:grid-cols-12 lg:gap-8"
            data-reveal
          >
            <div className="label-mono text-text-muted lg:col-span-3">
              <p>
                <time>{job.period.start}</time> — <time>{job.period.end}</time>
              </p>
              <p className="mt-1">{job.location}</p>
            </div>

            <div className="lg:col-span-9">
              <h3 className="text-h3 font-semibold">
                {job.company}
                <span className="text-text-muted"> · {job.role}</span>
              </h3>
              <p className="mt-1 text-sm text-text-muted">{job.description}</p>

              <ul className="mt-6 max-w-prose list-disc space-y-2 pl-5 marker:text-border-strong">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <TagList items={job.stack} className="mt-6" />

              <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <span className="label-mono text-text-muted">Projects</span>
                <ul className="flex flex-wrap gap-2" aria-label={`${job.company} projects`}>
                  {job.projects.map((slug) => (
                    <li key={slug}>
                      <a
                        href={withBase(companyProjectPath(slug))}
                        className="inline-flex min-h-9 items-center rounded-md border border-border-control px-3 text-sm transition-colors hover:border-accent hover:text-accent"
                      >
                        {titleOf(slug)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="label-mono mt-6 text-text-muted">
        Total experience · <span className="text-text">{totalExperience}</span>
      </p>
    </Section>
  );
}
