import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Faq } from '../components/Shared';
import './pages.css';

const plans = [
  {
    name: 'Free', price: '$0', unit: '/mo', desc: 'For new stores getting started with shoppable video.',
    features: ['4 videos', 'Homepage gallery', 'Add to cart inside the video', 'Basic analytics'],
    cta: 'Add to Shopify', featured: false, contact: false,
  },
  {
    name: 'Growth', price: '$21', unit: '/mo', desc: 'For stores adding video to product pages.',
    features: ['21 videos', 'Everything in Free', 'Product page carousel', 'Floating reel', 'Colors & layout customization', 'Branding removed'],
    cta: 'Add to Shopify', featured: true, contact: false,
  },
  {
    name: 'Pro', price: '$49', unit: '/mo', desc: 'For brands running video across the whole store.',
    features: ['49 videos', 'Everything in Growth', 'Collection & page galleries', 'Smart tag matching', 'Different floating video per page or product', 'Full customization, including typography', 'Advanced analytics'],
    cta: 'Add to Shopify', featured: false, contact: false,
  },
  {
    name: 'Custom', price: 'Custom', unit: '', desc: 'For agencies and larger brands that need a bespoke setup.',
    features: ['Unlimited videos', 'Everything in Pro', 'Features built for your store', 'Dedicated priority support'],
    cta: 'Contact us', featured: false, contact: true,
  },
];

const faqs = [
  ['Is there really a free plan?', 'Yes. The Free plan lets you publish 4 videos in a homepage gallery, with add to cart inside the video, forever. Upgrade only when you need more videos or more placements.'],
  ['How is it billed?', 'Through Shopify Billing, charges appear on your Shopify invoice. Free to start, upgrade anytime, cancel anytime. Taxes may apply.'],
  ['Do I need to edit my theme or write code?', 'No. It installs as an app block you add in the theme editor, and removing it leaves your theme exactly as it was.'],
  ['Will it slow down my store?', 'No. Videos lazy-load only when in view, scripts are deferred, and the storefront bundle is tiny (~12 KB gzipped) with no layout shift.'],
  ['Where can I import videos from?', 'Import videos directly from your store’s Shopify Files library, or paste a CDN / hosted video URL.'],
  ['What happens if I downgrade?', 'Videos and placements beyond your new plan’s limits are hidden from your storefront automatically. Nothing is deleted, so upgrade again and it all returns.'],
  ['Can I remove the app branding?', 'Yes. Branding is removed on the Growth plan and above.'],
];

export default function Pricing() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Another Shoppable Video',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Shopify',
      url: 'https://anotherdev.in/pricing',
      offers: [
        { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD', category: 'Free', url: 'https://anotherdev.in/pricing' },
        { '@type': 'Offer', name: 'Growth', price: '21', priceCurrency: 'USD', category: 'Subscription', url: 'https://anotherdev.in/pricing' },
        { '@type': 'Offer', name: 'Pro', price: '49', priceCurrency: 'USD', category: 'Subscription', url: 'https://anotherdev.in/pricing' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://anotherdev.in/' },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://anotherdev.in/pricing' },
      ],
    },
  ];

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
          <Reveal as="h1" className="h-xl mt-s">Pricing that scales with your store</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Start free. Upgrade when you need more videos and placements. Billed through Shopify, cancel anytime.</p></Reveal>
          <Reveal><p className="mt-s" style={{ textAlign: 'center', color: 'var(--slate)', fontSize: '.95rem' }}>Free plan forever. No credit card to start. Cancel anytime, and removing the app leaves your theme untouched.</p></Reveal>
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
