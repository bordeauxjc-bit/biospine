/**
 * MDX is compiled at build time from `content/blog/*.mdx` using
 * `next-mdx-remote/rsc` inside the blog post server component, there's no
 * need for the `@next/mdx` webpack plugin.
 */
/**
 * Content Security Policy.
 *
 * Every origin below was confirmed by loading the production site and reading
 * the actual resource list, not guessed:
 *
 *   www.googletagmanager.com   GA4 gtag loader
 *   www.google-analytics.com   GA4 /g/collect beacon (regional subdomains vary)
 *   www.google.com             Google Maps embed iframe on /contact
 *   api.web3forms.com          appointment form POST (fetch, see ContactForm)
 *
 * Vercel Web Analytics and Speed Insights are first-party: Vercel proxies them
 * through obfuscated same-origin paths, so 'self' already covers them.
 *
 * On 'unsafe-inline' for scripts: Next injects inline bootstrap scripts on every
 * statically generated page, and the GA4 config snippet in app/layout.tsx is
 * inline too. The stricter alternative is a per-request nonce, which requires
 * middleware and forces every page to render dynamically. That would trade away
 * static generation on all 45 pages for this site's threat model, which is a
 * brochure site with one third-party form. The directives that actually blunt
 * injection here are object-src 'none', base-uri 'self', and form-action 'self'.
 *
 * Rollout: defaults to Report-Only so a missed origin cannot take the site down.
 * Set CSP_MODE=enforce in Vercel once the console shows no violations.
 *
 * CSP_MODE is read at BUILD time, not request time. Next serialises headers()
 * into .next/routes-manifest.json during the build, so changing the variable in
 * Vercel has no effect until the next deployment. Verified locally: a server
 * started without CSP_MODE still served the enforcing header from a build made
 * with it.
 */
const cspEnforced = process.env.CSP_MODE === 'enforce';

const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  [
    "connect-src 'self'",
    'https://api.web3forms.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://*.google-analytics.com',
    'https://*.analytics.google.com',
  ].join(' '),
  'frame-src https://www.google.com',
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  // Spec says this directive is ignored in a report-only policy, and Chrome
  // logs an error for it on every page load. Only emit it when enforcing.
  ...(cspEnforced ? ['upgrade-insecure-requests'] : []),
].join('; ');

const cspHeaderName = cspEnforced
  ? 'Content-Security-Policy'
  : 'Content-Security-Policy-Report-Only';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows isolated local QA builds without disturbing another running dev server.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.biospinemovedifferently.com',
          },
        ],
        destination: 'https://biospinemovedifferently.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: cspHeaderName, value: cspDirectives },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ];
  },
};

export default nextConfig;
