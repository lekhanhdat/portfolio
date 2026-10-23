import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

const sizes = {
  page: 'max-w-page',
  prose: 'max-w-prose',
} as const;

interface ContainerProps {
  as?: ElementType;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = 'div', size = 'page', className, children }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', sizes[size], className)}>
      {children}
    </Tag>
  );
}
