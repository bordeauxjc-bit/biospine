type Faq = {
  question: string;
  answer: string;
};

/**
 * Hairline-divided FAQ list. Shared by the home page, /conditions and
 * /new-patients so the accordion behaves and looks the same everywhere.
 */
export function FaqList({
  faqs,
  className = '',
}: {
  faqs: readonly Faq[];
  className?: string;
}) {
  return (
    <div className={className}>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group border-t border-brand-ink/12 last:border-b"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg sm:text-xl font-semibold text-brand-ink transition-colors group-hover:text-brand-green-dark text-pretty">
              {faq.question}
            </span>
            <span
              aria-hidden
              className="mt-1 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M7.5 1v13M1 7.5h13"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="-mt-1 pb-7 pr-10 text-[0.9375rem] leading-relaxed text-slate-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
