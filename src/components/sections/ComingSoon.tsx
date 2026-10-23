import { Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { SpecList } from '@/components/ui/SpecList';
import { Badge } from '@/components/ui/Badge';
import { profile } from '@/data/profile';

/** Temporary home page until the real sections land in Phase 3. */
export function ComingSoon() {
  const { availability } = profile;

  return (
    <Container className="flex min-h-[calc(100dvh-4rem-8.5rem)] flex-col justify-center py-20">
      <div className="max-w-prose" data-reveal-group>
        <p className="label-mono text-text-muted" data-reveal>
          {profile.title} · React · TypeScript
        </p>
        <h1 className="mt-4 text-display font-semibold" data-reveal>
          {profile.name}
        </h1>
        <p className="mt-6 text-text-muted" data-reveal>
          My portfolio is being built. In the meantime, you can reach me through the links below.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal>
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
        </div>
      </div>
      <SpecList
        className="mt-16"
        columns={3}
        items={[
          { label: 'Based in', value: profile.location },
          { label: 'Focus', value: 'React · TypeScript · Web' },
          {
            label: 'Status',
            value: availability.open ? (
              <Badge variant="status">{availability.label}</Badge>
            ) : (
              'Not looking'
            ),
          },
        ]}
      />
    </Container>
  );
}
