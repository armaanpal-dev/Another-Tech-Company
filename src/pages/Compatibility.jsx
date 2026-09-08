import Seo from '../components/Seo';
import Icon from '../components/Icon';
import { Reveal, CtaBand } from '../components/Shared';
import './pages.css';

const blocks = [
  {
    icon: 'palette',
    t: 'Any theme',
    d: 'Dawn and Online Store 2.0 themes, premium themes including Symmetry and the Clean Canvas family, and older vintage themes.',
  },
  {
    icon: 'cart',
    t: 'Third-party carts and checkouts',
    d: 'Including GoKwik and Shiprocket. Adding from a video opens their cart correctly, exactly like your theme’s own Add to Cart button, instead of breaking it.',
  },
  {
    icon: 'globe',
    t: 'Shopify Markets',
    d: 'Prices are fetched live in the shopper’s own currency, so the card always matches what the cart charges, even across multiple markets.',
  },
  {
    icon: 'puzzle',
    t: 'No theme code edits',
    d: 'It installs as an app block you add in the theme editor. Remove it any time and your theme is left exactly as it was.',
  },
];

export default function Compatibility() {
  return (
    <>
      <Seo
        title="Compatibility"
        description="AnotherDev works with Dawn and Online Store 2.0 themes, premium and vintage themes, third-party carts like GoKwik and Shiprocket, and Shopify Markets multi-currency pricing."
        path="/compatibility"
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">Compatibility</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Works with your store, not against it</Reveal>
          <Reveal><p className="lead">Shoppable video should fit the store you already have. AnotherDev is built to work with your theme, your cart, and the currencies you sell in.</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section">
          <div className="container">
            <div className="grid grid-2">
              {blocks.map((b, i) => (
                <Reveal key={b.t} delay={i * 80}>
                  <div className="card feat">
                    <span className="feat__icon"><Icon name={b.icon} size={22} /></span>
                    <h3 className="h-md">{b.t}</h3>
                    <p>{b.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container">
            <div className="shead">
              <Reveal><span className="eyebrow">Why it matters</span></Reveal>
              <Reveal as="h2" className="h-lg mt-s">Add to cart that does not break</Reveal>
              <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>
                A video widget is only useful if the Add to Cart button behaves like the rest of
                your store. That means opening the cart your store actually uses, showing the
                price the shopper will actually be charged, and marking sold-out variants as
                unavailable rather than letting someone try to buy them.
              </p></Reveal>
            </div>
          </div>
        </section>
      </div>
      <CtaBand title="Not sure about your setup?" sub="Tell us your theme and cart app and we will confirm before you install." />
    </>
  );
}
