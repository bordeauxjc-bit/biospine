import type { Metadata } from 'next';
import {
  ClipboardCheck,
  Clock,
  FileText,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'New Patients',
  description:
    'Everything new patients need to know about their first chiropractic visit at BioSpine Health and Wellness in Lake City, SC, what to bring, what to expect, and insurance details.',
  path: '/new-patients',
});

const steps = [
  {
    icon: FileText,
    title: 'Book your first visit',
    text: `Call us at ${siteConfig.phone} or stop by the office. We'll find a time that works for you.`,
  },
  {
    icon: ClipboardCheck,
    title: 'Arrive a little early',
    text: 'Plan to arrive 10 minutes before your appointment to complete new-patient paperwork.',
  },
  {
    icon: Clock,
    title: 'Exam & consultation',
    text: 'Dr. Jordan will review your health history, perform a thorough exam, and discuss your goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Your care plan',
    text: "If appropriate, you'll receive your first adjustment the same day. You'll leave with a clear plan for next steps.",
  },
];

const faqs = [
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring a valid photo ID, your insurance card (if applicable), any relevant imaging (X-rays or MRIs) from the past year, and a list of current medications.',
  },
  {
    question: 'Do you accept my insurance?',
    answer: `We accept Medicare and work with a number of commercial insurance plans. Call us at ${siteConfig.phone} and we'll verify your specific coverage before your visit.`,
  },
  {
    question: 'Will I get an adjustment on my first visit?',
    answer:
      "Usually, yes, but not always. We only adjust after a thorough exam confirms it's appropriate for your case. If imaging or a referral is needed first, we'll tell you.",
  },
  {
    question: 'How long will the first appointment take?',
    answer:
      'Plan on 45–60 minutes for your initial visit. Follow-up visits are typically 15–30 minutes.',
  },
  {
    question: 'Do I need a referral from my primary care doctor?',
    answer:
      'In South Carolina, you do not need a referral to see a chiropractor. Some insurance plans require one for coverage, call us and we can help you confirm.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Wear comfortable, loose-fitting clothing that allows you to move freely. We can provide a gown if needed for the exam.',
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="New patients"
        title="Your first visit, step by step"
        description="No surprises, here's exactly what to expect when you walk through our door."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'New Patients', href: '/new-patients' },
        ]}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="What to expect"
          title="Four simple steps"
        />

        <ol
          role="list"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {steps.map((step, idx) => (
            <li key={step.title} className="relative">
              <div className="h-full rounded-2xl border border-slate-200 p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl font-semibold text-brand-green">
                    0{idx + 1}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="cream">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Paperwork"
              title="What to bring"
            />
            <ul role="list" className="space-y-3 text-slate-700">
              {[
                'Photo ID (driver’s license or other government-issued ID)',
                'Insurance card, if applicable',
                'Any relevant imaging from the past year (X-rays, MRIs, CT scans)',
                'A list of current medications and supplements',
                'A list of previous diagnoses, surgeries, or major injuries',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Insurance"
              title="Coverage & payment"
            />
            <p className="text-slate-700 leading-relaxed">
              We accept {siteConfig.insurance.confirmed.join(', ')} and work
              with a variety of commercial insurance plans.{' '}
              {siteConfig.insurance.note}
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              If you&rsquo;re paying out of pocket, we&rsquo;re happy to
              discuss options before you book. Transparency matters to us.
            </p>
            <div className="mt-6">
              <LinkButton
                href={`tel:${siteConfig.phoneE164}`}
                variant="primary"
              >
                Call to verify your coverage
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="FAQs"
          title="New patient questions, answered"
          center
        />
        <dl className="mx-auto max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-brand-green transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-brand-ink">
                <dt className="text-lg flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-brand-green shrink-0" aria-hidden />
                  {f.question}
                </dt>
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark group-open:rotate-45 transition-transform"
                >
                  +
                </span>
              </summary>
              <dd className="mt-4 pl-8 text-slate-600 leading-relaxed">
                {f.answer}
              </dd>
            </details>
          ))}
        </dl>
      </Section>

      <JsonLd id="ld-new-patients-faq" data={faqSchema(faqs)} />
      <JsonLd
        id="ld-new-patients-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'New Patients', url: `${siteConfig.url}/new-patients` },
        ])}
      />
    </>
  );
}
