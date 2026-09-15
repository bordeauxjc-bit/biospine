import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { getAllPosts } from '@/lib/blog';
import { conditionGuides } from '@/lib/conditions';
import { serviceGuides } from '@/lib/service-guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const searchLandingUpdated = new Date('2026-09-01');
  const laserServiceAdded = new Date('2026-09-15');
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: laserServiceAdded, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/about`, priority: 0.9, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/services`, lastModified: laserServiceAdded, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/shockwave-therapy`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/back-neck-pain`, lastModified: searchLandingUpdated, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/auto-accident-injury`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/services/dot-physicals`, lastModified: searchLandingUpdated, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/conditions`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/new-patients`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/contact`, lastModified: laserServiceAdded, priority: 0.9, changeFrequency: 'yearly' as const },
    { url: `${siteConfig.url}/locations/lake-city`, lastModified: laserServiceAdded, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/areas-we-serve`, lastModified: searchLandingUpdated, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/reviews`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteConfig.url}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${siteConfig.url}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceGuides.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    ...(service.slug === 'class-iv-laser-therapy'
      ? { lastModified: laserServiceAdded }
      : {}),
    ...(service.slug === 'headache-migraine-care'
      ? { lastModified: searchLandingUpdated }
      : {}),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const conditionRoutes: MetadataRoute.Sitemap = conditionGuides.map((condition) => ({
    url: `${siteConfig.url}/conditions/${condition.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...conditionRoutes, ...posts];
}
