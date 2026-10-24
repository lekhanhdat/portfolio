import { ScreenshotGallery } from './ScreenshotGallery';
import { CaseStudyFooter } from './CaseStudyFooter';
import type { GalleryShot } from '@/lib/image';
import type { PersonalProject } from '@/lib/projects';

interface CaseStudyEndProps {
  ids: { dashboard: string; mobile: string; links: string };
  gallery: readonly GalleryShot[];
  links: PersonalProject['data']['links'];
}

/**
 * Last two screens of the case study: the dashboard gallery, then the phone gallery with the
 * links. Composed here so the footer is a React child of React, never Astro markup.
 */
export function CaseStudyEnd({ ids, gallery, links }: CaseStudyEndProps) {
  return (
    <ScreenshotGallery
      ids={ids}
      items={gallery}
      footer={<CaseStudyFooter id={ids.links} links={links} />}
    />
  );
}
