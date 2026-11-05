import { ProjectVideo } from './ProjectVideo';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import type { ShowcaseMedia } from '@/lib/image';
import { cn } from '@/lib/cn';

interface ProjectShowcaseProps {
  /** Real media; a placeholder renders until it exists. */
  media?: ShowcaseMedia;
  className?: string;
}

/**
 * The project's walkthrough video at full width (IMG-02). Shared by the Home band, the
 * personal index and the case study header.
 */
export function ProjectShowcase({ media, className }: ProjectShowcaseProps) {
  return (
    // z-10 lifts the player above stretched card links (personal projects index).
    <div
      className={cn(
        'relative z-10 overflow-hidden rounded-lg border border-border-strong bg-surface shadow-popover',
        className,
      )}
    >
      {media ? (
        <ProjectVideo video={media.video} />
      ) : (
        <MediaPlaceholder
          id="IMG-02"
          ratio="16/9"
          label="Walkthrough video"
          alt="Da Nang Smart Tourism walkthrough video"
        />
      )}
    </div>
  );
}
