import { CalendarDays, Phone } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export function CTABanner() {
  return (
    <section
      className="bg-brand-green-dark text-white"
      aria-label="Request an appointment"
    >
      <div className="container py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-label text-white/85">
              Ready when you are
            </p>
            <h2 className="mt-5 !text-white text-balance">
              Send a request or call the office.
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              Tell us what is going on and what works for your schedule. Bring
              your insurance card and anything a previous provider sent you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <LinkButton
              href={siteConfig.appointmentUrl}
              size="lg"
              className="!bg-white !text-brand-green-dark hover:!bg-brand-cream focus-visible:!ring-white"
            >
              <CalendarDays className="h-[1.05rem] w-[1.05rem]" aria-hidden />
              Request an appointment
            </LinkButton>
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10 hover:!border-white focus-visible:!ring-white"
            >
              <Phone className="h-[1.05rem] w-[1.05rem]" aria-hidden />
              Call {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
