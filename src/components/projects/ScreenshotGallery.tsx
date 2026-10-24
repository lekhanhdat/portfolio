import type { ReactNode } from 'react';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import type { GalleryShot } from '@/lib/image';
import { cn } from '@/lib/cn';

interface ScreenshotGalleryProps {
  /** Heading ids of the two screens, used by the table of contents. */
  ids: { dashboard: string; mobile: string };
  items: readonly GalleryShot[];
  /** Shown under the phone screens, on the same screen (the case study's links). */
  footer?: ReactNode;
}

/**
 * Two screens: dashboard captures three to a row, then phone captures six to a row with the
 * footer below. Each capture links to its full-size file instead of a JavaScript lightbox:
 * same result, no runtime.
 */
export function ScreenshotGallery({ ids, items, footer }: ScreenshotGalleryProps) {
  const dashboard = items.filter((item) => item.surface === 'dashboard');
  const mobile = items.filter((item) => item.surface === 'mobile');

  return (
    <>
      {dashboard.length > 0 && (
        <section aria-labelledby={ids.dashboard} className="page-section">
          <GalleryHeading id={ids.dashboard} title="Gallery: web admin dashboard" />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dashboard.map((item, index) => (
              <li key={item.label}>
                <Screen item={item} placeholderId={`IMG-D${index + 1}`} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section
        aria-labelledby={mobile.length > 0 ? ids.mobile : undefined}
        className="page-section"
      >
        {mobile.length > 0 && (
          <>
            <GalleryHeading id={ids.mobile} title="Gallery: mobile app" />
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {mobile.map((item, index) => (
                <li key={item.label}>
                  <Screen item={item} placeholderId={`IMG-M${index + 1}`} />
                </li>
              ))}
            </ul>
          </>
        )}
        {footer && <div className={cn(mobile.length > 0 && 'mt-10')}>{footer}</div>}
      </section>
    </>
  );
}

function GalleryHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 id={id} className="text-h3 font-semibold">
        {title}
      </h2>
      <p className="text-sm text-text-muted">Select a screen to open it at full size.</p>
    </div>
  );
}

function Screen({ item, placeholderId }: { item: GalleryShot; placeholderId: string }) {
  const isPhone = item.surface === 'mobile';
  const { image } = item;

  return (
    <figure>
      {image ? (
        <a
          href={image.original}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'block overflow-hidden border border-border bg-surface transition-colors hover:border-accent',
            isPhone ? 'rounded-xl' : 'rounded-md',
          )}
        >
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={
              isPhone
                ? '(min-width: 1024px) 180px, (min-width: 640px) 30vw, 45vw'
                : '(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'
            }
            width={image.width}
            height={image.height}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
          <span className="sr-only"> (opens full size in a new tab)</span>
        </a>
      ) : (
        <MediaPlaceholder
          id={placeholderId}
          ratio={isPhone ? '9/19.5' : '16/10'}
          label={item.label}
          alt={item.alt}
        />
      )}
      <figcaption className="label-mono mt-2 text-text-muted">{item.label}</figcaption>
    </figure>
  );
}
