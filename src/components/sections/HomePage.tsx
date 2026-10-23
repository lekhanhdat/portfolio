import { Hero } from './Hero';
import { Experience } from './Experience';
import { CompanyProjects } from './CompanyProjects';
import { PersonalProject } from './PersonalProject';
import { Skills } from './Skills';
import { Education, type GraduationPhoto } from './Education';
import { SectionCatalog } from '@/components/layout/SectionCatalog';
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
  graduationPhotos: readonly GraduationPhoto[];
}

/** Section order: PLAN §4.1 (company projects before the personal project). */
export function HomePage({
  companyProjects,
  personalProject,
  portrait,
  showcase,
  graduationPhotos,
}: HomePageProps) {
  const caseStudyHref = withBase(personalProjectPath(personalProject.id));

  return (
    <>
      <SectionCatalog />
      <Hero caseStudyHref={caseStudyHref} portrait={portrait} />
      <Experience projects={companyProjects} />
      <CompanyProjects projects={companyProjects} />
      <PersonalProject project={personalProject} showcase={showcase} />
      <Skills />
      <Education
        thesis={{ title: personalProject.data.title, href: caseStudyHref }}
        photos={graduationPhotos}
      />
      <Contact />
    </>
  );
}
