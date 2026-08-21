import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

/**
 * Custom MDX components applied to blog posts. Keeps typography consistent
 * with the site design system.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 mb-5 text-3xl sm:text-4xl font-serif font-semibold text-brand-ink" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-10 mb-4 text-2xl font-serif font-semibold text-brand-ink" {...props} />
  ),
  h4: (props) => (
    <h4 className="mt-8 mb-3 text-xl font-serif font-semibold text-brand-ink" {...props} />
  ),
  p: (props) => (
    <p className="mb-6 text-[1.0625rem] leading-8 text-slate-700" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-6 list-disc space-y-2 pl-5 text-[1.0625rem] text-slate-700 marker:text-brand-green" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-6 list-decimal space-y-2 pl-5 text-[1.0625rem] text-slate-700 marker:text-brand-green" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: ({ href = '#', children, ...rest }) => {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-green-dark underline decoration-brand-green/40 underline-offset-[3px] hover:decoration-brand-green"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-brand-green-dark underline decoration-brand-green/40 underline-offset-[3px] hover:decoration-brand-green"
      >
        {children}
      </Link>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="my-9 border-l-2 border-brand-green py-1 pl-6 font-display text-xl font-light italic leading-relaxed text-slate-700"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-brand-ink" {...props} />
  ),
  hr: () => <hr className="my-12 border-brand-ink/12" />,
  code: (props) => (
    <code
      className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-brand-ink"
      {...props}
    />
  ),
};
