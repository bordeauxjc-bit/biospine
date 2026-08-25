import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Accessibility, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { OfficeGallery } from '@/components/home/OfficeGallery';
import { Reviews } from '@/components/home/Reviews';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  locationPageSchema,
} from '@/components/seo/schemas';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { conditionGuides } from '@/lib/conditions';
import { buildMetadata } from '@/lib/seo';
import {
  directionsUrl,
  formatHours,
  mapEmbedUrl,
  siteConfig,
} from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Lake City Chiropractor & DOT Physicals Office',
  description: `Visit BioSpine at ${siteConfig.address.full} for chiropractic care, shockwave therapy, injury evaluation, and DOT physicals with Dr. Chucky S. Jordan.`,
  path: '/locations/lake-city',
});

const locationFaqs = [
  {
    question: 'Where is BioSpine located in Lake City?',
    answer: `BioSpine is at ${siteConfig.address.full}. Look for the brick building and the BioSpine logo on the glass entrance door.`,
  },
  {
    question: 'Is parking and the entrance wheelchair accessible?',
    answer:
      'Yes. The John Street office has wheelchair accessible parking, entrance, and restroom facilities.',
  },
  {
    question: 'Does the Lake City office perform DOT physicals?',
    answer:
      'Yes. Dr. Jordan is listed on the FMCSA National Registry of Certified Medical Examiners and performs DOT physicals at this office.',
  },
  {
    question: 'Does BioSpine accept insurance?',
    answer: `BioSpine accepts Medicare. Call ${siteConfig.phone} before your visit to ask about another plan and confirm your specific coverage.`,
  },
  {
    question: 'Are the towns on the site additional BioSpine locations?',
    answer:
      'No. BioSpine operates one office at 214 John Street in Lake City. The other town names describe communities whose residents travel to this office.',
  },
] as const;

export default function LakeCityLocationPage() {
  const hours = formatHours();

  return (
    <>
      <PageHeader
        eyebrow="Lake City office"
        title="Chiropractic care and DOT physicals at 214 John Street"
        description="This is BioSpine’s only office: a weekday chiropractic and commercial-driver exam practice led by Dr. Chucky S. Jordan in Lake City, South Carolina."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Lake City Office', href: '/locations/lake-city' },
        ]}
      />

      <Section tone="white">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10">
              <Image
                src="/images/dr-jordan.jpg"
                alt={`${siteConfig.doctor.name}, ${siteConfig.doctor.credential}, owner of BioSpine in Lake City, SC`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Your chiropractor"
              title={`Care with ${siteConfig.doctor.name}, ${siteConfig.doctor.credential}`}
              description={`Dr. Jordan began practicing in 2015 and opened BioSpine in Lake City in ${siteConfig.doctor.bioSpineOpeningYear}. He examines before treating and explains when imaging or another provider should come first.`}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-brand-ink/15 pt-5">
                <ShieldCheck className="h-5 w-5 text-brand-green" aria-hidden />
                <h2 className="mt-4 !text-xl">Verified credentials</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                  {siteConfig.doctor.license}; NPI {siteConfig.doctor.npi}; FMCSA
                  National Registry Medical Examiner.
                </p>
              </div>
              <div className="border-t border-brand-ink/15 pt-5">
                <Accessibility className="h-5 w-5 text-brand-green" aria-hidden />
                <h2 className="mt-4 !text-xl">Accessible office</h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                  Wheelchair accessible parking, entrance, and restroom at the
                  John Street location.
                </p>
              </div>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={siteConfig.appointmentUrl} size="lg">
                Request an appointment
              </LinkButton>
              <LinkButton href={`tel:${siteConfig.phoneE164}`} variant="outline" size="lg">
                <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Care available here"
          title="Services at the Lake City office"
          description="Each service begins with a history and examination to determine whether it fits your condition and goals."
        />
        <ul role="list" className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => (
            <li key={service.href} className="border-t border-brand-ink/15 py-5">
              <Link
                href={service.href}
                className="font-display text-lg font-semibold text-brand-ink transition-colors hover:text-brand-green-dark"
              >
                {service.name}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.summary}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <OfficeGallery />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Directions"
              title="Plan your visit to John Street"
              description="The address, office photos, and map on this page all refer to the same Lake City location."
            />
            <div className="aspect-[16/11] overflow-hidden rounded-sm ring-1 ring-brand-ink/10">
              <iframe
                src={mapEmbedUrl()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map to ${siteConfig.name}`}
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl>
              <div className="border-t border-brand-ink/12 pb-6 pt-5">
                <dt className="label-muted">Address</dt>
                <dd className="mt-3">
                  <address className="not-italic font-display text-xl leading-relaxed text-brand-ink">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </address>
                  <LinkButton href={directionsUrl()} external variant="quiet" className="mt-4">
                    <MapPin className="h-4 w-4" aria-hidden /> Get directions
                  </LinkButton>
                </dd>
              </div>
              <div className="border-t border-brand-ink/12 pb-6 pt-5">
                <dt className="label-muted">Hours</dt>
                <dd className="mt-3">
                  <ul className="space-y-2 text-[0.9375rem]">
                    {hours.map((entry) => (
                      <li key={entry.day} className="flex items-baseline justify-between gap-4">
                        <span className="text-slate-600">{entry.day}</span>
                        <span aria-hidden className="flex-1 translate-y-[-0.2em] border-b border-dotted border-slate-300" />
                        <span className={entry.isClosed ? 'text-slate-600' : 'font-medium tabular-nums text-brand-ink'}>
                          {entry.display}
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="border-t border-brand-ink/12 pb-6 pt-5">
                <dt className="label-muted">Coverage</dt>
                <dd className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
                  BioSpine accepts Medicare. Call before your visit to ask about
                  another plan and confirm your specific benefits.
                </dd>
              </div>
              <div className="border-t border-brand-ink/12 pt-5">
                <dt className="label-muted">Parking</dt>
                <dd className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
                  Parking is available at the office. Look for the BioSpine logo
                  on the glass entrance door.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Common concerns"
          title="Conditions evaluated at BioSpine"
          description="These guides explain common symptom patterns, what the examination checks, and signs that need prompt medical attention."
        />
        <ul role="list" className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {conditionGuides.slice(0, 6).map((condition) => (
            <li key={condition.slug} className="border-t border-brand-ink/15 py-5">
              <Link
                href={`/conditions/${condition.slug}`}
                className="font-display text-lg font-semibold text-brand-ink transition-colors hover:text-brand-green-dark"
              >
                {condition.name}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {condition.summary}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Reviews />

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Office questions</SectionLabel>
            <h2 className="text-balance">Before you drive to Lake City</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Every BioSpine appointment is at this office. Residents of nearby
              Pee Dee communities travel here for care.
            </p>
            <div className="mt-7">
              <LinkButton href="/areas-we-serve" variant="outline">
                View communities served
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={locationFaqs} />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel className="!text-brand-green-light">Lake City appointments</SectionLabel>
          <h2 className="mt-5 !text-white">Talk with the John Street office</h2>
          <p className="mt-4 text-lg text-slate-300">
            Call during weekday office hours or send a short appointment request.
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

      <JsonLd id="ld-lake-city-page" data={locationPageSchema()} />
      <JsonLd id="ld-lake-city-faq" data={faqSchema(locationFaqs)} />
      <JsonLd
        id="ld-lake-city-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Lake City Office', url: `${siteConfig.url}/locations/lake-city` },
        ])}
      />
    </>
  );
}
