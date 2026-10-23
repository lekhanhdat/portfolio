import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/Tag';
import { skillGroups } from '@/data/skills';
import { sectionIds } from '@/data/navigation';

export function Skills() {
  return (
    <Section
      id={sectionIds.skills}
      index="04"
      label="Skills"
      title="Technical skills"
      divided={false}
      fullPage
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <li key={group.title} className="bg-bg p-6" data-reveal>
            <h3 className="label-mono text-text-muted">{group.title}</h3>
            <TagList items={group.items} label={group.title} className="mt-4" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
