type LogoProps = {
  className?: string;
  /** 'inline' = compact lockup for the header. 'stacked' = mark above the wordmark. */
  layout?: 'inline' | 'stacked';
  /** 'light' = for dark grounds (footer). 'dark' = for light grounds (header). */
  variant?: 'light' | 'dark';
};

/**
 * BioSpine lockup: the vertebrated "S" mark beside the wordmark.
 *
 * This is drawn rather than bitmapped. The supplied logo.png is a black
 * rectangle with the art knocked out of it, so on any light ground it has to
 * sit on a black plate, which reads as a black box in the corner. It also
 * still says "Recovery", while the practice's current signage, flyer and
 * shirts all say "Health & Wellness".
 *
 * Vector also means it stays sharp at every size, which matters most in the
 * mobile header where the raster version was being scaled down hardest.
 *
 * Rib geometry is sampled at even arc positions along the S-curve, with the
 * ribs tapering toward each tip, so the mark reads as a spine rather than a
 * row of tick marks.
 */

const SPINE_PATH = 'M 76 20 C 24 28, 22 60, 50 72 C 78 84, 76 116, 26 126';

/**
 * Segment cuts across the stroke, sampled at even arc-length intervals so the
 * vertebrae stay evenly spaced through both lobes of the S rather than
 * bunching where the curve is tight.
 */
const SEGMENTS: [number, number, number, number][] = [
  [68.8, 38.8, 60.2, 5.9],
  [60.0, 41.7, 46.7, 10.4],
  [53.2, 45.4, 33.4, 17.8],
  [49.6, 49.0, 20.8, 30.8],
  [49.1, 50.2, 15.1, 51.5],
  [49.7, 51.5, 22.4, 71.8],
  [53.6, 54.8, 36.0, 83.9],
  [63.8, 60.0, 46.3, 89.1],
  [77.3, 71.8, 50.2, 92.4],
  [85.0, 91.6, 51.1, 94.2],
  [80.3, 112.3, 50.6, 95.8],
  [68.7, 125.9, 47.2, 99.5],
  [55.4, 134.2, 40.5, 103.6],
  [42.2, 139.4, 32.0, 107.0],
];

// The mask geometry is identical for every instance, so one id is safe; the
// colour comes from the filled rect outside the mask, not from the mask.
const MASK_ID = 'biospine-spine-mask';

function SpineMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="6 2 88 136" aria-hidden className={className}>
      <defs>
        <mask id={MASK_ID} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="146">
          <rect x="0" y="0" width="100" height="146" fill="black" />
          <path
            d={SPINE_PATH}
            stroke="white"
            strokeWidth="23"
            strokeLinecap="round"
            fill="none"
          />
          <g stroke="black" strokeWidth="3.4" strokeLinecap="butt">
            {SEGMENTS.map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            ))}
          </g>
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="100"
        height="146"
        fill="currentColor"
        mask={`url(#${MASK_ID})`}
      />
    </svg>
  );
}

export function Logo({
  className = '',
  layout = 'inline',
  variant = 'dark',
}: LogoProps) {
  const isLight = variant === 'light';

  const mark = isLight ? 'text-brand-leaf' : 'text-brand-green';
  const word = isLight ? 'text-white' : 'text-brand-green-dark';
  const tag = isLight ? 'text-brand-steel-light' : 'text-brand-steel';

  if (layout === 'stacked') {
    return (
      <span className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <SpineMark className={`h-16 w-auto ${mark}`} />
        <span className="flex flex-col items-center">
          <span
            className={`font-display text-[1.75rem] font-semibold leading-none tracking-tight ${word}`}
          >
            BioSpine
          </span>
          <span
            className={`mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] ${tag}`}
          >
            Health &amp; Wellness
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <SpineMark className={`h-9 w-auto shrink-0 sm:h-10 ${mark}`} />
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.3125rem] font-semibold leading-none tracking-tight sm:text-2xl ${word}`}
        >
          BioSpine
        </span>
        <span
          className={`mt-1 text-[0.5rem] font-semibold uppercase leading-none tracking-[0.18em] sm:text-[0.5625rem] ${tag}`}
        >
          Health &amp; Wellness
        </span>
      </span>
    </span>
  );
}
