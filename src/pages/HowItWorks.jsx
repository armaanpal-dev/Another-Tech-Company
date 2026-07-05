import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand } from '../components/Shared';
import './pages.css';

const steps = [
  { n: '01', t: 'Add a reel', d: 'Upload a product video, import one from your Shopify Files library, or paste a CDN / hosted video URL. Then link the reel to the exact product variant shown in the video — like “Red / M” — and add an optional ribbon such as “SALE” or “NEW”.' },
  { n: '02', t: 'Place it on your store', d: 'In the Shopify theme editor, enable the app and drop a shoppable video block on your home page, product pages, or collections. Style the card to match your brand — colors, fonts, radius, and layout — in a few clicks. No theme code required.' },
  { n: '03', t: 'Sell with video', d: 'Shoppers watch the reel, tap Add to Cart on the in-video product card, and the exact variant is added using your theme’s native cart. Track impressions, plays, clicks, and conversions per reel in real time.' },
];

export default function HowItWorks() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to add shoppable video to Shopify with Another Shoppable Video',
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.t, text: s.d })),
  };

  return (
    <>
      <Seo
        title="How it works"
        description="Add shoppable video to your Shopify store in three steps: add a reel, place it in the theme editor, and sell with in-video add to cart. No code required."
        path="/how-it-works"
        schema={schema}
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">How it works</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">From video to shoppable in minutes</Reveal>
          <Reveal><p className="lead">No code. No theme edits. No waiting on a developer. Here’s exactly what setup looks like.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="frow">
            <div className="frow__media"><VideoMock /></div>
            <div>
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="hiw-step">
                    <span className="home__step-n" style={{ fontSize: '1.9rem', WebkitBackgroundClip: 'text' }}>{s.n}</span>
                    <h3 className="h-md">{s.t}</h3>
                    <p style={{ color: 'var(--slate)' }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready in minutes" sub="Install Another Shoppable Video free and follow these steps live in your own store." />
    </>
  );
}
