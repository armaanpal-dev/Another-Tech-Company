import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, CtaBand, Faq, SectionHead, Marquee } from '../components/Shared';
import { ReelCarousel, FunnelViz, PlayerShowcase, MockFeed, MockCart, MockTags, MockChart } from '../components/Interactive';
import Icon from '../components/Icon';
import { APP_STORE_URL } from '../config';
import './Home.css';

/* The four headline capabilities, each with its own card illustration. */
const showcase = [
  { t: 'Shoppable video, everywhere', d: 'Place video where shoppers decide: the homepage, collection pages, product pages, custom pages, or a floating corner player that stays with them across the store.', to: '/features', Media: MockFeed },
  { t: 'Add to cart inside the video', d: 'Every video card carries the product title, live price, and an Add to Cart button. Shoppers add without leaving the page or losing their place.', to: '/features', Media: MockCart },
  { t: 'Smart tag matching', d: 'Automatically show the right videos on a product page based on that product’s tags. No manual linking, and it scales as you add products.', to: '/features', Media: MockTags },
  { t: 'Know what is working', d: 'Track impressions, plays, clicks, and add-to-carts per video, so you can see which content actually drives results.', to: '/features', Media: MockChart },
];

const features = [
  { icon: 'video', t: 'Shoppable video, everywhere', d: 'Place video where shoppers decide: the homepage, collection pages, product pages, custom pages, or a floating corner player that stays with them across the store.' },
  { icon: 'cart', t: 'Add to cart inside the video', d: 'Every video card carries the product title, live price, and an Add to Cart button. Shoppers add without leaving the page or losing their place.' },
  { icon: 'globe', t: 'Correct prices in every market', d: 'Prices are pulled live in the shopper’s own currency, so what the card shows is what the cart charges. Sold-out variants are detected automatically.' },
  { icon: 'mobile', t: 'Mobile and desktop, separately', d: 'Set different card heights and a different number of cards per view for each. Use a decimal like 1.2 cards to reveal a peek of the next video.' },
  { icon: 'palette', t: 'Matches your brand', d: 'Control colors, fonts, sizes and weights, button text, corner radius, and card shadow, so the widget looks like part of your theme.' },
  { icon: 'tag', t: 'Smart tag matching', d: 'Automatically show the right videos on a product page based on that product’s tags. No manual linking, and it scales as you add products.' },
  { icon: 'chart', t: 'Know what is working', d: 'Track impressions, plays, clicks, and add-to-carts per video, so you can see which content actually drives results.' },
  { icon: 'bolt', t: 'Built for speed', d: 'Videos load only when they scroll into view, with poster images so nothing blocks your page from rendering.' },
];

const placements = [
  { icon: 'gallery', t: 'Shoppable video feed', where: 'Homepage, collections, any page', d: 'A horizontal, swipeable gallery of shoppable videos.' },
  { icon: 'box', t: 'Product page reels', where: 'Product pages', d: 'Videos linked to that specific product, right where shoppers decide.' },
  { icon: 'tag', t: 'Smart tag reels', where: 'Product pages', d: 'Auto-matches videos to a product by its tags, with no manual linking.' },
  { icon: 'pin', t: 'Floating reel', where: 'Anywhere on the store', d: 'A looping video pinned to a corner. Tap to watch full-screen with sound.' },
  { icon: 'page', t: 'Page galleries', where: 'Any Online Store page', d: 'Assign specific videos to specific pages: About, Lookbook, Campaign, and more.' },
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
const worksWithA = ['Dawn', 'Online Store 2.0', 'Symmetry', 'Clean Canvas', 'Vintage themes', 'Premium themes'];
const worksWithB = ['GoKwik carts', 'Shiprocket carts', 'Shopify Markets', 'Multi-currency pricing', 'Theme app blocks', 'No code edits'];

export default function ShoppableVideo() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AnotherDev - Shoppable Video',
    alternateName: ['AnotherDev Shoppable Video', 'Shoppable Video for Shopify'],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Shopify App',
    operatingSystem: 'Shopify',
    url: 'https://anotherdev.in/shoppable-video',
    installUrl: 'https://apps.shopify.com/another-shoppable-video-app',
    downloadUrl: 'https://apps.shopify.com/another-shoppable-video-app',
    sameAs: ['https://apps.shopify.com/another-shoppable-video-app'],
    image: 'https://anotherdev.in/og-image.svg',
    description: 'AnotherDev - Shoppable Video is a Shopify app that turns product videos and reels into a shoppable storefront. Add video galleries, product carousels, smart-tag reels and a floating player to any page, with add to cart inside the video, live multi-currency pricing, and support for third-party carts like GoKwik and Shiprocket.',
    keywords: 'shoppable video, shoppable video app, Shopify video app, shoppable video app for Shopify, shoppable reels, reel app, UGC video app, video commerce, add to cart video, product video app, Instagram reels for Shopify, TikTok video for Shopify, social video for Shopify, floating video, video carousel',
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Growth', price: '21', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro', price: '49', priceCurrency: 'USD' },
    ],
    publisher: { '@type': 'Organization', name: 'AnotherDev', url: 'https://anotherdev.in' },
  };

  return (
    <>
      <Seo
        title="Shoppable Video for Shopify"
        description="Turn your reels into a shoppable storefront. Add video galleries, product carousels and a floating player to any page of your Shopify store. Add to cart inside the video."
        path="/shoppable-video"
        schema={schema}
      />

      {/* ---------- HERO (dark) ---------- */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__grid-lines" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <span className="badge badge--shopify">
              <img src="/logo.svg" alt="" width="18" height="18" />
              <span className="badge__rule" />
              SHOPPABLE VIDEO FOR SHOPIFY
            </span>
          </Reveal>

          <Reveal as="h1" className="h-xl hero__title" delay={60}>
            Turn your videos into a <span className="hl">storefront</span>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead hero__lead">
              Add shoppable video to any page of your Shopify store: homepage, collections,
              product pages, or a floating player that follows shoppers as they browse.
              Customers watch, tap, and add to cart without ever leaving the page.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__btns">
              <a href={APP_STORE_URL} className="btn btn--primary btn--lg">
                Add to Shopify, free plan available <Icon name="arrow" size={18} />
              </a>
              <Link to="/how-it-works" className="btn btn--ghost-light btn--lg">See how it works</Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__trust">Works with your existing theme. No code. No developer needed.</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- WORKS WITH: marquee (dark) ---------- */}
      <section className="section--tight">
        <div className="container">
          <Reveal as="h2" className="h-md center worksw__title">
            Built for the store you <span className="hl">already have</span>
          </Reveal>
        </div>
        <div className="worksw mt-m">
          <Reveal><Marquee items={worksWithA} /></Reveal>
          <Reveal delay={80}><Marquee items={worksWithB} reverse /></Reveal>
        </div>
      </section>

      {/* ================= LIGHT ZONE 1 ================= */}
      <div className="lightzone">
        <section className="section--tight">
          <div className="container">
            <Reveal>
              <p className="lead intro">
                AnotherDev turns short-form video, the kind you already make for social, into a
                shoppable storefront experience. Upload a video, link it to a product, and place it
                anywhere on your store. Each video shows the product with its live price and an Add
                to Cart button, so a shopper can buy in the moment they are interested.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              badge="Everything you need"
              icon="sparkle"
              title={<>One app for all your <span className="hl">shoppable video</span></>}
              sub="Everything you need to add, place, customize and measure shoppable video, in a single Shopify app."
            />
            <div className="grid grid-2 mt-l showcase">
              {showcase.map((s, i) => (
                <Reveal key={s.t} delay={(i % 2) * 80}>
                  <Link to={s.to} className="showcase__card card card--lit">
                    <s.Media />
                    <div className="showcase__foot">
                      <h3 className="h-md">{s.t}</h3>
                      <span className="arrowbtn"><Icon name="arrow" size={18} strokeWidth={2} /></span>
                    </div>
                    <p>{s.d}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="center mt-l">
              <Link to="/features" className="btn btn--ghost">Explore all features <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
        </section>
      </div>

      {/* ---------- ANALYTICS (dark) ---------- */}
      <section className="section band">
        <div className="container split">
          <div className="split__copy">
            <SectionHead
              align="left"
              badge="Analytics"
              icon="chart"
              title={<><span className="hl--violet">Performance</span> you can actually read</>}
              sub="Every reel reports what it did, in order, in real time. Track how your video performs in each placement, see which clips earn attention, and put your effort behind the ones that sell."
            />
            <Reveal delay={160}>
              <div className="split__btns">
                <Link to="/features" className="btn btn--ghost">See the metrics <Icon name="arrow" size={17} /></Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="split__media" delay={120}><FunnelViz /></Reveal>
        </div>
      </section>

      {/* ---------- PLAYER + FEED (dark) ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            badge="See it in action"
            icon="target"
            title={<>Built to <span className="hl">sell</span>, <span className="hl--violet">convert</span> and <span className="hl--mint">engage</span></>}
            sub="This is the storefront widget. Try it: tap Add to cart, or use the arrows to switch reels."
          />
          <Reveal className="mt-l"><PlayerShowcase /></Reveal>
          <div className="feeddemo mt-xl">
            <Reveal><p className="feeddemo__label center">The shoppable video feed</p></Reveal>
            <Reveal delay={80}><ReelCarousel /></Reveal>
          </div>
        </div>
      </section>

      {/* ================= LIGHT ZONE 2 ================= */}
      <div className="lightzone">
        <section className="section">
          <div className="container">
            <div className="shead-split">
              <SectionHead
                align="left"
                badge="The full toolkit"
                icon="sliders"
                title={<>Everything the app <span className="hl">actually does</span></>}
              />
              <Reveal delay={110}>
                <p className="lead">
                  Eight things the app does the day you install it, from placing a reel to
                  reading what it earned. No theme code, and nothing that costs page speed.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-4 mt-l feats">
              {features.map((f, i) => (
                <Reveal key={f.t} delay={(i % 4) * 60}>
                  <div className="feat">
                    <span className="feat__icon"><Icon name={f.icon} size={22} /></span>
                    <h3 className="h-sm">{f.t}</h3>
                    <p>{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container">
            <SectionHead
              badge="Placements"
              icon="pin"
              title={<>Put video where shoppers <span className="hl">decide</span></>}
              sub="Five ways to show shoppable video across your store, from the homepage to a player that follows shoppers everywhere."
            />
            <div className="grid grid-3 mt-l placements-grid">
              {placements.map((p, i) => (
                <Reveal key={p.t} delay={(i % 3) * 60}>
                  <div className="feat">
                    <span className="feat__icon"><Icon name={p.icon} size={22} /></span>
                    <h3 className="h-sm">{p.t}</h3>
                    <span className="feat__where">{p.where}</span>
                    <p>{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ---------- COMPATIBILITY BAND (dark) ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            badge="Your real advantage"
            icon="shield"
            title={<>Works with your store, <span className="hl">not against it</span></>}
            sub="Add to cart opens the cart your store actually uses, shows the price the shopper will actually pay, and never touches your theme code."
          />
          <Reveal>
            <div className="chips mt-l">
              {compat.map((c) => (
                <span key={c} className="chip"><Icon name="check" size={15} strokeWidth={2.2} />{c}</span>
              ))}
            </div>
          </Reveal>
          <div className="center mt-l">
            <Link to="/compatibility" className="btn btn--ghost-light">See full compatibility <Icon name="arrow" size={17} /></Link>
          </div>
        </div>
      </section>

      {/* ================= LIGHT ZONE 3 ================= */}
      <div className="lightzone">
        <section className="section">
          <div className="container">
            <SectionHead
              badge="Live in under five minutes"
              icon="rocket"
              title={<>Three steps to <span className="hl">shoppable video</span></>}
            />
            <div className="grid grid-3 mt-l steps">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 90}>
                  <div className="card step">
                    <span className="step__n">{s.n}</span>
                    <h3 className="h-md">{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container">
            <SectionHead
              badge="Pricing"
              icon="card"
              title={<>Start free, upgrade when it <span className="hl">pays off</span></>}
              sub="Billed through Shopify. Cancel anytime, and removing the app leaves your theme untouched."
            />
            <div className="grid grid-3 mt-l">
              {preview.map((p, i) => (
                <Reveal key={p.name} delay={i * 70}>
                  <div className={`card priceprev ${p.featured ? 'priceprev--on' : ''}`}>
                    {p.featured && <span className="priceprev__badge">Most popular</span>}
                    <span className="priceprev__name">{p.name}</span>
                    <div className="priceprev__price">{p.price}<span>{p.unit}</span></div>
                    <ul className="priceprev__list">
                      {p.points.map((pt) => (
                        <li key={pt}><Icon name="check" size={15} strokeWidth={2.4} />{pt}</li>
                      ))}
                    </ul>
                    <a href={APP_STORE_URL} className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost'}`}>Add to Shopify</a>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="center mt-m">
              <Link to="/pricing" className="btn btn--ghost">See full pricing <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead badge="FAQ" icon="chat" title={<>Questions, <span className="hl">answered</span></>} />
            <div className="faq mt-l">
              {faqTeaser.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
            </div>
            <div className="center mt-m">
              <Link to="/faq" className="btn btn--ghost">All FAQs <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
