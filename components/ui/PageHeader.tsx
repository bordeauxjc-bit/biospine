import Link from 'next/link';
import { CalendarDays, Phone } from 'lucide-react';
import { BookingButton } from '@/components/BookingButton';
import { LinkButton } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { siteConfig } from '@/lib/site-config';

type Crumb = {
  label: string;
  href: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  booking?: boolean;
};

/**
 * Inner-page masthead. Light and typographic rather than a dark gradient
 * slab, so it reads as the top of a document instead of a hero banner.
 */
export function PageHeader({ eyebrow, title, description, crumbs, booking = false }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-brand-ink/10 bg-brand-cream">
      <div
        className="absolute inset-0 bg-paper pointer-events-none"
        aria-hidden
      />

      <div className="container relative py-14 sm:py-20 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.8125rem] text-slate-500">
              {crumbs.map((crumb, idx) => (
                <li key={crumb.href} className="flex items-center gap-2.5">
                  {idx > 0 && (
                    <span aria-hidden className="text-slate-300">
                      /
                    </span>
                  )}
                  {idx === crumbs.length - 1 ? (
                    <span className="text-slate-600">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-brand-green-dark transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <SectionLabel className="mb-5">{eyebrow}</SectionLabel>
        )}

        <h1 className="max-w-3xl text-balance">{title}</h1>

        {description && (
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-600 text-pretty leading-relaxed">
            {description}
          </p>
        )}
        {booking && (
          <div className="mt-7">
            <div className="flex flex-col gap-3 sm:flex-row">
              <BookingButton placement="page-header" size="lg">
                <CalendarDays className="h-4 w-4" aria-hidden /> Book on Zocdoc
              </BookingButton>
              <LinkButton href={`tel:${siteConfig.phoneE164}`} variant="outline" size="lg">
                <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
              </LinkButton>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Choose your visit reason, patient type, and insurance on Zocdoc.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
