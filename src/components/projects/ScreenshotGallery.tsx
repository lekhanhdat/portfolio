import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import type { GalleryShot } from '@/lib/image';
import { cn } from '@/lib/cn';

interface ScreenshotGalleryProps {
  id: string;
  items: readonly GalleryShot[];
}

/**
 * Dashboard screens in a two-column grid, phone screens in rows of up to six. Each capture
 * links to its full-size file instead of a JavaScript lightbox: same result, no runtime.
 */
export function ScreenshotGallery({ id, items }: ScreenshotGalleryProps) {
  const dashboard = items.filter((item) => item.surface === 'dashboard');
  const mobile = items.filter((item) => item.surface === 'mobile');

  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-h3 font-semibold">
        Gallery
      </h2>
      <p className="mt-2 text-sm text-text-muted">Select a screen to open it at full size.</p>

      {dashboard.length > 0 && (
        <>
          <h3 className="label-mono mt-8 text-text-muted">Web admin dashboard</h3>
          <ul className="mt-4 grid gap-6 md:grid-cols-2">
            {dashboard.map((item, index) => (
              <li key={item.label}>
                <Screen item={item} placeholderId={`IMG-D${index + 1}`} />
              </li>
            ))}
          </ul>
        </>
      )}

      {mobile.length > 0 && (
        <>
          <h3 className="label-mono mt-12 text-text-muted">Mobile app</h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {mobile.map((item, index) => (
              <li key={item.label}>
                <Screen item={item} placeholderId={`IMG-M${index + 1}`} />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
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
            sizes={isPhone ? '(min-width: 1024px) 180px, 45vw' : '(min-width: 768px) 560px, 100vw'}
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
