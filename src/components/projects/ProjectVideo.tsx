import type { ShowcaseVideo } from '@/lib/image';
import { withBase } from '@/lib/with-base';
import { cn } from '@/lib/cn';

interface ProjectVideoProps {
  video: ShowcaseVideo;
  className?: string;
}

/**
 * Native <video> with controls: no player library and no island. preload="none" keeps the
 * ~24 MB file off the network until the visitor presses play; the poster holds the 16:9 space.
 */
export function ProjectVideo({ video, className }: ProjectVideoProps) {
  const { src, poster, title, captions, subtitles } = video;

  return (
    <video
      controls
      playsInline
      preload="none"
      poster={poster}
      width={1920}
      height={1080}
      aria-label={title}
      className={cn('block aspect-video h-auto w-full bg-surface-muted', className)}
    >
      <source src={withBase(src)} type="video/mp4" />
      {subtitles.map((track) => (
        <track
          key={track.srcLang}
          kind="subtitles"
          src={withBase(track.src)}
          srcLang={track.srcLang}
          label={track.label}
          default={track.default}
        />
      ))}
      <track
        kind="captions"
        src={withBase(captions.src)}
        srcLang={captions.srcLang}
        label={captions.label}
        default={captions.default}
      />
    </video>
  );
}
