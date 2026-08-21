import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';

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

/**
 * Inner-page masthead. Light and typographic rather than a dark gradient
 * slab, so it reads as the top of a document instead of a hero banner.
 */
export function PageHeader({ eyebrow, title, description, crumbs }: Props) {
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
      </div>
    </section>
  );
}
