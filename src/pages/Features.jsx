import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand } from '../components/Shared';
import './pages.css';

const rows = [
  {
    eyebrow: 'Content',
    title: 'Every product video, made shoppable',
    body: 'Import videos straight from your Shopify Files library, or paste a CDN / hosted video URL. Link each reel to the exact product variant shown, and prices render automatically in your store’s own currency.',
    points: ['Import from Shopify Files', 'Or paste a hosted video URL', 'Link the exact variant shown', 'Prices in your store’s currency'],
    rev: false,
    mock: { label: 'Now playing', product: 'Linen Wrap Dress', price: '$48' },
  },
  {
    eyebrow: 'Conversion',
    title: 'Add to cart, right in the video',
    body: 'A product card overlays each reel with the title, price, compare-at price, and an Add to Cart button. One tap adds the exact variant to the cart, using your theme’s native cart, updating the drawer and count automatically.',
    points: ['In-video product card', 'One-tap add to cart', 'Uses your theme’s native cart', 'Updates the cart drawer automatically'],
    rev: true,
    mock: { label: 'Tap to shop', product: 'Suede Chelsea Boot', price: '$129' },
  },
  {
    eyebrow: 'Placement',
    title: 'Put reels anywhere on your store',
    body: 'Drop a shoppable video feed on your home or collection pages, a carousel on product pages, or let smart-tag reels auto-match by the product’s tags. The feed auto-detects the page and falls back to your homepage reels, so it’s never empty.',
    points: ['Shoppable video feed (home / collections)', 'Product page carousel (1-2 card layout)', 'Smart tag reels, auto-match by tags (Pro)', 'Homepage fallback so it’s never empty'],
    rev: false,
    mock: { label: 'Story 2 / 6', product: 'Ribbed Knit Set', price: '$72' },
  },
  {
    eyebrow: 'Insight',
    title: 'Know exactly how your reels perform',
    body: 'Track impressions, plays, clicks, and add-to-cart events for every reel, plus derived play rate, click-through, and conversion. See trend charts, an event-distribution chart, a conversion funnel, and your top-performing reels.',
    points: ['Impressions, plays, clicks & add-to-carts', 'Play rate, CTR & conversion', 'Trend charts & conversion funnel', 'Advanced analytics on Pro'],
    rev: true,
    mock: { label: 'Bestseller', product: 'Gold Hoop Earrings', price: '$36' },
  },
  {
    eyebrow: 'Branding',
    title: 'Match every reel to your brand',
    body: 'Customize colors for the button, text, title, and price; font sizes and weights; button label; corner radius; and card height per placement. Show or hide the product title, price, and arrows, and set auto-scroll on or off with an adjustable speed. Add an optional ribbon like “SALE” or “NEW”.',
    points: ['Full color, font & radius control', 'Adjustable card height per placement', 'Show / hide title, price & arrows', 'Optional ribbon tags (SALE, NEW…)'],
    rev: false,
    mock: { label: 'On sale', product: 'Everyday Tote', price: '$64' },
  },
];

const themes = ['Dawn', 'Online Store 2.0', 'Prestige', 'Marmeto'];

export default function Features() {
  return (
    <>
      <Seo
        title="Features: Shoppable video, in-video add to cart, analytics"
        description="Shoppable video reels, in-video add to cart, exact variant selection, flexible placements, real-time analytics, and full brand customization, every Another Shoppable Video feature for Shopify."
        path="/features"
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">Features</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">The complete shoppable-video toolkit</Reveal>
          <Reveal><p className="lead">Everything you need to add, place, customize, and measure shoppable video, in one Shopify app, with no code required.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {rows.map((r) => (
            <Reveal key={r.title}>
              <div className={`frow ${r.rev ? 'frow--rev' : ''}`}>
                <div className="frow__media"><VideoMock label={r.mock.label} product={r.mock.product} price={r.mock.price} /></div>
                <div>
                  <span className="eyebrow">{r.eyebrow}</span>
                  <h3 className="h-lg mt-s">{r.title}</h3>
                  <p className="lead">{r.body}</p>
                  <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="compatibility" style={{ background: 'var(--paper-2)' }}>
        <div className="container center">
          <Reveal><span className="eyebrow">Built for speed &amp; every theme</span></Reveal>
          <Reveal as="h2" className="h-lg mt-s">Fast on mobile, works with your theme</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Videos lazy-load only when in view and scripts are deferred, so the storefront bundle stays tiny (~12 KB gzipped) with no layout shift. Add-to-cart works across Online Store 2.0 themes.</p></Reveal>
          <Reveal>
            <div className="integr mt-l">
              {themes.map((name) => (
                <div key={name} className="integr__item"><span>🛍️</span>{name}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="See it live on your store" sub="Install free and add your first shoppable reel in minutes." />
    </>
  );
}
