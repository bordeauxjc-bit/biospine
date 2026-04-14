import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

export function ConditionsList() {
  return (
    <Section tone="cream">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
        <div className="lg:col-span-1">
          <SectionHeading
            eyebrow="Conditions we address"
            title="Pain relief that gets you back to doing what you love"
            description="Chiropractic care is proven to help a wide range of musculoskeletal and neurological conditions. If you're experiencing any of these, we can help."
          />
          <LinkButton href="/conditions" variant="secondary">
            View all conditions
          </LinkButton>
        </div>

        <ul
          role="list"
          className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3 content-start"
        >
          {siteConfig.conditions.map((condition) => (
            <li key={condition}>
              <Link
                href="/conditions"
                className="block rounded-lg bg-white px-4 py-3 text-sm font-medium text-brand-ink border border-slate-200 hover:border-brand-green hover:text-brand-green-dark transition-colors"
              >
                {condition}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
