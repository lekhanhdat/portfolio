import { DeviceFrame } from './DeviceFrame';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { cn } from '@/lib/cn';

/**
 * Dashboard in a browser frame with the phone app overlapping its corner (IMG-02 / IMG-03).
 * Shared by the Home band and the case study header; the phone hides on narrow screens.
 */
export function ProjectShowcase({ className }: { className?: string }) {
  return (
    <div className={cn('relative pb-10 lg:pb-12', className)}>
      <DeviceFrame device="browser">
        <MediaPlaceholder
          id="IMG-02"
          ratio="16/10"
          label="Admin dashboard — locations table with search and filters"
          alt="Travel admin dashboard showing the locations table with search and filters"
        />
      </DeviceFrame>
      <DeviceFrame
        device="phone"
        className="absolute right-4 bottom-0 hidden w-[30%] max-w-44 sm:block"
      >
        <MediaPlaceholder
          id="IMG-03"
          ratio="9/19.5"
          label="Mobile app — home screen"
          alt="Da Nang Smart Tourism app home screen"
        />
      </DeviceFrame>
    </div>
  );
}
