import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { Mission } from '@/components/home/Mission';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { ConditionsList } from '@/components/home/ConditionsList';
import { AboutPreview } from '@/components/home/AboutPreview';
import { OfficeGallery } from '@/components/home/OfficeGallery';
import { Reviews } from '@/components/home/Reviews';
import { LocationSection } from '@/components/home/LocationSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { CTABanner } from '@/components/home/CTABanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/components/seo/schemas';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';

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
      'Plan on about 45–60 minutes. Dr. Jordan reviews how the problem started, examines the relevant joints, muscles, and nerves, and explains the findings. Treatment may begin that day when the exam supports it.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'We accept Medicare and work with a variety of insurance plans. Please call our office to confirm coverage for your specific plan before your visit.',
  },
  {
    question: 'How long until I feel better?',
    answer:
      'There is no honest visit count before the examination. Dr. Jordan sets a starting plan based on the findings and tracks changes in pain, motion, sleep, work, or other affected activity. If those measures are not changing, the plan should change too.',
  },
  {
    question: 'Is chiropractic care safe?',
    answer:
      'All health care has potential benefits and risks. Dr. Jordan reviews your history, examines you, and explains whether chiropractic care is appropriate before treatment. He is licensed in South Carolina (License #4099).',
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
      <OfficeGallery />
      <Reviews />

      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Common questions</SectionLabel>
            <h2 className="text-balance">
              Things people ask before booking
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Call the office for questions about timing, insurance, records,
              or whether your problem belongs on Dr. Jordan&rsquo;s schedule.
            </p>
            <div className="mt-8">
              <LinkButton href="/contact" variant="outline">
                Ask us a question
              </LinkButton>
            </div>
          </div>

          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <LocationSection />
      <BlogPreview />
      <CTABanner />

      <JsonLd id="ld-home-faq" data={faqSchema(faqs)} />
    </>
  );
}
