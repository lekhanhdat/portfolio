import { Copy, Download, FileText, Mail } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { LinkButton, buttonClasses } from '@/components/ui/Button';
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
      index="06"
      label={availability.open ? availability.label : 'Contact'}
      title={availability.open ? `Open to ${profile.title} roles` : 'Get in touch'}
      intro={
        availability.open
          ? `${availability.arrangements} | ${availability.locations.join(' · ')}`
          : undefined
      }
      fullPage
    >
      <div className="grid gap-12 lg:grid-cols-12" data-reveal>
        <div className="lg:col-span-7">
          <p className="label-mono text-text-muted">Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-2 inline-block text-h3 font-medium break-all"
          >
            {profile.email}
          </a>

          {/* "Email me" opens the default mail app; copying is a separate, optional action. */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <LinkButton href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" className="size-4" />
              Email me
            </LinkButton>
            {/* Needs the Clipboard API, so it only appears once scripts run (html.js). */}
            <button
              type="button"
              data-copy-email={profile.email}
              className={buttonClasses({
                variant: 'secondary',
                className: 'hidden in-[.js]:inline-flex',
              })}
            >
              <Copy aria-hidden="true" className="size-4" />
              <span data-copy-email-label>Copy address</span>
            </button>
            <span data-copy-email-status role="status" className="sr-only" />
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="label-mono text-text-muted">Profiles &amp; résumé</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <LinkButton href={profile.links.linkedin} variant="secondary" size="sm" external>
                <BrandIcon name="linkedin" />
                LinkedIn
              </LinkButton>
              <LinkButton href={profile.links.github} variant="secondary" size="sm" external>
                <BrandIcon name="github" />
                GitHub
              </LinkButton>
              {profile.resumePath && (
                <>
                  <LinkButton
                    href={withBase(profile.resumePath)}
                    variant="secondary"
                    size="sm"
                    external
                  >
                    <FileText aria-hidden="true" className="size-4" />
                    View résumé
                  </LinkButton>
                  <LinkButton
                    href={withBase(profile.resumePath)}
                    variant="secondary"
                    size="sm"
                    download={profile.resumeFileName}
                  >
                    <Download aria-hidden="true" className="size-4" />
                    Download PDF
                  </LinkButton>
                </>
              )}
            </div>
          </div>
        </div>

        <SpecList
          layout="stack"
          className="self-start lg:col-span-4 lg:col-start-9"
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
