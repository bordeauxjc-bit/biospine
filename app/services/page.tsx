import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    'Chiropractic adjustments, shockwave therapy, back and neck pain care, headache relief, sports injury rehab, auto accident care, and arthritis treatment in Lake City, SC.',
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
      'Movement and home-care guidance tailored to your needs',
      'Home care and mobility guidance',
    ],
    commonFor: ['Spinal arthritis', 'Osteoarthritis', 'Degenerative joint disease', 'Stiffness'],
  },
  'shockwave-therapy': {
    benefits: [
      'A focused unit, so it reaches deep targets too',
      'No needles, no medication, no downtime',
      'Sessions run about fifteen minutes',
      'Combines with adjustments in the same visit',
    ],
    commonFor: [
      'Plantar fasciitis',
      'Tennis and golfer’s elbow',
      'Achilles tendinitis',
      'Calcific shoulder tendinitis',
    ],
  },
  'auto-accident-injury': {
    benefits: [
      'Prompt evaluation after a collision',
      'Care for whiplash, neck, back, and shoulder pain',
      'Written documentation of findings for your claim',
      'No referral needed to start treatment',
    ],
    commonFor: [
      'Whiplash',
      'Neck and shoulder pain',
      'Low back pain after impact',
      'Post-accident headaches',
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Chiropractic care designed around your goals"
        description="Whether you’re recovering from an injury, managing chronic pain, or investing in long-term wellness, we have a care path for you."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <Section tone="white">
        <div className="space-y-20 sm:space-y-28">
          {siteConfig.services.map((service) => {
            const details = serviceDetails[service.slug];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start"
              >
                <div className="lg:col-span-2">
                  <h2 className="!text-3xl sm:!text-4xl">{service.name}</h2>
                  <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>
                  {!service.href.includes('#') && (
                    <LinkButton href={service.href} variant="quiet" size="sm" className="mt-5">
                      Full service guide <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </LinkButton>
                  )}
                </div>

                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
                  <div className="rounded-sm bg-brand-cream p-6 sm:p-7">
                    <h3 className="label-muted">What you can expect</h3>
                    <ul role="list" className="mt-4 space-y-3">
                      {details.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-brand-green" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-sm border border-brand-ink/12 p-6 sm:p-7">
                    <h3 className="label-muted">Common conditions we address</h3>
                    <ul role="list" className="mt-4 flex flex-wrap gap-2">
                      {details.commonFor.map((c) => (
                        <li
                          key={c}
                          className="rounded border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <LinkButton
                        href="/contact#appointment-form"
                        variant="outline"
                        size="sm"
                      >
                        Request an appointment
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="ink">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="!text-white">Not sure which service you need?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Give us a call. We&rsquo;ll listen to what&rsquo;s going on and help
            you figure out the right next step, even if it isn&rsquo;t us.
          </p>
          <div className="mt-8">
            <LinkButton
              href="/contact#appointment-form"
              variant="primary"
              size="lg"
            >
              Send a request
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
