import type { Metadata } from 'next';
import Link from 'next/link';
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
    'BioSpine provides chiropractic care, shockwave therapy, injury treatment, and DOT physicals from one Lake City office serving nearby Pee Dee communities.',
  path: '/areas-we-serve',
});

const communities = siteConfig.areaServed.filter((area) => area !== 'Pee Dee region');

export default function AreasWeServePage() {
  return (
    <>
      <PageHeader
        eyebrow="Areas we serve"
        title="One Lake City office, serving the Pee Dee"
        description={`Patients drive to ${siteConfig.address.full} from Florence, Kingstree, Hemingway, Pamplico, and other nearby communities.`}
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
              title="Every appointment is at 214 John Street"
              description="BioSpine does not operate satellite offices. The towns listed here are communities served by the Lake City practice."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/locations/lake-city" variant="primary">
                Lake City office details
              </LinkButton>
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <article>
            <h2 className="!text-2xl">
              <Link href="/locations/lake-city" className="transition-colors hover:text-brand-green-dark">
                Lake City chiropractor
              </Link>
            </h2>
            <p className="mt-3 text-slate-600">The office is located on John Street in Lake City with weekday appointment hours and accessible parking, entrance, and restroom.</p>
          </article>
          <article>
            <h2 className="!text-2xl">
              <Link href="/services/back-neck-pain" className="transition-colors hover:text-brand-green-dark">
                Back and neck pain
              </Link>
            </h2>
            <p className="mt-3 text-slate-600">Dr. Jordan evaluates low back pain, neck pain, sciatica, stiffness, and related movement problems before recommending care.</p>
          </article>
          <article>
            <h2 className="!text-2xl">
              <Link href="/services/headache-migraine-care" className="transition-colors hover:text-brand-green-dark">
                Neck pain and headaches
              </Link>
            </h2>
            <p className="mt-3 text-slate-600">BioSpine examines appropriate neck-related headache patterns and refers symptoms that belong in medical or emergency care.</p>
          </article>
          <article>
            <h2 className="!text-2xl">
              <Link href="/services/dot-physicals" className="transition-colors hover:text-brand-green-dark">
                DOT physicals
              </Link>
            </h2>
            <p className="mt-3 text-slate-600">Dr. Jordan is listed on the FMCSA National Registry and performs commercial-driver physicals at the Lake City office.</p>
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
