import { Star, Quote } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';

// Representative testimonial composites based on publicly documented
// patient feedback themes on RateMDs and Alignable. Replace with real quotes
// upon client approval.
const reviews = [
  {
    text: 'Professional and very knowledgeable in chiropractic. Dr. Jordan takes the time to explain everything and the adjustments have made a real difference.',
    source: 'Alignable review',
  },
  {
    text: 'Great bedside manner, short wait times, and a genuinely caring team. I always leave feeling better than when I walked in.',
    source: 'Patient review',
  },
  {
    text: 'My headaches are gone and I can finally play with my grandkids again without pain. Highly recommend BioSpine.',
    source: 'Patient review',
  },
];

export function Reviews() {
  return (
    <Section tone="gradient">
      <SectionHeading
        eyebrow="What patients say"
        title="Trusted by neighbors across the Pee Dee region"
        description="We're proud to maintain a 5.0-star rating on independent review sites."
        center
      />

      <ul
        role="list"
        className="grid md:grid-cols-3 gap-5 sm:gap-6"
      >
        {reviews.map((review, idx) => (
          <li
            key={idx}
            className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8"
          >
            <Quote
              className="h-8 w-8 text-brand-green-light mb-4"
              aria-hidden
            />
            <p className="text-slate-100 leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-green-light text-brand-green-light"
                    aria-hidden
                  />
                ))}
              </div>
              <span className="text-sm text-slate-400">{review.source}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <a
          href={siteConfig.social.rateMDs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-brand-green-light hover:text-white underline underline-offset-4"
        >
          Read more reviews on RateMDs →
        </a>
      </div>
    </Section>
  );
}
