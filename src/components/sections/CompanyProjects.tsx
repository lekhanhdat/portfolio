import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { companyProjects } from '@/data/projects';
import { sectionIds } from '@/data/navigation';

export function CompanyProjects() {
  return (
    <Section
      id={sectionIds.companyProjects}
      index="03"
      label="Company projects"
      title="Enterprise and industrial web applications"
      intro="Details are generalized to respect confidentiality. Diagrams are abstract and do not depict real interfaces."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {companyProjects.map((project) => (
          <li key={project.slug} className="flex" data-reveal>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
