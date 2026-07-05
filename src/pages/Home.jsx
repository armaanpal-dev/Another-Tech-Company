import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand, Stat } from '../components/Shared';
import './Home.css';

const features = [
  { icon: '🎬', t: 'Shoppable video & Reels', d: 'Import TikTok, Instagram Reels, and YouTube Shorts, or upload your own. Tag products in seconds.' },
  { icon: '🛒', t: 'In-video checkout', d: 'Shoppers add to cart and buy without ever leaving the video. Fewer clicks, more orders.' },
  { icon: '📱', t: 'TikTok-style stories', d: 'A swipeable story bar and full-screen feed that feels native on mobile.' },
  { icon: '⚡', t: 'Zero theme edits', d: 'Drag-and-drop placement on any page. No code, works with Online Store 2.0 and headless.' },
  { icon: '🔁', t: 'Auto-sync UGC', d: 'Pull creator content on a schedule and keep your video walls fresh automatically.' },
  { icon: '📊', t: 'Revenue analytics', d: 'See plays, engagement, add-to-carts, and attributed revenue per video.' },
];

const steps = [
  { n: '01', t: 'Install in one click', d: 'Add Reelvana from the Shopify App Store. It connects to your catalog instantly.' },
  { n: '02', t: 'Add your videos', d: 'Import from social or upload. Tag products with a click — pricing and stock stay in sync.' },
  { n: '03', t: 'Publish & convert', d: 'Drop a video widget anywhere and watch engagement turn into sales.' },
];

const logos = ['NORDA', 'Bloom&Co', 'Maison', 'Velour', 'Kindred', 'Atlas'];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Reelvana — Shoppable Video for Shopify',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Shopify',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1280' },
  };

  return (
    <>
      <Seo
        title="Shoppable Video & UGC for Shopify"
        description="Reelvana turns TikToks, Reels, and Shorts into shoppable videos on your Shopify store. Boost conversion and AOV with in-video checkout — no code required. Install free."
        path="/"
        schema={schema}
      />

      {/* HERO */}
      <section className="hero dark-bg">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal><span className="eyebrow eyebrow--light">Shoppable video for Shopify</span></Reveal>
            <Reveal as="h1" className="h-xl" delay={60}>
              Turn scrolls into <span className="hero__hl">sales.</span>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead">
                Reelvana makes every video shoppable. Import your TikToks, Reels, and Shorts,
                tag products, and let shoppers buy without leaving the clip — right on your storefront.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="hero__btns">
                <a href="https://apps.shopify.com" className="btn btn--primary btn--lg">Add to Shopify — free</a>
                <Link to="/how-it-works" className="btn btn--ghost-light btn--lg">See how it works</Link>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero__trust">
                <span>★★★★★</span> 4.9/5 from 1,280+ merchants · Free plan available
              </div>
            </Reveal>
          </div>

          <Reveal className="hero__art" delay={140}>
            <VideoMock />
            <div className="hero__float hero__float--1">+38% conversion</div>
            <div className="hero__float hero__float--2">2.4× time on page</div>
          </Reveal>
        </div>

        <div className="container hero__logos">
          <span>Trusted by fast-growing Shopify brands</span>
          <div className="hero__logorow">
            {logos.map((l) => <span key={l} className="hero__logo">{l}</span>)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-4 home__stats">
            <Reveal><Stat value="38%" label="Avg. lift in conversion" /></Reveal>
            <Reveal delay={80}><Stat value="2.4×" label="Longer time on page" /></Reveal>
            <Reveal delay={160}><Stat value="19%" label="Higher average order value" /></Reveal>
            <Reveal delay={240}><Stat value="<2min" label="To install & launch" /></Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">Everything you need</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">One app to run video commerce</Reveal>
            <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>
              From a swipeable story bar to in-video checkout, Reelvana gives you the full
              video-commerce toolkit without touching a line of code.
            </p></Reveal>
          </div>
          <div className="grid grid-3 mt-l">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <div className="card home__feat">
                  <span className="home__feat-icon">{f.icon}</span>
                  <h3 className="h-md">{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center mt-l">
            <Link to="/features" className="btn btn--ghost">Explore all features →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section dark-bg home__how">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow eyebrow--light">Live in minutes</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">Three steps to shoppable video</Reveal>
          </div>
          <div className="grid grid-3 mt-l">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="home__step">
                  <span className="home__step-n">{s.n}</span>
                  <h3 className="h-md">{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container">
          <Reveal>
            <figure className="home__quote">
              <blockquote>
                “We added Reelvana to our product pages and saw a 41% jump in add-to-cart
                within the first month. It's the highest-ROI app we've installed.”
              </blockquote>
              <figcaption>
                <strong>Priya Nair</strong> · Head of Growth, Bloom&Co
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
