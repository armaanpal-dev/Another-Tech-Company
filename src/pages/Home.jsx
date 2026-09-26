import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, CtaBand, SectionHead, Marquee, StatCard, PillRow } from '../components/Shared';
import Icon from '../components/Icon';
import { posts } from './blogPosts';
import { APP_STORE_URL, SEARCH_APP_STORE_URL } from '../config';
import './Home.css';

const apps = [
  {
    n: '01',
    icon: 'video',
    name: 'AnotherDev Shoppable Video',
    tagline: 'Turn product videos, reels and UGC into a shoppable storefront.',
    to: '/shoppable-video',
    store: APP_STORE_URL,
    points: [
      'Add to cart inside the video',
      'Shoppable UGC, product reels, floating player and page galleries',
      'Smart-tag matching and real-time analytics',
    ],
  },
  {
    n: '02',
    icon: 'search',
    name: 'AnotherDev Search and Filters',
    tagline: 'Instant search and faceted filters shoppers can actually use.',
    to: '/search-and-filters',
    store: SEARCH_APP_STORE_URL,
    points: [
      'Instant search with typo tolerance and synonyms',
      'Faceted filters in four layouts',
      'Merchandising, recommendations and analytics',
    ],
  },
];

const why = ['Works with any Online Store 2.0 theme', 'Premium and vintage themes', 'GoKwik and Shiprocket carts', 'Shopify Markets currencies', 'No theme code edits', 'Free plan on every app'];
const worksWithA = ['Dawn', 'Online Store 2.0', 'Symmetry', 'Clean Canvas', 'Vintage themes', 'Premium themes'];
const worksWithB = ['GoKwik carts', 'Shiprocket carts', 'Shopify Markets', 'Multi-currency', 'Theme app blocks', 'No code edits'];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AnotherDev Shopify apps',
    itemListElement: [
      { '@type': 'ListItem', position: 1, item: { '@type': 'SoftwareApplication', name: 'AnotherDev - Shoppable Video', applicationCategory: 'BusinessApplication', operatingSystem: 'Shopify', url: 'https://anotherdev.in/shoppable-video' } },
      { '@type': 'ListItem', position: 2, item: { '@type': 'SoftwareApplication', name: 'AnotherDev - Search and Filters', applicationCategory: 'BusinessApplication', operatingSystem: 'Shopify', url: 'https://anotherdev.in/search-and-filters' } },
    ],
  };

  const latest = posts.slice(0, 3);

  return (
    <>
      <Seo
        title="Shopify apps that turn browsers into buyers"
        description="AnotherDev builds focused Shopify apps that help stores sell without touching theme code. Two apps: Shoppable Video, and Search and Filters."
        path="/"
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
              SHOPIFY APPS BY ANOTHERDEV
            </span>
          </Reveal>

          <Reveal as="h1" className="h-xl hero__title" delay={60}>
            Two apps. One faster path from <span className="hl">browse to buy</span>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead hero__lead">
              AnotherDev builds focused Shopify apps that help stores sell, without touching
              theme code. Shoppable video that adds to cart in the clip, and search and filters
              shoppers can actually use.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__btns">
              <a href="#apps" className="btn btn--primary btn--lg">Explore the apps <Icon name="arrow" size={18} /></a>
              <Link to="/support" className="btn btn--ghost-light btn--lg">Talk to us</Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__trust">Works with your existing theme. No code. Free plan on both apps.</p>
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
          <Marquee items={worksWithA} />
          <Marquee items={worksWithB} reverse />
        </div>
      </section>

      {/* ================= APPS (light zone) ================= */}
      <div className="lightzone">
        <section className="section" id="apps">
          <div className="container">
            <SectionHead
              badge="The apps"
              icon="sparkle"
              title={<>Two apps, <span className="hl">one storefront that sells</span></>}
              sub="Each does one job well, and both share the same careful theme and cart integration."
            />
            <div className="grid grid-2 mt-l apphub">
              {apps.map((a, i) => (
                <Reveal key={a.name} delay={(i % 2) * 90}>
                  <div className="card card--lit appcard">
                    <div className="appcard__top">
                      <span className="appcard__icon"><Icon name={a.icon} size={26} /></span>
                      <span className="appcard__n">App {a.n}</span>
                    </div>
                    <h3 className="h-md">{a.name}</h3>
                    <p className="appcard__tag">{a.tagline}</p>
                    <ul className="appcard__list">
                      {a.points.map((p) => (
                        <li key={p}><Icon name="check" size={15} strokeWidth={2.4} />{p}</li>
                      ))}
                    </ul>
                    <div className="appcard__btns">
                      <Link to={a.to} className="btn btn--primary">Explore <Icon name="arrow" size={17} /></Link>
                      <a href={a.store} className="btn btn--ghost">Add to Shopify</a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ---------- WHY ANOTHERDEV (dark) ---------- */}
      <section className="section band">
        <div className="container">
          <SectionHead
            badge="Why AnotherDev"
            icon="shield"
            title={<>Apps that fit your store, <span className="hl">not fight it</span></>}
            sub="Both apps install as theme app blocks, work with the cart your store already uses, and come out cleanly if you ever remove them."
          />
          <Reveal>
            <PillRow items={why} className="mt-l" />
          </Reveal>

          <div className="grid grid-3 mt-l">
            <Reveal><StatCard icon="puzzle" value="2 apps" label="One integration approach" note="Shared theme and cart handling across both" /></Reveal>
            <Reveal delay={80}><StatCard icon="gift" value="$0" label="Free plan on both" note="Start free, upgrade through Shopify billing" /></Reveal>
            <Reveal delay={160}><StatCard icon="bolt" value="No code" label="Theme app blocks" note="Install and remove without touching theme files" /></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- BLOG PREVIEW (dark) ---------- */}
      <section className="section">
        <div className="container">
          <div className="shead-split">
            <SectionHead
              align="left"
              badge="From the blog"
              icon="page"
              title={<>Guides on <span className="hl">selling with Shopify</span></>}
            />
            <Reveal delay={110}>
              <p className="lead">Practical walkthroughs for Shopify merchants, from the team behind the apps.</p>
            </Reveal>
          </div>
          <div className="grid grid-3 mt-l">
            {latest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link to={`/blog/${p.slug}`} className="post">
                  <span className={`post__cover ${p.cover}`} aria-hidden="true" />
                  <span className="post__cat">{p.cat}</span>
                  <span className="post__meta">{p.date} · {p.read} read</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="post__link">Read more <Icon name="arrow" size={16} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="center mt-m">
            <Link to="/blog" className="btn btn--ghost">Read all articles <Icon name="arrow" size={17} /></Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Two apps, one free way to start"
        sub="Add either app to your Shopify store free, and upgrade only when it pays off."
      />
    </>
  );
}
