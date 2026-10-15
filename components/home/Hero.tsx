import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Phone } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { BookingButton } from '@/components/BookingButton';
import { siteConfig } from '@/lib/site-config';

const treated = [
  { label: 'Back and neck pain', href: '/services/back-neck-pain' },
  { label: 'Headaches', href: '/services/headache-migraine-care' },
  { label: 'Car accident injuries', href: '/services/auto-accident-injury' },
  { label: 'Sports injuries', href: '/services/sports-injury-care' },
  { label: 'Stubborn tendon pain', href: '/services/shockwave-therapy' },
  { label: 'DOT physicals', href: '/services/dot-physicals' },
];

/** Keeps "Dr. Chucky S. Jordan" from breaking across lines. */
const doctorName = siteConfig.doctor.name.replace(/ /g, ' ');

function clock(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  const h12 = hours % 12 || 12;
  return minutes ? `${h12}:${String(minutes).padStart(2, '0')}` : `${h12}`;
}

/**
 * "Weekdays, 9 to 5" when every weekday shares one schedule and the weekend
 * is closed. Read from siteConfig so the dateline cannot drift from the hours
 * listed everywhere else; any other pattern falls back to the phone number.
 */
function datelineHours() {
  const weekend = new Set(['Saturday', 'Sunday']);
  const weekdays = siteConfig.hours.filter((h) => !weekend.has(h.day));
  const [first] = weekdays;
  const uniform =
    first?.open &&
    first.close &&
    weekdays.every((h) => h.open === first.open && h.close === first.close);
  const weekendClosed = siteConfig.hours
    .filter((h) => weekend.has(h.day))
    .every((h) => !h.open);
  return uniform && weekendClosed && first.open && first.close
    ? `Weekdays, ${clock(first.open)} to ${clock(first.close)}`
    : siteConfig.phone;
}

/**
 * Home hero, set like the front page of a small-town paper: a dateline between
 * rules, one large headline, then three ruled columns.
 *
 * The H1 opens with a kicker carrying the local search phrase, so Google still
 * reads "Chiropractic care in Lake City, SC" in the heading, while the display
 * lines are free to say something a patient would remember. The second line is
 * the practice's own domain line. The sr-only full stop keeps screen readers
 * from running the kicker into the headline.
 *
 * The photo is not marked priority: the headline is the largest element above
 * the fold at every width, so it is the LCP, and on phones the photo sits well
 * below the first screen.
 */
export function Hero() {
  return (
    <section className="relative bg-brand-cream" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-paper pointer-events-none" aria-hidden />

      <div className="container relative pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pb-20">
        <div className="border-t-[3px] border-brand-ink" />
        <div className="mt-[3px] flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-y border-brand-ink py-2 text-[0.6875rem] font-semibold uppercase tracking-label text-brand-ink/75">
          <span>{siteConfig.address.street.replace(/\bSt\b/, 'Street')}</span>
          <span className="hidden md:inline">
            {siteConfig.doctor.name}, {siteConfig.doctor.credential}
          </span>
          <span>{datelineHours()}</span>
        </div>

        <h1
          id="hero-heading"
          className="mt-7 text-balance text-[2.5rem] leading-[1.04] tracking-[-0.035em] sm:mt-9 sm:text-6xl sm:leading-[0.96] lg:text-[4.25rem] xl:text-[5.25rem]"
        >
          <span className="mb-5 block font-sans text-[0.75rem] font-semibold uppercase not-italic leading-none tracking-label text-brand-green-dark sm:text-[0.8125rem]">
            Chiropractic care in Lake City, SC
          </span>
          <span className="sr-only">. </span>
          <span className="block">You’ve put&nbsp;up&nbsp;with it long&nbsp;enough.</span>{' '}
          <span className="block italic text-brand-green-dark">Move differently.</span>
        </h1>

        <p className="mt-5 max-w-3xl text-pretty font-display text-xl italic leading-snug text-slate-700 sm:text-2xl">
          Adjustments, focused shockwave, Class&nbsp;IV laser and DOT physicals,
          with {doctorName} at the John Street office.
        </p>

        <div className="mt-8 grid border-t border-brand-ink lg:grid-cols-12">
          <div className="pt-6 lg:col-span-4 lg:pr-8">
            <p className="text-[1.0625rem] leading-relaxed text-slate-700 first-letter:float-left first-letter:mr-1.5 first-letter:mt-1 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:text-brand-green-dark">
              Get an exam and a clear care plan with {doctorName}. New and
              returning patients can see open times and choose a visit reason
              on Zocdoc, or call with insurance questions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <BookingButton placement="hero" variant="primary" size="lg" className="w-full sm:w-auto">
                <CalendarDays className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                Book on Zocdoc
              </BookingButton>
              <LinkButton
                href={`tel:${siteConfig.phoneE164}`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                aria-label={`Call ${siteConfig.phone}`}
              >
                <Phone className="h-[1.05rem] w-[1.05rem]" aria-hidden />
                Call {siteConfig.phone}
              </LinkButton>
            </div>
          </div>

          <figure className="mt-8 pt-6 lg:col-span-5 lg:mt-0 lg:border-l lg:border-brand-ink/20 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-sand">
              <Image
                src="/images/office/chiropractic-adjustment-at-biospine.webp"
                alt={`${siteConfig.doctor.name} performing a chiropractic adjustment for a patient at BioSpine in Lake City, SC`}
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
                style={{ objectPosition: '50% 26%' }}
              />
            </div>
            <figcaption className="mt-2.5 text-[0.8125rem] italic leading-snug text-slate-500">
              Dr. Jordan adjusting a patient at the John Street office.
            </figcaption>
          </figure>

          <nav
            className="mt-8 pt-6 lg:col-span-3 lg:mt-0 lg:border-l lg:border-brand-ink/20 lg:pl-8"
            aria-labelledby="treated-here"
          >
            <p
              id="treated-here"
              className="text-[0.6875rem] font-semibold uppercase tracking-label text-brand-ink/75"
            >
              Treated here
            </p>
            <ul role="list" className="mt-3">
              {treated.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-baseline justify-between gap-3 border-b border-brand-ink/15 py-2.5 font-display text-lg text-brand-ink transition-colors hover:text-brand-green-dark"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-green"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
