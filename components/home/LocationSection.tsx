import { MapPin, Phone, Clock } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';
import {
  siteConfig,
  directionsUrl,
  mapEmbedUrl,
  formatHours,
} from '@/lib/site-config';

export function LocationSection() {
  const hours = formatHours();

  return (
    <Section tone="white" id="visit">
      <SectionHeading
        eyebrow="Plan your visit"
        title="Conveniently located in downtown Lake City"
        description="Easy to find, easy to park, and ready to help, six days a week by appointment."
      />

      <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] lg:aspect-auto min-h-[360px]">
          <iframe
            src={mapEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${siteConfig.name}`}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-brand-green shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-ink">
                  Address
                </h3>
                <address className="mt-2 not-italic text-slate-600 leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                </address>
                <LinkButton
                  href={directionsUrl()}
                  external
                  variant="ghost"
                  size="sm"
                  className="mt-3 !px-0"
                >
                  Get directions →
                </LinkButton>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-brand-green shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-brand-ink">
                  Call us
                </h3>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="mt-2 block text-2xl font-serif font-semibold text-brand-green-dark hover:text-brand-green transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-sm text-slate-500">
                  Se habla inglés. Call to book or ask about insurance.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-brand-green shrink-0 mt-0.5" aria-hidden />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-brand-ink">
                  Hours
                </h3>
                <dl className="mt-2 space-y-1 text-sm">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-4"
                    >
                      <dt className="text-slate-600">{h.day}</dt>
                      <dd
                        className={
                          h.isClosed ? 'text-slate-400' : 'text-brand-ink font-medium'
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
        </div>
      </div>
    </Section>
  );
}
