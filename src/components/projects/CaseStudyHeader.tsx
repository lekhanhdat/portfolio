import { BackLink } from './BackLink';
import { ProjectShowcase } from './ProjectShowcase';
import { Badge } from '@/components/ui/Badge';
import { SpecList } from '@/components/ui/SpecList';
import type { PersonalProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';
import type { ShowcaseImages } from '@/lib/image';

interface CaseStudyHeaderProps {
  project: PersonalProject;
  showcase?: ShowcaseImages;
}

/** Top of the personal project case study (PLAN §5.3, row 1). No period field by design. */
export function CaseStudyHeader({ project, showcase }: CaseStudyHeaderProps) {
  const { data } = project;

  return (
    <header className="grid gap-12 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-6">
        <BackLink href={withBase('/personal-projects/')} label="Personal projects" />
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="accent">Personal project</Badge>
          {data.platforms.map((platform) => (
            <Badge key={platform}>{platform}</Badge>
          ))}
        </div>
        <h1 className="mt-5 text-display font-semibold">{data.title}</h1>
        <p className="mt-5 max-w-prose text-text-muted">{data.tagline}</p>
      </div>
      <ProjectShowcase images={showcase} eager className="lg:col-span-6" />
      <SpecList
        className="lg:col-span-12"
        columns={3}
        items={[
          { label: 'Role', value: data.myRole },
          { label: 'Surfaces', value: data.surfaces.map((surface) => surface.name).join(' · ') },
          { label: 'Stack', value: data.stack.join(' · ') },
        ]}
      />
    </header>
  );
}
