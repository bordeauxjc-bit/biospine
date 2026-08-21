import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * Conditions as a rule-divided index in columns, not a field of identical
 * rounded chips.
 */
export function ConditionsList() {
  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionLabel className="mb-5">Conditions we see</SectionLabel>
          <h2 className="text-balance">
            Most of what walks through the door
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Chiropractic care has good evidence behind it for a range of
            musculoskeletal and nerve-related problems. If something here
            sounds like you, it&rsquo;s worth a call.
          </p>
          <div className="mt-8">
            <LinkButton href="/conditions" variant="outline">
              View all conditions
            </LinkButton>
          </div>
        </div>

        <ul
          role="list"
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 content-start"
        >
          {siteConfig.conditions.map((condition) => (
            <li key={condition}>
              <Link
                href="/conditions"
                className="group flex items-baseline justify-between gap-4 border-t border-brand-ink/12 py-4 text-[0.9375rem] font-medium text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green-dark"
              >
                <span>{condition}</span>
                <span
                  aria-hidden
                  className="text-slate-300 transition-all group-hover:text-brand-green group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
