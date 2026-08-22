import type { Metadata } from 'next';
import {
  ClipboardCheck,
  Clock,
  FileText,
  Phone,
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
    title: 'Choose a time',
    text: `Send a request or call ${siteConfig.phone}. Mention whether the visit is for pain, an injury, shockwave therapy, or a DOT physical.`,
  },
  {
    icon: ClipboardCheck,
    title: 'Bring the useful records',
    text: 'Arrive about 10 minutes early with your ID, insurance card, medication list, and any recent imaging or reports.',
  },
  {
    icon: Clock,
    title: 'History and examination',
    text: 'Dr. Jordan asks how the problem started, checks movement and relevant neurological or orthopedic findings, and explains what he sees.',
  },
  {
    icon: ShieldCheck,
    title: 'A treatment decision',
    text: 'Treatment may begin that day when the exam supports it. If imaging, records, or another provider should come first, Dr. Jordan will explain why.',
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
        title="What happens at your first BioSpine visit"
        description="Plan on 45–60 minutes for the history, examination, explanation, and—when the findings support it—first treatment."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'New Patients', href: '/new-patients' },
        ]}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="The appointment"
          title="From booking to the first treatment decision"
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
              If you are paying out of pocket, ask what the visit will cost
              before you book. Insurance benefits are determined by your plan,
              even when the office helps verify them.
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
          <SectionLabel className="!text-brand-green-light">First appointment</SectionLabel>
          <h2 className="mt-5 !text-white">Request your first visit</h2>
          <p className="mt-4 text-lg text-slate-300">
            Send the office a short request or call during office hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={siteConfig.appointmentUrl} size="lg">
              Request an appointment
            </LinkButton>
            <LinkButton href={`tel:${siteConfig.phoneE164}`} variant="outline" size="lg" className="!border-white/40 !text-white hover:!bg-white/10">
              <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
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
