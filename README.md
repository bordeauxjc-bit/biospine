# BioSpine Health and Wellness Website

Modern, SEO-compliant Next.js website for **BioSpine Health and Wellness, LLC**
(Dr. Chucky S. Jordan, D.C.) in Lake City, South Carolina.

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX blog posts in `content/blog/`
- **SEO:** Metadata API, JSON-LD structured data, sitemap, robots, OG image
- **Deploy target:** Netlify (recommended) or Vercel

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
├── services/page.tsx     # Services overview
├── conditions/page.tsx   # Conditions we treat (long-tail SEO)
├── new-patients/page.tsx # What to expect as a new patient
├── contact/              # Contact form + thank-you page
├── blog/                 # Blog index + [slug] dynamic route
├── sitemap.ts            # Dynamic sitemap including blog posts
├── robots.ts             # robots.txt
├── not-found.tsx         # 404 page
└── opengraph-image.tsx   # Dynamic social preview image

components/
├── site/                 # Header, Footer, Logo
├── home/                 # Home page sections
├── ui/                   # Shared UI primitives (Button, Section, PageHeader)
├── seo/                  # JSON-LD helpers (LocalBusiness, Doctor, etc.)
├── blog/                 # Blog-specific components
└── ContactForm.tsx       # Netlify-compatible contact form

content/blog/             # MDX blog posts (frontmatter + markdown/MDX)
lib/
├── site-config.ts        # Single source of truth: NAP, hours, services, etc.
├── blog.ts               # MDX loader + frontmatter parser
└── seo.ts                # buildMetadata() helper

public/                   # Static assets (logo.png, icon.svg, manifest)
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

The real BioSpine logo lives at `public/logo.png`. To replace it, drop a new
PNG (ideally square or 4:3, on black) at the same path.

---

## Deployment

### Option A. Netlify (recommended)

1. Push this repo to GitHub
2. Go to [Netlify](https://app.netlify.com) → **Add new site → Import from Git**
3. Select the repo. Netlify auto-detects Next.js.
4. Under **Environment variables**, set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://biospinehealth.com`)
5. Click **Deploy**.
6. (Custom domain) Site settings → Domain management → Add custom domain → follow DNS instructions.

**Contact form:** Netlify Forms are auto-enabled. Submissions appear in
**Site → Forms → biospine-contact**. Set up email notifications there.

### Option B. Vercel

1. Push to GitHub.
2. Go to [Vercel](https://vercel.com) → **Import Project**.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Set `NEXT_PUBLIC_SITE_URL` in **Settings → Environment Variables**.

> ⚠️ **Contact form on Vercel:** The form will POST to `/contact/thanks`
> and 405 by default. Replace it with an API route at `app/api/contact/route.ts`
> using [Resend](https://resend.com) or nodemailer. Add `RESEND_API_KEY` and
> `CONTACT_TO_EMAIL` env vars.

---

## SEO checklist

When launching, verify the following:

- [ ] `NEXT_PUBLIC_SITE_URL` is set to the production domain
- [ ] Confirm NAP is accurate in `lib/site-config.ts`
- [ ] Run through [Google Rich Results Test](https://search.google.com/test/rich-results) on the home page (expect LocalBusiness + FAQ + WebSite)
- [ ] Submit `https://yoursite.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Claim the [Google Business Profile](https://business.google.com) and link the website
- [ ] Add real clinic photos to `public/images/` and reference in pages (replace SVG placeholders)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/), target 90+ Performance, 100 SEO/Accessibility/Best Practices
- [ ] Verify all pages have unique titles and meta descriptions

---

## Items flagged for client confirmation

Search the codebase for `TODO` comments to find spots where client-specific
info is needed:

- **Office hours**, currently Mon–Fri 8–5 from directory listing
- **Techniques offered** (Diversified, Gonstead, Activator, decompression, etc.)
- **Accepted insurance** beyond Medicare
- **Practice philosophy / mission statement**
- **Real clinic and headshot photos** (currently SVG placeholders)
- **Google Place ID** for more accurate map embed

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
