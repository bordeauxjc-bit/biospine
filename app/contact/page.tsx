import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Accessibility } from 'lucide-react';
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
        title="We're here to help"
        description={`Call, email, or send a message, we'll get back to you as soon as we can during office hours.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <Section tone="white">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <h2 className="!text-3xl !mt-0">Send us a message</h2>
            <p className="mt-3 text-slate-600">
              Fill out the form and we&rsquo;ll follow up by phone or email.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-ink">
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="mt-1 block text-xl font-serif font-semibold text-brand-green-dark hover:text-brand-green"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-green shrink-0 mt-0.5" aria-hidden />
                <div className="min-w-0">
                  <h3 className="font-serif text-base font-semibold text-brand-ink">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-slate-700 hover:text-brand-green-dark break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-ink">
                    Office
                  </h3>
                  <address className="mt-1 not-italic text-sm text-slate-700 leading-relaxed">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{' '}
                    {siteConfig.address.zip}
                  </address>
                  <a
                    href={directionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-brand-green-dark hover:text-brand-ink"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-green shrink-0 mt-0.5" aria-hidden />
                <div className="flex-1">
                  <h3 className="font-serif text-base font-semibold text-brand-ink">
                    Hours
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <dt className="text-slate-600">{h.day}</dt>
                        <dd
                          className={
                            h.isClosed
                              ? 'text-slate-400'
                              : 'text-brand-ink font-medium'
                          }
                        >
                          {h.display}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <Accessibility
                  className="h-5 w-5 text-brand-green shrink-0 mt-0.5"
                  aria-hidden
                />
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-ink">
                    Accessibility
                  </h3>
                  <ul
                    role="list"
                    className="mt-3 space-y-1.5 text-sm text-slate-700"
                  >
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" aria-hidden />
                      <span>Wheelchair accessible entrance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" aria-hidden />
                      <span>Wheelchair accessible parking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" aria-hidden />
                      <span>Wheelchair accessible restroom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className="h-5 w-5 text-amber-600 shrink-0 mt-0.5"
                  aria-hidden
                />
                <div>
                  <h3 className="font-serif text-base font-semibold text-amber-900">
                    In an emergency
                  </h3>
                  <p className="mt-1 text-sm text-amber-900 leading-relaxed">
                    Chiropractic care is not emergency care. If you&rsquo;re
                    having a medical emergency, call <strong>911</strong> or go
                    to your nearest emergency room.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9]">
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
