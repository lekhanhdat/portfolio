import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface DeviceFrameProps {
  device: 'browser' | 'phone';
  children: ReactNode;
  className?: string;
}

/** Minimal, neutral device chrome around a screenshot or MediaPlaceholder. */
export function DeviceFrame({ device, children, className }: DeviceFrameProps) {
  if (device === 'phone') {
    return (
      <div
        className={cn(
          'rounded-[1.75rem] border border-border-strong bg-surface p-1.5 shadow-popover',
          className,
        )}
      >
        <div className="overflow-hidden rounded-[1.375rem] [&>*]:rounded-none [&>*]:border-0">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-border-strong bg-surface shadow-popover',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-border px-3 py-2"
      >
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="ml-3 h-4 flex-1 rounded-sm bg-surface-muted" />
      </div>
      <div className="[&>*]:rounded-none [&>*]:border-0">{children}</div>
    </div>
  );
}
