/**
 * Small-caps section label preceded by a short rule.
 *
 * The rule is aligned to the cap-height of the first line (not the vertical
 * centre of the block) so it still looks right when the label wraps onto two
 * lines on narrow screens.
 */
export function SectionLabel({
  children,
  tone = 'dark',
  center = false,
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'light' | 'muted';
  center?: boolean;
  className?: string;
}) {
  const text =
    tone === 'light' ? 'label-light' : tone === 'muted' ? 'label-muted' : 'label';
  const rule =
    tone === 'light'
      ? 'bg-brand-leaf/50'
      : tone === 'muted'
        ? 'bg-slate-300'
        : 'bg-brand-green/45';

  return (
    <div
      className={`flex items-start gap-3 ${center ? 'justify-center' : ''} ${className}`}
    >
      <span aria-hidden className={`mt-[0.5em] h-px w-7 shrink-0 ${rule}`} />
      <p className={text}>{children}</p>
    </div>
  );
}
