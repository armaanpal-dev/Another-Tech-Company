import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, CtaBand, SectionHead } from '../components/Shared';
import Icon from '../components/Icon';
import './pages.css';

const values = [
  { n: '01', t: 'Focused, not bloated', d: 'Each app does one job well. We would rather ship a small thing that works than a big one that gets in the way, and every feature has to earn its place.' },
  { n: '02', t: 'Fast by default', d: 'Speed is a feature. Our storefront code is lightweight and deferred, so nothing we add costs you a sale or a search ranking.' },
  { n: '03', t: 'Honest, and no lock-in', d: 'We describe only what the apps actually do, never invented numbers. You install in the theme editor, and removing an app leaves your store exactly as it was.' },
];

const work = [
  { icon: 'video', t: 'Shoppable Video', d: 'Turn product videos into a shoppable storefront, with add to cart inside the video.', to: '/shoppable-video' },
  { icon: 'search', t: 'Search and Filters', d: 'Instant search and faceted filters shoppers can actually use.', to: '/search-and-filters' },
  { icon: 'globe', t: 'Web development', d: 'Custom Shopify storefronts, apps, and websites, built by the same team.', to: '/web-development' },
];

export default function About() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AnotherDev',
    url: 'https://anotherdev.in',
    logo: 'https://anotherdev.in/logo.svg',
    description: 'AnotherDev is a small studio that builds focused Shopify apps and websites, including Shoppable Video and Search and Filters.',
  };

  return (
    <>
      <Seo
        title="About"
        description="AnotherDev is a small studio that builds focused Shopify apps and websites. Two apps in production, Shoppable Video and Search and Filters, plus web development for merchants."
        path="/about"
        schema={schema}
      />

      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">About</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">A small studio building for <span className="hl">Shopify</span></Reveal>
          <Reveal><p className="lead">AnotherDev builds focused Shopify apps and websites. We run our own apps in production, Shoppable Video and Search and Filters, and we take on web development for merchants who want the same care applied to their store.</p></Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <div className="lightzone">
        <section className="section">
          <div className="container">
            <SectionHead
              badge="What we do"
              icon="sparkle"
              title={<>Two apps, and the <span className="hl">team behind them</span></>}
              sub="Everything we make is built to help a store sell, without touching theme code or slowing the page down."
            />
            <div className="grid grid-3 mt-l">
              {work.map((w, i) => (
                <Reveal key={w.t} delay={i * 80}>
                  <Link to={w.to} className="card feat feat--link">
                    <span className="feat__icon"><Icon name={w.icon} size={22} /></span>
                    <h3 className="h-sm">{w.t}</h3>
                    <p>{w.d}</p>
                    <span className="feat__more">Learn more <Icon name="arrow" size={16} /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="section band">
          <div className="container">
            <SectionHead
              badge="What we believe"
              icon="shield"
              title={<>The principles behind <span className="hl">the work</span></>}
            />
            <div className="values mt-l">
              {values.map((v, i) => (
                <Reveal key={v.n} delay={i * 80}>
                  <div className="value card">
                    <span className="value__n">{v.n}</span>
                    <h3 className="h-md mt-s">{v.t}</h3>
                    <p>{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CtaBand
        title="Work with AnotherDev"
        sub="Add an app to your store free, or reach out about a web development project. We reply within a few hours."
      />
    </>
  );
}
