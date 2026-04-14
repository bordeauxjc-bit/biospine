import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Chiropractic Services',
  description:
    'Chiropractic adjustments, back and neck pain care, headache relief, sports injury rehabilitation, arthritis care, and wellness consultations in Lake City, SC.',
  path: '/services',
});

const serviceDetails: Record<
  string,
  { benefits: string[]; commonFor: string[] }
> = {
  'chiropractic-adjustments': {
    benefits: [
      'Restored range of motion in the spine and joints',
      'Reduced muscle tension and nerve irritation',
      'Improved posture and movement patterns',
      'Drug-free, non-surgical pain relief',
    ],
    commonFor: ['Back stiffness', 'Neck pain', 'Postural problems', 'Tension headaches'],
  },
  'back-and-neck-pain': {
    benefits: [
      'Targeted relief for acute flare-ups',
      'Long-term care plans for chronic pain',
      'Manual therapy paired with home exercise guidance',
      'Conservative, non-surgical first-line care',
    ],
    commonFor: ['Low back pain', 'Sciatica', 'Neck pain', 'Whiplash', 'Disc-related pain'],
  },
  'headache-migraine-care': {
    benefits: [
      'Reduction in headache frequency and intensity',
      'Identification of postural and muscular triggers',
      'Targeted cervical adjustments for cervicogenic headaches',
      'Lifestyle and ergonomic guidance',
    ],
    commonFor: [
      'Tension headaches',
      'Cervicogenic headaches',
      'Migraines',
      'Screen-related headaches',
    ],
  },
  'sports-injury-care': {
    benefits: [
      'Faster return to sport and daily activity',
      'Soft-tissue and joint care for athletic injuries',
      'Injury-prevention guidance for active patients',
      'Care plans that work around your training schedule',
    ],
    commonFor: [
      'Muscle strains',
      'Ligament sprains',
      'Overuse injuries',
      'Running and lifting-related back pain',
    ],
  },
  'arthritis-relief': {
    benefits: [
      'Conservative, non-surgical management',
      'Joint mobilization to maintain motion',
      'Reduced reliance on pain medication',
      'Home care and mobility guidance',
    ],
    commonFor: ['Spinal arthritis', 'Osteoarthritis', 'Degenerative joint disease', 'Stiffness'],
  },
  'wellness-and-weight-loss': {
    benefits: [
      'Sustainable lifestyle guidance',
      'Movement and nutrition recommendations',
      'Support for long-term spinal health',
      'Integrated with your overall care plan',
    ],
    commonFor: [
      'General wellness goals',
      'Weight-loss support',
      'Postural improvement',
      'Energy and mobility',
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Chiropractic care designed around your goals"
        description="Whether you're recovering from an injury, managing chronic pain, or investing in long-term wellness, we have a care path for you."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <Section tone="white">
        <div className="space-y-20 sm:space-y-28">
          {siteConfig.services.map((service, idx) => {
            const details = serviceDetails[service.slug];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start"
              >
                <div className="lg:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
                    Service {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h2 className="!text-3xl sm:!text-4xl">{service.name}</h2>
                  <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-brand-cream p-6 sm:p-7">
                    <h3 className="font-serif text-lg font-semibold text-brand-ink">
                      What you can expect
                    </h3>
                    <ul role="list" className="mt-4 space-y-3">
                      {details.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green mt-0.5" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-6 sm:p-7">
                    <h3 className="font-serif text-lg font-semibold text-brand-ink">
                      Common conditions we address
                    </h3>
                    <ul role="list" className="mt-4 flex flex-wrap gap-2">
                      {details.commonFor.map((c) => (
                        <li
                          key={c}
                          className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-sm text-slate-700"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <LinkButton
                        href={`tel:${siteConfig.phoneE164}`}
                        variant="primary"
                        size="sm"
                      >
                        Call to schedule
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="!text-white">Not sure which service you need?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Give us a call. We&rsquo;ll listen to what&rsquo;s going on and help
            you figure out the right next step, even if it isn&rsquo;t us.
          </p>
          <div className="mt-8">
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="primary"
              size="lg"
            >
              Call {siteConfig.phone}
            </LinkButton>
          </div>
        </div>
      </Section>

      <JsonLd
        id="ld-services-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Services', url: `${siteConfig.url}/services` },
        ])}
      />
    </>
  );
}
