import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand } from '../components/Shared';
import './pages.css';

const steps = [
  { n: '01', t: 'Install Reelvana from the Shopify App Store', d: 'One click connects Reelvana to your store and imports your product catalog automatically. No developer, no theme code, no setup fee.' },
  { n: '02', t: 'Add and tag your videos', d: 'Paste a TikTok, Reel, or Short URL — or upload your own. Tag the products that appear in each clip; prices, variants, and stock stay synced with Shopify in real time.' },
  { n: '03', t: 'Place a widget anywhere', d: 'Choose a story bar, grid, carousel, or product spotlight and drag it onto any page in the theme editor. Style it to match your brand in a few clicks.' },
  { n: '04', t: 'Convert and measure', d: 'Shoppers watch, tap, and buy without leaving the video. Track plays, add-to-carts, and attributed revenue per clip in your dashboard.' },
];

export default function HowItWorks() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to add shoppable video to Shopify with Reelvana',
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.t, text: s.d })),
  };

  return (
    <>
      <Seo
        title="How it works"
        description="Add shoppable video to your Shopify store in four steps: install, tag products, place a widget, and convert. No code required — live in minutes with Reelvana."
        path="/how-it-works"
        schema={schema}
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">How it works</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">From install to first sale in minutes</Reveal>
          <Reveal><p className="lead">No code. No theme edits. No waiting on a developer. Here's exactly what setup looks like.</p></Reveal>
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

      <CtaBand title="Ready in two minutes" sub="Install Reelvana free and follow these steps live in your own store." />
    </>
  );
}
