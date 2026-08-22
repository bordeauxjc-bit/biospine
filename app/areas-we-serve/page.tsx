import type { Metadata } from 'next';
import { MapPin, Phone } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { directionsUrl, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Chiropractor Serving Lake City & the Pee Dee, SC',
  description:
    'BioSpine Health and Wellness welcomes chiropractic patients from Lake City, Florence, Kingstree, Hemingway, Pamplico, and surrounding Pee Dee communities.',
  path: '/areas-we-serve',
});

const communities = siteConfig.areaServed.filter((area) => area !== 'Pee Dee region');

export default function AreasWeServePage() {
  return (
    <>
      <PageHeader
        eyebrow="Areas we serve"
        title="One Lake City office, serving the Pee Dee"
        description={`BioSpine welcomes patients from throughout the region at ${siteConfig.address.full}.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas we serve', href: '/areas-we-serve' },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Regional care"
              title="Local enough to know the community"
              description="Patients come to Lake City for straightforward chiropractic care, shockwave therapy, injury evaluation, and help with back and neck pain. Every patient is treated at the same BioSpine office—these are service areas, not additional locations."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton href={directionsUrl()} external>
                <MapPin className="h-4 w-4" aria-hidden /> Get directions
              </LinkButton>
              <LinkButton href={`tel:${siteConfig.phoneE164}`} variant="outline">
                <Phone className="h-4 w-4" aria-hidden /> {siteConfig.phone}
              </LinkButton>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="!text-3xl">Communities our patients call home</h2>
            <ul role="list" className="mt-7 grid sm:grid-cols-2">
              {communities.map((area) => (
                <li key={area} className="border-t border-brand-ink/12 py-4 text-lg text-brand-ink sm:odd:pr-8 sm:even:pl-8">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-3">
          <article>
            <h2 className="!text-2xl">Lake City chiropractic care</h2>
            <p className="mt-3 text-slate-600">The office is located on John Street in Lake City with weekday appointment hours and accessible parking, entrance, and restroom.</p>
          </article>
          <article>
            <h2 className="!text-2xl">Focused shockwave therapy</h2>
            <p className="mt-3 text-slate-600">BioSpine offers focused ESWT for selected chronic tendon and soft-tissue problems after an appropriate evaluation.</p>
          </article>
          <article>
            <h2 className="!text-2xl">New patients welcome</h2>
            <p className="mt-3 text-slate-600">Call the office or send a brief appointment request. The office can also help confirm insurance before your visit.</p>
          </article>
        </div>
      </Section>

      <JsonLd id="ld-areas-breadcrumb" data={breadcrumbSchema([
        { name: 'Home', url: `${siteConfig.url}/` },
        { name: 'Areas We Serve', url: `${siteConfig.url}/areas-we-serve` },
      ])} />
    </>
  );
}
