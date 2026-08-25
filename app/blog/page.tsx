import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { PostCard } from '@/components/blog/PostCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata({
  title: 'Blog & Patient Resources',
  description:
    'Practical Lake City guides for DOT physicals, South Carolina CDL medical certification, school sports forms, injuries, pain, and chiropractic visits.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Useful answers for patients, drivers, and local families"
        description="Current, practical guides about DOT physicals, South Carolina driver paperwork, school sports forms, injuries, pain, movement, and chiropractic visits in Lake City."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />

      <Section tone="cream">
        {posts.length === 0 ? (
          <p className="text-center text-slate-600">
            New articles coming soon. Check back shortly!
          </p>
        ) : (
          <ul
            role="list"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </Section>

      <JsonLd
        id="ld-blog-breadcrumb"
        data={breadcrumbSchema([
          { name: 'Home', url: `${siteConfig.url}/` },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
        ])}
      />
    </>
  );
}
