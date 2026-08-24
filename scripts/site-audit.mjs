const baseUrl = (process.argv[2] ?? 'http://127.0.0.1:3100').replace(/\/$/, '');
const canonicalOrigin = (
  process.env.CANONICAL_ORIGIN ?? 'https://biospine.vercel.app'
).replace(/\/$/, '');

const decodeText = (value = '') =>
  value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const matches = (html, pattern) => [...html.matchAll(pattern)];

async function get(pathname) {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect: 'manual' });
  return { response, html: await response.text() };
}

const sitemapResponse = await get('/sitemap.xml');
const sitemapUrls = matches(sitemapResponse.html, /<loc>(.*?)<\/loc>/g).map(
  (match) => match[1],
);
const sitemapPaths = sitemapUrls.map((url) => new URL(url).pathname);
const uniquePaths = [...new Set(sitemapPaths)];

const pages = [];
const htmlByPath = new Map();
const linksByPath = new Map();
const issues = [];

if (sitemapResponse.response.status !== 200) {
  issues.push(`Sitemap returned ${sitemapResponse.response.status}`);
}
if (sitemapPaths.length !== uniquePaths.length) {
  issues.push('Sitemap contains duplicate URLs');
}

for (const pathname of uniquePaths) {
  const { response, html } = await get(pathname);
  htmlByPath.set(pathname, html);

  const title = decodeText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const description = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
  )?.[1];
  const canonical = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i,
  )?.[1];
  const h1Count = matches(html, /<h1\b[^>]*>/gi).length;
  const images = matches(html, /<img\b[^>]*>/gi).map((match) => match[0]);
  const imagesMissingAlt = images.filter((image) => !/\balt=["']/i.test(image));
  const jsonLd = matches(
    html,
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );
  const schemaErrors = [];
  for (const [, value] of jsonLd) {
    try {
      JSON.parse(value);
    } catch {
      schemaErrors.push('Invalid JSON-LD');
    }
  }

  const hrefs = matches(html, /<a\b[^>]+href=["']([^"']+)["']/gi).map(
    (match) => match[1],
  );
  const internalLinks = hrefs
    .filter((href) => !/^(mailto:|tel:|javascript:)/i.test(href))
    .map((href) => new URL(href, canonicalOrigin))
    .filter((url) => url.origin === canonicalOrigin)
    .map((url) => `${url.pathname}${url.hash}`);
  linksByPath.set(pathname, internalLinks);

  if (response.status !== 200) issues.push(`${pathname} returned ${response.status}`);
  if (!title) issues.push(`${pathname} has no title`);
  if (!description) issues.push(`${pathname} has no meta description`);
  if (canonical !== `${canonicalOrigin}${pathname === '/' ? '' : pathname}`) {
    issues.push(`${pathname} has unexpected canonical ${canonical ?? '(missing)'}`);
  }
  if (h1Count !== 1) issues.push(`${pathname} has ${h1Count} H1 elements`);
  if (imagesMissingAlt.length) {
    issues.push(`${pathname} has ${imagesMissingAlt.length} image(s) without alt`);
  }
  if (schemaErrors.length) issues.push(`${pathname} contains invalid JSON-LD`);

  pages.push({
    pathname,
    status: response.status,
    title,
    titleLength: title.length,
    descriptionLength: description?.length ?? 0,
    h1Count,
    images: images.length,
    imagesMissingAlt: imagesMissingAlt.length,
    jsonLdBlocks: jsonLd.length,
    internalLinks: internalLinks.length,
  });
}

const titleGroups = Map.groupBy(pages, (page) => page.title);
for (const [title, group] of titleGroups) {
  if (title && group.length > 1) issues.push(`Duplicate title: ${title}`);
}

const checkedTargets = new Map();
for (const [source, links] of linksByPath) {
  for (const link of links) {
    const targetUrl = new URL(link, canonicalOrigin);
    const targetPath = targetUrl.pathname;
    if (!checkedTargets.has(targetPath)) {
      checkedTargets.set(targetPath, (await get(targetPath)).response.status);
    }
    const status = checkedTargets.get(targetPath);
    if (status >= 400) issues.push(`${source} links to ${targetPath} (${status})`);

    if (targetUrl.hash && htmlByPath.has(targetPath)) {
      const id = decodeURIComponent(targetUrl.hash.slice(1));
      const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(`\\bid=["']${escapedId}["']`).test(htmlByPath.get(targetPath))) {
        issues.push(`${source} links to missing fragment ${targetPath}${targetUrl.hash}`);
      }
    }
  }
}

const depths = new Map([['/', 0]]);
const queue = ['/'];
while (queue.length) {
  const current = queue.shift();
  const nextDepth = depths.get(current) + 1;
  for (const link of linksByPath.get(current) ?? []) {
    const target = new URL(link, canonicalOrigin).pathname;
    if (uniquePaths.includes(target) && !depths.has(target)) {
      depths.set(target, nextDepth);
      queue.push(target);
    }
  }
}
const orphans = uniquePaths.filter((pathname) => !depths.has(pathname));
if (orphans.length) issues.push(`Orphan sitemap pages: ${orphans.join(', ')}`);

const robots = await get('/robots.txt');
if (robots.response.status !== 200) issues.push(`robots.txt returned ${robots.response.status}`);
if (/Disallow:\s*\/_next\//i.test(robots.html)) {
  issues.push('robots.txt blocks /_next/ assets');
}

const missingPage = await get('/quality-gate-not-a-real-page');
if (missingPage.response.status !== 404) {
  issues.push(`Unknown route returned ${missingPage.response.status}, expected 404`);
}

const result = {
  baseUrl,
  canonicalOrigin,
  auditedAt: new Date().toISOString(),
  summary: {
    sitemapUrls: uniquePaths.length,
    pagesReturning200: pages.filter((page) => page.status === 200).length,
    uniqueInternalTargets: checkedTargets.size,
    maxDepth: Math.max(...depths.values()),
    orphans: orphans.length,
    issues: issues.length,
  },
  issues,
  pages,
};

console.log(JSON.stringify(result, null, 2));
if (issues.length) process.exitCode = 1;
