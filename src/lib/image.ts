import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Optimized image attributes a statically rendered React component can put on an <img>. */
export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

/**
 * astro:assets' <Image> is an Astro component and cannot render inside React, so pages
 * resolve images here and pass the plain attributes down as props.
 */
export async function toResponsiveImage(
  image: ImageMetadata,
  widths: number[],
): Promise<ResponsiveImage> {
  const result = await getImage({ src: image, widths, format: 'webp' });
  return {
    src: result.src,
    srcSet: result.srcSet.attribute,
    width: image.width,
    height: image.height,
  };
}
