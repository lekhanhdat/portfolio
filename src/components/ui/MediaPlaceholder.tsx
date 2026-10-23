import { cn } from '@/lib/cn';

const ratios = {
  '16/10': 'aspect-[16/10]',
  '16/9': 'aspect-video',
  '4/5': 'aspect-[4/5]',
  '9/19.5': 'aspect-[9/19.5]',
  '1200/630': 'aspect-[1200/630]',
} as const;

export type MediaRatio = keyof typeof ratios;

interface MediaPlaceholderProps {
  ratio: MediaRatio;
  /** Visible description of the pending asset, e.g. "Admin dashboard — locations table". */
  label: string;
  /** Final alt text planned for the real image; announced to screen readers now. */
  alt: string;
  /** Asset id from PLAN §4.5, e.g. "IMG-02". */
  id?: string;
  className?: string;
}

/**
 * Neutral stand-in for media that has not been supplied yet.
 * Deliberately plain: it must never look like a real screenshot (PLAN §4.5, D16).
 */
export function MediaPlaceholder({ ratio, label, alt, id, className }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden rounded-md border border-dashed border-border-strong bg-surface-muted p-4',
        ratios[ratio],
        className,
      )}
    >
      <div aria-hidden="true" className="max-w-[28ch] text-center">
        <p className="label-mono text-text-muted">
          {['Image', id, ratio.replace('/', ':')].filter(Boolean).join(' · ')}
        </p>
        <p className="mt-2 text-sm text-text-muted">{label}</p>
      </div>
    </div>
  );
}
