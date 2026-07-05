import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand, Stat } from '../components/Shared';
import './Home.css';

const features = [
  { icon: '🎬', t: 'Shoppable video reels', d: 'Vertical, auto-playing, mute-by-default reels in a short-form, social style, right on your Shopify storefront.' },
  { icon: '🛒', t: 'In-video add to cart', d: 'A product card overlays each reel with title, price, and an Add to Cart button. One tap adds to cart without leaving the page.' },
  { icon: '🎯', t: 'Exact variant selection', d: 'Link the specific variant shown in the video, like “Red / M”, and that exact variant is what gets added to cart.' },
  { icon: '🧩', t: 'Placements everywhere', d: 'A shoppable feed for your home and collection pages, plus a carousel and smart-tag reels on product pages.' },
  { icon: '🏷️', t: 'Ribbon tags & branding', d: 'Add a “SALE”, “NEW”, or “BESTSELLER” ribbon, and match every card to your brand, colors, fonts, radius, and layout.' },
  { icon: '📊', t: 'Real-time analytics', d: 'Track impressions, plays, clicks, and add-to-cart events per reel, with play rate, click-through, and conversion.' },
];

const steps = [
  { n: '01', t: 'Add a reel', d: 'Upload a product video, import from your Shopify Files, or paste a video URL, then link it to the exact product variant shown.' },
  { n: '02', t: 'Place it on your store', d: 'In the Shopify theme editor, enable the app and drop a shoppable video block on your home page, product pages, or collections.' },
  { n: '03', t: 'Sell with video', d: 'Shoppers watch, tap Add to Cart in the video, and you track views, clicks, and conversions in real time.' },
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Another Shoppable Video for Shopify',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Shopify',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <Seo
        title="Shoppable Video for Shopify | Watch, Tap, Buy"
        description="Add shoppable video reels to your Shopify store. Shoppers watch, tap, and add to cart without leaving the page. Real-time analytics, full customization, free to start."
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
              Watch, tap, <span className="hero__hl">buy.</span>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead">
                Another Shoppable Video turns your product videos into shoppable, social-style reels that live
                directly on your storefront. Shoppers watch, tap, and add to cart, without ever
                leaving the page.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="hero__btns">
                <a href="https://apps.shopify.com" className="btn btn--primary btn--lg">Add to Shopify for free</a>
                <Link to="/how-it-works" className="btn btn--ghost-light btn--lg">See how it works</Link>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero__trust">
                Free plan available · No code required · Built for Shopify
              </div>
            </Reveal>
          </div>

          <Reveal className="hero__art" delay={140}>
            <VideoMock />
            <div className="hero__float hero__float--1">Add to cart in-video</div>
            <div className="hero__float hero__float--2">~12 KB · no layout shift</div>
          </Reveal>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-4 home__stats">
            <Reveal><Stat value="1-tap" label="Add to cart, in the video" /></Reveal>
            <Reveal delay={80}><Stat value="~12 KB" label="Gzipped storefront bundle" /></Reveal>
            <Reveal delay={160}><Stat value="$0" label="Free plan to get started" /></Reveal>
            <Reveal delay={240}><Stat value="Any theme" label="Dawn, Prestige, Marmeto & more" /></Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">Everything you need</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">One app for shoppable video</Reveal>
            <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>
              From an auto-playing reel feed to in-video add to cart, Another Shoppable Video gives you shoppable
              video across your store, no code required.
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

      <CtaBand />
    </>
  );
}
