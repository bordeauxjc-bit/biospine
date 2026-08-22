import type { Metadata } from 'next';
import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/components/seo/schemas';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

const pagePath = '/services/dot-physicals';
const pageUrl = `${siteConfig.url}${pagePath}`;
const description =
  'Schedule a DOT physical in Lake City, SC with Dr. Chucky Jordan, an FMCSA-listed certified Medical Examiner serving commercial drivers across the Pee Dee region.';

const officialLinks = {
  registry:
    'https://nationalregistry.fmcsa.dot.gov/search-medical-examiners',
  exam:
    'https://www.fmcsa.dot.gov/medical/driver-medical-requirements/dot-medical-exam-and-commercial-motor-vehicle-certification',
  form:
    'https://www.fmcsa.dot.gov/regulations/medical/medical-examination-report-form-commercial-driver-medical-certification',
  southCarolina:
    'https://www.scdmvonline.com/-/media/Files/Motor-Carrier-Connection-Spring-2025.ashx',
};

const bringItems = [
  'A current driver’s license or other government-issued photo ID',
  'A complete list of prescription and over-the-counter medications, including doses',
  'Glasses, contact lenses, or hearing aids you use while driving',
  'Relevant records or letters from treating clinicians for ongoing medical conditions',
  'When applicable, recent CPAP compliance, blood-sugar, cardiac, vision, or exemption documentation',
];

const faqs = [
  {
    question: 'Is the urinalysis part of a DOT physical a drug test?',
    answer:
      'No. The required medical-exam urinalysis records specific gravity, protein, blood, and sugar. It is separate from an employer’s DOT drug-testing program. Additional testing may be requested when medical history or findings require it.',
  },
  {
    question: 'How long is a DOT medical certificate valid?',
    answer:
      'FMCSA allows certification for up to 24 months. A shorter period may be issued when a condition needs closer monitoring. The examiner must base the decision and expiration date on the current standards and individual findings.',
  },
  {
    question: 'Does passing the exam happen automatically?',
    answer:
      'No. Scheduling or completing an exam does not guarantee certification. The examiner may need additional records, specialist input, an exemption, or follow-up before making a qualification decision.',
  },
  {
    question: 'How are South Carolina results reported?',
    answer:
      'Certified Medical Examiners submit required exam results electronically through FMCSA’s National Registry. South Carolina CDL holders should also keep their information current with SCDMV, maintain the correct self-certification category, and verify that their medical status is posted correctly.',
  },
  {
    question: 'Can I book a DOT physical at BioSpine?',
    answer:
      'Yes. Request an appointment online or call the Lake City office. Tell the team that you need a DOT physical and mention any deadline or medical documents you may need to bring.',
  },
];

export const metadata: Metadata = buildMetadata({
  title: 'DOT Physicals in Lake City, SC',
  description,
  path: pagePath,
});

export default function DotPhysicalsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Commercial driver exams"
        title="DOT physicals for South Carolina commercial drivers"
        description="Complete your FMCSA physical qualification exam with Dr. Chucky Jordan, a certified Medical Examiner listed on the National Registry."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'DOT Physicals', href: pagePath },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-biospine lg:col-span-7">
            <h2 className="!mt-0">A local, federally listed examiner</h2>
            <p>
              DOT physicals evaluate whether a commercial driver meets federal
              physical qualification standards for safely operating a commercial
              motor vehicle. The examination must be completed by a Medical
              Examiner listed on the FMCSA National Registry.
            </p>
            <p>
              Dr. Jordan is listed at BioSpine&rsquo;s current Lake City address as a
              certified Doctor of Chiropractic Medical Examiner. Appointments are
              available for drivers from Lake City, Florence County, Williamsburg
              County, and communities across the Pee Dee region.
            </p>
            <a
              href={officialLinks.exam}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
            >
              Read FMCSA&rsquo;s DOT exam overview
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <aside className="rounded-sm bg-brand-ink p-7 text-white sm:p-9 lg:col-span-5">
            <BadgeCheck className="h-7 w-7 text-brand-leaf" aria-hidden />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-leaf">
              FMCSA National Registry
            </p>
            <h2 className="mt-3 !text-2xl !text-white">Certification verified</h2>
            <dl className="mt-6 space-y-4 border-t border-white/15 pt-5 text-sm">
              <div>
                <dt className="text-slate-400">Medical Examiner</dt>
                <dd className="mt-1 text-white">{siteConfig.doctor.name}, {siteConfig.doctor.credential}</dd>
              </div>
              <div>
                <dt className="text-slate-400">National Registry number</dt>
                <dd className="mt-1 font-medium tabular-nums text-white">
                  {siteConfig.doctor.fmcsaNationalRegistryNumber}
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Practice address</dt>
                <dd className="mt-1 text-white">{siteConfig.address.full}</dd>
              </div>
            </dl>
            <a
              href={officialLinks.registry}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-leaf underline decoration-brand-leaf/40 underline-offset-4 hover:decoration-brand-leaf"
            >
              Verify in the federal registry
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Before your appointment"
          title="Bring the information the examiner needs"
          description="Complete records can reduce delays when a health condition, medication, or exemption requires documentation."
        />
        <ul role="list" className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {bringItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-3xl text-sm leading-relaxed text-slate-600">
          Do not stop prescribed medication for the exam unless the clinician who
          manages it tells you to. Call ahead if you are unsure which records apply
          to your situation.
        </p>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="The examination"
          title="What a DOT physical includes"
          description="The exam follows FMCSA forms and standards; it is not a routine chiropractic treatment visit."
        />
        <ol className="grid gap-8 lg:grid-cols-3">
          <li className="border-t-2 border-brand-green pt-5">
            <p className="label-muted">Step 1</p>
            <FileCheck2 className="mt-4 h-6 w-6 text-brand-green" aria-hidden />
            <h2 className="mt-4 !text-2xl">History and documents</h2>
            <p className="mt-3 text-slate-600">
              You complete the driver portion of Form MCSA-5875. The examiner
              reviews health history, medications, prior testing, and relevant
              treating-clinician records.
            </p>
          </li>
          <li className="border-t-2 border-brand-green pt-5">
            <p className="label-muted">Step 2</p>
            <ShieldCheck className="mt-4 h-6 w-6 text-brand-green" aria-hidden />
            <h2 className="mt-4 !text-2xl">Required checks</h2>
            <p className="mt-3 text-slate-600">
              The visit includes vision, hearing, blood pressure and pulse,
              urinalysis, and a physical examination of the body systems required
              by the federal report form.
            </p>
          </li>
          <li className="border-t-2 border-brand-green pt-5">
            <p className="label-muted">Step 3</p>
            <BadgeCheck className="mt-4 h-6 w-6 text-brand-green" aria-hidden />
            <h2 className="mt-4 !text-2xl">Qualification decision</h2>
            <p className="mt-3 text-slate-600">
              Dr. Jordan explains the result, any follow-up documentation needed,
              and the certification period when you meet the applicable standards.
              Certification can be issued for up to 24 months or for a shorter term.
            </p>
          </li>
        </ol>
        <a
          href={officialLinks.form}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
        >
          View official Form MCSA-5875 information
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="South Carolina CDL records"
              title="Electronic reporting still needs a driver check"
            />
          </div>
          <div className="prose-biospine lg:col-span-7">
            <p>
              BioSpine submits the required examination result through FMCSA&rsquo;s
              National Registry. SCDMV announced electronic acceptance of medical
              certification information for exams performed on or after June 23,
              2025.
            </p>
            <p>
              Drivers remain responsible for the correct South Carolina CDL
              self-certification category and should verify that their medical
              status is reflected correctly in their SCDMV record. Keep any copy
              provided after the visit and follow current instructions from SCDMV
              and your employer.
            </p>
            <a
              href={officialLinks.southCarolina}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
            >
              Read the SCDMV electronic certification notice
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title="DOT physical FAQs" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="!text-white">Schedule your Lake City DOT physical</h2>
          <p className="mt-4 text-lg text-slate-300">
            Tell the BioSpine team you need a DOT exam and share any certification
            deadline when you request the appointment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={siteConfig.appointmentUrl} size="lg">
              <CalendarDays className="h-4 w-4" aria-hidden /> Request an appointment
            </LinkButton>
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </Section>

      <JsonLd
        id="ld-dot-physical-service"
        data={serviceSchema({
          name: 'DOT Physicals',
          serviceType: 'FMCSA commercial driver physical qualification examination',
          description,
          url: pageUrl,
        })}
      />
      <JsonLd id="ld-dot-physical-faq" data={faqSchema(faqs)} />
      <JsonLd
        id="ld-dot-physical-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Services', url: `${siteConfig.url}/services` },
          { name: 'DOT Physicals', url: pageUrl },
        ])}
      />
    </>
  );
}
