import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { getAllPosts } from '@/lib/blog';

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section tone="cream">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green mb-3">
            From the blog
          </p>
          <h2>Resources for living pain-free</h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-semibold text-brand-green-dark hover:text-brand-ink"
        >
          View all articles
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <ul
        role="list"
        className="grid md:grid-cols-3 gap-5 sm:gap-6"
      >
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all hover:border-brand-green hover:shadow-lg"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-brand-green/15 via-brand-cream to-brand-green/5 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="h-16 w-16 opacity-40"
                  aria-hidden
                >
                  <path
                    d="M40 10 C 26 16, 26 28, 40 32 C 54 36, 54 48, 40 54"
                    stroke="#10B981"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.readingTime && <span>· {post.readingTime}</span>}
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-brand-ink group-hover:text-brand-green-dark transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-slate-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
