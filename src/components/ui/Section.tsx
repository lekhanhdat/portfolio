import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';

interface SectionProps {
  id: string;
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Adds a top hairline to separate the section from the previous one. */
  divided?: boolean;
  tone?: 'default' | 'surface';
  className?: string;
  children?: ReactNode;
}

export function Section({
  id,
  index,
  label,
  title,
  intro,
  divided = true,
  tone = 'default',
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        'py-16 lg:py-28',
        divided && 'border-t border-border',
        tone === 'surface' && 'bg-surface',
        className,
      )}
    >
      <Container>
        <SectionHeader
          index={index}
          label={label}
          title={title}
          intro={intro}
          headingId={headingId}
        />
        {children && <div className="mt-10 lg:mt-14">{children}</div>}
      </Container>
    </section>
  );
}
