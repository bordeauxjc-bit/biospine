import type { Metadata } from 'next';
import { CalendarDays, CheckCircle2, Phone } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { ClinicalSources } from '@/components/ui/ClinicalSources';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema, medicalTherapySchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { staticPageClinicalSources } from '@/lib/clinical-sources';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Back & Neck Pain Chiropractor in Lake City, SC',
  description:
    'Evaluation and conservative chiropractic care for back pain, neck pain, sciatica, stiffness, and whiplash at BioSpine in Lake City, South Carolina.',
  path: '/services/back-neck-pain',
});

const concerns = [
  'New or recurring low back pain',
  'Neck pain and restricted movement',
  'Sciatic-type pain into the hip or leg',
  'Work- or posture-related stiffness',
  'Pain after lifting, travel, or a minor injury',
  'Headaches associated with neck tension',
];

const faqs = [
  {
    question: 'Do I need imaging before my first visit?',
    answer:
      'Not necessarily. Dr. Jordan begins with your history and a physical examination. Imaging is recommended only when the findings suggest it could change the diagnosis or care plan.',
  },
  {
    question: 'Can chiropractic care help sciatica?',
    answer:
      'Some sciatic-type symptoms respond to conservative care, but the cause matters. Your examination is used to determine whether chiropractic care is appropriate or whether another provider or imaging should come first.',
  },
  {
    question: 'Will I be adjusted during the first visit?',
    answer:
      'If the examination shows that an adjustment is appropriate, treatment may begin during the first visit. Dr. Jordan will explain the findings and obtain your consent before treatment.',
  },
  {
    question: 'Do you accept insurance for back and neck pain care?',
    answer: `BioSpine accepts Medicare. Call ${siteConfig.phone} to ask about any other plan and confirm your specific coverage before the visit.`,
  },
];

export default function BackNeckPainPage() {
  return (
    <>
      <PageHeader
        eyebrow="Back & neck pain"
        title="Back and neck pain care in Lake City, SC"
        description="A careful exam, a clear explanation, and conservative treatment planned around how your pain affects work, sleep, and everyday movement."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Back & neck pain', href: '/services/back-neck-pain' },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Start with the cause"
              title="Pain is a symptom, not a diagnosis"
              description="Back and neck pain can come from irritated joints, strained tissue, work habits, an old injury, or a problem that needs referral. The first job is deciding which situation you are dealing with."
            />
          </div>
          <div className="lg:col-span-7">
            <h3 className="label-muted">Common reasons patients call</h3>
            <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-2">
              {concerns.map((concern) => (
                <li key={concern} className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            ['Listen and examine', 'Your history, movement, strength, and relevant orthopedic or neurological findings guide the visit.'],
            ['Explain the findings', 'You will hear what appears to be driving the pain, what can be treated here, and what would require referral.'],
            ['Know when to change course', 'Pain, motion, sleep, work, and other affected activity are rechecked. If those measures stall, the plan is reconsidered instead of extended automatically.'],
          ].map(([title, text]) => (
            <article key={title} className="border-t-2 border-brand-green pt-5">
              <h2 className="!text-2xl">{title}</h2>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title="Before your visit" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <ClinicalSources sources={staticPageClinicalSources.backAndNeck} />

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="!text-white">Take the next step</h2>
          <p className="mt-4 text-lg text-slate-300">Visit BioSpine at {siteConfig.address.full}, or contact the office to discuss an appointment.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={siteConfig.appointmentUrl} size="lg">
              <CalendarDays className="h-4 w-4" aria-hidden /> Request an appointment
            </LinkButton>
            <LinkButton href={`tel:${siteConfig.phoneE164}`} variant="outline" size="lg" className="!border-white/40 !text-white hover:!bg-white/10">
              <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </Section>

      <JsonLd id="ld-back-neck-therapy" data={medicalTherapySchema({
        name: 'Conservative Chiropractic Care for Back and Neck Pain',
        description: 'Evaluation and conservative chiropractic care for back pain, neck pain, sciatica, and related mobility problems in Lake City, South Carolina.',
        url: `${siteConfig.url}/services/back-neck-pain`,
        indications: concerns,
      })} />
      <JsonLd id="ld-back-neck-faq" data={faqSchema(faqs)} />
      <JsonLd id="ld-back-neck-breadcrumb" data={breadcrumbSchema([
        { name: 'Home', url: `${siteConfig.url}/` },
        { name: 'Services', url: `${siteConfig.url}/services` },
        { name: 'Back & Neck Pain', url: `${siteConfig.url}/services/back-neck-pain` },
      ])} />
    </>
  );
}
