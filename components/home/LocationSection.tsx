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
        title="Chiropractic care on John Street in Lake City"
        description="Easy to reach, easy to park, and open weekdays by appointment. Look for the brick building with the BioSpine logo on the door."
      />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-sm ring-1 ring-brand-ink/10 aspect-[16/11]">
            <iframe
              src={mapEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${siteConfig.name}`}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <dl>
            <div className="border-t border-brand-ink/12 pt-5 pb-6">
              <dt className="label-muted">Address</dt>
              <dd className="mt-3">
                <address className="not-italic font-display text-xl text-brand-ink leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                </address>
                <a
                  href={directionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[0.9375rem] font-medium text-brand-green-dark underline underline-offset-4 decoration-brand-green/35 hover:decoration-brand-green"
                >
                  Get directions
                </a>
              </dd>
            </div>

            <div className="border-t border-brand-ink/12 pt-5 pb-6">
              <dt className="label-muted">Call</dt>
              <dd className="mt-3">
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="font-display text-2xl text-brand-ink hover:text-brand-green-dark transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Call to book or to check whether we take your plan.
                </p>
              </dd>
            </div>

            <div className="border-t border-brand-ink/12 pt-5">
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
                        className="flex-1 border-b border-dotted border-slate-300 translate-y-[-0.2em]"
                      />
                      <span
                        className={
                          h.isClosed
                            ? 'text-slate-400'
                            : 'text-brand-ink font-medium tabular-nums'
                        }
                      >
                        {h.display}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
