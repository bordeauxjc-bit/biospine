import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, BadgeCheck, MapPin, Heart, Users } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { doctorSchema, breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: `About ${siteConfig.doctor.name}`,
  description: `Meet ${siteConfig.doctor.fullName}, ${siteConfig.doctor.credential} — providing chiropractic care in Lake City, SC with over a decade of clinical experience.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Meet ${siteConfig.doctor.name}, ${siteConfig.doctor.credential}`}
        description="A chiropractor serving the Pee Dee region with a straightforward, patient-first approach to spinal health and wellness."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <Section tone="white">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/dr-jordan.jpg"
                  alt={`${siteConfig.doctor.name}, ${siteConfig.doctor.credential} at BioSpine Health and Wellness in Lake City, SC`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="font-display text-2xl font-semibold text-brand-ink">
                  {siteConfig.doctor.name}
                </p>
                <p className="text-slate-600">{siteConfig.doctor.title}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 prose-biospine">
            <h2 className="!mt-0">A Lake City chiropractor dedicated to honest, effective care</h2>
            <p>
              {siteConfig.doctor.name} is a Doctor of Chiropractic and owner of{' '}
              {siteConfig.legalName} in Lake City, South Carolina. With over a
              decade of clinical experience, he has helped patients across the
              Pee Dee region recover from pain, move more freely, and get back
              to doing what they love.
            </p>
            <p>
              His approach is built on three commitments: a thorough evaluation
              before any adjustment, clear explanations of your diagnosis and
              treatment plan, and realistic expectations — so you always know
              what to expect and why. Patients appreciate his direct
              communication style and his willingness to spend the time
              required to get the diagnosis right.
            </p>

            <h3>A note on our approach</h3>
            <p>
              Chiropractic care works best when it fits into your life — not the
              other way around. We schedule so you&rsquo;re seen on time. We
              recommend imaging only when it will change your treatment plan.
              And we set clear milestones so you know if the care is working.
              If it isn&rsquo;t, we&rsquo;ll tell you and help you find the
              right next step.
            </p>
            <p>
              Whether you&rsquo;re dealing with acute back pain, recurring
              headaches, a sports injury, or simply want to feel better in your
              body, we&rsquo;re here to help you get there.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Our values"
          title="What you can expect every visit"
          center
        />

        <ul
          role="list"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {[
            {
              icon: Clock,
              title: '10+ years experience',
              text: 'A decade of helping Pee Dee patients recover, move, and live without pain.',
            },
            {
              icon: Heart,
              title: 'Patient-first',
              text: 'Your goals — not a template — drive your care plan. We listen first, adjust second.',
            },
            {
              icon: BadgeCheck,
              title: 'Transparent',
              text: 'Clear diagnoses, clear care plans, clear pricing. No surprises.',
            },
            {
              icon: Users,
              title: 'Community-rooted',
              text: 'Proudly serving Lake City and the surrounding Pee Dee communities.',
            },
          ].map((v) => (
            <li
              key={v.title}
              className="rounded-2xl bg-white p-6 border border-slate-200"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                <v.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-brand-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-slate-600">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Serving the Pee Dee region"
          title="Patients come to us from across South Carolina"
          description="Our Lake City practice welcomes patients from throughout the region."
        />
        <div className="flex flex-wrap gap-2">
          {siteConfig.areaServed.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green-dark"
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {area}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <LinkButton href="/new-patients" variant="primary">
            What to expect as a new patient
          </LinkButton>
          <LinkButton href="/contact" variant="outline">
            Contact our office
          </LinkButton>
        </div>
      </Section>

      <JsonLd id="ld-doctor" data={doctorSchema()} />
      <JsonLd
        id="ld-about-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'About', url: `${siteConfig.url}/about` },
        ])}
      />
    </>
  );
}
