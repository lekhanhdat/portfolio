import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import type { PersonalProject } from '@/lib/projects';

type GalleryItem = PersonalProject['data']['gallery'][number];

interface ScreenshotGalleryProps {
  id: string;
  items: readonly GalleryItem[];
}

/**
 * Dashboard screens in a two-column grid, phone screens in rows of up to six.
 * Every item is a placeholder until the captures arrive; real images replace them
 * in Phase 6 through astro:assets.
 */
export function ScreenshotGallery({ id, items }: ScreenshotGalleryProps) {
  const dashboard = items.filter((item) => item.surface === 'dashboard');
  const mobile = items.filter((item) => item.surface === 'mobile');

  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-h3 font-semibold">
        Gallery
      </h2>

      {dashboard.length > 0 && (
        <>
          <h3 className="label-mono mt-8 text-text-muted">Web admin dashboard</h3>
          <ul className="mt-4 grid gap-6 md:grid-cols-2">
            {dashboard.map((item, index) => (
              <li key={item.label}>
                <MediaPlaceholder
                  id={`IMG-D${index + 1}`}
                  ratio="16/10"
                  label={item.label}
                  alt={item.alt}
                />
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
                <MediaPlaceholder
                  id={`IMG-M${index + 1}`}
                  ratio="9/19.5"
                  label={item.label}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
