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
    <p className="mb-6 text-lg leading-8 text-slate-700" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-6 list-disc pl-6 space-y-2 text-lg text-slate-700 marker:text-brand-green" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-6 list-decimal pl-6 space-y-2 text-lg text-slate-700 marker:text-brand-green-dark" {...props} />
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
          className="text-brand-green-dark underline underline-offset-2 hover:text-brand-ink"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="text-brand-green-dark underline underline-offset-2 hover:text-brand-ink"
      >
        {children}
      </Link>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-4 border-brand-green bg-brand-cream rounded-r-lg pl-6 pr-4 py-4 italic text-slate-700"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-brand-ink" {...props} />
  ),
  hr: () => <hr className="my-12 border-slate-200" />,
  code: (props) => (
    <code
      className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-brand-ink font-mono"
      {...props}
    />
  ),
};
