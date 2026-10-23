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
      index="01"
      label="Experience"
      title="Work experience"
      fullPage
      action={
        <p className="label-mono text-text-muted">
          Total experience · <span className="text-text">{totalExperience}</span>
        </p>
      }
    >
      {/* Cells over a border-colored background, same panel language as SpecList. */}
      <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
        {experience.map((job) => (
          <li key={job.company} className="flex flex-col bg-surface p-5 sm:p-6" data-reveal>
            <p className="label-mono text-text-muted">
              <time>{job.period.start}</time> — <time>{job.period.end}</time> · {job.location}
            </p>

            <div className="mt-3">
              <h3 className="text-h3 font-semibold">{job.company}</h3>
              <p className="mt-1 text-sm text-text-muted">
                <span className="font-medium text-text">{job.role}</span> · {job.description}
              </p>

              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[0.9375rem] marker:text-border-strong">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <TagList items={job.stack} className="mt-4" />

              <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2">
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
    </Section>
  );
}
