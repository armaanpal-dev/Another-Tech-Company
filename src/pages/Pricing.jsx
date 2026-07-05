import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

const plans = [
  {
    name: 'Free', price: '$0', unit: '/mo', desc: 'For new stores getting started with video.',
    features: ['Up to 5 shoppable videos', 'Story bar & grid widgets', 'Social import (TikTok, Reels, Shorts)', 'Basic analytics', 'Reelvana branding'],
    cta: 'Add to Shopify', featured: false,
  },
  {
    name: 'Growth', price: '$39', unit: '/mo', desc: 'For scaling brands serious about conversion.',
    features: ['Unlimited shoppable videos', 'All widget types + spotlight', 'In-video checkout & quick buy', 'Revenue attribution analytics', 'A/B placement testing', 'Remove Reelvana branding'],
    cta: 'Start free trial', featured: true,
  },
  {
    name: 'Plus', price: '$129', unit: '/mo', desc: 'For high-volume and headless storefronts.',
    features: ['Everything in Growth', 'Headless / Hydrogen support', 'Auto-sync UGC feeds', 'Priority support & onboarding', 'Custom widget styling', 'Multi-store management'],
    cta: 'Talk to sales', featured: false,
  },
];

const faqs = [
  ['Is there really a free plan?', 'Yes. The Free plan lets you publish up to 5 shoppable videos with story bar and grid widgets, forever. Upgrade only when you need more videos or in-video checkout.'],
  ['Do I need to edit my theme or write code?', 'No. Reelvana installs in one click and uses drag-and-drop widgets in the Shopify theme editor. Nothing touches your theme files.'],
  ['Will it slow down my store?', 'No. Videos are lazy-loaded and served from a global CDN, so widgets only load when they enter the viewport. We obsess over Core Web Vitals.'],
  ['Can I import videos from TikTok and Instagram?', 'Yes. Paste a public URL from TikTok, Instagram Reels, or YouTube Shorts, or upload your own files directly.'],
  ['What happens when I cancel?', 'Your widgets simply stop showing. You keep your videos in the dashboard and can re-publish any time by re-subscribing. No lock-in.'],
  ['Does it work with Shopify Plus and headless?', 'Yes. The Plus plan adds Hydrogen and headless support, plus multi-store management for larger merchants.'],
];

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item ${open ? 'open' : ''}`}>
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen(!open)}>
        {q} <i>+</i>
      </button>
      <div className="faq__a"><p>{a}</p></div>
    </div>
  );
}

export default function Pricing() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <Seo
        title="Pricing"
        description="Simple, transparent pricing for Reelvana shoppable video. Start free, scale to unlimited videos and in-video checkout from $39/mo. No setup fees, cancel anytime."
        path="/pricing"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Pricing</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Pricing that scales with your sales</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Start free. Upgrade when video is paying for itself. No setup fees, cancel anytime.</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="plans">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className={`plan ${p.featured ? 'plan--featured' : ''}`}>
                  {p.featured && <span className="plan__badge">Most popular</span>}
                  <span className="plan__name">{p.name}</span>
                  <div className="plan__price">{p.price}<span>{p.unit}</span></div>
                  <p className="plan__desc">{p.desc}</p>
                  <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  {p.name === 'Plus'
                    ? <Link to="/contact" className="btn btn--ghost">{p.cta}</Link>
                    : <a href="https://apps.shopify.com" className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost'}`}>{p.cta}</a>}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="center mt-m" style={{ color: 'var(--slate)' }}>All paid plans include a 14-day free trial. Prices in USD.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center home__head"><Reveal as="h2" className="h-lg">Frequently asked questions</Reveal></div>
          <div className="faq mt-l">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
