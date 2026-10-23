import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';

/**
 * One Home "slide": at least one viewport tall below the 4rem header, content centered,
 * snapping to its top (snap behavior: global.css, html[data-snap]).
 */
export const fullPageSectionClasses =
  'flex min-h-[calc(100svh-4rem)] snap-start flex-col justify-center py-10 lg:py-8';

interface SectionProps {
  id: string;
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Link or button shown beside the header from lg, below it on smaller screens. */
  action?: ReactNode;
  /** Adds a top hairline to separate the section from the previous one. */
  divided?: boolean;
  tone?: 'default' | 'surface';
  /** Full-viewport Home section (see fullPageSectionClasses). */
  fullPage?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Section({
  id,
  index,
  label,
  title,
  intro,
  action,
  divided = true,
  tone = 'default',
  fullPage = false,
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        fullPage ? fullPageSectionClasses : 'py-16 lg:py-28',
        divided && 'border-t border-border',
        tone === 'surface' && 'bg-surface',
        className,
      )}
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            index={index}
            label={label}
            title={title}
            intro={intro}
            headingId={headingId}
          />
          {action}
        </div>
        {children && <div className={fullPage ? 'mt-6 lg:mt-7' : 'mt-10 lg:mt-14'}>{children}</div>}
      </Container>
    </section>
  );
}
