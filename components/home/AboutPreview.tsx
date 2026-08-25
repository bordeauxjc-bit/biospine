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
      title: 'The exam comes first',
      text: 'An appointment does not automatically mean an adjustment. The findings decide what happens next.',
    },
    {
      title: 'Referral when it is needed',
      text: 'If imaging, medical care, or formal rehabilitation should come first, Dr. Jordan will say so.',
    },
  ];

  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand ring-1 ring-brand-ink/10">
              <Image
                src="/images/office/dr-jordan-chiropractic-care.webp"
                alt={`${siteConfig.doctor.name} providing hands-on chiropractic care to a patient at BioSpine Health and Wellness`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_45%]"
              />
            </div>
            <figcaption className="mt-3.5 border-t border-brand-ink/12 pt-3 text-sm text-slate-500">
              Dr. Jordan providing hands-on care in BioSpine&rsquo;s Lake City
              treatment room.
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-6">
          <SectionLabel className="mb-5">Meet your chiropractor</SectionLabel>

          <h2 className="text-balance">
            Dr. Jordan examines first, then explains the plan
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {siteConfig.doctor.name} graduated from{' '}
            {siteConfig.doctor.education} in {siteConfig.doctor.graduationYear}{' '}
            and holds South Carolina chiropractic license #4099. He has treated
            patients in and around Lake City for more than ten years and is also
            listed by FMCSA to perform DOT physicals.
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
