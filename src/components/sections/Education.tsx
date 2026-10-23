import { Section } from '@/components/ui/Section';
import { SpecList } from '@/components/ui/SpecList';
import { education, languages } from '@/data/education';
import { sectionIds } from '@/data/navigation';
import type { ResponsiveImage } from '@/lib/image';

export interface GraduationPhoto {
  image: ResponsiveImage;
  alt: string;
}

interface EducationProps {
  /** The thesis grew into the personal project; links to its case study. */
  thesis: { title: string; href: string };
  photos: readonly GraduationPhoto[];
}

export function Education({ thesis, photos }: EducationProps) {
  return (
    <Section id={sectionIds.education} index="05" label="Education" title="Education" fullPage>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7" data-reveal>
          <p className="label-mono text-text-muted">
            <time>{education.period.start}</time> — <time>{education.period.end}</time> · Da Nang
          </p>
          <h3 className="mt-2 text-h3 font-semibold">{education.school}</h3>
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

          <h4 className="label-mono mt-6 text-text-muted">Honours</h4>
          <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-sm marker:text-border-strong">
            {education.honours.map((honour) => (
              <li key={honour}>{honour}</li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-text-muted">
            Thesis:{' '}
            <a href={thesis.href} className="link-underline text-text">
              {thesis.title} →
            </a>
          </p>
        </div>

        {photos.length > 0 && (
          <figure className="w-full lg:col-span-5 lg:max-w-[23rem] lg:justify-self-end" data-reveal>
            {/* Landscape photos, never cropped: side by side on narrow screens, stacked from lg. */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {photos.map((photo) => (
                <a
                  key={photo.image.src}
                  href={photo.image.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-border bg-surface-muted"
                >
                  <img
                    src={photo.image.src}
                    srcSet={photo.image.srcSet}
                    sizes="(min-width: 1024px) 368px, 50vw"
                    width={photo.image.width}
                    height={photo.image.height}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full transition-transform duration-300 ease-out-soft hover:scale-[1.02]"
                  />
                  <span className="sr-only"> (opens the full photo in a new tab)</span>
                </a>
              ))}
            </div>
            <figcaption className="label-mono mt-3 text-text-muted">
              Graduation · {education.shortName}
            </figcaption>
          </figure>
        )}
      </div>
    </Section>
  );
}
