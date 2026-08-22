import { Section } from '@/components/ui/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * Practice philosophy as an asymmetric statement.
 */
export function Mission() {
  return (
    <Section tone="white">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-3">
          <SectionLabel>How BioSpine works</SectionLabel>
        </div>

        <div className="lg:col-span-9">
          <div className="relative">
            <p className="font-display text-2xl sm:text-3xl lg:text-[2.375rem] font-light leading-[1.28] text-brand-ink text-pretty">
              The exam comes before the adjustment. Dr. Jordan tells you what
              he finds, what he can treat in this office, and when another kind
              of care should come first.
            </p>
            <footer className="mt-9 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-brand-green/45" />
              <span className="label-muted">
                No preset visit count. No treatment without an explanation.
              </span>
            </footer>
          </div>
        </div>
      </div>
    </Section>
  );
}
