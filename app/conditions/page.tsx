import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { FaqList } from '@/components/ui/FaqList';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata: Metadata = buildMetadata({
  title: 'Conditions We Treat',
  description:
    'Chiropractic care for low back pain, neck pain, sciatica, headaches, migraines, arthritis, sports injuries, and more in Lake City, SC.',
  path: '/conditions',
});

type Condition = {
  slug: string;
  name: string;
  summary: string;
  symptoms: string[];
  howWeHelp: string;
};

const conditions: Condition[] = [
  {
    slug: 'low-back-pain',
    name: 'Low Back Pain',
    summary:
      'Low back pain is one of the most common reasons adults visit a chiropractor. Most episodes are mechanical in nature, meaning they respond well to conservative care.',
    symptoms: [
      'Aching or sharp pain in the lower back',
      'Pain that worsens with bending, lifting, or sitting',
      'Muscle stiffness in the morning',
      'Radiating pain into the hip or leg',
    ],
    howWeHelp:
      'After a thorough exam, we use targeted spinal adjustments, soft-tissue care, and progressive home exercise to reduce pain and restore function.',
  },
  {
    slug: 'neck-pain',
    name: 'Neck Pain',
    summary:
      'Neck pain from poor posture, screen time, or sleeping positions is increasingly common, and it responds well to chiropractic care.',
    symptoms: [
      'Stiffness and reduced range of motion',
      'Pain radiating to the shoulders or upper back',
      'Tension-type headaches',
      'Clicking or popping with movement',
    ],
    howWeHelp:
      'Gentle cervical adjustments, postural correction, and ergonomic guidance to address both the symptom and the source.',
  },
  {
    slug: 'sciatica',
    name: 'Sciatica',
    summary:
      'Sciatica is a radiating pain that travels from the lower back down into the leg, usually caused by nerve irritation in the lumbar spine.',
    symptoms: [
      'Sharp or burning pain down one leg',
      'Numbness or tingling in the leg or foot',
      'Pain worsens with sitting or bending',
      'Weakness in the leg or foot',
    ],
    howWeHelp:
      'We identify the root cause, relieve pressure on the affected nerve, and build a progressive plan to prevent recurrence.',
  },
  {
    slug: 'headaches-and-migraines',
    name: 'Headaches & Migraines',
    summary:
      'Tension and cervicogenic headaches often stem from the upper neck and can be significantly reduced with chiropractic care.',
    symptoms: [
      'Pain starting in the base of the skull',
      'Pain behind the eyes or at the temples',
      'Tight neck and shoulder muscles',
      'Headaches triggered by screen time or stress',
    ],
    howWeHelp:
      'Targeted cervical adjustments, soft-tissue work on the suboccipital muscles, and postural and lifestyle guidance.',
  },
  {
    slug: 'sports-injuries',
    name: 'Sports Injuries',
    summary:
      'From weekend warriors to high school athletes, active patients benefit from chiropractic care to heal faster and reduce re-injury risk.',
    symptoms: [
      'Muscle strains and ligament sprains',
      'Overuse pain (runners, lifters, swimmers)',
      'Post-impact pain from contact sports',
      'Limited mobility affecting performance',
    ],
    howWeHelp:
      'Injury-specific evaluation, adjustments to restore joint motion, soft-tissue work, and return-to-play planning.',
  },
  {
    slug: 'arthritis-joint-pain',
    name: 'Arthritis & Joint Pain',
    summary:
      'Chiropractic care helps manage arthritis by maintaining joint motion, reducing muscle guarding around affected joints, and supporting overall mobility.',
    symptoms: [
      'Stiffness, especially in the morning',
      'Joint pain that worsens with inactivity',
      'Reduced range of motion',
      'Swelling around affected joints',
    ],
    howWeHelp:
      'Gentle joint mobilization, activity and movement guidance, and conservative care to keep you moving as well as possible.',
  },
  {
    slug: 'whiplash',
    name: 'Whiplash & Auto Injuries',
    summary:
      'Whiplash from motor-vehicle accidents can cause lingering pain and dysfunction if not properly addressed in the weeks after the injury.',
    symptoms: [
      'Neck pain and stiffness after an accident',
      'Headaches originating at the base of the skull',
      'Shoulder or upper back pain',
      'Reduced neck range of motion',
    ],
    howWeHelp:
      'Comprehensive evaluation, gentle progressive care, and documentation for your case if needed.',
  },
  {
    slug: 'postural-problems',
    name: 'Postural Problems',
    summary:
      'Modern work and screen habits contribute to forward-head posture, rounded shoulders, and low-back tension, all of which can be corrected.',
    symptoms: [
      'Neck and upper back tension by midday',
      'Forward-head posture',
      'Mid-back stiffness',
      'Headaches that build throughout the day',
    ],
    howWeHelp:
      'Postural assessment, targeted adjustments, and a personalized home exercise plan to strengthen supporting muscles.',
  },
];

const faqs = [
  {
    question: 'How do I know if chiropractic care is right for my condition?',
    answer:
      "Call our office for a short conversation about your symptoms. If chiropractic is a good fit, we’ll schedule an exam. If not, Dr. Jordan will refer you to the right kind of provider.",
  },
  {
    question: 'What if my condition isn’t on this list?',
    answer:
      'This list covers the most common reasons patients visit us, but it isn’t exhaustive. Call our office and we can discuss whether chiropractic care is appropriate for what you’re experiencing.',
  },
  {
    question: 'Is chiropractic safe for older adults with arthritis?',
    answer:
      'Yes, when performed by a licensed chiropractor who tailors the technique to the patient. Gentle, low-force adjustments are often well-tolerated and can help maintain joint mobility.',
  },
];

export default function ConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Conditions"
        title="Conditions we treat in Lake City, SC"
        description="If any of these sound familiar, chiropractic care may help. Click a condition below to learn more."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Conditions', href: '/conditions' },
        ]}
      />

      <Section tone="white">
        <ul
          role="list"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {conditions.map((c) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className="block h-full rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-green hover:shadow-sm transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-ink">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                  {c.summary}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <div className="space-y-16">
          {conditions.map((c) => (
            <article
              key={c.slug}
              id={c.slug}
              className="scroll-mt-24 grid lg:grid-cols-3 gap-8 lg:gap-10"
            >
              <div className="lg:col-span-1">
                <h2 className="!text-3xl">{c.name}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {c.summary}
                </p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="border-t-2 border-brand-ink pt-5">
                  <h3 className="label-muted">Common symptoms</h3>
                  <ul
                    role="list"
                    className="mt-4 text-[0.9375rem] leading-relaxed text-slate-700"
                  >
                    {c.symptoms.map((s) => (
                      <li
                        key={s}
                        className="border-t border-brand-ink/12 py-2.5 first:border-t-0 first:pt-0"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-sm bg-brand-ink p-6 text-white sm:p-7">
                  <h3 className="label-light">How we help</h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-300">
                    {c.howWeHelp}
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="mt-6 inline-block text-[0.9375rem] font-medium text-brand-leaf underline decoration-brand-leaf/40 underline-offset-4 hover:decoration-brand-leaf"
                  >
                    Call to discuss your case
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-5">Questions</SectionLabel>
            <h2 className="text-balance">
              Common questions about what we treat
            </h2>
            <div className="mt-8">
              <LinkButton href="/contact" variant="outline">
                Still have questions?
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <JsonLd id="ld-conditions-faq" data={faqSchema(faqs)} />
      <JsonLd
        id="ld-conditions-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Conditions', url: `${siteConfig.url}/conditions` },
        ])}
      />
    </>
  );
}
