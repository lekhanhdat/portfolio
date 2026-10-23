import { DeviceFrame } from './DeviceFrame';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import type { ShowcaseImages } from '@/lib/image';
import { cn } from '@/lib/cn';

interface ProjectShowcaseProps {
  /** Real captures; placeholders render until they exist. */
  images?: ShowcaseImages;
  /** The first showcase on a page can load eagerly; the rest wait for the viewport. */
  eager?: boolean;
  className?: string;
}

/**
 * Dashboard in a browser frame with the phone app overlapping its corner (IMG-02 / IMG-03).
 * Shared by the Home band, the personal index and the case study header; the phone hides on
 * narrow screens.
 */
export function ProjectShowcase({ images, eager = false, className }: ProjectShowcaseProps) {
  const loading = eager ? 'eager' : 'lazy';

  return (
    <div className={cn('relative pb-10 lg:pb-12', className)}>
      <DeviceFrame device="browser">
        {images ? (
          <img
            src={images.dashboard.image.src}
            srcSet={images.dashboard.image.srcSet}
            sizes="(min-width: 1024px) 640px, 100vw"
            width={images.dashboard.image.width}
            height={images.dashboard.image.height}
            alt={images.dashboard.alt}
            loading={loading}
            decoding="async"
            className="block h-auto w-full"
          />
        ) : (
          <MediaPlaceholder
            id="IMG-02"
            ratio="16/10"
            label="Admin dashboard — locations table with search and filters"
            alt="Travel admin dashboard showing the locations table with search and filters"
          />
        )}
      </DeviceFrame>
      <DeviceFrame
        device="phone"
        className="absolute right-4 bottom-0 hidden w-[28%] max-w-40 sm:block"
      >
        {images ? (
          <img
            src={images.mobile.image.src}
            srcSet={images.mobile.image.srcSet}
            sizes="160px"
            width={images.mobile.image.width}
            height={images.mobile.image.height}
            alt={images.mobile.alt}
            loading={loading}
            decoding="async"
            className="block aspect-[9/19.5] h-auto w-full object-cover object-top"
          />
        ) : (
          <MediaPlaceholder
            id="IMG-03"
            ratio="9/19.5"
            label="Mobile app — home screen"
            alt="Da Nang Smart Tourism app home screen"
          />
        )}
      </DeviceFrame>
    </div>
  );
}
