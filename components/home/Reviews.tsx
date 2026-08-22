import { ExternalLink, Star } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';

const reviews = [
  {
    text: 'Very good doctor.',
    source: 'Jewell R.',
    detail: 'Verified Zocdoc patient · October 2025',
  },
  {
    text: 'I’ve been able to have relief from my constant back pain.',
    source: 'S.T.',
    detail: 'Verified Zocdoc patient',
  },
];

export function Reviews() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Verified patient feedback"
        title="Reviews you can check at the source"
        description="Zocdoc reports a 5.00 overall rating from six verified patient reviews. Review counts and ratings can change over time."
      />

      <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.source} className="border-t border-brand-ink/15 pt-7">
            <div className="mb-5 flex gap-0.5" aria-label="Rated 5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-brand-green text-brand-green" aria-hidden />
              ))}
            </div>
            <blockquote className="font-display text-xl font-light leading-[1.4] text-brand-ink text-pretty sm:text-[1.375rem]">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-5">
              <span className="block text-sm font-semibold text-brand-ink">{review.source}</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.12em] text-slate-500">{review.detail}</span>
            </figcaption>
          </figure>
        ))}

        <div className="border-t border-brand-ink/15 pt-7">
          <p className="font-display text-5xl text-brand-green-dark">5.00</p>
          <p className="mt-3 text-sm font-semibold text-brand-ink">Overall Zocdoc rating</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Six reviews submitted by patients after interacting with the practice.
          </p>
          <a
            href={siteConfig.reviews.zocdoc}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
          >
            Read verified reviews
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </Section>
  );
}
