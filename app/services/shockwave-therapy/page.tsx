import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { LinkButton } from '@/components/ui/Button';
import { FaqList } from '@/components/ui/FaqList';
import { ClinicalSources } from '@/components/ui/ClinicalSources';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  breadcrumbSchema,
  faqSchema,
  medicalTherapySchema,
} from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { staticPageClinicalSources } from '@/lib/clinical-sources';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Focused Shockwave Therapy (ESWT) in Lake City, SC',
  description:
    'Focused ESWT at BioSpine in Lake City, SC, for stubborn plantar fascia, elbow, Achilles, and calcific shoulder tendon pain after screening.',
  path: '/services/shockwave-therapy',
});

const steps = [
  {
    title: 'We find the exact spot',
    text: 'A focused unit concentrates its energy at a set depth rather than spreading it across the surface, so where the head sits genuinely matters. Dr. Jordan examines the area and presses around it to find the tissue actually generating your pain before anything is switched on.',
  },
  {
    title: 'Gel goes on',
    text: 'A layer of ultrasound gel couples the applicator to your skin so the acoustic pulses carry into the tissue instead of scattering at the surface.',
  },
  {
    title: 'The pulses run',
    text: 'The head is worked over the area for roughly ten to fifteen minutes. You will hear a rapid tapping and feel a deep thumping that builds. We adjust the intensity to what you can tolerate.',
  },
  {
    title: 'You get up and walk out',
    text: 'There is no recovery period and no bandage. We go over what to do and what to avoid for the next couple of days, and book the next session about a week out.',
  },
];

const treats = [
  {
    region: 'Foot and heel',
    items: ['Plantar fasciitis', 'Achilles tendinitis', 'Heel spur pain'],
  },
  {
    region: 'Elbow and shoulder',
    items: [
      'Tennis elbow',
      'Golfer’s elbow',
      'Rotator cuff tendinopathy',
      'Calcific tendinitis of the shoulder',
    ],
  },
  {
    region: 'Hip and knee',
    items: [
      'Trochanteric bursitis',
      'Gluteal tendinopathy',
      'Proximal hamstring tendinopathy',
      'Patellar tendinitis',
      'IT band syndrome',
    ],
  },
  {
    region: 'Muscle and scar tissue',
    items: [
      'Chronic trigger points',
      'Long-standing muscle tension',
      'Scar tissue adhesions',
    ],
  },
];

const notFor = [
  'You are pregnant and the area to be treated is the abdomen or pelvis',
  'You take blood thinners or have a bleeding disorder',
  'There is an active infection or an open wound over the area',
  'There is a tumor at the treatment site',
  'The area sits over an open growth plate in a child',
  'You had a cortisone injection there in the last six weeks',
];

const faqs = [
  {
    question: 'Does it hurt?',
    answer:
      'It is uncomfortable rather than painful for most people. The sensation is a deep, rapid thumping that gets more intense the closer we work to the sore tissue. We start low and build to what you can tolerate, and it stops the moment the handpiece comes off. Tell us if it is too much and we will back the intensity down.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'Most conditions are treated over three to six sessions, spaced about a week apart. Dr. Jordan will give you an honest estimate after examining you. If you are several sessions in with no measurable change, we will say so and look at other options rather than keep booking you.',
  },
  {
    question: 'How soon will I feel something?',
    answer:
      'Some people notice a difference within a few days. More often the change builds over several weeks as the tissue responds, and it is common to feel a little more sore for a day or two after the first session before things improve. Tendon problems that took months to develop rarely resolve in one visit.',
  },
  {
    question: 'Will my insurance cover it?',
    answer:
      'Usually not. Most plans still treat shockwave as elective, so it is typically a cash-pay service. Call the office at ' +
      siteConfig.phone +
      ' and we will tell you the cost up front before you book anything.',
  },
  {
    question: 'Is this the same as the shockwave I was offered somewhere else?',
    answer:
      'Possibly not. Most clinics use a radial unit, which spreads a pressure wave outward from the head and works best on tissue near the surface. We use a focused unit, which concentrates its energy at a set depth so it reaches deeper targets like a calcified shoulder or a gluteal tendon. Both are legitimate treatments and radial does well on plantar fasciitis and tennis elbow. If you had a course elsewhere that did nothing, ask which type it was, because that alone can be the reason.',
  },
  {
    question: 'Are there side effects?',
    answer:
      'The common ones are mild and short-lived: soreness, redness, some swelling, occasionally a small bruise. They usually settle within a day or two. Serious problems are rare when the treatment is used on appropriate patients, which is why we screen for the conditions listed above first.',
  },
  {
    question: 'Can I have it at the same visit as an adjustment?',
    answer:
      'Yes, and they often work well together. An adjustment addresses how the joint moves; shockwave addresses the tendon or soft tissue itself. Many patients have both in one appointment.',
  },
  {
    question: 'What should I do afterward?',
    answer:
      'Dr. Jordan will give you instructions based on the area treated and your health history. Do not stop or change prescribed or over-the-counter medication without checking with the clinician who manages it.',
  },
];

export default function ShockwaveTherapyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shockwave therapy"
        title="For the injury that has not budged in months"
        description="A non-surgical option for tendon and soft-tissue pain that has outlasted rest, ice, and time. Available at our Lake City office."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Shockwave therapy', href: '/services/shockwave-therapy' },
        ]}
      />

      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">What it is</SectionLabel>
            <h2 className="text-balance">Sound waves, not surgery</h2>
          </div>
          <div className="lg:col-span-8 prose-biospine">
            <p>
              Shockwave therapy, or extracorporeal shockwave therapy (ESWT),
              sends rapid acoustic pressure pulses through the skin into the
              tissue underneath. Extracorporeal simply means the pulses are
              generated outside the body: nothing is injected and nothing is
              inserted, and it is not electrical stimulation. The pulses
              deliberately irritate a stalled injury, which increases blood
              flow to the area and restarts the repair process the body gave up
              on.
            </p>
            <p>
              That matters for tendon problems in particular. Tendons have a
              poor blood supply, so a strain that should have healed in six
              weeks can sit there for a year, sore every morning and slightly
              worse every time you push it. Shockwave is aimed squarely at that
              situation: the injury that is old, stubborn, and not responding to
              rest.
            </p>
            <p>
              There are two kinds of machine, and the difference is worth
              knowing before you book anywhere. Radial units, the more common
              type, send a pressure wave that spreads outward from the head and
              loses strength quickly, which suits problems sitting close to the
              surface. Focused units converge their energy at a set depth
              instead, so it arrives concentrated where the trouble actually
              is. We use a focused unit.
            </p>
            <p>
              That matters for anything deep. A calcium deposit in the
              shoulder, a gluteal tendon under a layer of muscle, a high
              hamstring attachment: these sit below where a radial wave has
              much left to give. If you have already tried shockwave elsewhere
              without much change, it is worth asking which type you had.
            </p>
            <p>
              It is not a first resort. If your problem is a fresh strain, we
              will usually treat it more conventionally and let it heal. Where
              shockwave earns its place is the case that has already failed the
              obvious things.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">The appointment</SectionLabel>
            <h2 className="text-balance">What a session actually involves</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Plan on about twenty minutes in the room. You stay dressed apart
              from exposing the area being treated.
            </p>
          </div>
          <ol role="list" className="lg:col-span-8">
            {steps.map((step) => (
              <li
                key={step.title}
                className="border-t border-brand-ink/12 py-6 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display text-lg font-semibold text-brand-ink sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">What it treats</SectionLabel>
            <h2 className="text-balance">Where it tends to help most</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              The evidence is strongest for plantar fasciitis, tennis elbow, and
              calcific shoulder tendinitis. The deeper hip and shoulder targets
              on this list are the ones a focused unit is chosen for. If your
              problem is not here, call and ask.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10">
            {treats.map((group) => (
              <div key={group.region} className="border-t-2 border-brand-ink pt-5 mb-8">
                <h3 className="label-muted">{group.region}</h3>
                <ul role="list" className="mt-3 text-[0.9375rem] text-slate-700">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-brand-ink/12 py-2.5 first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Screening</SectionLabel>
            <h2 className="text-balance">When we will not use it</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Shockwave is safe for most people, but not everyone. We check for
              all of this before booking you, and we would rather turn a session
              down than push one that is not appropriate.
            </p>
          </div>
          <ul role="list" className="lg:col-span-8">
            {notFor.map((item) => (
              <li
                key={item}
                className="border-t border-brand-ink/12 py-4 text-[0.9375rem] leading-relaxed text-slate-700 first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Questions</SectionLabel>
            <h2 className="text-balance">Before you book</h2>
            <div className="mt-8">
              <LinkButton href="/contact#appointment-form" variant="outline">
                Request an appointment
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <ClinicalSources sources={staticPageClinicalSources.shockwave} />

      <JsonLd
        id="ld-shockwave-therapy"
        data={medicalTherapySchema({
          name: 'Focused Shockwave Therapy',
          alternateName: 'Focused Extracorporeal Shockwave Therapy (fESWT)',
          description:
            'Focused extracorporeal shockwave therapy for chronic tendon and soft-tissue injuries, including deeper targets such as calcific shoulder tendinitis and gluteal tendinopathy, performed at BioSpine Health and Wellness in Lake City, South Carolina.',
          url: `${siteConfig.url}/services/shockwave-therapy`,
          indications: treats.flatMap((group) => group.items),
          contraindication:
            'Not used during pregnancy over the abdomen or pelvis, with bleeding disorders or anticoagulant therapy, over active infection, open wounds, tumours at the treatment site, open growth plates in children, or within six weeks of a cortisone injection at the site.',
        })}
      />
      <JsonLd id="ld-shockwave-faq" data={faqSchema(faqs)} />
      <JsonLd
        id="ld-shockwave-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Services', url: `${siteConfig.url}/services` },
          {
            name: 'Shockwave Therapy',
            url: `${siteConfig.url}/services/shockwave-therapy`,
          },
        ])}
      />
    </>
  );
}
