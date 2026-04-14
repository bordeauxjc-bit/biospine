import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  localBusinessSchema,
  websiteSchema,
} from '@/components/seo/schemas';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: '/',
  }),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.doctor.fullName }],
  generator: 'Next.js',
  keywords: [
    'chiropractor Lake City SC',
    'chiropractic care Lake City',
    'back pain Lake City SC',
    'headache relief South Carolina',
    'sports injury chiropractor',
    'Dr. Chucky Jordan',
    'BioSpine Health and Wellness',
    'spinal adjustment Lake City',
    'Florence SC chiropractor',
    'Kingstree chiropractor',
  ],
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    // Apple touch icon falls back to the PNG logo. Apple devices will
    // display it on a black background matching the brand.
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
  formatDetection: { email: true, address: true, telephone: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1220' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />

        <JsonLd id="ld-business" data={localBusinessSchema()} />
        <JsonLd id="ld-website" data={websiteSchema()} />
      </body>
    </html>
  );
}
