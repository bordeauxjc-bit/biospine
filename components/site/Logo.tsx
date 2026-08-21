import Image from 'next/image';

type LogoProps = {
  className?: string;
  /** 'inline' = compact logo for header nav. 'stacked' = full logo mark for footer/hero. */
  layout?: 'inline' | 'stacked';
  /** light = for dark backgrounds (footer). dark = for light backgrounds (header). */
  variant?: 'light' | 'dark';
  /** Accessible label for the logo; defaults to "BioSpine Health and Wellness". */
  alt?: string;
};

/**
 * Renders the official BioSpine Recovery logo (`public/logo.png`).
 *
 * The logo file is the client's actual brand asset: a green vertebrated "S"
 * spine with "BioSpine" wordmark and "RECOVERY" tag on a black background.
 *
 * Because the background is black, we render it on a dark "plate" for the
 * header (light variant) and full-bleed for the footer (dark variant).
 */
export function Logo({
  className = '',
  layout = 'inline',
  variant = 'dark',
  alt = 'BioSpine Health and Wellness',
}: LogoProps) {
  if (layout === 'stacked') {
    return (
      <Image
        src="/logo.png"
        alt={alt}
        width={402}
        height={334}
        priority
        className={`h-auto w-40 sm:w-48 ${className}`}
      />
    );
  }

  // Inline (header): compact logo on a dark plate so the black-bg logo stays
  // legible on a white header. When variant is 'light' (dark backgrounds like
  // the footer), no plate is needed.
  const plate =
    variant === 'dark'
      ? 'rounded-sm bg-brand-ink px-2 py-1.5'
      : '';

  return (
    <span className={`inline-flex items-center ${plate} ${className}`}>
      <Image
        src="/logo.png"
        alt={alt}
        width={402}
        height={334}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </span>
  );
}
