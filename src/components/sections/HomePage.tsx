import { Hero } from './Hero';
import { Summary } from './Summary';
import { Experience } from './Experience';
import { CompanyProjects } from './CompanyProjects';
import { PersonalProject } from './PersonalProject';
import { Skills } from './Skills';
import { Education } from './Education';
import { Contact } from './Contact';

/** Section order: PLAN §4.1 (company projects before the personal project). */
export function HomePage() {
  return (
    <>
      <Hero />
      <Summary />
      <Experience />
      <CompanyProjects />
      <PersonalProject />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
