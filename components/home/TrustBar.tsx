/**
 * Slim masthead band under the hero.
 *
 * No icon tiles: four facts, divided by hairlines, set like a printed
 * standfirst. The dark ground gives the light hero something to sit on.
 */
export function TrustBar() {
  const items = [
    {
      label: 'New patients',
      text: 'Same-week appointments are usually available.',
    },
    {
      label: 'No referral',
      text: 'South Carolina lets you come straight to us.',
    },
    {
      label: 'Insurance',
      text: 'Medicare accepted, plus many commercial plans.',
    },
    {
      label: 'Where we serve',
      text: 'Lake City, Florence, Kingstree and the Pee Dee.',
    },
  ];

  return (
    <div className="bg-brand-ink text-white">
      <div className="container py-10 sm:py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 sm:gap-x-10 lg:gap-x-0">
          {items.map((item) => (
            <li
              key={item.label}
              className="border-t border-white/15 pt-5 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0 lg:border-l lg:border-white/15 lg:pl-10 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="label-light">{item.label}</p>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-300">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
