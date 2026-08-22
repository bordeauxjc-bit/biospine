import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { getAllPosts } from '@/lib/blog';
import { conditionGuides } from '@/lib/conditions';
import { serviceGuides } from '@/lib/service-guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/about`, priority: 0.9, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/shockwave-therapy`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/back-neck-pain`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/auto-accident-injury`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/dot-physicals`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/conditions`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/new-patients`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/contact`, priority: 0.9, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/areas-we-serve`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/reviews`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
  ].map((r) => ({ ...r, lastModified: now }));

  const serviceRoutes: MetadataRoute.Sitemap = serviceGuides.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const conditionRoutes: MetadataRoute.Sitemap = conditionGuides.map((condition) => ({
    url: `${siteConfig.url}/conditions/${condition.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...conditionRoutes, ...posts];
}
