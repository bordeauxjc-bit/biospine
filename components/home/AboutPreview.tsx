import Image from 'next/image';
import { Clock, Heart, Handshake } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site-config';

export function AboutPreview() {
  const points = [
    {
      icon: Clock,
      title: '10+ years experience',
      text: 'A decade of helping patients across the Pee Dee region feel and move better.',
    },
    {
      icon: Heart,
      title: 'Patient-first care',
      text: 'Personalized treatment plans built around your goals, your health, and your everyday life.',
    },
    {
      icon: Handshake,
      title: 'Clear, honest communication',
      text: 'You\u2019ll always know the diagnosis, the plan, and the expected timeline \u2014 no guesswork.',
    },
  ];

  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/dr-jordan.jpg"
              alt={`${siteConfig.doctor.name} at BioSpine Health and Wellness in Lake City, SC`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            {/* Subtle gradient overlay for caption contrast */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-ink/80 via-brand-ink/40 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-xl font-semibold text-white">
                {siteConfig.doctor.name}
              </p>
              <p className="text-sm text-white/80">
                {siteConfig.doctor.title}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
            Meet your chiropractor
          </p>
          <h2 className="text-balance">
            A doctor who listens, explains, and builds care plans that fit your life
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {siteConfig.doctor.name} has spent over a decade serving patients
            across the Pee Dee region. His approach combines evidence-informed
            chiropractic techniques with clear, straightforward communication —
            so you always understand your diagnosis, your care plan, and your
            progress.
          </p>

          <ul role="list" className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
                  <point.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-brand-ink">{point.title}</p>
                  <p className="text-slate-600">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <LinkButton href="/about" variant="secondary">
              More about Dr. Jordan
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
