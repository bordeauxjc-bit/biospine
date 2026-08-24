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
  title: 'Auto Accident Injury Chiropractor in Lake City, SC',
  description:
    'Evaluation, conservative care, and clear clinical documentation for whiplash, neck pain, back pain, and headaches after a car accident in Lake City, SC.',
  path: '/services/auto-accident-injury',
});

const careIncludes = [
  'History of the collision and symptom timeline',
  'Movement, orthopedic, and neurological examination',
  'Conservative care when clinically appropriate',
  'Progress notes and clinical documentation',
  'Referral for imaging or another provider when indicated',
  'A plan for returning to normal daily activity',
];

const faqs = [
  {
    question: 'How soon should I be evaluated after a collision?',
    answer:
      'Seek emergency care immediately for severe or concerning symptoms. For non-emergency soreness, stiffness, or reduced movement, contact the office promptly so the symptoms and timeline can be evaluated.',
  },
  {
    question: 'What should I bring to the appointment?',
    answer:
      'Bring a photo ID, insurance information, any discharge paperwork or imaging you already received, and contact information for the relevant claim if one exists.',
  },
  {
    question: 'Do I need an attorney to receive care?',
    answer:
      'No. Medical care and legal representation are separate decisions. BioSpine provides clinical evaluation and documentation but does not offer legal advice.',
  },
  {
    question: 'Will you work with my insurance?',
    answer: `Coverage depends on the policy and claim. Call ${siteConfig.phone} before the visit so the office can explain what information is needed and what payment options apply.`,
  },
];

export default function AutoAccidentInjuryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Auto accident care"
        title="Post-collision injury care in Lake City, SC"
        description="Evaluation and conservative treatment for whiplash, neck and back pain, headaches, and movement problems after a collision."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Auto accident injury', href: '/services/auto-accident-injury' },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="A documented starting point"
              title="Get the injury evaluated, not guessed at"
              description="Symptoms can change during the first days after a collision. A focused examination creates a clinical baseline and helps determine whether chiropractic care, imaging, or referral is the appropriate next step."
            />
          </div>
          <div className="lg:col-span-7">
            <h3 className="label-muted">What the visit can include</h3>
            <ul role="list" className="mt-5 grid gap-3 sm:grid-cols-2">
              {careIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            ['Emergency symptoms come first', 'BioSpine is not an emergency facility. Call 911 or seek emergency care for severe, sudden, or life-threatening symptoms.'],
            ['Care follows the findings', 'Treatment begins only after the examination indicates that conservative chiropractic care is appropriate.'],
            ['Documentation stays clinical', 'Records describe the history, examination, care, and progress without promising a legal or insurance outcome.'],
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
          <div className="lg:col-span-8"><FaqList faqs={faqs} /></div>
        </div>
      </Section>

      <ClinicalSources sources={staticPageClinicalSources.autoAccident} />

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="!text-white">Talk with the office</h2>
          <p className="mt-4 text-lg text-slate-300">BioSpine serves Lake City and surrounding Pee Dee communities from {siteConfig.address.full}.</p>
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

      <JsonLd id="ld-auto-accident-therapy" data={medicalTherapySchema({
        name: 'Conservative Care After Auto Accident Injury',
        description: 'Evaluation and conservative chiropractic care for whiplash, neck pain, back pain, and related symptoms after a collision in Lake City, South Carolina.',
        url: `${siteConfig.url}/services/auto-accident-injury`,
        indications: ['Whiplash', 'Neck pain after a collision', 'Back pain after a collision', 'Post-collision headaches'],
      })} />
      <JsonLd id="ld-auto-accident-faq" data={faqSchema(faqs)} />
      <JsonLd id="ld-auto-accident-breadcrumb" data={breadcrumbSchema([
        { name: 'Home', url: `${siteConfig.url}/` },
        { name: 'Services', url: `${siteConfig.url}/services` },
        { name: 'Auto Accident Injury', url: `${siteConfig.url}/services/auto-accident-injury` },
      ])} />
    </>
  );
}
