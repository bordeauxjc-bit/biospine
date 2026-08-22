import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AlertTriangle, CalendarDays, CheckCircle2, Phone } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  medicalTherapySchema,
} from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { getServiceGuide, serviceGuides } from '@/lib/service-guides';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceGuides.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceGuide(slug);

  if (!service) {
    return buildMetadata({
      title: 'Service Not Found',
      path: `/services/${slug}`,
      noindex: true,
    });
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceGuidePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceGuide(slug);

  if (!service) notFound();

  const url = `${siteConfig.url}/services/${service.slug}`;

  return (
    <>
      <PageHeader
        eyebrow={service.eyebrow}
        title={service.headline}
        description={service.metaDescription}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-biospine lg:col-span-6">
            <h2 className="!mt-0">What this service is designed to do</h2>
            {service.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="lg:col-span-6" aria-labelledby="common-reasons-heading">
            <h2 id="common-reasons-heading" className="!text-2xl">
              Common reasons people ask about this care
            </h2>
            <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.commonReasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    aria-hidden
                  />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Your visit"
          title="A clear process from evaluation to follow-up"
          description="Care starts with the findings and changes when the findings or your response change."
        />
        <ol className="grid gap-8 lg:grid-cols-3">
          {service.visitSteps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-brand-green pt-5">
              <p className="label-muted">Step {index + 1}</p>
              <h2 className="mt-3 !text-2xl">{step.title}</h2>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2>Care may include</h2>
            <ul role="list" className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {service.careMayInclude.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-brand-ink/12 pt-4 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside
            className="rounded-sm bg-brand-ink p-7 text-white sm:p-9 lg:col-span-5"
            aria-labelledby="important-notes-heading"
          >
            <AlertTriangle className="h-6 w-6 text-brand-leaf" aria-hidden />
            <h2 id="important-notes-heading" className="mt-5 !text-2xl !text-white">
              Important to know
            </h2>
            <ul role="list" className="mt-5 space-y-4 text-slate-300">
              {service.importantNotes.map((note) => (
                <li key={note} className="border-t border-white/15 pt-4 first:border-t-0 first:pt-0">
                  {note}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Related guides" title="Learn about common concerns" />
          </div>
          <ul role="list" className="lg:col-span-8">
            {service.relatedConditions.map((condition) => (
              <li key={condition.href}>
                <Link
                  href={condition.href}
                  className="group flex min-h-14 items-center justify-between gap-4 border-t border-brand-ink/15 py-4 text-lg font-medium text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green-dark"
                >
                  {condition.label}
                  <span aria-hidden className="text-brand-green transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title={`About ${service.name.toLowerCase()}`} />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="!text-white">Ask whether this care fits your situation</h2>
          <p className="mt-4 text-lg text-slate-300">
            Request an appointment at {siteConfig.address.full}, or call the office before booking.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href={siteConfig.appointmentUrl} size="lg">
              <CalendarDays className="h-4 w-4" aria-hidden /> Request an appointment
            </LinkButton>
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </Section>

      <JsonLd
        id={`ld-service-${service.slug}`}
        data={medicalTherapySchema({
          name: service.name,
          description: service.metaDescription,
          url,
          indications: service.indications,
        })}
      />
      <JsonLd id={`ld-service-${service.slug}-faq`} data={faqSchema(service.faqs)} />
      <JsonLd
        id={`ld-service-${service.slug}-breadcrumb`}
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Services', url: `${siteConfig.url}/services` },
          { name: service.name, url },
        ])}
      />
    </>
  );
}
