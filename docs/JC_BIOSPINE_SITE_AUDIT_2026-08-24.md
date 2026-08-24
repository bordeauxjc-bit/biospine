# JC WEBSITE PERFECTION + SEO AUDIT REPORT

**Site:** BioSpine Health and Wellness, LLC<br>
**Production:** https://biospine.vercel.app<br>
**Audited preview:** https://biospine-git-codex-jc-seo-audit-bordeauxjc-7662s-projects.vercel.app<br>
**Repository:** bordeauxjc-bit/biospine<br>
**Branch:** `codex/jc-seo-audit`<br>
**Audit date:** August 24, 2026<br>
**Quality system:** JC Website Perfection + SEO System v1.0

# 1. EXECUTIVE SUMMARY

## Overall status

**86/100 — Strong, not perfection. DO NOT APPROVE FOR PRODUCTION YET.**

The technical foundation, mobile experience, accessibility, structured data,
content specificity, crawlability, and performance meet or exceed the system's
minimum gates. The production site remains unchanged while this report is open.

One combined hard blocker remains: Vercel has no `WEB3FORMS_ACCESS_KEY`, so an
online appointment submission and its email notification cannot be completed or
tested. The preview no longer exposes a form that will fail; it presents working
phone and email actions until the key is supplied. Vercel Web Analytics and Speed
Insights are implemented and their scripts return 200, but the primary
form-completion conversion cannot be validated until a real submission can reach
the noindex `/contact/thanks` destination.

## Most important findings

1. The former production form returned HTTP 503 because the project had no
   environment variables.
2. Production `robots.txt` blocked `/_next/`, preventing crawlers from fetching
   Next.js rendering assets.
3. Every static/service/condition URL claimed a fresh sitemap `lastmod` on every
   request, even when content had not changed.
4. Mobile testing found hidden horizontal overflow from the closed off-canvas
   menu and no keyboard-focus containment when the menu was open.
5. Contact had two low-contrast text instances and scored 97 Accessibility.
6. Unconfirmed commercial-insurance language appeared on multiple pages even
   though Medicare was the only confirmed plan in the source of truth.
7. Vercel Analytics and Speed Insights were enabled in the dashboard but absent
   from the application.
8. Several third-party listings still appear to show BioSpine's former address.

## Most important improvements completed

1. Replaced the guaranteed-to-fail form with an automatic phone/email fallback
   whenever the Web3Forms key is absent; hardened form validation for when it is
   enabled.
2. Removed the `/_next/` robots block and explicitly allowed OAI-SearchBot.
3. Removed inaccurate generated sitemap dates; retained real article dates.
4. Fixed mobile overflow, focus entry, focus containment, Escape behavior, and
   focus return for the mobile menu.
5. Raised contact contrast to 100 Accessibility in post-fix Lighthouse tests.
6. Removed unsupported insurance and referral assertions and fixed a visible
   copy-spacing error.
7. Added visible government/clinical references to treatment and condition
   templates and added current FMCSA/SCDMV paperwork links for DOT drivers.
8. Added a factual website privacy notice, shorter page titles, refined metadata,
   cleaner entity schema, page analytics, and Core Web Vitals collection.
9. Removed an unused italic font file, reducing transfer size by about 84–97 KB
   on the two repeatedly measured templates.
10. Added `npm run audit:site` for repeatable URL, metadata, schema, link,
    fragment, orphan, robots, and 404 regression checks.

## Important remaining limitations

- Web3Forms key and delivery test: **BLOCKED BY ACCESS**.
- Form-completion conversion validation: **BLOCKED BY ACCESS** until Web3Forms
  succeeds.
- Field Core Web Vitals: **INSUFFICIENT DATA**; collection starts after promotion
  and real traffic.
- Google Search Console and Bing Webmaster Tools: **BLOCKED BY ACCESS**.
- Custom domain: **NEEDS BUSINESS INPUT**. The Vercel subdomain is functional but
  is not the ideal long-term local-business identity.
- Directory address cleanup: **NEEDS BUSINESS OWNER ACTION**.
- Final clinical attribution/content sign-off by Dr. Jordan: **NEEDS BUSINESS
  INPUT** before approval.

# 2. PROJECT CONTEXT

| Item | Value |
|---|---|
| Framework | Next.js 16.3.2, React 19, TypeScript, Tailwind |
| Hosting | Vercel Hobby project `bordeauxjc-7662s-projects/biospine` |
| Production deployment | Ready; deliberately not changed by this audit |
| Preview deployment | Ready, public, HTTP 200, not deployment-protected |
| Primary business | Chiropractic care and FMCSA DOT physicals |
| Current NAP | BioSpine Health and Wellness, LLC · 214 John St, Lake City, SC 29560 · 843-713-0669 |
| Site language | English, `en-US` |
| Ecommerce | Not applicable |
| Primary conversion | Appointment inquiry; phone/email fallback while Web3Forms is unavailable |

# 3. SCORECARD

| Category | Score | Maximum | Status |
|---|---:|---:|---|
| Technical crawl and indexation | 15 | 15 | PASS |
| Content and on-page SEO | 14 | 15 | PASS; clinical sign-off pending |
| Performance and Core Web Vitals | 11 | 12 | PASS lab gates; field data pending |
| Architecture and internal linking | 8 | 8 | PASS |
| Structured data and AI entity clarity | 8 | 8 | PASS |
| Local discovery | 7 | 10 | PARTIAL; citation cleanup and custom domain remain |
| Accessibility | 8 | 8 | PASS automated and tested journeys |
| UX, trust, and conversion | 5 | 8 | PARTIAL; form unavailable |
| Security, privacy, and reliability | 5 | 6 | PASS minimum; CSP remains an improvement |
| Analytics and monitoring | 3 | 5 | PARTIAL; collection installed, conversion untested |
| Authority and off-page visibility | 2 | 5 | PARTIAL; reviews present, listings inconsistent |
| **Total** | **86** | **100** | **Strong, not perfection** |

# 4. HARD LAUNCH BLOCKERS

| Blocker | Status | Evidence | Required action |
|---|---|---|---|
| Failed primary form/notification | BLOCKED BY ACCESS | Vercel has zero environment variables; `/api/contact` returns 503 without the key | Add `WEB3FORMS_ACCESS_KEY` to Preview and Production, redeploy, submit a non-sensitive test, and confirm email delivery |
| Primary conversion analytics absent or untested | PARTIAL / BLOCKED BY ACCESS | Web Analytics loads, but successful form completion cannot reach `/contact/thanks` | Complete the form test and confirm the thank-you page view in Analytics |
| Untested critical third-party integration | BLOCKED BY ACCESS | Web3Forms delivery cannot be called without a real key | Same owner action as above |

All other hard-blocker checks passed. Vercel adds `x-robots-tag: noindex` to
preview deployments by design; this is an expected preview safeguard, not a
production robots defect.

# 5. URL AND CRAWL SUMMARY

| Metric | Production baseline | Audited preview |
|---|---:|---:|
| Sitemap URLs | 30 | 31 (privacy page added) |
| Canonical, indexable 200 URLs | 30/30 | 31/31 |
| Internal link occurrences | 950 | 1,039 |
| Unique internal targets | 30 | 31 |
| Broken internal links/fragments | 0 | 0 |
| Redirect loops/chains | 0 | 0 |
| Orphan sitemap pages | 0 | 0 |
| Maximum click depth from home | 2 | 2 |
| Duplicate titles/descriptions | 0 | 0 |
| H1 defects | 0 | 0 |
| Missing image alt attributes | 0 | 0 |
| Invalid JSON-LD blocks | 0 | 0 |
| Unknown URL response | True 404 | True 404 |

## Crawl files/reports

- Repeatable gate: `scripts/site-audit.mjs`
- Command: `npm run audit:site -- <base-url>`
- Preview result: 31 pages, 31 canonical 200s, zero issues.
- URL preservation: every pre-existing URL was retained; `/privacy` was the only
  new indexable route. No redirect map was required.

# 6. PERFORMANCE AND CORE WEB VITALS

## Field data

**INSUFFICIENT FIELD DATA.** PageSpeed Insights returned a quota response and the
site had not loaded Vercel Speed Insights before this audit. The preview now loads
the Vercel field script successfully, but preview traffic is not a substitute for
production P75 data. After promotion, monitor LCP, INP, and CLS for at least 28
days where traffic permits.

## Lighthouse mobile — before and after

Repeated results are medians. Local Best Practices is 96 only because the two
Vercel-only script endpoints return 404 on localhost; both scripts return 200 on
the Vercel preview, where Best Practices is 100.

| Template | Stage | Performance | Accessibility | Best Practices | SEO | LCP | CLS | Transfer |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Home | Production baseline median, 3 runs | 94 | 100 | 100 | 100 | 2,964 ms | 0 | 420 KB |
| Home | Post-fix local median, 3 runs | 96 | 100 | 96* | 100 | 2,838 ms | 0 | 336 KB |
| Home | Public preview, 1 run | 93 | 100 | 100 | 69** | 3,147 ms | 0 | 333 KB |
| Contact | Production baseline median, 3 runs | 96 | 97 | 100 | 100 | 2,674 ms | 0 | 850 KB |
| Contact | Post-fix local median, 3 runs | 98 | 100 | 96* | 100 | 2,464 ms | 0 | 753 KB |
| Contact | Public preview, 1 run | 92 | 100 | 100 | 66** | 3,198 ms | 0 | 757 KB |

\* Local-only analytics endpoint limitation.<br>
\** Lighthouse detects Vercel's preview `x-robots-tag: noindex`. Production
baseline SEO is 100 and the preview crawl confirms the rendered canonical,
metadata, robots file, and sitemap are correct.

Other post-fix local mobile template runs:

| Template | Performance | Accessibility | SEO | LCP | Transfer |
|---|---:|---:|---:|---:|---:|
| Chiropractic adjustments | 97 | 100 | 100 | 2,626 ms | 303 KB |
| DOT physicals | 97 | 100 | 100 | 2,610 ms | 307 KB |
| Areas served | 98 | 100 | 100 | 2,463 ms | 289 KB |
| Blog article | 97 | 100 | 100 | 2,619 ms | 299 KB |
| Privacy | 98 | 100 | 100 | 2,461 ms | 289 KB |

Preview desktop Lighthouse was 100 Performance, 100 Accessibility, and 100 Best
Practices on both home and contact, with 0 CLS and LCP of 529 ms and 545 ms.

## Performance changes completed

- Removed the unused Newsreader italic webfont while retaining the established
  typography through synthesized italics.
- Kept image optimization; Lighthouse reported no image-delivery savings.
- Avoided adding a tag manager or consent banner; Vercel Analytics is cookie-free
  according to [Vercel's privacy documentation](https://vercel.com/docs/analytics/privacy-policy).
- Kept the useful lazy-loaded map; contact remains under the 1.5 MB house budget.

## Remaining performance limitations

- Home lab LCP varies around the 2.5-second threshold under mobile throttling;
  field monitoring is required before making a user-visible design tradeoff.
- Preview cold-network scores are above the hard minimum of 90 but below local
  medians. Recheck production after promotion and caching.

# 7. TECHNICAL SEO RESULTS

## Crawl/indexation

- `robots.txt`: FIXED; `/api/` remains blocked, `/_next/` is crawlable.
- OAI-SearchBot: explicitly allowed for public discovery.
- Sitemap: 31 canonical routes; inaccurate generated `lastmod` values removed.
- Canonicals: self-referencing production URLs on every sitemap page.
- HTTP to HTTPS: production redirects with 308.
- HTTPS/HSTS: PASS.
- 404 handling: PASS.
- Mixed content: none found.
- Valuable URL changes: none.
- Hreflang: not applicable to this single-language site.

# 8. ARCHITECTURE AND INTERNAL LINKING

- Every indexable route is reachable in two clicks or fewer.
- Service, condition, regional, review, blog, contact, and privacy pages are
  linked through navigation, contextual modules, or both.
- No thin city-swap pages were created. `/areas-we-serve` remains the single
  regional service-area page.
- DOT paperwork is linked from the commercial service page, not scattered across
  unrelated content.

# 9. CONTENT AND ON-PAGE SEO

## Priority page matrix

- 31/31 pages have unique titles, descriptions, canonicals, and one visible H1.
- Title range: 23–68 characters; longer titles remain only where the full topic is
  useful and accurate.
- Every description is now 115–160 characters.
- Home title is now `Chiropractor & DOT Physicals in Lake City, SC | BioSpine`.
- Local relevance uses Lake City, South Carolina, Florence County, and the Pee Dee
  naturally; no keyword stuffing or doorway pattern was found.

## Content changes completed

- Removed unconfirmed commercial-insurance claims across home, new-patient, and
  service pages.
- Replaced categorical referral claims with plan-specific call-to-confirm copy.
- Added sources from NIH/NCCIH, CDC, NIAMS, MedlinePlus, OSHA, FDA, PubMed, FMCSA,
  and SCDMV where relevant.
- Preserved clear boundaries around emergencies, referrals, varying outcomes, and
  DOT certification decisions.
- Kept all 12 public Google ratings labeled separately from Zocdoc's verified
  patient reviews; no composite or anonymous marketing testimonial was added.
- Fixed UTC date rendering so article dates no longer display one day early in
  U.S. time zones.

## Content requiring business/expert input

- Dr. Jordan should confirm the clinical accuracy and author attribution of all
  treatment, condition, and article pages before production approval.
- Confirm whether any non-Medicare plans should be named publicly.
- Confirm current appointment timing before publishing stronger availability
  language.

# 10. STRUCTURED DATA AND ENTITY RESULTS

Rendered inventory:

- `MedicalClinic` and `WebSite` on all site pages.
- `Person` with education, license, NPI, and FMCSA credential on About.
- `Service` for DOT physicals.
- `MedicalTherapy` for treatment pages.
- `MedicalCondition` for condition guides.
- `Article` for blog posts, including author URL and meaningful `dateModified`.
- `FAQPage` only where matching visible FAQs exist.
- `BreadcrumbList` matching visible navigation trails.

All rendered JSON-LD parsed successfully. Unverified `priceRange`, the misleading
`isAccessibleForFree`, the overbroad `Physician` type, and false city typing for
the whole Pee Dee region were removed. External profile URLs were added to
`sameAs`. No self-serving review or aggregate-rating schema is present.

## Schema policy confirmation

Schema matches visible content, does not guarantee rich results, and follows the
specificity and identity guidance in [Google's LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business),
[Organization documentation](https://developers.google.com/search/docs/appearance/structured-data/organization),
and [Article documentation](https://developers.google.com/search/docs/appearance/structured-data/article).

# 11. LOCAL OR E-COMMERCE DISCOVERY

## Local module

- Current on-site NAP is consistent: 214 John St, Lake City, SC 29560;
  843-713-0669.
- Service-area page covers nearby communities without duplicate city pages.
- Google review profile and Zocdoc profile are linked and labeled.
- Search sampling found old addresses on Zocdoc/Healthgrades/DocSpot-style
  listings, including 111 N Matthews Rd and 263 Kelley St. These should be
  corrected to 214 John St.
- Search results can confuse Lake City, South Carolina with Lake City, Florida;
  retaining `SC`, `South Carolina`, `Florence County`, and `Pee Dee` is important.
- DOT page includes current FMCSA forms MCSA-5875, MCSA-5870, MCSA-5871,
  MCSA-5872, MCSA-5895, the FMCSA form hub, examiner registry, SCDMV CDL guidance,
  and SCDMV DL-405A.

## E-commerce module

Not applicable. The site has no cart, checkout, product inventory, or payment
journey.

# 12. ACCESSIBILITY RESULTS

## Automated

- Post-fix Lighthouse Accessibility: 100 on all measured templates.
- Missing alt attributes: 0.
- H1 count defects: 0.
- Contact contrast failures: FIXED.
- Critical/serious automated violations: 0 in the tested Lighthouse templates.

## Manual

Tested at 320×844, 390×844, 768×844, and desktop widths:

- No horizontal overflow on home, DOT, shockwave, condition, reviews, contact, or
  privacy templates.
- Mobile menu button is 44×44 CSS pixels and has an accessible name/state.
- Opening the menu focuses the first link; Tab/Shift+Tab remain within it; Escape
  closes it and returns focus to the menu button.
- Background scrolling is disabled while the menu is open.
- Skip link and main landmark are present.
- Call and email controls expose correct `tel:` and `mailto:` targets.
- DOT links remain readable and operable at 320 px.
- Enabled contact-form keyboard/assistive-technology testing remains blocked
  until the credential causes the form to render.

This is evidence of tested behavior, not an accessibility certification.

# 13. UX, TRUST, AND CONVERSION TESTING

| Journey | Status | Evidence |
|---|---|---|
| Main and mobile navigation | PASS | Links, active state, focus, Escape, no overflow |
| Appointment CTA | PASS / FALLBACK | Reaches `/contact#appointment-form`; working direct-contact panel is present |
| Click to call | PASS | `tel:+18437130669` verified |
| Email | PASS | `mailto:Biospinehealthandwellness@gmail.com` verified |
| Directions | PASS | Google Maps destination uses current NAP |
| DOT paperwork | PASS | Five federal forms plus SCDMV DL-405A verified live |
| Online form submission | BLOCKED BY ACCESS | No Web3Forms key; form intentionally not rendered |
| Confirmation page | READY, UNTESTED | `/contact/thanks` exists and is noindex |
| Email notification | BLOCKED BY ACCESS | Requires valid Web3Forms key and inbox confirmation |

## Trust/UX findings

- Physical office photos, practitioner identity, license, NPI, FMCSA registry
  number, hours, current address, phone, review sources, and safety language are
  visible.
- A new privacy notice explains the site form, ordinary email, Web3Forms, Vercel
  analytics, and external links without claiming legal compliance.
- Unsupported insurance claims were removed rather than softened into generic
  marketing language.

# 14. SECURITY, PRIVACY, AND RELIABILITY

- HTTPS and HSTS: PASS.
- `X-Content-Type-Options: nosniff`: PASS.
- `X-Frame-Options: SAMEORIGIN`: PASS.
- Referrer Policy: PASS.
- Permissions Policy: PASS.
- Content Security Policy: not present; document as a future defense-in-depth
  improvement because Google Maps, Web3Forms, and Vercel scripts require careful
  testing before enforcement.
- Exposed secrets: none found.
- Dependency audit: zero known vulnerabilities.
- Server-side form controls: content type, request size, required fields, maximum
  lengths, email, phone, reason allowlist, honeypot, upstream timeout, and safe
  failure response.
- Analytics properties contain no names, contact details, medical details, or
  other sensitive form data.
- Rollback: production remains on its previous deployment; the preview branch can
  be reverted or deleted without changing production.

# 15. SEARCH, AI, AND DISCOVERY PLATFORM STATUS

| Platform | Status | Next step |
|---|---|---|
| Google Search Console | BLOCKED BY ACCESS | Verify final domain and submit sitemap |
| Bing Webmaster Tools | BLOCKED BY ACCESS | Verify final domain and submit/import sitemap |
| Google Business Profile | NEEDS OWNER ACTION | Confirm NAP, categories, hours, services, appointment URL |
| OAI-SearchBot | PASS in robots | Monitor CDN/WAF logs after promotion |
| GPTBot | DEFAULT ALLOW | Make a separate client policy decision if training access is a concern |
| `llms.txt` | NOT IMPLEMENTED | Optional experiment only; not required for search |

# 16. ANALYTICS VALIDATION

- Vercel Web Analytics dashboard: enabled.
- Vercel Speed Insights dashboard: enabled.
- Application components: implemented in root layout.
- Preview script endpoints: HTTP 200, JavaScript content type.
- Browser console errors on preview: 0.
- Page-level analytics: ready to collect after promotion.
- Primary form conversion: use the noindex `/contact/thanks` page view after the
  form is enabled.
- Vercel custom events are not available on the current Hobby plan; click-to-call
  and click-to-email custom event tracking would require Pro or another approved
  analytics provider. No PII should be included in any future event.

# 17. CHANGES IMPLEMENTED

Key files/settings:

- `app/layout.tsx`: analytics, field metrics, smaller font payload.
- `app/robots.ts`, `app/sitemap.ts`, `lib/seo.ts`: crawl and metadata fixes.
- `components/site/Header.tsx`: mobile overflow and keyboard behavior.
- `app/contact/page.tsx`, `components/ContactForm.tsx`,
  `app/api/contact/route.ts`: safe fallback and validation.
- `app/privacy/page.tsx`, `components/site/Footer.tsx`: privacy disclosure and
  discoverability.
- `components/seo/schemas.ts`: entity/schema corrections.
- `lib/clinical-sources.ts`, `components/ui/ClinicalSources.tsx`: visible
  evidence references.
- `scripts/site-audit.mjs`, `jc-quality-gates.json`: repeatable quality gate.
- Priority page and article files: specific copy, accurate insurance wording,
  UTC dates, references, and concise metadata.

# 18. UNRESOLVED ITEMS

| Item | Owner | Impact | Next action |
|---|---|---|---|
| Web3Forms access key | Site owner | Blocks online form and notification | Create/add key to Preview and Production, then redeploy |
| Form delivery and conversion test | Site owner + implementer | Hard launch blocker | Send non-sensitive test, confirm email and `/contact/thanks` analytics |
| Clinical content/author sign-off | Dr. Jordan | YMYL trust and accuracy | Review treatment, condition, and article pages |
| Old directory addresses | Site owner | Local ranking/entity confusion | Update each claimed profile to 214 John St |
| Custom domain | Site owner | Brand trust and long-term URL ownership | Select/connect domain before broad promotion if practical |
| Search Console/Bing access | Site owner | Indexing and query visibility | Grant access after final domain decision |
| Field Core Web Vitals | Monitoring | Real-user performance unknown | Collect 28 days after promotion |
| CSP | Developer | Defense in depth | Design report-only policy, test Maps/Web3Forms/Vercel, then enforce |

# 19. BUSINESS FACTS OR ACCESS STILL NEEDED

1. Web3Forms access key and destination inbox owner.
2. Confirmation that Dr. Jordan reviewed and approves all clinical content and
   author attribution.
3. Final domain decision.
4. Google Business Profile, Search Console, and Bing access.
5. Confirmation of any insurance plans beyond Medicare before naming them.
6. Confirmation that every doctor/office image has an appropriate release.

# 20. 30/60/90-DAY VISIBILITY PLAN

## First 30 days

- Add and test Web3Forms; confirm analytics on `/contact/thanks`.
- Promote only after the hard blocker is cleared and production smoke tests pass.
- Connect the final domain, keep the Vercel URL redirected/canonicalized as
  appropriate, and verify Search Console/Bing.
- Submit the sitemap and request indexing for home, DOT physicals, services,
  contact, reviews, and areas served.
- Correct NAP on Google Business Profile, Zocdoc, Healthgrades, DocSpot, and other
  claimed listings.

## Days 31–60

- Review Search Console queries for Lake City SC chiropractic, DOT physical, back
  pain, neck pain, auto injury, and shockwave intent.
- Publish one clinically reviewed, locally useful article that answers a real
  patient or commercial-driver question; do not create city-swap pages.
- Add accurate Google Business Profile services, photos, appointment URL, and
  weekly posts where useful.
- Ask real patients for reviews through the chosen verified platform without
  incentives, scripts that dictate sentiment, or review gating.

## Days 61–90

- Compare form-completion, call, and directions behavior with landing-page
  traffic; add Pro custom events only if the business wants that reporting.
- Improve pages with impressions but weak click-through using query-aligned titles
  and descriptions, not keyword stuffing.
- Build legitimate local authority through chambers, community organizations,
  employers/CDL contacts, and healthcare relationships where accurate and
  appropriate.
- Re-audit citations, reviews, schema, Core Web Vitals, and competitor SERPs.

# 21. MONITORING SCHEDULE

| Frequency | Checks |
|---|---|
| Every deployment | Build, lint, typecheck, `npm run audit:site`, priority mobile smoke test |
| Weekly for first month | Form delivery, Analytics page views, Speed Insights, uptime, 4xx/5xx logs |
| Monthly | Search Console coverage/queries, Bing, GBP NAP/hours, reviews, broken external links |
| Quarterly | Full Lighthouse matrix, manual keyboard/mobile review, schema validation, dependency/security audit |
| After any business change | NAP, hours, doctor credentials, services, insurance, forms, privacy notice, schema |

# 22. FINAL APPROVAL

| Decision | Status |
|---|---|
| Approve preview for owner/clinical review | YES |
| Approve production promotion | **NO — hard blocker remains** |
| Required before production | Web3Forms key, successful delivery test, confirmation page/analytics validation, clinical sign-off |

## Final statement

The preview is technically strong, mobile-ready, accessible in the tested
journeys, and substantially more trustworthy than the production baseline. It
should remain a preview until the appointment submission and notification can be
tested end to end. No ranking guarantee is made or implied.
