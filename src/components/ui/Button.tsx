import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

const base =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ease-out-soft disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  secondary:
    'border border-border-control bg-surface text-text hover:border-accent hover:text-accent',
  ghost: 'text-text hover:bg-surface-muted hover:text-accent',
} as const;

const sizes = {
  md: 'min-h-11 px-4',
  sm: 'min-h-9 px-3 text-[0.8125rem]',
} as const;

export type ButtonVariant = keyof typeof variants;

interface CommonProps {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: Omit<CommonProps, 'children'>) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant,
  size,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    /** Opens in a new tab, adds rel and an accessible hint. */
    external?: boolean;
  };

export function LinkButton({
  variant,
  size,
  className,
  children,
  external = false,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      className={buttonClasses({ variant, size, className })}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {external && (
        <>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
