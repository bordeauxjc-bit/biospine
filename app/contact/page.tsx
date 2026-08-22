import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import {
  siteConfig,
  directionsUrl,
  mapEmbedUrl,
  formatHours,
} from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Location',
  description: `Contact ${siteConfig.name} in Lake City, SC. Call ${siteConfig.phone}, email us, get directions, or send a message using the form.`,
  path: '/contact',
});

export default function ContactPage() {
  const hours = formatHours();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Call or message the John Street office"
        description={`Call ${siteConfig.phone} during office hours or send a short appointment request. The form is for scheduling, not private medical details or emergencies.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <Section tone="white" id="appointment-form">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <h2 className="!text-3xl !mt-0">Request an appointment</h2>
            <p className="mt-3 text-slate-600">
              Share your contact details and preferred reason for visiting. We&rsquo;ll
              follow up by phone or email during office hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <dl className="rounded-sm border border-brand-ink/12 bg-brand-cream px-6 py-2">
              <div className="border-t border-brand-ink/12 py-5 first:border-t-0">
                <dt className="label-muted">Phone</dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="font-display text-xl text-brand-ink hover:text-brand-green-dark transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>

              <div className="border-t border-brand-ink/12 py-5">
                <dt className="label-muted">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-[0.9375rem] text-slate-700 hover:text-brand-green-dark transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>

              <div className="border-t border-brand-ink/12 py-5">
                <dt className="label-muted">Office</dt>
                <dd className="mt-2">
                  <address className="not-italic text-[0.9375rem] leading-relaxed text-slate-700">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{' '}
                    {siteConfig.address.zip}
                  </address>
                  <a
                    href={directionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-block text-[0.9375rem] font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
                  >
                    Get directions
                  </a>
                </dd>
              </div>

              <div className="border-t border-brand-ink/12 py-5">
                <dt className="label-muted">Hours</dt>
                <dd className="mt-3">
                  <ul className="space-y-2 text-[0.9375rem]">
                    {hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span className="text-slate-600">{h.day}</span>
                        <span
                          aria-hidden
                          className="flex-1 translate-y-[-0.2em] border-b border-dotted border-slate-300"
                        />
                        <span
                          className={
                            h.isClosed
                              ? 'text-slate-400'
                              : 'font-medium tabular-nums text-brand-ink'
                          }
                        >
                          {h.display}
                        </span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>

              <div className="border-t border-brand-ink/12 py-5">
                <dt className="label-muted">Accessibility</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-slate-700">
                  Wheelchair accessible entrance, parking, and restroom.
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-brand-gold pl-4">
              <AlertTriangle
                className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-brand-gold"
                aria-hidden
              />
              <p className="text-sm leading-relaxed text-slate-600">
                Chiropractic care is not emergency care. If you&rsquo;re having
                a medical emergency, call <strong>911</strong> or go to your
                nearest emergency room.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <div className="aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-brand-ink/10">
          <iframe
            src={mapEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${siteConfig.name}`}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </Section>

      <JsonLd
        id="ld-contact-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Contact', url: `${siteConfig.url}/contact` },
        ])}
      />
    </>
  );
}
