import { Copy, Download, FileText, Mail } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { SpecList } from '@/components/ui/SpecList';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { profile } from '@/data/profile';
import { languages } from '@/data/education';
import { sectionIds } from '@/data/navigation';
import { withBase } from '@/lib/with-base';

export function Contact() {
  const { availability } = profile;

  return (
    <Section
      id={sectionIds.contact}
      index="07"
      label={availability.open ? availability.label : 'Contact'}
      title={availability.open ? `Open to ${profile.title} roles` : 'Get in touch'}
      intro={
        availability.open
          ? `${availability.arrangements} · ${availability.locations.join(' · ')}`
          : undefined
      }
    >
      <div className="grid gap-12 lg:grid-cols-12" data-reveal>
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-h3 font-medium break-all"
            >
              {profile.email}
            </a>
            {/* Needs the Clipboard API, so it only appears once scripts run (html.js). */}
            <button
              type="button"
              data-copy-email={profile.email}
              className="hidden min-h-9 items-center gap-2 rounded-md border border-border-control px-3 text-[0.8125rem] font-medium transition-colors hover:border-accent hover:text-accent in-[.js]:inline-flex"
            >
              <Copy aria-hidden="true" className="size-4" />
              <span data-copy-email-label>Copy</span>
            </button>
            <span data-copy-email-status role="status" className="sr-only" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" className="size-4" />
              Email me
            </LinkButton>
            <LinkButton href={profile.links.linkedin} variant="secondary" external>
              <BrandIcon name="linkedin" />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.links.github} variant="secondary" external>
              <BrandIcon name="github" />
              GitHub
            </LinkButton>
            {profile.resumePath && (
              <>
                <LinkButton href={withBase(profile.resumePath)} variant="secondary" external>
                  <FileText aria-hidden="true" className="size-4" />
                  View résumé
                </LinkButton>
                <LinkButton
                  href={withBase(profile.resumePath)}
                  variant="secondary"
                  download={profile.resumeFileName}
                >
                  <Download aria-hidden="true" className="size-4" />
                  Download PDF
                </LinkButton>
              </>
            )}
          </div>
        </div>

        <SpecList
          layout="stack"
          className="lg:col-span-4 lg:col-start-9"
          items={[
            { label: 'Based in', value: profile.location },
            ...languages.map((language) => ({
              label: language.name,
              value: language.detail ? `${language.level} · ${language.detail}` : language.level,
            })),
          ]}
        />
      </div>
    </Section>
  );
}
