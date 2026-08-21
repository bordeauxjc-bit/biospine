import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * Mission statement as an asymmetric pull quote. The label sits in a narrow
 * left rail and the quote runs long in the right column, which reads like a
 * printed spread rather than a centered hero-quote block.
 */
export function Mission() {
  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-3">
          <SectionLabel>Our mission</SectionLabel>
        </div>

        <div className="lg:col-span-9">
          <blockquote className="relative">
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.375rem] font-light leading-[1.28] text-brand-ink text-pretty">
              Chiropractic care should be honest, effective, and built around
              your life instead of a template. We want every patient who walks
              in to leave understanding what&rsquo;s wrong, what we can do about
              it, and how to stay well for the long haul.
            </p>
            <footer className="mt-9 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-brand-green/45" />
              <cite className="not-italic label-muted">
                {'Dr. Chucky S. Jordan, D.C.'}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
