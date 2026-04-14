import type { Metadata } from 'next';
import { LinkButton } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist.",
  path: '/404',
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
          Error 404
        </p>
        <h1>Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">
          We couldn&rsquo;t find the page you were looking for. It may have been
          moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="/" variant="primary">
            Back to home
          </LinkButton>
          <LinkButton href="/contact" variant="outline">
            Contact us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
