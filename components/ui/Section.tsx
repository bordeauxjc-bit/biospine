import { ReactNode } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  as?: 'section' | 'div' | 'article' | 'aside';
  tone?: 'white' | 'cream' | 'sand' | 'ink' | 'gradient';
};

const tones = {
  white: 'bg-white',
  cream: 'bg-brand-cream',
  sand: 'bg-brand-sand',
  ink: 'bg-brand-ink text-white',
  // Kept for pages that still ask for `gradient`. Now a flat deep ink rather
  // than the old blue-black gradient.
  gradient: 'bg-brand-ink text-white',
};

export function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  as: Tag = 'section',
  tone = 'white',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}
    >
      <div className={`container ${containerClassName}`}>{children}</div>
    </Tag>
  );
}

/**
 * Section heading. The label sits above a hairline rule rather than inside a
 * colored pill, which keeps the page reading like a printed document.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  tone = 'dark',
  className = '',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const isLight = tone === 'light';

  return (
    <div
      className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <SectionLabel
          tone={isLight ? 'light' : 'dark'}
          center={center}
          className="mb-5"
        >
          {eyebrow}
        </SectionLabel>
      )}
      <h2 className={`text-balance ${isLight ? '!text-white' : ''}`}>{title}</h2>
      {description && (
        <p
          className={`mt-5 text-lg text-pretty leading-relaxed ${
            isLight ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
