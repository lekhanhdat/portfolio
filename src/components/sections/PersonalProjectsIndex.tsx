import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SpecList } from '@/components/ui/SpecList';
import { ProjectShowcase } from '@/components/projects/ProjectShowcase';
import { personalProjectPath, type PersonalProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';
import type { ShowcaseImages } from '@/lib/image';

interface PersonalProjectsIndexProps {
  projects: readonly PersonalProject[];
  /** Showcase images by project id. */
  showcases: Readonly<Record<string, ShowcaseImages | undefined>>;
}

export function PersonalProjectsIndex({ projects, showcases }: PersonalProjectsIndexProps) {
  return (
    <Container className="py-14 lg:py-24">
      <SectionHeader
        as="h1"
        label="Personal projects"
        title="Products I built end to end"
        intro="Side projects where I own the whole product: interface, APIs and infrastructure."
      />

      <ul className="mt-12 space-y-8 lg:mt-16">
        {projects.map((project, index) => {
          const { data } = project;
          const href = withBase(personalProjectPath(project.id));
          const headingId = `project-${project.id}-title`;
          return (
            <li key={project.id} data-reveal>
              <article
                aria-labelledby={headingId}
                className="group relative grid gap-10 rounded-lg border border-border bg-surface p-5 transition-colors duration-200 focus-within:border-accent hover:border-border-strong sm:p-8 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-5">
                  <p className="label-mono text-text-muted">{data.platforms.join(' + ')}</p>
                  <h2 id={headingId} className="mt-2 text-h2 font-semibold">
                    {/* Stretched link: the whole card is clickable with a single tab stop. */}
                    <a
                      href={href}
                      className="transition-colors group-hover:text-accent after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none"
                    >
                      {data.title}
                    </a>
                  </h2>
                  <p className="mt-4 text-text-muted">{data.tagline}</p>
                  <SpecList
                    layout="stack"
                    className="mt-6"
                    items={[
                      { label: 'Role', value: data.myRole },
                      { label: 'Domain', value: data.domain },
                    ]}
                  />
                  <p
                    aria-hidden="true"
                    className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent"
                  >
                    Read the case study
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </p>
                </div>
                <ProjectShowcase
                  images={showcases[project.id]}
                  eager={index === 0}
                  className="lg:col-span-7"
                />
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
