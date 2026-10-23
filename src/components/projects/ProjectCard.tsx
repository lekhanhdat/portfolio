import { ArrowRight } from 'lucide-react';
import { SchematicFigure } from './SchematicFigure';
import { Badge } from '@/components/ui/Badge';
import { TagList } from '@/components/ui/Tag';
import type { CompanyProject } from '@/lib/projects';
import { cn } from '@/lib/cn';

/** Cards show the core of the stack; the full list lives on the brief. */
const CARD_STACK_SIZE = 5;
const COMPACT_STACK_SIZE = 3;

interface ProjectCardProps {
  project: CompanyProject;
  /** Brief page, already resolved through withBase(). */
  href: string;
  /** h3 under a section heading (Home), h2 directly under the page h1 (index page). */
  headingLevel?: 'h2' | 'h3';
  /** Home grid: the diagram only shows from xl, where four cards fit in one row. */
  compact?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  href,
  headingLevel = 'h3',
  compact = false,
  className,
}: ProjectCardProps) {
  const { data } = project;
  const Heading = headingLevel;
  const headingId = `project-${project.id}-title`;

  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={headingId}
      className={cn(
        'group relative flex w-full flex-col rounded-lg border border-border bg-surface p-4 transition-colors duration-200 focus-within:border-accent hover:border-border-strong sm:p-5',
        className,
      )}
    >
      <SchematicFigure
        variant={data.schematic}
        title={`Abstract diagram of ${data.title}`}
        className={cn(compact && 'hidden xl:block')}
      />
      <p
        className={cn(
          'label-mono flex flex-wrap gap-x-2 text-text-muted',
          compact ? 'xl:mt-5' : 'mt-5',
        )}
      >
        <span>{data.company}</span>
        <span aria-hidden="true">·</span>
        <span>{data.platforms.join(' + ')}</span>
      </p>
      <Heading
        id={headingId}
        className={cn('mt-2 font-semibold', compact ? 'text-lg leading-snug' : 'text-h3')}
      >
        {/* Stretched link: the whole card is clickable with a single tab stop. */}
        <a
          href={href}
          className="transition-colors group-hover:text-accent after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none"
        >
          {data.title}
        </a>
      </Heading>
      <p className="label-mono mt-1 text-text-muted">Role · {data.myRole}</p>
      <p className="mt-3 text-sm text-text-muted">{data.summary}</p>
      <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-3 pt-5">
        <TagList items={data.stack.slice(0, compact ? COMPACT_STACK_SIZE : CARD_STACK_SIZE)} />
        {/* Compact cards say it once in the section intro instead. */}
        {!compact && <Badge variant="confidential">Confidential</Badge>}
      </div>
      <p
        aria-hidden="true"
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent"
      >
        Read brief
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </p>
    </article>
  );
}
