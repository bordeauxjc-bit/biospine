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
        eyebrow="Services"
        title="Chiropractic care, injury treatment, and DOT exams in Lake City"
        description="Dr. Jordan treats common back, neck, joint, and tendon problems and performs FMCSA physicals for commercial drivers—all at the John Street office."
      />

      <ul role="list" className="grid sm:grid-cols-2 gap-x-12 lg:gap-x-20">
        {siteConfig.services.map((service) => (
          <li key={service.slug}>
            <Link
              href={service.href}
              className="group block border-t border-brand-ink/12 py-7 transition-colors hover:border-brand-green sm:py-8"
            >
              <h3 className="flex items-start justify-between gap-3 font-display text-xl font-semibold text-brand-ink transition-colors group-hover:text-brand-green-dark sm:text-[1.375rem]">
                <span className="text-balance">{service.name}</span>
                <ArrowUpRight
                  className="mt-1.5 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-green"
                  aria-hidden
                />
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-600">
                {service.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
