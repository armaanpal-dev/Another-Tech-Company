// Prerenders every route to static HTML after `vite build`.
// Crawlers, social unfurlers and AI bots that do not execute JavaScript then
// receive real content and the correct per-page title/description/canonical/JSON-LD.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const serverEntry = join(root, 'dist-ssr', 'entry-server.js');

if (!existsSync(serverEntry)) {
  console.error('[prerender] Missing dist-ssr/entry-server.js. Run the SSR build first.');
  process.exit(1);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const { posts } = await import(pathToFileURL(join(root, 'src', 'pages', 'blogPosts.js')).href);

const routes = [
  '/',
  '/shoppable-video',
  '/search-and-filters',
  '/features',
  '/how-it-works',
  '/pricing',
  '/compatibility',
  '/faq',
  '/blog',
  '/about',
  '/support',
  '/privacy',
  '/privacy/shoppable-video', // standalone per-app policy: noindex, not in sitemap or nav
  '/privacy/search',          // standalone per-app policy: noindex, not in sitemap or nav
  '/terms',
  '/affiliate-terms', // unlisted: reachable by direct URL only, noindex, not in sitemap or nav
  ...posts.map((p) => `/blog/${p.slug}`),
];

const template = readFileSync(join(distDir, 'index.html'), 'utf8');

let count = 0;
for (const route of routes) {
  const { html, helmet } = render(route);

  const head = [
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  // Drop the static fallback tags that Helmet now supersedes, so each page has
  // exactly one title / description / canonical / og:* set.
  let page = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<meta\s+name="robots"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '')
    .replace(/<meta\s+property="og:(type|site_name|title|description|url|image|image:width|image:height)"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:card"[^>]*>/i, '');

  page = page
    .replace('</head>', `  ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outDir = route === '/' ? distDir : join(distDir, route);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), page, 'utf8');
  count += 1;
}

console.log(`[prerender] Wrote ${count} static pages.`);
