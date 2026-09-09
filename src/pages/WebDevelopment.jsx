import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, SectionHead } from '../components/Shared';
import Icon from '../components/Icon';
import './Home.css';

const services = [
  { icon: 'box', t: 'Shopify storefronts', d: 'Custom themes and storefronts on Online Store 2.0, built to be fast, on-brand, and easy for your team to run.' },
  { icon: 'puzzle', t: 'Custom Shopify apps', d: 'Embedded admin apps, theme app extensions, and app-proxy storefront features, the same stack behind our own published apps.' },
  { icon: 'globe', t: 'Websites and web apps', d: 'Marketing sites, landing pages, and web apps built with modern frameworks and clean, maintainable code.' },
  { icon: 'sliders', t: 'Integrations and APIs', d: 'Connect Shopify to the tools you already use: carts, ERPs, analytics, email, and third-party APIs.' },
  { icon: 'bolt', t: 'Performance and SEO', d: 'Fast pages, clean structured data, and prerendering so search engines and AI crawlers can actually read your site.' },
  { icon: 'shield', t: 'Ongoing support', d: 'Maintenance, fixes, and improvements after launch, from the same people who built it.' },
];

const steps = [
  { n: '01', t: 'Discovery', d: 'We learn your store, your goals, and your constraints, then scope the work so you know exactly what you are getting.' },
  { n: '02', t: 'Design and build', d: 'We design and build in short cycles, sharing progress as we go, so there are no surprises at the end.' },
  { n: '03', t: 'Launch and support', d: 'We ship it, verify it in your real store, and stay on for fixes and improvements.' },
];

const why = ['We ship our own Shopify apps', 'Fast, no-bloat code', 'Honest scope and pricing', 'Works with your existing theme', 'Built for Shopify and the wider web'];

export default function WebDevelopment() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AnotherDev Web Development',
    url: 'https://anotherdev.in/web-development',
    description: 'AnotherDev builds Shopify storefronts, custom Shopify apps, websites and web apps, integrations, and performance and SEO work for growing brands.',
    provider: { '@type': 'Organization', name: 'AnotherDev', url: 'https://anotherdev.in' },
    areaServed: 'Worldwide',
  };

  return (
    <>
      <Seo
        title="Web Development"
        description="AnotherDev builds Shopify storefronts, custom Shopify apps, websites and web apps, integrations, and performance and SEO work, from the team behind our own Shopify apps."
        path="/web-development"
        schema={schema}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__grid-lines" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal>
            <span className="badge badge--shopify">
              <img src="/logo.svg" alt="" width="18" height="18" />
              <span className="badge__rule" />
              WEB DEVELOPMENT BY ANOTHERDEV
            </span>
          </Reveal>

          <Reveal as="h1" className="h-xl hero__title" delay={60}>
            We build the web, not just <span className="hl">apps</span>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead hero__lead">
              We design and build fast, modern Shopify storefronts, custom apps, and websites.
              The same team behind our own Shopify apps can build yours.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__btns">
              <Link to="/support" className="btn btn--primary btn--lg">Start a project <Icon name="arrow" size={18} /></Link>
              <Link to="/" className="btn btn--ghost-light btn--lg">See our apps</Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__trust">Shopify storefronts, custom apps, and websites. Built to last.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICES (light zone) ================= */}
      <div className="lightzone">
        <section className="section--tight">
          <div className="container">
            <Reveal>
              <p className="lead intro">
                AnotherDev is a small studio that builds Shopify apps and ships them to the App Store.
                We take on client work too: storefronts, custom apps, and websites, built with the same
                care for speed, clean code, and honest scope. <strong>If you want a website or a custom
                app, <Link to="/support" className="hl-link">contact us</Link>.</strong>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              badge="What we build"
              icon="sliders"
              title={<>From a storefront to a <span className="hl">custom app</span></>}
              sub="A focused set of services, all in one team, so the people who scope the work are the people who build it."
            />
            <div className="grid grid-3 mt-l feats">
              {services.map((s, i) => (
                <Reveal key={s.t} delay={(i % 3) * 60}>
                  <div className="feat">
                    <span className="feat__icon"><Icon name={s.icon} size={22} /></span>
                    <h3 className="h-sm">{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* HOW WE WORK (dark) */}
      <section className="section band">
        <div className="container">
          <SectionHead
            badge="How we work"
            icon="rocket"
            title={<>Clear scope, <span className="hl">steady progress</span></>}
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

      {/* WHY (dark) */}
      <section className="section">
        <div className="container">
          <SectionHead
            badge="Why AnotherDev"
            icon="shield"
            title={<>Builders who <span className="hl">ship their own products</span></>}
            sub="We do not just build for clients, we run our own Shopify apps in production, so we bring that same discipline to your project."
          />
          <Reveal>
            <div className="chips mt-l">
              {why.map((c) => (
                <span key={c} className="chip"><Icon name="check" size={15} strokeWidth={2.2} />{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaband">
        <div className="container">
          <Reveal>
            <div className="ctaband__panel">
              <div className="ctaband__glow" aria-hidden="true" />
              <div className="ctaband__inner">
                <h2 className="h-lg">Want a website? Contact us.</h2>
                <p className="lead mx-auto">Tell us what you are building and we will reply within a few hours with next steps. No obligation, no sales pressure.</p>
                <div className="ctaband__btns">
                  <Link to="/support" className="btn btn--primary btn--lg">Contact us <Icon name="arrow" size={18} /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
