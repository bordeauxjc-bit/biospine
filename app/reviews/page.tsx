import type { Metadata } from 'next';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { publishedReviews, reviewSources } from '@/lib/reviews';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Patient Reviews',
  description:
    'Read attributable BioSpine patient feedback and open the original Google and verified Zocdoc review profiles for the Lake City practice.',
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Patient feedback"
        title="BioSpine reviews you can check at the source"
        description="We publish short, attributable excerpts and clearly distinguish verified Zocdoc patients from public Google reviewers."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reviews', href: '/reviews' },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {Object.values(reviewSources).map((source) => (
            <article key={source.name} className="border-t-2 border-brand-green pt-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="label-muted">{source.name} profile</p>
                  <p className="mt-3 font-display text-5xl text-brand-green-dark">
                    {source.rating}
                  </p>
                </div>
                <p className="text-sm font-semibold text-brand-ink">
                  {source.count} reviews
                </p>
              </div>
              <p className="mt-5 max-w-xl text-slate-600">{source.verification}</p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
              >
                Open the original profile
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          Ratings and counts were checked in August 2026 and can change. Zocdoc may still show a previous office address; BioSpine&rsquo;s current location is {siteConfig.address.full}.
        </p>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Review excerpts"
          title="What reviewers chose to share"
          description="Individual experiences do not predict another patient’s outcome. Use the source links to read the surrounding review context."
        />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
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
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ShieldCheck className="h-8 w-8 text-brand-green" aria-hidden />
            <h2 className="mt-5">How reviews are handled here</h2>
          </div>
          <div className="prose-biospine lg:col-span-8">
            <p>
              BioSpine does not publish composite testimonials, anonymous marketing copy presented as a patient quote, or a “verified” label that the source platform does not support.
            </p>
            <p>
              Zocdoc states that its reviews were submitted after patients interacted with the practice. Google reviews are public account submissions and are labeled separately because Google does not verify a treatment relationship.
            </p>
            <p>
              Reviews describe individual experiences. Results vary, and a review is not medical advice or a guarantee of outcome.
            </p>
          </div>
        </div>
      </Section>

      <JsonLd
        id="ld-reviews-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Reviews', url: `${siteConfig.url}/reviews` },
        ])}
      />
    </>
  );
}
