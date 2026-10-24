import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectIndexTable } from '@/components/projects/ProjectIndexTable';
import { companyProjectPath, type CompanyProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';

/** Two project cards per screen. */
const CARDS_PER_SCREEN = 2;

/** Three screens: intro with the project index, then the projects two by two. */
export function CompanyProjectsIndex({ projects }: { projects: readonly CompanyProject[] }) {
  const screens: CompanyProject[][] = [];
  for (let i = 0; i < projects.length; i += CARDS_PER_SCREEN) {
    screens.push(projects.slice(i, i + CARDS_PER_SCREEN));
  }

  return (
    <>
      <div className="page-section">
        <Container>
          <SectionHeader
            as="h1"
            label="Company projects"
            title="Enterprise and industrial web applications"
            intro="Projects from my work at AvePoint and MIND Technology. Details are generalized to respect confidentiality; diagrams are abstract and do not depict real interfaces."
          />
          <section aria-labelledby="project-index-heading" className="mt-10 lg:mt-12">
            <h2 id="project-index-heading" className="label-mono mb-4 text-text-muted">
              Project index
            </h2>
            <ProjectIndexTable projects={projects} labelledBy="project-index-heading" />
          </section>
        </Container>
      </div>

      {screens.map((group) => (
        <div key={group[0]?.id} className="page-section">
          <Container>
            <ul className="grid gap-6 md:grid-cols-2">
              {group.map((project) => (
                <li key={project.id} className="flex" data-reveal>
                  <ProjectCard
                    project={project}
                    href={withBase(companyProjectPath(project.id))}
                    headingLevel="h2"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </div>
      ))}
    </>
  );
}
