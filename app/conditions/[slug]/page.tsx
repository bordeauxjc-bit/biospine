import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertTriangle, CalendarDays, CheckCircle2, Phone } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  medicalConditionSchema,
} from '@/components/seo/schemas';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { conditionGuides, getConditionGuide } from '@/lib/conditions';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return conditionGuides.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionGuide(slug);

  if (!condition) {
    return buildMetadata({
      title: 'Condition Guide Not Found',
      path: `/conditions/${slug}`,
      noindex: true,
    });
  }

  return buildMetadata({
    title: condition.seoTitle,
    description: condition.metaDescription,
    path: `/conditions/${condition.slug}`,
  });
}

export default async function ConditionGuidePage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionGuide(slug);

  if (!condition) notFound();

  const url = `${siteConfig.url}/conditions/${condition.slug}`;

  return (
    <>
      <PageHeader
        eyebrow="Condition guide"
        title={`${condition.name} care in Lake City, SC`}
        description={condition.summary}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Conditions', href: '/conditions' },
          { label: condition.name, href: `/conditions/${condition.slug}` },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-biospine lg:col-span-6">
            <h2 className="!mt-0">Understanding {condition.shortName.toLowerCase()}</h2>
            {condition.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="lg:col-span-6" aria-labelledby="symptoms-heading">
            <h2 id="symptoms-heading" className="!text-2xl">
              Symptoms people commonly describe
            </h2>
            <p className="mt-3 text-slate-600">
              These examples are not a diagnosis. Similar symptoms can have different causes.
            </p>
            <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-2">
              {condition.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    aria-hidden
                  />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why it happens"
              title="Common contributors"
              description="The examination is used to decide which possibilities fit your presentation and which do not."
            />
          </div>
          <ul role="list" className="lg:col-span-7">
            {condition.contributors.map((item) => (
              <li
                key={item}
                className="border-t border-brand-ink/15 py-4 text-[1.0625rem] text-slate-700 first:border-t-2 first:border-brand-green"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2>What the evaluation may include</h2>
            <ul role="list" className="mt-6 space-y-3">
              {condition.evaluation.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>When conservative care fits</h2>
            <ul role="list" className="mt-6 space-y-3">
              {condition.careApproach.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={condition.relatedService.href}
              className="mt-7 inline-flex min-h-11 items-center text-sm font-medium text-brand-green-dark underline decoration-brand-green/35 underline-offset-4 hover:decoration-brand-green"
            >
              Explore {condition.relatedService.label}
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <AlertTriangle className="h-7 w-7 text-brand-leaf" aria-hidden />
            <h2 className="mt-5 !text-white">When to seek urgent help</h2>
            <p className="mt-4 text-slate-300">
              BioSpine is not an emergency facility. Call 911 or seek urgent medical care for severe or rapidly changing symptoms.
            </p>
          </div>
          <ul role="list" className="lg:col-span-8">
            {condition.urgentSigns.map((sign) => (
              <li key={sign} className="border-t border-white/15 py-4 text-slate-200 first:border-brand-leaf">
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title={`About ${condition.shortName.toLowerCase()}`} />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={condition.faqs} />
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2>Start with an evaluation</h2>
          <p className="mt-4 text-lg text-slate-600">
            Visit BioSpine at {siteConfig.address.full}, or contact the office to discuss whether an appointment is the right next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={siteConfig.appointmentUrl} size="lg">
              <CalendarDays className="h-4 w-4" aria-hidden /> Request an appointment
            </LinkButton>
            <LinkButton href={`tel:${siteConfig.phoneE164}`} variant="outline" size="lg">
              <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </Section>

      <JsonLd
        id={`ld-condition-${condition.slug}`}
        data={medicalConditionSchema({
          name: condition.name,
          description: condition.metaDescription,
          url,
          symptoms: condition.symptoms,
          possibleTreatment: condition.relatedService.label,
          treatmentUrl: `${siteConfig.url}${condition.relatedService.href}`,
        })}
      />
      <JsonLd id={`ld-condition-${condition.slug}-faq`} data={faqSchema(condition.faqs)} />
      <JsonLd
        id={`ld-condition-${condition.slug}-breadcrumb`}
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Conditions', url: `${siteConfig.url}/conditions` },
          { name: condition.name, url },
        ])}
      />
    </>
  );
}
