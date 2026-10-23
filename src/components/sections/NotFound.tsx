import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Button';
import { withBase } from '@/lib/with-base';

export function NotFound() {
  return (
    <Container className="flex min-h-[calc(100dvh-4rem-8.5rem)] flex-col justify-center py-20">
      <p className="label-mono text-text-muted">
        <span className="text-accent">404</span> — Not found
      </p>
      <h1 className="mt-4 text-h2 font-semibold">Page not found</h1>
      <p className="mt-4 max-w-prose text-text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-8">
        <LinkButton href={withBase('/')} variant="secondary">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </LinkButton>
      </div>
    </Container>
  );
}
