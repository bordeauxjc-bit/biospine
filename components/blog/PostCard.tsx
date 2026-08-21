import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Post } from '@/lib/blog';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col border-t border-brand-ink/15 pt-6 transition-colors hover:border-brand-green"
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

        <h2 className="mt-3.5 font-display text-xl sm:text-[1.375rem] font-semibold leading-snug text-brand-ink group-hover:text-brand-green-dark transition-colors text-pretty">
          {post.title}
        </h2>

        <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-slate-600 line-clamp-3">
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="label-muted">
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand-green-dark">
          Read article
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </Link>
    </article>
  );
}
