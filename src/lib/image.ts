import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { PersonalProject } from './projects';

/** Optimized image attributes a statically rendered React component can put on an <img>. */
export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  /** Untouched source file, for "open full size" links. */
  original: string;
}

/**
 * astro:assets' <Image> is an Astro component and cannot render inside React, so pages
 * resolve images here and pass the plain attributes down as props.
 */
export async function toResponsiveImage(
  image: ImageMetadata,
  widths: number[],
): Promise<ResponsiveImage> {
  const usable = widths.filter((width) => width < image.width);
  const result = await getImage({ src: image, widths: [...usable, image.width], format: 'webp' });
  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    width: image.width,
    height: image.height,
    original: image.src,
  };
}

const DASHBOARD_WIDTHS = [640, 960, 1280];
const MOBILE_WIDTHS = [240, 360];

export interface Shot {
  image: ResponsiveImage;
  alt: string;
}

export interface ShowcaseImages {
  dashboard: Shot;
  mobile: Shot;
}

export async function resolveShowcase(
  project: PersonalProject,
): Promise<ShowcaseImages | undefined> {
  const { showcase } = project.data;
  if (!showcase) return undefined;
  return {
    dashboard: {
      image: await toResponsiveImage(showcase.dashboard.image, DASHBOARD_WIDTHS),
      alt: showcase.dashboard.alt,
    },
    mobile: {
      image: await toResponsiveImage(showcase.mobile.image, MOBILE_WIDTHS),
      alt: showcase.mobile.alt,
    },
  };
}

export interface GalleryShot {
  surface: 'dashboard' | 'mobile';
  label: string;
  alt: string;
  /** Missing until the capture exists; the gallery shows a placeholder instead. */
  image?: ResponsiveImage;
}

export async function resolveGallery(project: PersonalProject): Promise<GalleryShot[]> {
  return Promise.all(
    project.data.gallery.map(async ({ surface, label, alt, image }) => ({
      surface,
      label,
      alt,
      image: image
        ? await toResponsiveImage(image, surface === 'dashboard' ? DASHBOARD_WIDTHS : MOBILE_WIDTHS)
        : undefined,
    })),
  );
}
