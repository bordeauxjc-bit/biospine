import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { FaqList } from '@/components/ui/FaqList';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { conditionGuides } from '@/lib/conditions';

export const metadata: Metadata = buildMetadata({
  title: 'Conditions We Treat',
  description:
    'Detailed guides to low back pain, neck pain, sciatica, headaches, arthritis, sports injuries, whiplash, and posture concerns in Lake City, SC.',
  path: '/conditions',
});

const faqs = [
  {
    question: 'How do I know if chiropractic care is right for my condition?',
    answer:
      'The first visit is used to review your history, examine the problem, and decide whether chiropractic care is appropriate. If another provider or imaging should come first, Dr. Jordan will explain that.',
  },
  {
    question: 'What if my condition is not on this list?',
    answer:
      'These guides cover common reasons people contact BioSpine, but they are not exhaustive. Call the office and describe what is happening so staff can help you choose a reasonable next step.',
  },
  {
    question: 'Is chiropractic care appropriate for older adults with arthritis?',
    answer:
      'It may be appropriate for some patients when technique is adapted to bone health, medications, previous procedures, comfort, and examination findings. Care does not reverse arthritis and may need to be coordinated with a medical clinician.',
  },
];

export default function ConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conditions"
        title="Start with the symptom, not an online diagnosis"
        description="These guides explain what Dr. Jordan checks for, which problems may respond to care at BioSpine, and which warning signs should not wait for a chiropractic appointment."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Conditions', href: '/conditions' },
        ]}
      />

      <Section tone="white">
        <ul role="list" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditionGuides.map((condition) => (
            <li key={condition.slug}>
              <Link
                href={`/conditions/${condition.slug}`}
                className="group flex h-full min-h-60 flex-col border-t-2 border-brand-ink bg-white py-6 transition-colors hover:border-brand-green"
              >
                <p className="label-muted">Condition guide</p>
                <h2 className="mt-4 !text-2xl transition-colors group-hover:text-brand-green-dark">
                  {condition.name}
                </h2>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">
                  {condition.summary}
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-green-dark">
                  Read the guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">How to use these pages</SectionLabel>
            <h2 className="text-balance">Use the guides to prepare, not self-diagnose</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {[
              [
                'Compare the pattern',
                'Use the examples to organize what you have noticed—not to diagnose yourself.',
              ],
              [
                'Know the warning signs',
                'Each guide identifies symptoms that should be evaluated urgently instead of waiting for a routine visit.',
              ],
              [
                'See what Dr. Jordan checks',
                'Each page explains the exam and the findings that would lead to treatment, imaging, or referral.',
              ],
            ].map(([title, text]) => (
              <article key={title} className="border-t border-brand-ink/15 pt-5">
                <h3 className="!text-xl">{title}</h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Questions</SectionLabel>
            <h2 className="text-balance">Before you book the wrong kind of appointment</h2>
            <div className="mt-8">
              <LinkButton href="/contact#appointment-form" variant="outline">
                Ask about an appointment
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <JsonLd id="ld-conditions-faq" data={faqSchema(faqs)} />
      <JsonLd
        id="ld-conditions-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Conditions', url: `${siteConfig.url}/conditions` },
        ])}
      />
    </>
  );
}
