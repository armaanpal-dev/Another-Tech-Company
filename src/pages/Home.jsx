import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand, Stat } from '../components/Shared';
import './Home.css';

const features = [
  { icon: '🎬', t: 'Shoppable video, everywhere', d: 'Place video where shoppers actually decide: the homepage, collection pages, product pages, custom pages, or a floating corner player that stays with them across the store.' },
  { icon: '🛒', t: 'Add to cart inside the video', d: 'Every video card carries the product title, live price, and an Add to Cart button. Shoppers add without leaving the page or losing their place.' },
  { icon: '🌍', t: 'Correct prices in every market', d: 'Prices are pulled live in the shopper’s own currency, so the card matches what the cart charges. Sold-out variants are detected and shown as unavailable.' },
  { icon: '🔌', t: 'Works with your cart', d: 'Built for Online Store 2.0, premium and vintage themes, and third-party carts like GoKwik and Shiprocket, so add to cart opens their cart correctly.' },
  { icon: '🏷️', t: 'Smart tag matching', d: 'Automatically show the right videos on a product page based on that product’s tags. No manual linking, and it scales as you add products.' },
  { icon: '📊', t: 'Know what’s working', d: 'Track impressions, plays, clicks, and add-to-carts per video, so you can see which content actually earns its place.' },
];

const steps = [
  { n: '01', t: 'Upload your video', d: 'Pick a video from your Shopify Files library or paste a video URL.' },
  { n: '02', t: 'Link a product', d: 'Choose the product, and the variant, that the video is selling.' },
  { n: '03', t: 'Place it on your store', d: 'Add the block in your theme editor and choose where it appears. Most stores are live in under five minutes.' },
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
        title="Shoppable Video for Shopify"
        description="Turn your reels into a shoppable storefront. Add video galleries, product carousels and a floating player to any page. Add to cart inside the video."
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
                <a href="https://apps.shopify.com" className="btn btn--primary btn--lg">Add to Shopify, free plan available</a>
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

      {/* PROOF POINTS */}
      <section className="section--tight">
        <div className="container">
          <div className="grid grid-4 home__stats">
            <Reveal><Stat value="1-tap" label="Add to cart, in the video" /></Reveal>
            <Reveal delay={80}><Stat value="Any page" label="Home, collections, product, floating" /></Reveal>
            <Reveal delay={160}><Stat value="$0" label="Free plan to get started" /></Reveal>
            <Reveal delay={240}><Stat value="Any theme" label="OS 2.0, premium & vintage themes" /></Reveal>
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
              Another Shoppable Video turns short-form video, the kind you already make for
              social, into a shoppable storefront experience. Upload a video, link it to a
              product, and place it anywhere on your store.
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
          <div className="center mt-l">
            <Link to="/compatibility" className="btn btn--ghost-light">Works with your store →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
