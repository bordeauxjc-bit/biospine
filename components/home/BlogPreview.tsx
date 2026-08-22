import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { getAllPosts } from '@/lib/blog';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * Typographic post list. The old cards used a placeholder gradient with a
 * decorative squiggle where a photo would go, which reads as filler; setting
 * the titles properly is both more honest and better looking.
 */
export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section tone="cream">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
        <div className="max-w-2xl">
          <SectionLabel className="mb-5">From the blog</SectionLabel>
          <h2 className="text-balance">Answers to questions that come up in the office</h2>
        </div>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand-green-dark shrink-0"
        >
          All articles
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <ul role="list" className="grid md:grid-cols-3 gap-x-12 gap-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block border-t border-brand-ink/15 pt-6 transition-colors hover:border-brand-green"
            >
              <div className="flex items-center gap-2.5 label-muted">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                {post.readingTime && (
                  <>
                    <span aria-hidden className="text-slate-300">
                      /
                    </span>
                    <span>{post.readingTime}</span>
                  </>
                )}
              </div>
              <h3 className="mt-3.5 font-display text-xl sm:text-[1.375rem] font-semibold leading-snug text-brand-ink group-hover:text-brand-green-dark transition-colors text-pretty">
                {post.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate-600 line-clamp-3">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
