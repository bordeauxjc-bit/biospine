import Link from 'next/link';
import { ReactNode, ComponentPropsWithoutRef } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'quiet' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2.5 rounded font-medium tracking-[0.01em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-green text-white hover:bg-brand-green-dark focus-visible:ring-offset-white',
  secondary:
    'bg-brand-ink text-white hover:bg-brand-slate focus-visible:ring-offset-white',
  // Hairline outline. A 2px border reads chunky next to serif headlines.
  outline:
    'border border-brand-ink/25 text-brand-ink hover:border-brand-ink hover:bg-brand-ink hover:text-white focus-visible:ring-offset-white',
  // Text-only with a rule under it, for tertiary actions.
  quiet:
    'text-brand-green-dark underline underline-offset-4 decoration-brand-green/35 hover:decoration-brand-green !px-0 !min-h-0',
  ghost: 'text-brand-ink hover:bg-brand-ink/5 focus-visible:ring-offset-white',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2 min-h-[38px]',
  md: 'text-[0.9375rem] px-6 py-3 min-h-[46px]',
  lg: 'text-base px-7 py-3.5 min-h-[52px]',
};

function cn(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(' ');
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = ButtonProps & {
  href: string;
  external?: boolean;
  prefetch?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href'>;

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  href,
  external = false,
  prefetch,
  children,
  ...rest
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (
    external ||
    href.startsWith('http') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:')
  ) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} prefetch={prefetch} {...rest}>
      {children}
    </Link>
  );
}
