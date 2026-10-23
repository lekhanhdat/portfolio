import { BackLink } from './BackLink';
import { SchematicFigure } from './SchematicFigure';
import { Badge } from '@/components/ui/Badge';
import { SpecList } from '@/components/ui/SpecList';
import type { CompanyProject } from '@/lib/projects';
import { withBase } from '@/lib/with-base';

/** Top of a company project brief (PLAN §4.4 A). No period: projects never show dates. */
export function BriefHeader({ project }: { project: CompanyProject }) {
  const { data } = project;

  return (
    <header>
      <BackLink href={withBase('/company-projects/')} label="Company projects" />
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge>{data.company}</Badge>
        <Badge>{data.platforms.join(' + ')}</Badge>
        <Badge variant="confidential">Confidential</Badge>
      </div>
      <h1 className="mt-5 max-w-[24ch] text-display font-semibold">{data.title}</h1>
      <p className="mt-5 max-w-prose text-text-muted">{data.summary}</p>
      <SpecList
        className="mt-10"
        columns={4}
        items={[
          { label: 'Company', value: data.company },
          { label: 'My role', value: data.myRole },
          { label: 'Domain', value: data.domain },
          { label: 'Platform', value: data.platforms.join(' + ') },
        ]}
      />
      <SchematicFigure
        variant={data.schematic}
        title={`Abstract diagram of ${data.title}`}
        caption="Abstract diagram — not a screenshot of the product"
        className="mt-10 max-w-prose"
      />
    </header>
  );
}
