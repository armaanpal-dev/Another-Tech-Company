import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, SectionHead, Faq, PillRow } from '../components/Shared';
import Icon from '../components/Icon';
import './Home.css';

const services = [
  { icon: 'puzzle', t: 'Custom Shopify apps', d: 'Embedded admin apps, theme app extensions, and app-proxy storefront features, built on the same stack behind our own published Shopify apps.' },
  { icon: 'box', t: 'Shopify storefronts and themes', d: 'Custom themes and storefronts on Online Store 2.0, built to be fast, on-brand, and easy for your team to run.' },
  { icon: 'globe', t: 'Websites and web apps', d: 'Marketing sites, landing pages, and full web apps built with modern frameworks and clean, maintainable code.' },
  { icon: 'sliders', t: 'Integrations and APIs', d: 'Connect Shopify to the tools you already use: carts, ERPs, analytics, email, payments, and third-party APIs.' },
  { icon: 'chat', t: 'AI automation and chatbots', d: 'Custom AI assistants, chatbots, and automations wired into your store and the tools your team runs on.' },
  { icon: 'bolt', t: 'Performance, SEO and CRO', d: 'Fast pages, clean structured data, and prerendering so search engines and AI assistants can read and recommend your site.' },
];

const shopifyPoints = [
  'Public and custom apps, from first scope to App Store submission',
  'Theme app extensions and app blocks, no theme code left behind',
  'Admin GraphQL, app proxy, webhooks and billing done properly',
  'Works with third-party carts like GoKwik and Shiprocket, and Shopify Markets',
];

const webPoints = [
  'Marketing sites and landing pages that load fast and convert',
  'Web apps and dashboards built on React, Next.js and Node',
  'WordPress and PHP builds when that is the right tool for the job',
  'Structured data, prerendering and Core Web Vitals baked in',
];

const stack = ['React', 'Next.js', 'Node.js', 'Express', 'PHP', 'WordPress', 'Shopify Liquid', 'Theme app extensions', 'Admin GraphQL', 'App proxy', 'REST and GraphQL APIs', 'AI automations'];

const steps = [
  { n: '01', t: 'Discovery and scope', d: 'We learn your store, your goals, and your constraints, then scope the work so you know exactly what you are getting and what it costs.' },
  { n: '02', t: 'Design and build', d: 'We design and build in short cycles and share progress as we go, so there are no surprises at the end.' },
  { n: '03', t: 'Launch and support', d: 'We ship it, verify it in your real store, and stay on for fixes and improvements from the same people who built it.' },
];

const why = ['We ship our own Shopify apps', 'Fast, no-bloat code', 'Honest scope and pricing', 'One team scopes and builds', 'Works with your existing theme', 'Support after launch'];

const faqs = [
  ['Is AnotherDev a Shopify app development company?', 'Yes. We design, build and publish Shopify apps, including our own apps on the Shopify App Store, and we build custom apps for other merchants and agencies. That covers embedded admin apps, theme app extensions, app-proxy storefront features, billing, webhooks and App Store submission.'],
  ['Can you build a custom Shopify app for my store?', 'Yes. We build private and custom Shopify apps tailored to your workflow, as well as public apps meant for the App Store. Because we run our own apps in production, we bring the same discipline around speed, cart compatibility and clean uninstalls to your project.'],
  ['Do you do website development as well as Shopify apps?', 'Yes. Alongside Shopify work, we build marketing websites, landing pages and full web apps using React, Next.js, Node and, where it fits, WordPress and PHP. The same team that scopes the work builds it.'],
  ['What technologies do you work with?', 'React, Next.js, Node.js and Express on the web app side, PHP and WordPress where that suits the project, and the full Shopify stack: Liquid, theme app extensions, Admin GraphQL, app proxy and webhooks. We also build AI automations and chatbots.'],
  ['Do you work with clients worldwide?', 'Yes. We work remotely with brands and agencies worldwide, and we are comfortable with the realities of Indian D2C stores, including third-party carts and multi-currency Shopify Markets setups.'],
  ['How much does a Shopify app or website cost?', 'It depends on scope, so we quote each project after a short discovery call rather than list a fixed price. Tell us what you are building and we will come back with clear scope, timeline and cost.'],
  ['How do I start a project with you?', 'Contact us through the support page with a few lines about what you want to build. We usually reply within a few hours with next steps, and there is no obligation or sales pressure.'],
];

export default function WebDevelopment() {
  const url = 'https://anotherdev.in/web-development';
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': `${url}#org`,
        name: 'AnotherDev',
        url,
        description: 'AnotherDev is a Shopify app development company and website development agency. We build custom Shopify apps, storefronts, websites, web apps, integrations and AI automations, and we publish our own apps on the Shopify App Store.',
        areaServed: 'Worldwide',
        serviceType: [
          'Shopify app development',
          'Shopify theme development',
          'Website development',
          'Web application development',
          'API integration',
          'AI automation',
        ],
        knowsAbout: [
          'Shopify app development', 'Shopify theme development', 'Website development',
          'React', 'Next.js', 'Node.js', 'PHP', 'WordPress', 'E-commerce', 'SEO', 'Conversion rate optimization',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Development services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.t, description: s.d },
          })),
        },
        logo: 'https://anotherdev.in/logo.svg',
      },
      {
        '@type': 'WebPage',
        '@id': url,
        name: 'Shopify App and Website Development Company',
        url,
        description: 'AnotherDev is a Shopify app development company and website development agency building custom Shopify apps, storefronts, websites and integrations.',
        isPartOf: { '@type': 'WebSite', name: 'AnotherDev', url: 'https://anotherdev.in' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({
          '@type': 'Question', name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <>
      <Seo
        title="Shopify App & Website Development Company"
        description="AnotherDev is a Shopify app development company and website development agency. We build custom Shopify apps, storefronts, websites and integrations, from the team behind our own published Shopify apps."
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
              SHOPIFY APP & WEB DEVELOPMENT
            </span>
          </Reveal>

          <Reveal as="h1" className="h-xl hero__title" delay={60}>
            A Shopify app and website <span className="hl">development company</span>
          </Reveal>

          <Reveal delay={120}>
            <p className="lead hero__lead">
              Need someone to build your Shopify app, storefront, or website? AnotherDev designs and
              builds custom Shopify apps, themes, websites, and integrations, and we publish our own
              apps on the Shopify App Store, so you hire builders who ship real products.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__btns">
              <Link to="/support" className="btn btn--primary btn--lg">Start a project <Icon name="arrow" size={18} /></Link>
              <Link to="/" className="btn btn--ghost-light btn--lg">See our apps</Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__trust">Custom Shopify apps, storefronts, and websites. Built to last, worldwide.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= INTRO + SERVICES (light zone) ================= */}
      <div className="lightzone">
        <section className="section--tight">
          <div className="container">
            <Reveal>
              <p className="lead intro">
                AnotherDev is a Shopify app development company and website development agency. We build
                custom Shopify apps, storefronts, websites, web apps, integrations, and AI automations,
                all with the same care for speed, clean code, and honest scope that goes into our own
                published apps. <strong>If you want a Shopify app or a website built,{' '}
                <Link to="/support" className="hl-link">contact us</Link>.</strong>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHead
              badge="What we build"
              icon="sliders"
              title={<>From a custom app to a <span className="hl">full website</span></>}
              sub="A focused set of services, all in one team, so the people who scope the work are the people who build it."
            />
            <div className="grid grid-3 mt-l feats stack-cards">
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

        {/* Two focused blocks so each keyword cluster has its own dedicated copy. */}
        <section className="section band">
          <div className="container">
            <div className="grid grid-2 mt-s" style={{ gap: 40 }}>
              <Reveal>
                <div className="card card--lit" style={{ padding: 28 }}>
                  <span className="feat__icon"><Icon name="puzzle" size={22} /></span>
                  <h2 className="h-md mt-s">Shopify app development company</h2>
                  <p className="mt-s">
                    We build custom and public Shopify apps end to end, from scoping and design through
                    development, testing, and App Store submission. Having shipped our own apps, we know
                    where Shopify projects usually break and how to avoid it.
                  </p>
                  <ul className="appcard__list mt-m">
                    {shopifyPoints.map((p) => (
                      <li key={p}><Icon name="check" size={15} strokeWidth={2.4} />{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <div className="card card--lit" style={{ padding: 28 }}>
                  <span className="feat__icon"><Icon name="globe" size={22} /></span>
                  <h2 className="h-md mt-s">Website development agency</h2>
                  <p className="mt-s">
                    We design and build fast, modern websites and web apps that are easy to run and
                    genuinely convert, with SEO and performance considered from the first line of code
                    rather than bolted on at the end.
                  </p>
                  <ul className="appcard__list mt-m">
                    {webPoints.map((p) => (
                      <li key={p}><Icon name="check" size={15} strokeWidth={2.4} />{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section--tight">
          <div className="container">
            <SectionHead
              badge="Our stack"
              icon="code"
              title={<>The tools we <span className="hl">build with</span></>}
              sub="Modern, well-supported technology across Shopify and the wider web, chosen to fit the job rather than a fixed template."
            />
            <Reveal>
              <PillRow items={stack} className="mt-l" />
            </Reveal>
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
            sub="We do not just build for clients. We run our own Shopify apps in production, so we bring that same discipline to your project."
          />
          <Reveal>
            <PillRow items={why} className="mt-l" />
          </Reveal>
        </div>
      </section>

      {/* FAQ (light zone) */}
      <div className="lightzone">
        <section className="section">
          <div className="container">
            <SectionHead badge="FAQ" icon="chat" title={<>Hiring us, <span className="hl">answered</span></>} />
            <div className="faq mt-l">
              {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="ctaband">
        <div className="container">
          <Reveal>
            <div className="ctaband__panel">
              <div className="ctaband__glow" aria-hidden="true" />
              <div className="ctaband__inner">
                <h2 className="h-lg">Want a Shopify app or a website? Contact us.</h2>
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
