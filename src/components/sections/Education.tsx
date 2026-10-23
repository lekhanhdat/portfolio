import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { education, languages } from '@/data/education';
import { personalProject } from '@/data/projects';
import { sectionIds } from '@/data/navigation';

export function Education() {
  return (
    <Section id={sectionIds.education} index="06" label="Education" title="Education">
      <div className="grid gap-10 lg:grid-cols-12" data-reveal>
        <div className="label-mono text-text-muted lg:col-span-3">
          <p>
            <time>{education.period.start}</time> — <time>{education.period.end}</time>
          </p>
          <p className="mt-1">Da Nang</p>
        </div>

        <div className="lg:col-span-9">
          <h3 className="text-h3 font-semibold">{education.school}</h3>
          <p className="mt-1 text-text-muted">{education.degree}</p>

          <SpecList
            className="mt-6"
            columns={3}
            items={[
              { label: 'Classification', value: education.classification },
              { label: 'GPA', value: education.gpa },
              {
                label: 'Languages',
                value: languages
                  .map((language) => `${language.name} ${language.level}`)
                  .join(' · '),
              },
            ]}
          />

          <h4 className="label-mono mt-8 text-text-muted">Honours</h4>
          <ul className="mt-3 max-w-prose list-disc space-y-2 pl-5 marker:text-border-strong">
            {education.honours.map((honour) => (
              <li key={honour}>{honour}</li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-text-muted">
            Thesis:{' '}
            <a href={`#${sectionIds.personalProject}`} className="link-underline text-text">
              {personalProject.title} →
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
