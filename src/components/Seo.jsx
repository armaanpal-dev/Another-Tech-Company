import { Helmet } from 'react-helmet-async';

const SITE = 'AnotherDev';
const FULL = 'AnotherDev - Shoppable Video';
const BASE = 'https://anotherdev.in';

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
    </Helmet>
  );
}
