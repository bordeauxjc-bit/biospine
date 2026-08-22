type LogoProps = {
  className?: string;
  layout?: 'inline' | 'stacked';
  variant?: 'light' | 'dark';
};

/**
 * BioSpine's "living spine" mark.
 *
 * The central S is built from vertebra-like capsules. The two open arcs read
 * as leaves, motion, and a pair of protective hands without using a generic
 * medical cross. The simple geometry remains legible at favicon size.
 */
function LivingSpineMark({
  className = '',
  variant = 'dark',
}: {
  className?: string;
  variant?: 'light' | 'dark';
}) {
  const arc = variant === 'light' ? '#6BBF6E' : '#55A95C';
  const spine = variant === 'light' ? '#FFFFFF' : '#1F6528';

  return (
    <svg
      viewBox="0 0 72 72"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path
        d="M29 7C16 11 8 22 8 35c0 13 8 24 21 30"
        fill="none"
        stroke={arc}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M43 7c13 4 21 15 21 28 0 13-8 24-21 30"
        fill="none"
        stroke={arc}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <g fill={spine}>
        <rect x="37" y="10" width="12" height="6" rx="3" transform="rotate(-18 43 13)" />
        <rect x="31" y="16" width="12" height="6" rx="3" transform="rotate(-28 37 19)" />
        <rect x="27" y="23" width="12" height="6" rx="3" transform="rotate(-18 33 26)" />
        <rect x="28" y="30" width="12" height="6" rx="3" transform="rotate(10 34 33)" />
        <rect x="33" y="36" width="12" height="6" rx="3" transform="rotate(24 39 39)" />
        <rect x="36" y="43" width="12" height="6" rx="3" transform="rotate(13 42 46)" />
        <rect x="33" y="50" width="12" height="6" rx="3" transform="rotate(-15 39 53)" />
        <rect x="26" y="56" width="12" height="6" rx="3" transform="rotate(-25 32 59)" />
      </g>
      <circle cx="36" cy="35" r="2.25" fill={arc} />
    </svg>
  );
}

export function Logo({
  className = '',
  layout = 'inline',
  variant = 'dark',
}: LogoProps) {
  const isLight = variant === 'light';
  const bio = isLight ? 'text-white' : 'text-brand-green-dark';
  const spine = isLight ? 'text-brand-green-light' : 'text-brand-green-dark';
  const tag = isLight ? 'text-slate-300' : 'text-slate-600';

  if (layout === 'stacked') {
    return (
      <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <LivingSpineMark className="h-[4.5rem] w-[4.5rem]" variant={variant} />
        <span className="flex flex-col items-center">
          <span className="font-display text-[1.85rem] font-semibold leading-none tracking-tight">
            <span className={bio}>Bio</span>
            <span className={spine}>Spine</span>
          </span>
          <span className={`mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.22em] ${tag}`}>
            Health &amp; Wellness
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LivingSpineMark className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" variant={variant} />
      <span className="flex flex-col">
        <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight sm:text-[1.55rem]">
          <span className={bio}>Bio</span>
          <span className={spine}>Spine</span>
        </span>
        <span className={`mt-1 text-[0.48rem] font-semibold uppercase leading-none tracking-[0.2em] sm:text-[0.55rem] ${tag}`}>
          Health &amp; Wellness
        </span>
      </span>
    </span>
  );
}
