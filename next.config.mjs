/**
 * MDX is compiled at build time from `content/blog/*.mdx` using
 * `next-mdx-remote/rsc` inside the blog post server component, there's no
 * need for the `@next/mdx` webpack plugin.
 */
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
