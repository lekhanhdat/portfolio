import { Mail } from 'lucide-react';
import { BrandIcon } from '@/components/ui/BrandIcon';
import { profile } from '@/data/profile';
import { cn } from '@/lib/cn';

const iconLink =
  'inline-flex size-11 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-muted hover:text-text';

/** Icon-only GitHub / LinkedIn / Email links with accessible names. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul aria-label="Profiles" className={cn('flex items-center gap-1', className)}>
      <li>
        <a
          href={profile.links.github}
          className={iconLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
        >
          <BrandIcon name="github" size={18} />
        </a>
      </li>
      <li>
        <a
          href={profile.links.linkedin}
          className={iconLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <BrandIcon name="linkedin" size={18} />
        </a>
      </li>
      <li>
        <a
          href={`mailto:${profile.email}`}
          className={iconLink}
          aria-label={`Email ${profile.email}`}
        >
          <Mail aria-hidden="true" className="size-[18px]" />
        </a>
      </li>
    </ul>
  );
}
