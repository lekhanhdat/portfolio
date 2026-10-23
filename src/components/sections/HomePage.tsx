import { Hero } from './Hero';
import { Summary } from './Summary';
import { Experience } from './Experience';
import { CompanyProjects } from './CompanyProjects';
import { PersonalProject } from './PersonalProject';
import { Skills } from './Skills';
import { Education } from './Education';
import { Contact } from './Contact';
import {
  personalProjectPath,
  type CompanyProject,
  type PersonalProject as Project,
} from '@/lib/projects';
import { withBase } from '@/lib/with-base';
import type { ResponsiveImage, ShowcaseImages } from '@/lib/image';

interface HomePageProps {
  companyProjects: readonly CompanyProject[];
  /** The featured personal project (Home shows one band). */
  personalProject: Project;
  portrait: ResponsiveImage;
  showcase?: ShowcaseImages;
}

/** Section order: PLAN §4.1 (company projects before the personal project). */
export function HomePage({ companyProjects, personalProject, portrait, showcase }: HomePageProps) {
  const caseStudyHref = withBase(personalProjectPath(personalProject.id));

  return (
    <>
      <Hero caseStudyHref={caseStudyHref} />
      <Summary portrait={portrait} />
      <Experience projects={companyProjects} />
      <CompanyProjects projects={companyProjects} />
      <PersonalProject project={personalProject} showcase={showcase} />
      <Skills />
      <Education thesis={{ title: personalProject.data.title, href: caseStudyHref }} />
      <Contact />
    </>
  );
}
