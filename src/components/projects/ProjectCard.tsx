import { ArrowRight } from 'lucide-react';
import { SchematicFigure } from './SchematicFigure';
import { Badge } from '@/components/ui/Badge';
import { TagList } from '@/components/ui/Tag';
import type { CompanyProject } from '@/data/projects';

interface ProjectCardProps {
  project: CompanyProject;
  /** Detail page; omitted until the brief exists (Phase 4). */
  href?: string;
}

export function ProjectCard({ project, href }: ProjectCardProps) {
  const headingId = `project-${project.slug}-title`;

  return (
    <article
      id={`project-${project.slug}`}
      aria-labelledby={headingId}
      className="group relative flex w-full flex-col rounded-lg border border-border bg-surface p-4 transition-colors duration-200 hover:border-border-strong sm:p-5"
    >
      <SchematicFigure variant={project.schematic} title={`Abstract diagram of ${project.title}`} />
      <p className="label-mono mt-5 flex flex-wrap gap-x-2 text-text-muted">
        <span>{project.company}</span>
        <span aria-hidden="true">·</span>
        <span>{project.platforms.join(' + ')}</span>
      </p>
      <h3 id={headingId} className="mt-2 text-h3 font-semibold">
        {href ? (
          <a
            href={href}
            className="after:absolute after:inset-0 after:rounded-lg hover:text-accent focus-visible:outline-none"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="label-mono mt-1 text-text-muted">Role · {project.myRole}</p>
      <p className="mt-3 text-sm text-text-muted">{project.summary}</p>
      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
        <TagList items={project.stack} />
        <Badge variant="confidential">Confidential</Badge>
      </div>
      {href && (
        <p
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent"
          aria-hidden="true"
        >
          Read brief
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </p>
      )}
    </article>
  );
}
