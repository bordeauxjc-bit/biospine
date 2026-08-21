import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Section } from '@/components/ui/Section';
import { LinkButton } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  articleSchema,
  breadcrumbSchema,
} from '@/components/seo/schemas';
import { mdxComponents } from '@/components/blog/MDXComponents';
import { buildMetadata } from '@/lib/seo';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: 'Post not found',
      description: 'The article you are looking for could not be found.',
      path: `/blog/${params.slug}`,
      noindex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Get 2 related posts (excluding current)
  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        <header className="border-b border-brand-ink/10 bg-brand-cream">
          <div className="container max-w-3xl py-16 sm:py-20 lg:py-24">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-green-dark hover:text-brand-ink mb-8"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to blog
            </Link>

            {post.tags && post.tags.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-x-3 gap-y-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-balance">{post.title}</h1>
            <p className="mt-5 text-xl leading-relaxed text-slate-600 text-pretty">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand-green" aria-hidden />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </span>
              {post.readingTime && (
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-green" aria-hidden />
                  {post.readingTime}
                </span>
              )}
              <span>By {post.author ?? siteConfig.doctor.name}</span>
            </div>
          </div>
        </header>

        <div className="container max-w-3xl py-16 sm:py-20">
          <div className="mdx-content">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>

      <Section tone="ink">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-green-light mb-3">
            Ready to feel better?
          </p>
          <h2 className="!text-white">Book your visit with Dr. Jordan</h2>
          <p className="mt-4 text-lg text-slate-300">
            If this article resonates with what you&rsquo;re experiencing,
            chiropractic care may help. Call to schedule a consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton
              href={`tel:${siteConfig.phoneE164}`}
              variant="primary"
              size="lg"
            >
              Call {siteConfig.phone}
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white hover:!text-brand-ink"
            >
              Contact us
            </LinkButton>
          </div>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section tone="white">
          <h2 className="mb-10">More articles</h2>
          <ul
            role="list"
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block border-t border-brand-ink/15 pt-6 transition-colors hover:border-brand-green"
                >
                  <h3 className="font-serif text-xl font-semibold text-brand-ink group-hover:text-brand-green-dark transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-slate-600 line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <JsonLd
        id="ld-article"
        data={articleSchema({
          title: post.title,
          description: post.description,
          slug: post.slug,
          date: post.date,
          updated: post.updated,
        })}
      />
      <JsonLd
        id="ld-post-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />
    </>
  );
}
