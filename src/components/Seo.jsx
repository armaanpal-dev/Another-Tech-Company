import { Helmet } from 'react-helmet-async';

const SITE = 'AnotherDev';
const FULL = 'AnotherDev - Shoppable Video';
const BASE = 'https://anotherdev.in';

// Human labels for path segments, used to build the BreadcrumbList.
const SEG_LABELS = {
  features: 'Features',
  pricing: 'Pricing',
  'how-it-works': 'How it works',
  faq: 'FAQ',
  compatibility: 'Compatibility',
  blog: 'Blog',
  about: 'About',
  support: 'Support',
  privacy: 'Privacy policy',
  terms: 'Terms of service',
};

// Auto-generate a BreadcrumbList (Home > Section > …) from the current path.
// Returns null on the home page, where a breadcrumb adds nothing.
function buildBreadcrumb(path, title) {
  if (!path || path === '/') return null;
  const segs = path.split('/').filter(Boolean);
  const items = [{ name: 'Home', url: `${BASE}/` }];
  let acc = '';
  segs.forEach((seg, i) => {
    acc += `/${seg}`;
    const isLast = i === segs.length - 1;
    const name = SEG_LABELS[seg] || (isLast && title ? title : seg.replace(/-/g, ' '));
    items.push({ name, url: `${BASE}${acc}` });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: it.url,
    })),
  };
}

export default function Seo({
  title,
  description,
  path = '/',
  image = `${BASE}/og-image.svg`,
  type = 'website',
  schema,
}) {
  const fullTitle = title ? `${title} | ${SITE}` : `${FULL} for Shopify: Watch, tap, buy`;
  const url = `${BASE}${path}`;
  const breadcrumb = buildBreadcrumb(path, title);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
      {breadcrumb && (
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      )}
    </Helmet>
  );
}
