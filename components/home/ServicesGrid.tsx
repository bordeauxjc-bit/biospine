import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';

/**
 * Services as a numbered editorial index rather than a grid of bordered
 * cards with icon tiles. Hairlines carry the structure.
 */
export function ServicesGrid() {
  return (
    <Section tone="cream" id="services">
      <SectionHeading
        eyebrow="What we treat"
        title="Care for the things that keep you from moving well"
        description="From acute pain to long-term maintenance, treatment is planned around your goals and what your days actually demand of you."
      />

      <ul role="list" className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20">
        {siteConfig.services.map((service, i) => (
          <li key={service.slug}>
            <Link
              href={`/services#${service.slug}`}
              className="group flex gap-5 sm:gap-6 border-t border-brand-ink/12 py-7 sm:py-8 transition-colors hover:border-brand-green"
            >
              <span
                aria-hidden
                className="font-display text-sm text-slate-400 pt-1.5 tabular-nums group-hover:text-brand-green transition-colors"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="flex items-start justify-between gap-3 font-display text-xl sm:text-[1.375rem] font-semibold text-brand-ink group-hover:text-brand-green-dark transition-colors">
                  <span className="text-balance">{service.name}</span>
                  <ArrowUpRight
                    className="h-4 w-4 mt-1.5 shrink-0 text-slate-300 group-hover:text-brand-green transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-600">
                  {service.summary}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
