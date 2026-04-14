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
    'Articles on chiropractic care, back pain relief, headache management, and wellness, written by Dr. Chucky S. Jordan, D.C. for patients in Lake City, SC and beyond.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Resources for a pain-free life"
        description="Practical, evidence-informed articles on chiropractic care, back pain, headaches, sports injuries, and healthy living."
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
