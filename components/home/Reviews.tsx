import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { publishedReviews, reviewSources } from '@/lib/reviews';

export function Reviews() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Patient feedback"
        title="Reviews you can check at the source"
        description="Google shows a 5.0 rating from 12 public reviews, and Zocdoc shows a 5.00 rating from six verified patient reviews. Counts and ratings can change."
      />

      <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
        {publishedReviews.map((review) => (
          <figure key={`${review.platform}-${review.author}`} className="border-t border-brand-ink/15 pt-7">
            <div className="mb-5 flex gap-0.5" role="img" aria-label="Rated 5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-3.5 w-3.5 fill-brand-green text-brand-green"
                  aria-hidden
                />
              ))}
            </div>
            <blockquote className="font-display text-xl font-light leading-[1.4] text-brand-ink text-pretty sm:text-[1.375rem]">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-5">
              <span className="block text-sm font-semibold text-brand-ink">{review.author}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.12em] text-slate-600">
                {review.detail}
              </span>
            </figcaption>
          </figure>
        ))}

        {Object.values(reviewSources).map((source) => (
          <div key={source.name} className="border-t border-brand-ink/15 pt-7">
            <p className="font-display text-5xl text-brand-green-dark">{source.rating}</p>
            <p className="mt-3 text-sm font-semibold text-brand-ink">
              {source.name} · {source.count} reviews
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {source.verification}
            </p>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
            >
              Open {source.name}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-brand-ink/15 pt-7">
        <Link
          href="/reviews"
          className="inline-flex min-h-11 items-center text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
        >
          See all 12 public Google ratings and verification details
        </Link>
      </div>
    </Section>
  );
}
