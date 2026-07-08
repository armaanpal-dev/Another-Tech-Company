import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Faq } from '../components/Shared';
import './pages.css';

const plans = [
  {
    name: 'Free', price: '$0', unit: '/mo', desc: 'For new stores getting started with shoppable video.',
    features: ['Up to 4 reels', 'Home page shoppable video feed', 'In-video add to cart', 'Basic analytics', '“Powered by Another Shoppable Video” watermark'],
    cta: 'Add to Shopify', featured: false, contact: false,
  },
  {
    name: 'Growth', price: '$21', unit: '/mo', desc: 'For stores adding video to product pages.',
    features: ['Up to 21 reels', 'Everything in Free', 'Product page carousel', 'Floating Reel widget', 'Basic customization (colors, layout)', 'Watermark removed'],
    cta: 'Add to Shopify', featured: true, contact: false,
  },
  {
    name: 'Pro', price: '$49', unit: '/mo', desc: 'For brands running video across the whole store.',
    features: ['Up to 49 reels', 'Everything in Growth', 'Collection & other page placements', 'Smart tag (auto-match) carousel', 'Advanced analytics (views, clicks, conversions)', 'Full customization', 'Priority support'],
    cta: 'Add to Shopify', featured: false, contact: false,
  },
  {
    name: 'Custom', price: 'Custom', unit: '', desc: 'For agencies and brands that need a bespoke setup.',
    features: ['Unlimited reels', 'Everything in Pro', 'Custom widget layouts & placements', 'Features built for your store', 'Dedicated priority support'],
    cta: 'Contact us', featured: false, contact: true,
  },
];

const faqs = [
  ['Is there really a free plan?', 'Yes. The Free plan lets you publish up to 4 reels in a home page shoppable video feed, with in-video add to cart, forever. Upgrade only when you need more reels or more placements.'],
  ['How is it billed?', 'Through Shopify Billing, charges appear on your Shopify invoice. Free to start, upgrade anytime, cancel anytime. Taxes may apply.'],
  ['Do I need to edit my theme or write code?', 'No. Another Shoppable Video installs as a theme app extension and uses drag-and-drop blocks in the Shopify theme editor. Nothing touches your theme files.'],
  ['Will it slow down my store?', 'No. Videos lazy-load only when in view, scripts are deferred, and the storefront bundle is tiny (~12 KB gzipped) with no layout shift.'],
  ['Where can I import videos from?', 'Import videos directly from your store’s Shopify Files library, or paste a CDN / hosted video URL.'],
  ['What happens when I downgrade?', 'Placements that the lower plan doesn’t allow automatically hide from your storefront. Your reels stay in the dashboard.'],
  ['Can I remove the “Powered by Another Shoppable Video” watermark?', 'Yes, it’s removed on the Growth plan and above.'],
];

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
        description="Simple pricing for Another Shoppable Video shoppable video on Shopify. Start free with up to 4 reels; Growth $21/mo and Pro $49/mo add more reels, placements, and analytics. Billed through Shopify, cancel anytime."
        path="/pricing"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">Pricing</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Pricing that scales with your reels</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Start free. Upgrade when you need more reels and placements. Billed through Shopify, cancel anytime.</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="plans plans--4">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className={`plan ${p.featured ? 'plan--featured' : ''}`}>
                  {p.featured && <span className="plan__badge">Most popular</span>}
                  <span className="plan__name">{p.name}</span>
                  <div className="plan__price">{p.price}{p.unit && <span>{p.unit}</span>}</div>
                  <p className="plan__desc">{p.desc}</p>
                  <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  {p.contact
                    ? <Link to="/contact" className="btn btn--ghost">{p.cta}</Link>
                    : <a href="https://apps.shopify.com" className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost'}`}>{p.cta}</a>}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="center mt-m" style={{ color: 'var(--slate)' }}>Prices in USD, billed monthly through Shopify. Prices display in your store’s own currency on the storefront.</p>
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
