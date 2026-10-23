import { ArrowLeft } from 'lucide-react';

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group label-mono inline-flex min-h-11 items-center gap-2 text-text-muted transition-colors hover:text-text"
    >
      <ArrowLeft
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
      />
      {label}
    </a>
  );
}
