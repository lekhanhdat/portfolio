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

interface HomePageProps {
  companyProjects: readonly CompanyProject[];
  /** The featured personal project (Home shows one band). */
  personalProject: Project;
}

/** Section order: PLAN §4.1 (company projects before the personal project). */
export function HomePage({ companyProjects, personalProject }: HomePageProps) {
  const caseStudyHref = withBase(personalProjectPath(personalProject.id));

  return (
    <>
      <Hero caseStudyHref={caseStudyHref} />
      <Summary />
      <Experience projects={companyProjects} />
      <CompanyProjects projects={companyProjects} />
      <PersonalProject project={personalProject} />
      <Skills />
      <Education thesis={{ title: personalProject.data.title, href: caseStudyHref }} />
      <Contact />
    </>
  );
}
