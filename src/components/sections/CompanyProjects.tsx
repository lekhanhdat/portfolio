import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { companyProjectPath, type CompanyProject } from '@/lib/projects';
import { sectionIds } from '@/data/navigation';
import { withBase } from '@/lib/with-base';

export function CompanyProjects({ projects }: { projects: readonly CompanyProject[] }) {
  return (
    <Section
      id={sectionIds.companyProjects}
      index="02"
      label="Company projects"
      title="Enterprise and industrial web applications"
      intro="Confidential work: details are generalized and diagrams are abstract, not real interfaces."
      fullPage
      action={
        <LinkButton href={withBase('/company-projects/')} variant="secondary">
          All company projects
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </LinkButton>
      }
    >
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <li key={project.id} className="flex" data-reveal>
            <ProjectCard
              project={project}
              href={withBase(companyProjectPath(project.id))}
              compact
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
