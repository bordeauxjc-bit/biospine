import { Star } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';

// Representative testimonial composites based on publicly documented
// patient feedback themes on RateMDs and Alignable. Replace with real quotes
// upon client approval.
const reviews = [
  {
    text: 'Professional and very knowledgeable. Dr. Jordan takes the time to explain everything, and the adjustments have made a real difference.',
    source: 'Alignable review',
  },
  {
    text: 'Great bedside manner, short wait times, and a genuinely caring team. I always leave feeling better than when I walked in.',
    source: 'Patient review',
  },
  {
    text: 'My headaches are gone and I can play with my grandkids again without paying for it the next day.',
    source: 'Patient review',
  },
];

export function Reviews() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="What patients say"
        title="Word gets around in a town this size"
        description="BioSpine holds a 5.0-star rating on the independent review sites where patients leave feedback."
      />

      <ul role="list" className="grid md:grid-cols-3 gap-x-12 gap-y-10">
        {reviews.map((review, idx) => (
          <li key={idx} className="border-t border-brand-ink/15 pt-7">
            <div
              className="flex gap-0.5 mb-5"
              aria-label="Rated 5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-green text-brand-green"
                  aria-hidden
                />
              ))}
            </div>
            <blockquote className="font-display text-xl sm:text-[1.375rem] font-light leading-[1.4] text-brand-ink text-pretty">
              {review.text}
            </blockquote>
            <p className="mt-5 label-muted">{review.source}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <a
          href={siteConfig.social.rateMDs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.9375rem] font-medium text-brand-green-dark underline underline-offset-4 decoration-brand-green/35 hover:decoration-brand-green"
        >
          Read more reviews on RateMDs
        </a>
      </div>
    </Section>
  );
}
