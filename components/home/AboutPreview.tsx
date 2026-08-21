import Image from 'next/image';
import { LinkButton } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function AboutPreview() {
  const points = [
    {
      title: 'Over ten years in practice',
      text: 'A decade of treating patients across Lake City and the wider Pee Dee.',
    },
    {
      title: 'Care planned around you',
      text: 'Treatment built for your goals, your health history, and what your week actually looks like.',
    },
    {
      title: 'Plain, honest answers',
      text: 'You will always know the diagnosis, the plan, and roughly how long it should take.',
    },
  ];

  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10">
              <Image
                src="/images/office/doctor-in-action.jpg"
                alt={`${siteConfig.doctor.name} explaining spinal anatomy with a model at BioSpine Health and Wellness`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3.5 border-t border-brand-ink/12 pt-3 text-sm text-slate-500">
              Every visit includes an explanation of what is actually going on
              in your spine.
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-6">
          <SectionLabel className="mb-5">Meet your chiropractor</SectionLabel>

          <h2 className="text-balance">
            A doctor who listens first and explains as he goes
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {siteConfig.doctor.name} trained at{' '}
            {siteConfig.doctor.education} and has spent more than ten years
            treating patients in this part of South Carolina. He pairs
            evidence-informed technique with straightforward talk, so you leave
            knowing where you stand.
          </p>

          <ul role="list" className="mt-9">
            {points.map((point) => (
              <li
                key={point.title}
                className="border-t border-brand-ink/12 py-5 first:border-t-0 first:pt-0"
              >
                <p className="font-display text-lg font-semibold text-brand-ink">
                  {point.title}
                </p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-slate-600">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <LinkButton href="/about" variant="outline">
              More about Dr. Jordan
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
