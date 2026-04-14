import Link from 'next/link';
import { ArrowRight, Activity, Bone, Brain, Dumbbell, Flame, Sparkles } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';

const iconMap = {
  'chiropractic-adjustments': Bone,
  'back-and-neck-pain': Activity,
  'headache-migraine-care': Brain,
  'sports-injury-care': Dumbbell,
  'arthritis-relief': Flame,
  'wellness-and-weight-loss': Sparkles,
} as const;

export function ServicesGrid() {
  return (
    <Section tone="white" id="services">
      <SectionHeading
        eyebrow="What we treat"
        title="Comprehensive chiropractic care for every stage of life"
        description="From acute pain relief to long-term wellness, our care plans are tailored to your goals and the demands of daily life."
      />

      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {siteConfig.services.map((service) => {
          const Icon = iconMap[service.slug as keyof typeof iconMap] ?? Bone;
          return (
            <li key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all hover:border-brand-green hover:shadow-lg focus-visible:border-brand-green"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-serif font-semibold text-brand-ink">
                  {service.name}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
