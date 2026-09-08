import Seo from '../components/Seo';
import { Reveal, VideoMock, CtaBand } from '../components/Shared';
import './pages.css';

const steps = [
  { n: '01', t: 'Upload your video', d: 'Pick a video from your Shopify Files library or paste a video URL. If your clip lives on Instagram or TikTok, upload the file to Shopify Files and select it here.' },
  { n: '02', t: 'Link a product', d: 'Choose the product, and the exact variant, that the video is selling. The card then shows that product with its live price in the shopper’s own currency, and an optional ribbon such as SALE or NEW.' },
  { n: '03', t: 'Place it on your store', d: 'Add the block in your theme editor and choose where it appears: homepage, collections, product pages, any Online Store page, or as a floating player. No theme code required, and removing it leaves your theme exactly as it was.' },
];

export default function HowItWorks() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to add shoppable video to Shopify with AnotherDev',
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
                    <span className="hiw-step__n">{s.n}</span>
                    <h3 className="h-md">{s.t}</h3>
                    <p style={{ color: 'var(--slate)' }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready in minutes" sub="Install AnotherDev free and follow these steps live in your own store." />
    </>
  );
}
