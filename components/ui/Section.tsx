import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  as?: 'section' | 'div' | 'article' | 'aside';
  tone?: 'white' | 'cream' | 'ink' | 'gradient';
};

const tones = {
  white: 'bg-white',
  cream: 'bg-brand-cream',
  ink: 'bg-brand-ink text-white',
  gradient:
    'bg-gradient-to-br from-brand-ink via-brand-slate to-brand-ink text-white',
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
      className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}
    >
      <div className={`container ${containerClassName}`}>{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className = '',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-10 sm:mb-14 ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 text-pretty">{description}</p>
      )}
    </div>
  );
}
