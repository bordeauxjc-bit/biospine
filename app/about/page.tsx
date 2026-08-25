import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, BadgeCheck, MapPin, Heart, Users } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { Mission } from '@/components/home/Mission';
import { JsonLd } from '@/components/seo/JsonLd';
import { doctorSchema, breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: `About ${siteConfig.doctor.name}`,
  description: `Meet ${siteConfig.doctor.fullName}, ${siteConfig.doctor.credential}, providing chiropractic care in Lake City, SC with over a decade of clinical experience.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Meet ${siteConfig.doctor.name}, ${siteConfig.doctor.credential}`}
        description="Dr. Jordan has practiced in Lake City for more than ten years. He examines before treating, explains his findings plainly, and refers out when chiropractic care is not the right fit."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <Mission />

      <Section tone="white">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative aspect-square overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10">
                <Image
                  src="/images/dr-jordan.jpg"
                  alt={`${siteConfig.doctor.name}, ${siteConfig.doctor.credential} at BioSpine Health and Wellness in Lake City, SC`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="font-display text-2xl font-semibold text-brand-ink">
                  {siteConfig.doctor.name}
                </p>
                <p className="text-slate-600">{siteConfig.doctor.title}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 prose-biospine">
            <h2 className="!mt-0">A Lake City chiropractor since 2015</h2>
            <p>
              {siteConfig.doctor.name} is a Doctor of Chiropractic and owner of{' '}
              {siteConfig.legalName} at {siteConfig.address.full}. He graduated
              from {siteConfig.doctor.education} in {siteConfig.doctor.graduationYear}{' '}
              and holds {siteConfig.doctor.license}.
            </p>
            <p>
              Dr. Jordan treats back and neck pain, sciatica, headache patterns
              linked to the neck, sports and auto injuries, arthritic stiffness,
              and selected chronic tendon problems. He also performs DOT
              physicals as an FMCSA-listed certified Medical Examiner.
            </p>

            <h3>What happens before treatment</h3>
            <p>
              Dr. Jordan reviews the history, examines the area, and checks for
              findings that should be handled by a medical clinician, imaging
              center, or rehabilitation provider. An appointment does not
              automatically lead to an adjustment.
            </p>
            <p>
              When chiropractic care does fit, he explains the technique, what
              improvement will be measured, and when the plan should be changed
              or stopped. Imaging is recommended when it can change the decision,
              not as a routine requirement for every new patient.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Our values"
          title="Four things the office is accountable for"
        />

        <ul
          role="list"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8"
        >
          {[
            {
              icon: Clock,
              title: '10+ years experience',
              text: 'Dr. Jordan has practiced in Lake City since graduating from Logan in 2015.',
            },
            {
              icon: Heart,
              title: 'Exam before treatment',
              text: 'The history and physical findings decide whether an adjustment belongs in the visit.',
            },
            {
              icon: BadgeCheck,
              title: 'Plain explanations',
              text: 'You should know what Dr. Jordan found, what he recommends, and what would make him change the plan.',
            },
            {
              icon: Users,
              title: 'One local office',
              text: `Every appointment is at ${siteConfig.address.street} in Lake City—not a rotating or satellite location.`,
            },
          ].map((v) => (
            <li
              key={v.title}
              className="border-t border-brand-ink/15 pt-6"
            >
              <v.icon
                className="h-[1.15rem] w-[1.15rem] text-brand-green"
                aria-hidden
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Serving the Pee Dee region"
          title="Patients drive in from Lake City and nearby Pee Dee towns"
          description="The names below are communities served by the John Street office, not additional BioSpine locations."
        />
        <div className="flex flex-wrap gap-2">
          {siteConfig.areaServed.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded border border-brand-green/25 bg-brand-green-pale px-3.5 py-2 text-sm font-medium text-brand-green-dark"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {area}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <LinkButton href="/new-patients" variant="primary">
            What to expect as a new patient
          </LinkButton>
          <LinkButton href="/contact" variant="outline">
            Contact our office
          </LinkButton>
        </div>
      </Section>

      <JsonLd id="ld-doctor" data={doctorSchema()} />
      <JsonLd
        id="ld-about-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'About', url: `${siteConfig.url}/about` },
        ])}
      />
    </>
  );
}
