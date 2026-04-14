import { Phone, MapPin } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig, directionsUrl } from '@/lib/site-config';

export function CTABanner() {
  return (
    <section
      className="bg-brand-green text-white"
      aria-label="Ready to get started"
    >
      <div className="container py-14 sm:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="!text-white">
              Ready to feel better?
            </h2>
            <p className="mt-3 text-lg text-white/90">
              Call today to schedule your first visit with {siteConfig.doctor.name}.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="secondary"
              size="lg"
              className="!bg-brand-ink hover:!bg-black"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {siteConfig.phone}
            </LinkButton>
            <LinkButton
              href={directionsUrl()}
              external
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!text-brand-green-dark"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              Visit us
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
