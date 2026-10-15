import type { Metadata } from 'next';
import { AlertTriangle, Mail, Phone } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/ContactForm';
import { BookingButton } from '@/components/BookingButton';
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
  description: `Book with Dr. Chucky Jordan on Zocdoc, call ${siteConfig.phone}, or contact BioSpine at 214 John Street in Lake City, SC.`,
  path: '/contact',
});

export default function ContactPage() {
  const hours = formatHours();
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? '';
  const formEnabled = Boolean(accessKey);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a visit at BioSpine in Lake City"
        description={`Choose an appointment time on Zocdoc or call ${siteConfig.phone}. New and returning patients are welcome at 214 John Street.`}
        booking
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <Section tone="white" id="appointment-form">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <div className="mb-10 rounded-sm border border-brand-green/25 bg-brand-cream p-6 sm:p-8">
              <h2 className="!mt-0 !text-3xl">Choose your appointment time</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Open Dr. Jordan&rsquo;s Zocdoc schedule, choose your visit reason,
                and enter your insurance or self-pay preference. Select the
                patient type that fits your visit.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookingButton placement="contact">Book a new patient visit</BookingButton>
                <BookingButton placement="contact" patientType="existing" variant="outline">Book a return visit</BookingButton>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Scheduling opens on Zocdoc. Call the office if you need help
                finding a time or confirming coverage.
              </p>
            </div>
            <h2 className="!text-3xl !mt-0">
              {formEnabled ? 'Prefer the office to contact you?' : 'Contact the office directly'}
            </h2>
            {formEnabled ? (
              <>
                <p className="mt-3 text-slate-600">
                  Send an appointment request below. The team will follow up
                  during office hours to arrange a time. A form request is
                  confirmed when the office contacts you.
                </p>
                <div className="mt-8">
                  <ContactForm accessKey={accessKey} />
                </div>
              </>
            ) : (
              <div className="mt-6 border-l-2 border-brand-green bg-brand-cream p-6 sm:p-7">
                <p className="font-medium text-brand-ink">
                  Need help with scheduling?
                </p>
                <p className="mt-2 max-w-xl text-slate-600">
                  Please call or email BioSpine for scheduling. Do not send
                  private medical details by email.
                </p>
                <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="inline-flex min-h-12 items-center gap-2 rounded bg-brand-green px-5 py-3 font-medium text-white transition-colors hover:bg-brand-green-dark focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                  >
                    <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex min-h-12 items-center gap-2 rounded border border-brand-ink/20 bg-white px-5 py-3 font-medium text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green-dark focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
                  >
                    <Mail className="h-4 w-4" aria-hidden /> Email BioSpine
                  </a>
                </div>
              </div>
            )}
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
                              ? 'text-slate-600'
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
