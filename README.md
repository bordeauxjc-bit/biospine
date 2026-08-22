# BioSpine Health and Wellness Website

Modern, SEO-compliant Next.js website for **BioSpine Health and Wellness, LLC**
(Dr. Chucky S. Jordan, D.C.) in Lake City, South Carolina.

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX blog posts in `content/blog/`
- **SEO:** Metadata API, JSON-LD structured data, sitemap, robots, OG image
- **Deploy target:** Vercel

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Before running `npm run build` for production, create a `.env.local`:

```bash
cp .env.example .env.local
# then edit NEXT_PUBLIC_SITE_URL to match your production domain
```

---

## Scripts

| Command            | Purpose                                    |
|--------------------|--------------------------------------------|
| `npm run dev`      | Start the local dev server at `:3000`      |
| `npm run build`    | Production build                           |
| `npm run start`    | Serve the production build locally         |
| `npm run lint`     | Run ESLint                                 |
| `npm run typecheck`| Run TypeScript type-checking (no emit)     |

---

## Project structure

```
app/                      # Next.js App Router pages + route handlers
├── layout.tsx            # Root layout (fonts, global metadata, JSON-LD)
├── page.tsx              # Home
├── about/page.tsx        # About Dr. Jordan
├── services/             # Overview + dedicated [slug] service guides
├── conditions/           # Overview + dedicated [slug] condition guides
├── reviews/page.tsx      # Attributable review excerpts + source policy
├── new-patients/page.tsx # What to expect as a new patient
├── contact/              # Contact form + thank-you page
├── blog/                 # Blog index + [slug] dynamic route
├── sitemap.ts            # Dynamic sitemap including guides + blog posts
├── robots.ts             # robots.txt
├── not-found.tsx         # 404 page
└── opengraph-image.tsx   # Dynamic social preview image

components/
├── site/                 # Header, Footer, Logo
├── home/                 # Home page sections
├── ui/                   # Shared UI primitives (Button, Section, PageHeader)
├── seo/                  # JSON-LD helpers (LocalBusiness, Doctor, etc.)
├── blog/                 # Blog-specific components
└── ContactForm.tsx       # Web3Forms-backed appointment request form

content/blog/             # MDX blog posts (frontmatter + markdown/MDX)
lib/
├── site-config.ts        # Single source of truth: NAP, hours, services, etc.
├── conditions.ts         # Condition guide content + internal-link map
├── service-guides.ts     # Dedicated service guide content
├── reviews.ts            # Published review excerpts + source details
├── blog.ts               # MDX loader + frontmatter parser
└── seo.ts                # buildMetadata() helper

public/                   # Static assets (logo.svg, icon.svg, manifest)
```

---

## Editing content

### Business info (name, phone, hours, address, services)

All business info lives in **`lib/site-config.ts`**. Updates there propagate
across the Header, Footer, JSON-LD schemas, Contact page, sitemap, and every
relevant page.

### Blog posts

Add a new `.mdx` file to `content/blog/`. The filename becomes the URL slug.
Example:

```mdx
---
title: "How to Sleep with Low Back Pain"
description: "Practical tips for getting comfortable sleep when your back hurts."
date: "2026-03-20"
author: "Dr. Chucky S. Jordan, D.C."
tags: ["Low Back Pain", "Sleep"]
---

Your content in standard Markdown (or MDX with JSX) goes here…
```

The post is automatically added to the blog index, sitemap, and receives full
SEO metadata + Article JSON-LD.

### Logo

The BioSpine vector lockup lives at `public/logo.svg`; the compact mark is
`public/icon.svg`. The matching React lockup is in `components/site/Logo.tsx`.

---

## Deployment

### Vercel

1. Push to GitHub.
2. Go to [Vercel](https://vercel.com) → **Import Project**.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Set `NEXT_PUBLIC_SITE_URL` in **Settings → Environment Variables**. Use
   `https://biospine.vercel.app` until a custom domain is connected.
5. Create a [Web3Forms](https://web3forms.com/) access key and add it as the
   server-side environment variable `WEB3FORMS_ACCESS_KEY`.
6. Redeploy after adding or changing either environment variable.

The contact form posts to the local `/api/contact` route, which validates the
request and forwards it to Web3Forms without exposing the access key in the
browser bundle.

---

## SEO checklist

When launching, verify the following:

- [ ] `NEXT_PUBLIC_SITE_URL` is set to the production domain
- [ ] Confirm NAP is accurate in `lib/site-config.ts`
- [ ] Run through [Google Rich Results Test](https://search.google.com/test/rich-results) on the home page (expect LocalBusiness + FAQ + WebSite)
- [ ] Submit `https://yoursite.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Claim the [Google Business Profile](https://business.google.com) and link the website
- [ ] Confirm permission to publish every doctor and office photo in `public/images/`

### Local listing cleanup

Use this exact NAP everywhere: **BioSpine Health and Wellness, LLC · 214 John
St, Lake City, SC 29560 · 843-713-0669**.

- [ ] Update the Zocdoc practice and doctor profiles from the former address
- [ ] Update Healthgrades, Vitals, Yellow Pages, and other healthcare directories
- [ ] Confirm the Google Business Profile primary category, hours, services, and appointment URL
- [ ] Add the final custom domain to Google Search Console and Bing Webmaster Tools
- [ ] Request patient reviews through a verified platform; never publish composite testimonials
- [ ] Keep one regional `/areas-we-serve` page instead of creating thin duplicate city pages
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/), target 90+ Performance, 100 SEO/Accessibility/Best Practices
- [ ] Verify all pages have unique titles and meta descriptions

---

## Items flagged for client confirmation

Search the codebase for `TODO` comments to find spots where client-specific
info is needed:

- **Techniques offered** (Diversified, Gonstead, Activator, decompression, etc.)
- **Accepted insurance** beyond Medicare
- **Photo-release permission** for every doctor and office image
- **Web3Forms access key** and the final custom domain

---

## Accessibility

The site follows WCAG 2.1 AA practices:
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<address>`)
- Full keyboard navigation + visible focus rings
- Skip-to-content link
- Descriptive alt text on images
- ARIA labels on interactive elements without visible text
- Respects `prefers-reduced-motion`
- Color contrast AA+ on all text

---

## License / Attribution

Site built for **BioSpine Health and Wellness, LLC**. All content rights reserved
by the business. Site scaffold, components, and blog seed content are
transferable with the site.
