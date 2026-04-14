import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Crumb = {
  label: string;
  href: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
};

export function PageHeader({ eyebrow, title, description, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-slate to-brand-ink text-white">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute -right-20 top-1/2 -translate-y-1/2 h-[200%] w-auto"
          viewBox="0 0 400 600"
          fill="none"
        >
          <path
            d="M250 40 C 130 120, 130 240, 250 300 C 370 360, 370 480, 250 560"
            stroke="#10B981"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container relative py-16 sm:py-20 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-400">
              {crumbs.map((crumb, idx) => (
                <li key={crumb.href} className="flex items-center gap-1">
                  {idx > 0 && (
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {idx === crumbs.length - 1 ? (
                    <span className="text-slate-300">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-brand-green-light"
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
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-light mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-slate-200 text-pretty leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
