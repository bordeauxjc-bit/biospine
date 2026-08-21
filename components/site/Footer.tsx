import Link from 'next/link';
import { Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig, directionsUrl, formatHours } from '@/lib/site-config';

export function Footer() {
  const hours = formatHours();
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-brand-ink text-slate-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-slate-400">
              Chiropractic care for back pain, headaches, sports injuries, and
              arthritis in Lake City, South Carolina.
            </p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded border border-white/15 text-slate-300 hover:border-brand-leaf hover:text-brand-leaf transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-[1.15rem] w-[1.15rem]" aria-hidden />
            </a>
          </div>

          <div className="lg:col-span-4">
            <h3 className="label-light">Contact</h3>
            <address className="mt-5 space-y-4 text-[0.9375rem] not-italic">
              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{' '}
                {siteConfig.address.zip}
              </a>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="block font-display text-xl text-white hover:text-brand-leaf transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block break-words text-slate-400 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </address>
          </div>

          <div className="lg:col-span-4">
            <h3 className="label-light">Hours</h3>
            <ul className="mt-5 space-y-2 text-[0.9375rem]">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-slate-400">{h.day}</span>
                  <span
                    aria-hidden
                    className="flex-1 border-b border-dotted border-white/15 translate-y-[-0.2em]"
                  />
                  <span
                    className={
                      h.isClosed
                        ? 'text-slate-500'
                        : 'text-slate-200 tabular-nums'
                    }
                  >
                    {h.display}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav
          className="mt-14 border-t border-white/12 pt-7"
          aria-label="Footer navigation"
        >
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[0.9375rem]">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 border-t border-white/12 pt-7 flex flex-col sm:flex-row justify-between gap-3 text-[0.8125rem] text-slate-500">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>
            {siteConfig.doctor.name}, {siteConfig.doctor.credential} ·{' '}
            {siteConfig.doctor.license}
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-[0.8125rem] leading-relaxed text-slate-600">
          The information on this website is for general informational purposes
          only and does not constitute medical advice. For a medical emergency,
          call 911. Individual results vary and depend on condition, adherence
          to care plans, and other factors.
        </p>
      </div>
    </footer>
  );
}
