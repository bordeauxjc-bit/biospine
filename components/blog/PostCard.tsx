import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Post } from '@/lib/blog';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group h-full rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all hover:border-brand-green hover:shadow-lg">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col h-full"
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
        <div className="flex-1 flex flex-col p-6">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold uppercase tracking-wider text-brand-green-dark bg-brand-green/10 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-ink group-hover:text-brand-green-dark transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 text-slate-600 line-clamp-3 flex-1">
            {post.description}
          </p>
          <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </span>
            {post.readingTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {post.readingTime}
              </span>
            )}
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark">
            Read article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  );
}
