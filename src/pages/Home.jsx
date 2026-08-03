import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand, Faq } from '../components/Shared';
import { APP_STORE_URL } from '../config';
import './Home.css';

const features = [
  { icon: '🎬', t: 'Shoppable video, everywhere', d: 'Place video where shoppers decide: the homepage, collection pages, product pages, custom pages, or a floating corner player that stays with them across the store.' },
  { icon: '🛒', t: 'Add to cart inside the video', d: 'Every video card carries the product title, live price, and an Add to Cart button. Shoppers add without leaving the page or losing their place.' },
  { icon: '🌍', t: 'Correct prices in every market', d: 'Prices are pulled live in the shopper’s own currency, so what the card shows is what the cart charges. Sold-out variants are detected automatically.' },
  { icon: '📱', t: 'Mobile and desktop, separately', d: 'Set different card heights and a different number of cards per view for each. Use a decimal like 1.2 cards to reveal a peek of the next video.' },
  { icon: '🎨', t: 'Matches your brand', d: 'Control colors, fonts, sizes and weights, button text, corner radius, and card shadow, so the widget looks like part of your theme.' },
  { icon: '🏷️', t: 'Smart tag matching', d: 'Automatically show the right videos on a product page based on that product’s tags. No manual linking, and it scales as you add products.' },
  { icon: '📊', t: 'Know what is working', d: 'Track impressions, plays, clicks, and add-to-carts per video, so you can see which content actually drives results.' },
  { icon: '⚡', t: 'Built for speed', d: 'Videos load only when they scroll into view, with poster images so nothing blocks your page from rendering.' },
];

const placements = [
  { icon: '🖼️', t: 'Shoppable video feed', where: 'Homepage, collections, any page', d: 'A horizontal, swipeable gallery of shoppable videos.' },
  { icon: '📦', t: 'Product page reels', where: 'Product pages', d: 'Videos linked to that specific product, right where shoppers decide.' },
  { icon: '🏷️', t: 'Smart tag reels', where: 'Product pages', d: 'Auto-matches videos to a product by its tags, with no manual linking.' },
  { icon: '📌', t: 'Floating reel', where: 'Anywhere on the store', d: 'A looping video pinned to a corner. Tap to watch full-screen with sound.' },
  { icon: '📄', t: 'Page galleries', where: 'Any Online Store page', d: 'Assign specific videos to specific pages: About, Lookbook, Campaign, and more.' },
];

const steps = [
  { n: '01', t: 'Upload your video', d: 'Pick a video from your Shopify Files library or paste a video URL.' },
  { n: '02', t: 'Link a product', d: 'Choose the product, and the variant, that the video is selling.' },
  { n: '03', t: 'Place it on your store', d: 'Add the block in your theme editor and choose where it appears. Most stores are live in under five minutes.' },
];

const preview = [
  { name: 'Free', price: '$0', unit: '/mo', points: ['4 videos', 'Homepage gallery', 'Add to cart in the video'], featured: false },
  { name: 'Growth', price: '$21', unit: '/mo', points: ['21 videos', 'Product page carousel', 'Floating reel', 'Custom colors & layout'], featured: true },
  { name: 'Pro', price: '$49', unit: '/mo', points: ['49 videos', 'All placements', 'Smart tag matching', 'Advanced analytics'], featured: false },
];

const faqTeaser = [
  ['Will this slow down my store?', 'No. Videos load only when they scroll into view, and a poster image shows first, so nothing blocks your page from rendering.'],
  ['Does it work with my theme?', 'Yes. Dawn and Online Store 2.0 themes, premium themes like Symmetry and the Clean Canvas family, and older vintage themes.'],
  ['I use GoKwik or Shiprocket. Will add to cart still work?', 'Yes. Adding from a video opens your cart app’s own cart, exactly like your theme’s own Add to Cart button.'],
  ['I sell in multiple currencies. Will prices be right?', 'Yes. Prices are fetched live in the shopper’s currency, so the card always matches what the cart charges.'],
];

const compat = ['Any Online Store 2.0 theme', 'Premium and vintage themes', 'GoKwik and Shiprocket carts', 'Shopify Markets currencies', 'No theme code edits'];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AnotherDev - Shoppable Video',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Shopify',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <Seo
        description="Turn your reels into a shoppable storefront. Add video galleries, product carousels and a floating player to any page of your Shopify store. Add to cart inside the video."
        path="/"
        schema={schema}
      />

      {/* HERO */}
      <section className="hero dark-bg">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal><span className="eyebrow eyebrow--light">AnotherDev - Shoppable Video for Shopify</span></Reveal>
            <Reveal as="h1" className="h-xl" delay={60}>
              Turn your videos into a <span className="hero__hl">storefront.</span>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead">
                Add shoppable video to any page of your Shopify store: homepage, collections,
                product pages, or a floating player that follows shoppers as they browse.
                Customers watch, tap, and add to cart without ever leaving the page.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="hero__btns">
                <a href={APP_STORE_URL} className="btn btn--primary btn--lg">Add to Shopify, free plan available</a>
                <Link to="/how-it-works" className="btn btn--ghost-light btn--lg">See how it works</Link>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero__trust">
                Works with your existing theme. No code. No developer needed.
              </div>
            </Reveal>
          </div>

          <Reveal className="hero__art" delay={140}>
            <VideoMock />
            <div className="hero__float hero__float--1">Add to cart in-video</div>
            <div className="hero__float hero__float--2">Live price, your currency</div>
          </Reveal>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="section--tight">
        <div className="container center">
          <Reveal><p className="lead mx-auto" style={{ textAlign: 'center', maxWidth: '760px' }}>
            AnotherDev turns short-form video, the kind you already make for social, into a
            shoppable storefront experience. Upload a video, link it to a product, and place it
            anywhere on your store. Each video shows the product with its live price and an Add
            to Cart button, so a shopper can buy in the moment they are interested.
          </p></Reveal>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">Everything you need</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">One app for shoppable video</Reveal>
          </div>
          <div className="grid grid-4 mt-l home__feats">
            {features.map((f, i) => (
              <Reveal key={f.t} delay={(i % 4) * 60}>
                <div className="card home__feat">
                  <span className="home__feat-icon">{f.icon}</span>
                  <h3 className="h-sm">{f.t}</h3>
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

      {/* PLACEMENTS */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">Placements</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">Put video where shoppers decide</Reveal>
            <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Five ways to show shoppable video across your store, from the homepage to a player that follows shoppers everywhere.</p></Reveal>
          </div>
          <div className="grid grid-3 mt-l">
            {placements.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 60}>
                <div className="card home__feat">
                  <span className="home__feat-icon">{p.icon}</span>
                  <h3 className="h-sm">{p.t}</h3>
                  <span className="home__place-where">{p.where}</span>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPATIBILITY BAND */}
      <section className="section dark-bg">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow eyebrow--light">Your real advantage</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">Works with your store, not against it</Reveal>
            <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>
              Add to cart opens the cart your store actually uses, shows the price the shopper
              will actually pay, and never touches your theme code.
            </p></Reveal>
          </div>
          <Reveal>
            <div className="home__compat mt-l">
              {compat.map((c) => <span key={c} className="home__chip">{c}</span>)}
            </div>
          </Reveal>
          <div className="center mt-l">
            <Link to="/compatibility" className="btn btn--ghost-light">See full compatibility →</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">Live in under five minutes</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">Three steps to shoppable video</Reveal>
          </div>
          <div className="grid grid-3 mt-l">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="home__step home__step--light">
                  <span className="home__step-n">{s.n}</span>
                  <h3 className="h-md">{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">Pricing</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">Start free, upgrade when it pays off</Reveal>
          </div>
          <div className="grid grid-3 mt-l">
            {preview.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div className={`card home__price ${p.featured ? 'home__price--on' : ''}`}>
                  <span className="plan__name">{p.name}</span>
                  <div className="plan__price">{p.price}<span>{p.unit}</span></div>
                  <ul className="home__price-list">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <a href={APP_STORE_URL} className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost'}`} style={{ width: '100%', justifyContent: 'center' }}>Add to Shopify</a>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center mt-m">
            <Link to="/pricing" className="btn btn--ghost">See full pricing →</Link>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">FAQ</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">Questions, answered</Reveal>
          </div>
          <div className="faq mt-l">
            {faqTeaser.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
          <div className="center mt-m">
            <Link to="/faq" className="btn btn--ghost">All FAQs →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
