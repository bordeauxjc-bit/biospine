import type { Metadata } from 'next';
import { siteConfig } from './site-config';

type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
};

/**
 * Builds consistent metadata for every route. Pages pass a title + optional
 * description and path; this function handles the rest (canonical, OG, Twitter).
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  ogImage,
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.name
      ? `${siteConfig.shortName} | ${siteConfig.tagline}`
      : `${title} | ${siteConfig.shortName}`;
  const image = ogImage ?? `${siteConfig.url}/opengraph-image`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
