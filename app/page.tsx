import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Mission } from '@/components/home/Mission';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { ConditionsList } from '@/components/home/ConditionsList';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Reviews } from '@/components/home/Reviews';
import { LocationSection } from '@/components/home/LocationSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { CTABanner } from '@/components/home/CTABanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/components/seo/schemas';
import { Section, SectionHeading } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.tagline} | ${siteConfig.doctor.name}`,
  description: siteConfig.description,
  path: '/',
});

const faqs = [
  {
    question: 'Do I need a referral to see a chiropractor?',
    answer:
      'No. In South Carolina, you can see a chiropractor without a referral from another doctor. Simply call our office at ' +
      siteConfig.phone +
      ' to schedule your first visit.',
  },
  {
    question: 'What should I expect at my first appointment?',
    answer:
      "At your first visit, Dr. Jordan will review your health history, perform a thorough exam, and discuss your goals. If appropriate, you'll receive your first adjustment the same day. Plan on about 45–60 minutes for your initial appointment.",
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'We accept Medicare and work with a variety of insurance plans. Please call our office to confirm coverage for your specific plan before your visit.',
  },
  {
    question: 'How long until I feel better?',
    answer:
      'Every patient is different. Some feel noticeable improvement after the first adjustment, while others with chronic conditions may take several visits. Dr. Jordan will give you an honest assessment and a clear care plan after your initial evaluation.',
  },
  {
    question: 'Is chiropractic care safe?',
    answer:
      'Chiropractic care is widely recognized as a safe, effective treatment for many musculoskeletal conditions when performed by a licensed doctor of chiropractic. Dr. Jordan is board certified and licensed in South Carolina (License #4099).',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Mission />
      <ServicesGrid />
      <ConditionsList />
      <AboutPreview />
      <Reviews />

      <Section tone="white">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Common questions about chiropractic care"
          center
        />
        <dl className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-brand-green transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-brand-ink">
                <dt className="text-lg">{faq.question}</dt>
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark group-open:rotate-45 transition-transform"
                >
                  +
                </span>
              </summary>
              <dd className="mt-4 text-slate-600 leading-relaxed">
                {faq.answer}
              </dd>
            </details>
          ))}
        </dl>
      </Section>

      <LocationSection />
      <BlogPreview />
      <CTABanner />

      <JsonLd id="ld-home-faq" data={faqSchema(faqs)} />
    </>
  );
}
