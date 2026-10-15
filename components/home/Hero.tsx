import Image from 'next/image';
import { CalendarDays, Phone } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { BookingButton } from '@/components/BookingButton';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * Editorial, photograph-led hero on warm paper.
 *
 * Deliberately not a dark gradient slab: the strongest credibility signal a
 * small practice has is the doctor's actual face and the actual building,
 * so the real photography carries the section and the type stays quiet.
 */
export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-cream"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-paper pointer-events-none"
        aria-hidden
      />

      <div className="container relative pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionLabel>BioSpine Health &amp; Wellness</SectionLabel>

            <h1 id="hero-heading" className="mt-7 text-balance">
              Chiropractic care in Lake City, SC
            </h1>

            <p className="mt-7 max-w-xl text-lg sm:text-xl text-slate-700 text-pretty leading-relaxed">
              Get an exam and a clear care plan with {siteConfig.doctor.name}.
              Chiropractic visits and DOT physicals at 214 John Street.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <BookingButton
                placement="hero"
                variant="primary"
                size="lg"
              >
                <CalendarDays className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                Book on Zocdoc
              </BookingButton>
              <LinkButton
                href={`tel:${siteConfig.phoneE164}`}
                variant="outline"
                size="lg"
                aria-label={`Call ${siteConfig.phone}`}
              >
                <Phone className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                Call {siteConfig.phone}
              </LinkButton>
            </div>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              New and returning patients welcome. View appointment times and
              choose your visit reason on Zocdoc. Call with insurance questions.
            </p>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10">
                <Image
                  src="/images/dr-jordan.jpg"
                  alt={`${siteConfig.doctor.name}, ${siteConfig.doctor.title}, at BioSpine Health and Wellness in Lake City, SC`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline gap-3 border-t border-brand-ink/12 pt-3">
                <span className="font-display text-lg text-brand-ink">
                  {siteConfig.doctor.name}
                </span>
                <span className="text-sm text-slate-500">
                  {siteConfig.doctor.credential} · {siteConfig.doctor.license}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
