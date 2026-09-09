import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Faq, SectionHead, Marquee } from '../components/Shared';
import { SearchDemo } from '../components/Interactive';
import Icon from '../components/Icon';
import { SEARCH_APP_STORE_URL } from '../config';
import './Home.css';

const features = [
  { icon: 'search', t: 'Instant search', d: 'Results appear as the shopper types, with typo tolerance and merchant-defined synonyms so near-misses still find the product.' },
  { icon: 'layers', t: 'Searches more than titles', d: 'Descriptions, vendors, product types, tags, SKUs, variant names, options and metafields are all indexed and searchable.' },
  { icon: 'filter', t: 'Faceted filters', d: 'Filter search results and collection pages by any attribute, in four selectable layouts: sidebar, toolbar, drawer, or always open.' },
  { icon: 'sparkle', t: 'Merchandising', d: 'Pin, boost, bury or hide products per search term or collection, and redirect a term to any page.' },
  { icon: 'sliders', t: 'Synonyms & typo tolerance', d: 'Teach the index that “tee” means “t-shirt”, and let fuzzy matching forgive a misspelling, so shoppers land on the right product.' },
  { icon: 'chart', t: 'Search analytics', d: 'Top searches, zero-result terms, click-through, add-to-cart and optional purchase attribution, so you can see what shoppers want.' },
  { icon: 'target', t: 'Recommendations', d: 'Related-product rails driven by the same index, to keep shoppers moving from one product to the next.' },
  { icon: 'cart', t: 'Add to cart from results', d: 'Shoppers add straight from the results grid, using your theme’s own cart behaviour, the same engine as Shoppable Video.' },
];

const layouts = [
  { icon: 'sliders', t: 'Sidebar', d: 'A column beside the grid with a FILTERS heading, level with the product count and sort. Groups collapse independently; becomes a drawer on phones.' },
  { icon: 'filter', t: 'Toolbar', d: 'A row of dropdown buttons above the grid. The open panel floats over the products rather than pushing them down. One open at a time.' },
  { icon: 'page', t: 'Drawer', d: 'Behind a Filters button at every width, with a title bar, backdrop, focus trap, Escape and outside-click all handled.' },
  { icon: 'layers', t: 'Always open', d: 'Facets permanently expanded and stacked above the grid, for stores that want everything visible at once.' },
];

const steps = [
  { n: '01', t: 'Install and sync', d: 'The app mirrors your catalog into its own index in one pass, then keeps it current automatically as products change.' },
  { n: '02', t: 'Configure search and filters', d: 'Choose which facets appear and in what order, set synonyms and merchandising rules, and style the panel to match your theme.' },
  { n: '03', t: 'Turn it on', d: 'Enable the theme app block. Instant search upgrades your search box, and filters appear on search and collection pages.' },
];

const preview = [
  { name: 'Free', price: '$0', unit: '/mo', points: ['100 products indexed', 'Instant search + 4 filter layouts', 'Basic analytics (7 days)'], featured: false },
  { name: 'Growth', price: '$21', unit: '/mo', points: ['5,000 products indexed', 'Merchandising + search redirects', 'Synonyms + typo tolerance', '30-day analytics history'], featured: true },
  { name: 'Pro', price: '$49', unit: '/mo', points: ['Unlimited products', 'Semantic search + AI product feed', '90-day analytics history', 'Everything in Growth'], featured: false },
];

const faqs = [
  ['What does it search?', 'Titles, descriptions, vendors, product types, tags, SKUs, variant names, options and metafields, all from an index the app owns and keeps in sync with your catalog.'],
  ['Does it work with my theme?', 'Yes. It detects your product grid structurally rather than by theme name, so it works with Dawn and Online Store 2.0 themes, premium themes like Symmetry and the Clean Canvas family, and older vintage themes.'],
  ['I use GoKwik or Shiprocket. Will add to cart still work?', 'Yes. Add to cart from the results grid uses the same engine as AnotherDev Shoppable Video, so it opens your cart app’s own cart correctly.'],
  ['Can I control which products rank?', 'Yes. Merchandising lets you pin, boost, bury or hide products per search term or collection, and redirect a term to any page.'],
  ['Will it slow my store down?', 'Search and filtering run against the app’s own index, so responses are fast, and the storefront script is lightweight and loads with your theme.'],
];

const compat = ['Any Online Store 2.0 theme', 'Premium and vintage themes', 'GoKwik and Shiprocket carts', 'Read-only catalog scopes', 'No theme code edits'];
const worksWithA = ['Dawn', 'Online Store 2.0', 'Symmetry', 'Clean Canvas', 'Vintage themes', 'Premium themes'];
const worksWithB = ['Typo tolerance', 'Synonyms', 'Metafield search', 'Merchandising', 'Recommendations', 'Search analytics'];

export default function SearchAndFilters() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AnotherDev - Search and Filters',
    alternateName: ['AnotherDev Search', 'Search and Filters for Shopify'],
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Shopify App',
    operatingSystem: 'Shopify',
    url: 'https://anotherdev.in/search-and-filters',
    image: 'https://anotherdev.in/og-image.svg',
    description: 'AnotherDev - Search and Filters replaces a Shopify theme’s built-in search with an index the app owns, adding instant search with typo tolerance and synonyms, faceted filters in four layouts, merchandising, search analytics and recommendations.',
    keywords: 'Shopify search app, instant search Shopify, product filters Shopify, faceted search, collection filters, search and discovery, merchandising, synonyms, typo tolerance, product recommendations',
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Growth', price: '21', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro', price: '49', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Custom', price: '70', priceCurrency: 'USD' },
    ],
    publisher: { '@type': 'Organization', name: 'AnotherDev', url: 'https://anotherdev.in' },
  };

  return (
    <>
      <Seo
        title="Search and Filters for Shopify"
        description="Instant search and faceted filters for Shopify. Typo tolerance, synonyms, merchandising, four filter layouts, search analytics and recommendations, from an index the app owns."
        path="/search-and-filters"
        schema={schema}
      />

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__grid-lines" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <span className="badge badge--shopify">
              <img src="/logo.svg" alt="" width="18" height="18" />
              <span className="badge__rule" />
              SEARCH & FILTERS FOR SHOPIFY
            </span>
          </Reveal>

          <Reveal as="h1" className="h-xl hero__title" delay={60}>
            Search your shoppers can <span className="hl">actually use</span>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead hero__lead">
              Replace your theme’s search with an index the app owns: instant results as
              they type, typo tolerance and synonyms, and faceted filters on search and
              collection pages. Shoppers find it, filter it, and add to cart.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__btns">
              <a href={SEARCH_APP_STORE_URL} className="btn btn--primary btn--lg">
                Add to Shopify, free plan available <Icon name="arrow" size={18} />
              </a>
              <Link to="/support" className="btn btn--ghost-light btn--lg">Talk to us</Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__trust">Read-only catalog access. No code. Works with your existing theme.</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- WORKS WITH ---------- */}
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
                AnotherDev Search and Filters replaces a Shopify theme’s built-in product search
                with an index the app owns, and adds faceted filtering to search and collection
                pages. It reads your whole catalog, forgives typos, understands your synonyms, and
                lets you decide what ranks, all without writing to your store.
              </p>
            </Reveal>
          </div>
        </section>

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
                  From instant results to merchandising and analytics, it is a complete search
                  and discovery layer for your storefront, built on read-only catalog access.
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
      </div>

      {/* ---------- SEE IT IN ACTION (dark) ---------- */}
      <section className="section band">
        <div className="container split">
          <div className="split__copy">
            <SectionHead
              align="left"
              badge="See it in action"
              icon="search"
              title={<>Type once, <span className="hl">narrow it down</span></>}
              sub="This is the instant-search panel. Start typing to filter the demo catalog, or pick a facet. Matches highlight as you go."
            />
          </div>
          <Reveal className="split__media" delay={120}><SearchDemo /></Reveal>
        </div>
      </section>

      {/* ================= LIGHT ZONE 2 ================= */}
      <div className="lightzone">
        <section className="section">
          <div className="container">
            <SectionHead
              badge="Filter layouts"
              icon="filter"
              title={<>Four filter layouts, <span className="hl">genuinely different</span></>}
              sub="Not four names for one thing. Both the search results page and collection pages implement all four, with the same appearance settings."
            />
            <div className="grid grid-4 mt-l feats">
              {layouts.map((l, i) => (
                <Reveal key={l.t} delay={(i % 4) * 60}>
                  <div className="feat">
                    <span className="feat__icon"><Icon name={l.icon} size={22} /></span>
                    <h3 className="h-sm">{l.t}</h3>
                    <p>{l.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ---------- COMPATIBILITY (dark) ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead
            badge="Your real advantage"
            icon="shield"
            title={<>Works with your store, <span className="hl">not against it</span></>}
            sub="Add to cart from results uses the same engine as Shoppable Video, so it opens the cart your store actually uses. Read-only scopes mean the app never writes to your store."
          />
          <Reveal>
            <div className="chips mt-l">
              {compat.map((c) => (
                <span key={c} className="chip"><Icon name="check" size={15} strokeWidth={2.2} />{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LIGHT ZONE 3 ================= */}
      <div className="lightzone">
        <section className="section">
          <div className="container">
            <SectionHead
              badge="Live in three steps"
              icon="rocket"
              title={<>From install to <span className="hl">instant search</span></>}
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
              title={<>Priced by catalog <span className="hl">size</span></>}
              sub="Billed through Shopify. Cancel anytime. A Custom plan at $70/mo adds unlimited products and a full year of analytics history."
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
                    <a href={SEARCH_APP_STORE_URL} className={`btn ${p.featured ? 'btn--primary' : 'btn--ghost'}`}>Add to Shopify</a>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="center mt-m">
              <Link to="/support" className="btn btn--ghost">Ask about the Custom plan <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead badge="FAQ" icon="chat" title={<>Questions, <span className="hl">answered</span></>} />
            <div className="faq mt-l">
              {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
            </div>
          </div>
        </section>
      </div>

      {/* ---------- CTA ---------- */}
      <section className="ctaband">
        <div className="container">
          <Reveal>
            <div className="ctaband__panel">
              <div className="ctaband__glow" aria-hidden="true" />
              <div className="ctaband__inner">
                <h2 className="h-lg">Give shoppers a search that works</h2>
                <p className="lead mx-auto">Instant search, real filters, and merchandising you control. Free to start, billed through Shopify.</p>
                <div className="ctaband__btns">
                  <a href={SEARCH_APP_STORE_URL} className="btn btn--primary btn--lg">
                    Add to Shopify, free plan available <Icon name="arrow" size={18} />
                  </a>
                  <Link to="/support" className="btn btn--ghost-light btn--lg">Talk to us</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
