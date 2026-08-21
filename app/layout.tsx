import type { Metadata, Viewport } from 'next';
import { Newsreader, Karla } from 'next/font/google';
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

// Editorial serif for headlines. Optical sizing is what keeps it from
// looking thin at display sizes.
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
  // Next 14 has no fallback metrics for Newsreader, which makes it log a
  // font-override error on every render. We declare Georgia explicitly
  // instead, which is a close enough serif to keep layout shift small.
  adjustFontFallback: false,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

// Body grotesque with a little drawn character.
const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
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
    { media: '(prefers-color-scheme: dark)', color: '#101614' },
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
    <html lang="en" className={`${newsreader.variable} ${karla.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-ink focus:px-4 focus:py-2 focus:text-white"
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
