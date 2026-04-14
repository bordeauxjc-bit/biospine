import { Section } from '@/components/ui/Section';

export function Mission() {
  return (
    <Section tone="cream" className="relative overflow-hidden">
      {/* Subtle brand accent backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-speckle opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[800px] max-w-full rounded-full blur-3xl opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0) 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span
          aria-hidden
          className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 font-serif text-7xl sm:text-8xl leading-none text-brand-green/25 select-none"
        >
          &ldquo;
        </span>

        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-5">
          Our Mission
        </p>

        <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-balance text-brand-ink">
          At BioSpine Health and Wellness, we believe chiropractic care should
          be honest, effective, and built around your life, not a template. Our
          mission is to help every patient in the Pee Dee region understand
          what&rsquo;s wrong, what we can do about it, and how to stay well for
          the long haul.
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-brand-green/40" aria-hidden />
          <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">
            Dr. Chucky S. Jordan
          </span>
          <span className="h-px w-10 bg-brand-green/40" aria-hidden />
        </div>
      </div>
    </Section>
  );
}
