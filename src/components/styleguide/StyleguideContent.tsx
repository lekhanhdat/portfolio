import { cn } from '@/lib/cn';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button, LinkButton } from '@/components/ui/Button';
import { Tag, TagList } from '@/components/ui/Tag';
import { Badge } from '@/components/ui/Badge';
import { SpecList } from '@/components/ui/SpecList';
import { Callout } from '@/components/ui/Callout';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { DeviceFrame } from '@/components/projects/DeviceFrame';
import { SchematicFigure } from '@/components/projects/SchematicFigure';

const swatches = [
  { token: '--bg', utility: 'bg-bg' },
  { token: '--surface', utility: 'bg-surface' },
  { token: '--surface-muted', utility: 'bg-surface-muted' },
  { token: '--border', utility: 'bg-border' },
  { token: '--border-strong', utility: 'bg-border-strong' },
  { token: '--border-control', utility: 'bg-border-control' },
  { token: '--text', utility: 'bg-text' },
  { token: '--text-muted', utility: 'bg-text-muted' },
  { token: '--accent', utility: 'bg-accent' },
  { token: '--accent-subtle', utility: 'bg-accent-subtle' },
  { token: '--status-ok', utility: 'bg-status-ok' },
];

const typeScale = [
  { name: 'Display', className: 'text-display font-semibold', sample: 'Le Khanh Dat' },
  { name: 'H2', className: 'text-h2 font-semibold', sample: 'Company projects' },
  { name: 'H3', className: 'text-h3 font-semibold', sample: 'Factory Manufacturing Monitoring' },
  {
    name: 'Body',
    className: 'text-body',
    sample: 'I build clear, reliable interfaces for data-heavy web applications.',
  },
  {
    name: 'Body muted',
    className: 'text-body text-text-muted',
    sample: 'Supporting copy and descriptions.',
  },
  { name: 'Label mono', className: 'label-mono text-text-muted', sample: '01 — Experience' },
];

/** Internal design-system reference rendered by src/pages/styleguide.astro. */
export function StyleguideContent() {
  return (
    <>
      <Container className="py-16 lg:py-24">
        <SectionHeader
          as="h1"
          index="00"
          label="Design system"
          title="Styleguide"
          intro={
            <p>
              Internal reference for the “Spec Sheet” design system. Use the theme toggle in the
              header to check both themes. Not indexed, not linked from the site.
            </p>
          }
        />
      </Container>

      <Section id="tokens" index="01" label="Foundations" title="Color tokens">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map(({ token, utility }) => (
            <li key={token} className="overflow-hidden rounded-md border border-border">
              <div className={cn('h-16 border-b border-border', utility)} />
              <p className="label-mono px-3 py-2 text-text-muted normal-case">{token}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="typography" index="02" label="Foundations" title="Typography">
        <dl className="divide-y divide-border border-y border-border">
          {typeScale.map(({ name, className, sample }) => (
            <div key={name} className="grid gap-2 py-6 md:grid-cols-[10rem_1fr] md:items-baseline">
              <dt className="label-mono text-text-muted">{name}</dt>
              <dd className={className}>{sample}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-prose text-text-muted">
          Inline links use an animated underline:
          <a href="#typography" className="link-underline text-accent">
            example link
          </a>
          . Geist Sans for text,
          <span className="font-mono text-text">Geist Mono</span> for metadata.
        </p>
      </Section>

      <Section id="actions" index="03" label="Components" title="Buttons & links">
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            Primary
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm" variant="secondary">
            <Download aria-hidden="true" className="size-4" />
            Small
          </Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <LinkButton href="mailto:lekhanhdat03@gmail.com">
            <Mail aria-hidden="true" className="size-4" />
            Email link
          </LinkButton>
          <LinkButton href="https://github.com/lekhanhdat" variant="secondary" external>
            <BrandIcon name="github" />
            External link
          </LinkButton>
        </div>
      </Section>

      <Section id="labels" index="04" label="Components" title="Tags & badges">
        <div className="space-y-6">
          <TagList items={['React', 'TypeScript', 'TanStack Query', 'Ant Design', 'Chart.js']} />
          <div className="flex flex-wrap gap-2">
            <Badge>Company project</Badge>
            <Badge variant="accent">Web</Badge>
            <Badge variant="confidential">Confidential</Badge>
            <Badge variant="status">Open to work</Badge>
          </div>
          <p className="text-sm text-text-muted">
            Single tag: <Tag>Astro</Tag>
          </p>
        </div>
      </Section>

      <Section id="specs" index="05" label="Components" title="Spec list & callout">
        <SpecList
          items={[
            { label: 'Experience', value: '1.5+ years' },
            { label: 'Based in', value: 'Da Nang, Vietnam' },
            { label: 'Focus', value: 'React · TypeScript · Web' },
            { label: 'Status', value: <Badge variant="status">Open to work</Badge> },
          ]}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <SpecList
            layout="stack"
            items={[
              { label: 'Company', value: 'MIND Technology' },
              { label: 'My role', value: 'Frontend developer' },
              { label: 'Platform', value: 'Web' },
            ]}
          />
          <Callout variant="confidential" title="Confidentiality note">
            Details are generalized to respect confidentiality. No proprietary code, data, or client
            materials are shown.
          </Callout>
        </div>
      </Section>

      <Section id="media" index="06" label="Components" title="Media placeholders & device frames">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <DeviceFrame device="browser">
            <MediaPlaceholder
              id="IMG-02"
              ratio="16/10"
              label="Admin dashboard — locations table"
              alt="Travel admin dashboard showing the locations table with search and filters"
            />
          </DeviceFrame>
          <DeviceFrame device="phone" className="mx-auto w-44 lg:mx-0">
            <MediaPlaceholder
              id="IMG-03"
              ratio="9/19.5"
              label="App home screen"
              alt="Da Nang Smart Tourism app home screen"
            />
          </DeviceFrame>
        </div>
        <div className="mt-8 w-40">
          <MediaPlaceholder
            id="IMG-01"
            ratio="4/5"
            label="Portrait"
            alt="Portrait of Le Khanh Dat"
          />
        </div>
      </Section>

      <Section id="schematics" index="07" label="Components" title="Schematic figures">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          <div data-reveal>
            <SchematicFigure
              variant="dashboard-grid"
              title="Abstract diagram of a monitoring dashboard: navigation, KPI cards, trend chart and gauge"
              caption="dashboard-grid"
            />
          </div>
          <div data-reveal>
            <SchematicFigure
              variant="data-table-workflow"
              title="Abstract diagram of a data table feeding a multi-step approval workflow"
              caption="data-table-workflow"
            />
          </div>
          <div data-reveal>
            <SchematicFigure
              variant="mobile-web-pair"
              title="Abstract diagram of a web dashboard and a mobile app sharing one backend"
              caption="mobile-web-pair"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
