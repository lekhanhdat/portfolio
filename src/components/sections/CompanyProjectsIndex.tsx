import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectIndexTable } from '@/components/projects/ProjectIndexTable';
import { companyProjectPath, type CompanyProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';

export function CompanyProjectsIndex({ projects }: { projects: readonly CompanyProject[] }) {
  return (
    <Container className="py-14 lg:py-24">
      <SectionHeader
        as="h1"
        label="Company projects"
        title="Enterprise and industrial web applications"
        intro="Projects from my work at AvePoint and MIND Technology. Details are generalized to respect confidentiality; diagrams are abstract and do not depict real interfaces."
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
        {projects.map((project) => (
          <li key={project.id} className="flex" data-reveal>
            <ProjectCard
              project={project}
              href={withBase(companyProjectPath(project.id))}
              headingLevel="h2"
            />
          </li>
        ))}
      </ul>

      <section aria-labelledby="project-index-heading" className="mt-16 lg:mt-24">
        <h2 id="project-index-heading" className="label-mono mb-4 text-text-muted">
          Project index
        </h2>
        <ProjectIndexTable projects={projects} labelledBy="project-index-heading" />
      </section>
    </Container>
  );
}
