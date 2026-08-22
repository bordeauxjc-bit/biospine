import type { Metadata } from 'next';
import {
  ClipboardCheck,
  Clock,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqList } from '@/components/ui/FaqList';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';

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
    text: `Send an appointment request or call us at ${siteConfig.phone}. We’ll help you find a time that works.`,
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
    text: "If appropriate, you’ll receive your first adjustment the same day. You’ll leave with a clear plan for next steps.",
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
    answer: `We accept Medicare and work with a number of commercial insurance plans. Call us at ${siteConfig.phone} and we’ll verify your specific coverage before your visit.`,
  },
  {
    question: 'Will I get an adjustment on my first visit?',
    answer:
      "Usually, yes, but not always. We only adjust after a thorough exam confirms it’s appropriate for your case. If imaging or a referral is needed first, we’ll tell you.",
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
        description="No surprises, here’s exactly what to expect when you walk through our door."
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8"
        >
          {steps.map((step) => (
            <li key={step.title} className="border-t border-brand-ink/15 pt-6">
              <step.icon
                className="h-[1.15rem] w-[1.15rem] text-brand-green"
                aria-hidden
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                {step.text}
              </p>
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
            <ul role="list" className="text-[0.9375rem] leading-relaxed text-slate-700">
              {[
                'Photo ID (driver’s license or other government-issued ID)',
                'Insurance card, if applicable',
                'Any relevant imaging from the past year (X-rays, MRIs, CT scans)',
                'A list of current medications and supplements',
                'A list of previous diagnoses, surgeries, or major injuries',
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-brand-ink/12 py-3 first:border-t-0 first:pt-0"
                >
                  {item}
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Questions</SectionLabel>
            <h2 className="text-balance">New patient questions, answered</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="!text-brand-green-light">Ready to get started?</SectionLabel>
          <h2 className="mt-5 !text-white">Request your first visit</h2>
          <p className="mt-4 text-lg text-slate-300">
            Send the office a short request or call during office hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={siteConfig.appointmentUrl} size="lg">
              Request an appointment
            </LinkButton>
            <LinkButton href="/contact#appointment-form" variant="outline" size="lg" className="!border-white/40 !text-white hover:!bg-white/10">
              Send a request
            </LinkButton>
          </div>
        </div>
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
