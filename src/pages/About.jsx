import Seo from '../components/Seo';
import { Reveal, CtaBand } from '../components/Shared';
import './pages.css';

const values = [
  { n: '01', t: 'Merchant-obsessed', d: 'Every feature earns its place by helping merchants sell, from in-video add to cart to the analytics that show what’s working. If it doesn’t help, it ships later.' },
  { n: '02', t: 'Fast by default', d: 'Speed is a feature. Videos lazy-load only when in view and the storefront bundle stays tiny (~12 KB gzipped) with no layout shift, so video never costs you a sale.' },
  { n: '03', t: 'No-code, no lock-in', d: 'You shouldn’t need a developer to add video, and you shouldn’t fear leaving. Setup is a click in the theme editor; uninstalling removes your data.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="AnotherDev is built by AnotherDev to make every Shopify store shoppable through video, the fastest, simplest way to turn product videos into add-to-cart moments."
        path="/about"
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">About</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">We make commerce worth watching</Reveal>
          <Reveal><p className="lead">AnotherDev is built by <a href="https://anotherdev.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>AnotherDev</a>. It started with a simple frustration: brands pour effort into product video, but static storefronts can’t show how a product looks, moves, or fits. We built the bridge, shoppable reels, with add-to-cart built in, right where shoppers decide.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center home__head">
            <Reveal><span className="eyebrow">What we believe</span></Reveal>
            <Reveal as="h2" className="h-lg mt-s">The principles behind the product</Reveal>
          </div>
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

      <CtaBand title="Build with us" sub="Add AnotherDev to your store free, or reach out, we love hearing from merchants." />
    </>
  );
}
