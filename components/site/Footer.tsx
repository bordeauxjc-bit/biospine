import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import {
  siteConfig,
  directionsUrl,
  formatHours,
} from '@/lib/site-config';

export function Footer() {
  const hours = formatHours();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand + description */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-base leading-relaxed text-slate-400 max-w-md">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-slate-500">
              {siteConfig.legalName}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-brand-green hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <a
                href={directionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-brand-green-light transition-colors"
              >
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-brand-green" aria-hidden />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="flex items-center gap-3 hover:text-brand-green-light transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand-green" aria-hidden />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 hover:text-brand-green-light transition-colors break-all"
              >
                <Mail className="h-5 w-5 shrink-0 text-brand-green" aria-hidden />
                {siteConfig.email}
              </a>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-green" aria-hidden />
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between gap-4 text-slate-400"
                >
                  <dt className="font-medium">{h.day.slice(0, 3)}</dt>
                  <dd className={h.isClosed ? 'text-slate-500' : ''}>
                    {h.display}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Quick links */}
        <nav
          className="mt-12 pt-8 border-t border-white/10"
          aria-label="Footer navigation"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-brand-green-light transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>
            {siteConfig.doctor.name}, {siteConfig.doctor.credential}
          </p>
        </div>

        <p className="mt-6 text-xs text-slate-600 leading-relaxed max-w-3xl">
          The information on this website is for general informational purposes
          only and does not constitute medical advice. For a medical emergency,
          call 911. Individual results vary and depend on condition, adherence
          to care plans, and other factors.
        </p>
      </div>
    </footer>
  );
}
