import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { SpecList } from '@/components/ui/SpecList';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectShowcase } from '@/components/projects/ProjectShowcase';
import { personalProjectPath, type PersonalProject as Project } from '@/lib/projects';
import { sectionIds } from '@/data/navigation';
import { withBase } from '@/lib/with-base';

/** Full-width band on the surface tone so the end-to-end project stands apart. */
export function PersonalProject({ project }: { project: Project }) {
  const id = sectionIds.personalProject;
  const { data } = project;
  const [mainRepo] = data.links.repos;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-y border-border bg-surface py-16 lg:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5" data-reveal>
          <SectionHeader
            index="04"
            label={`Personal project · ${data.platforms.join(' + ')}`}
            title={data.title}
            intro={data.tagline}
            headingId={`${id}-heading`}
          />
          <SpecList
            layout="stack"
            className="mt-8"
            items={[
              { label: 'Role', value: data.myRole },
              { label: 'Surfaces', value: data.surfaces.map((s) => s.name).join(' · ') },
              { label: 'Stack', value: data.stack.join(' · ') },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={withBase(personalProjectPath(project.id))}>
              Read the case study
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </LinkButton>
            {data.links.demo && (
              <LinkButton href={data.links.demo.url} variant="secondary" external>
                {data.links.demo.label}
              </LinkButton>
            )}
            {mainRepo && (
              <LinkButton href={mainRepo.url} variant="secondary" external>
                <BrandIcon name="github" />
                GitHub
              </LinkButton>
            )}
          </div>
          {data.links.demo?.note && (
            <p className="label-mono mt-3 text-text-muted">
              {data.links.demo.label} · {data.links.demo.note}
            </p>
          )}
        </div>

        <ProjectShowcase className="lg:col-span-7" />
      </Container>
    </section>
  );
}
