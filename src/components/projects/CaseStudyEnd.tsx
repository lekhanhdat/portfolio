import { ScreenshotGallery } from './ScreenshotGallery';
import { CaseStudyFooter } from './CaseStudyFooter';
import type { GalleryShot } from '@/lib/image';
import type { PersonalProject } from '@/lib/projects';

interface CaseStudyEndProps {
  ids: { dashboard: string; links: string };
  gallery: readonly GalleryShot[];
  links: PersonalProject['data']['links'];
}

/**
 * Last screen of the case study: the dashboard gallery with the links. Composed here so the footer is a React child of React, never Astro markup.
 */
export function CaseStudyEnd({ ids, gallery, links }: CaseStudyEndProps) {
  return (
    <ScreenshotGallery
      id={ids.dashboard}
      items={gallery}
      footer={<CaseStudyFooter id={ids.links} links={links} />}
    />
  );
}
