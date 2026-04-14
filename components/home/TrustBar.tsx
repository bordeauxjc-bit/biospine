import { UserCheck, ShieldCheck, FileText, MapPin } from 'lucide-react';

/**
 * Wellness-style trust signals emphasizing accessibility and patient
 * experience rather than institutional credentials.
 */
export function TrustBar() {
  const items = [
    {
      icon: UserCheck,
      label: 'New patients welcome',
      sub: 'Same-week appointments often available',
    },
    {
      icon: FileText,
      label: 'No referral needed',
      sub: 'Come direct — we handle the rest',
    },
    {
      icon: ShieldCheck,
      label: 'Medicare accepted',
      sub: 'Plus many commercial plans',
    },
    {
      icon: MapPin,
      label: 'Serving the Pee Dee',
      sub: 'Lake City, Florence, Kingstree & more',
    },
  ];

  return (
    <div className="relative border-b border-slate-200 bg-white">
      <div
        className="absolute inset-0 bg-speckle opacity-50 pointer-events-none"
        aria-hidden
      />
      <div className="container relative py-10 sm:py-14">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-dark ring-1 ring-brand-green/20">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-display font-semibold text-brand-ink leading-tight">
                  {item.label}
                </p>
                <p className="text-sm text-slate-500 mt-1 leading-snug">
                  {item.sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
