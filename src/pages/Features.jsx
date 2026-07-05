import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand } from '../components/Shared';
import './pages.css';

const rows = [
  {
    eyebrow: 'Content',
    title: 'Every video, instantly shoppable',
    body: 'Import from TikTok, Instagram Reels, and YouTube Shorts, or upload your own footage. Tag one or many products per video — pricing, variants, and stock sync live from your Shopify catalog.',
    points: ['One-click social import', 'Multi-product tagging', 'Live catalog sync', 'Auto-captions & thumbnails'],
    rev: false,
  },
  {
    eyebrow: 'Conversion',
    title: 'Checkout without the detour',
    body: 'Shoppers tap a product card inside the video, choose a variant, and add to cart in place. Reelvana plugs straight into your existing cart and checkout, so the buying flow never breaks.',
    points: ['In-video product cards', 'Add-to-cart & quick buy', 'Native cart drawer support', 'Mobile-first full-screen feed'],
    rev: true,
  },
  {
    eyebrow: 'Placement',
    title: 'Put video anywhere, with no code',
    body: 'Drop a swipeable story bar on your homepage, a carousel on collections, or a spotlight block on product pages. Works with Online Store 2.0 sections and headless storefronts alike.',
    points: ['Drag-and-drop widgets', 'Story bar, grid, carousel & spotlight', 'No theme edits required', 'Headless / Hydrogen ready'],
    rev: false,
  },
  {
    eyebrow: 'Insight',
    title: 'Know exactly what video earns',
    body: 'Track plays, watch time, engagement, add-to-carts, and attributed revenue for every clip. Find your top performers and double down.',
    points: ['Per-video revenue attribution', 'Engagement & watch-time metrics', 'A/B placement testing', 'Exportable reports'],
    rev: true,
  },
];

const integrations = [
  ['🛍️', 'Shopify'], ['🎵', 'TikTok'], ['📸', 'Instagram'], ['▶️', 'YouTube'],
  ['💬', 'Klaviyo'], ['⭐', 'Judge.me'], ['🔍', 'Search & Discovery'], ['⚡', 'Hydrogen'],
];

export default function Features() {
  return (
    <>
      <Seo
        title="Features"
        description="Shoppable video, in-video checkout, UGC import, story bars, and revenue analytics — see every Reelvana feature for turning Shopify videos into sales."
        path="/features"
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">Features</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">The complete video-commerce toolkit</Reveal>
          <Reveal><p className="lead">Everything you need to import, tag, place, and measure shoppable video — in one Shopify app that installs in under two minutes.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {rows.map((r, i) => (
            <Reveal key={r.title}>
              <div className={`frow ${r.rev ? 'frow--rev' : ''}`}>
                <div className="frow__media"><VideoMock label={['Now playing','Tap to shop','Story 2/6','Bestseller'][i]} product={['Linen Wrap Dress','Suede Chelsea Boot','Ribbed Knit Set','Gold Hoop Earrings'][i]} price={['$48','$129','$72','$36'][i]} /></div>
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

      <section className="section" id="integrations" style={{ background: 'var(--paper-2)' }}>
        <div className="container center">
          <Reveal><span className="eyebrow">Integrations</span></Reveal>
          <Reveal as="h2" className="h-lg mt-s">Plays nicely with your stack</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Reelvana connects to the tools you already run — from social platforms to email and reviews.</p></Reveal>
          <Reveal>
            <div className="integr mt-l">
              {integrations.map(([icon, name]) => (
                <div key={name} className="integr__item"><span>{icon}</span>{name}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="See it live on your store" sub="Install free and add your first shoppable video in minutes." />
    </>
  );
}
