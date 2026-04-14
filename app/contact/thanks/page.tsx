import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Thank You',
  description: "We've received your message and will get back to you soon.",
  path: '/contact/thanks',
  noindex: true,
});

export default function ThanksPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-2xl text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h1 className="mt-6">Thanks, we&rsquo;ll be in touch</h1>
        <p className="mt-4 text-lg text-slate-600">
          We&rsquo;ve received your message and will follow up as soon as we
          can during office hours. If it&rsquo;s urgent, please call us
          directly.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <LinkButton href="/" variant="secondary">
            Back to home
          </LinkButton>
          <LinkButton href="/blog" variant="outline">
            Read our blog
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
