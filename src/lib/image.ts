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
  /** WebP quality (1–100); Astro's default when omitted. */
  quality?: number,
): Promise<ResponsiveImage> {
  const usable = widths.filter((width) => width < image.width);
  // Camera originals (over 2000px) are never shipped as a srcset candidate themselves.
  const candidates = usable.length > 0 ? usable : [image.width];
  const large = image.width > 2000;
  const result = await getImage({
    src: image,
    widths: large ? candidates : [...usable, image.width],
    // The fallback `src` would otherwise be encoded at the full source width.
    ...(large ? { width: Math.max(...candidates) } : {}),
    format: 'webp',
    quality,
  });
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

export interface VideoTrack {
  src: string;
  srcLang: string;
  label: string;
  default?: boolean;
}

export interface ShowcaseVideo {
  /** MP4 path inside public/ (not yet passed through withBase()). */
  src: string;
  /** Optimized poster URL, ready to use. */
  poster: string;
  title: string;
  captions: VideoTrack;
  subtitles: VideoTrack[];
}

export interface ShowcaseMedia {
  video: ShowcaseVideo;
}

export async function resolveShowcase(
  project: PersonalProject,
): Promise<ShowcaseMedia | undefined> {
  const { showcase } = project.data;
  if (!showcase) return undefined;
  return {
    video: {
      ...showcase.video,
      // A single poster: the player is at most ~720px wide, so 1280px covers 2x screens.
      poster: (await getImage({ src: showcase.video.poster, width: 1280, format: 'webp' })).src,
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
      // Landscape captures (dashboards, phones framed on a 16:9 canvas) get wide candidates.
      image: image
        ? await toResponsiveImage(
            image,
            image.width > image.height ? DASHBOARD_WIDTHS : MOBILE_WIDTHS,
          )
        : undefined,
    })),
  );
}
