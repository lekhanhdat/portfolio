import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { SpecList } from '@/components/ui/SpecList';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DeviceFrame } from '@/components/projects/DeviceFrame';
import { personalProject as project } from '@/data/projects';
import { sectionIds } from '@/data/navigation';

/** Full-width band on the surface tone so the end-to-end project stands apart. */
export function PersonalProject() {
  const id = sectionIds.personalProject;

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
            label={`Personal project · ${project.platforms.join(' + ')}`}
            title={project.title}
            intro={project.tagline}
            headingId={`${id}-heading`}
          />
          <SpecList
            layout="stack"
            className="mt-8"
            items={[
              { label: 'Role', value: project.myRole },
              { label: 'Surfaces', value: project.surfaces.join(' · ') },
              { label: 'Stack', value: project.stack.join(' · ') },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={project.links.demo} external>
              Live dashboard
            </LinkButton>
            <LinkButton href={project.links.repo} variant="secondary" external>
              <BrandIcon name="github" />
              GitHub
            </LinkButton>
          </div>
          <p className="label-mono mt-3 text-text-muted">Dashboard requires an admin login</p>
        </div>

        <div className="relative pb-10 lg:col-span-7 lg:pb-12" data-reveal>
          <DeviceFrame device="browser">
            <MediaPlaceholder
              id="IMG-02"
              ratio="16/10"
              label="Admin dashboard — locations table with search and filters"
              alt="Travel admin dashboard showing the locations table with search and filters"
            />
          </DeviceFrame>
          <DeviceFrame
            device="phone"
            className="absolute right-4 bottom-0 hidden w-[30%] max-w-44 sm:block"
          >
            <MediaPlaceholder
              id="IMG-03"
              ratio="9/19.5"
              label="Mobile app — home screen"
              alt="Da Nang Smart Tourism app home screen"
            />
          </DeviceFrame>
        </div>
      </Container>
    </section>
  );
}
