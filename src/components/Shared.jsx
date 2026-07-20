import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Shared.css';

/* Accordion FAQ item */
export function Faq({ q, a }) {
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

/* Reveal-on-scroll wrapper */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add('in');
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

/* Phone-style shoppable video mockup (pure CSS/SVG, no assets) */
export function VideoMock({ label = 'Now playing', price = '$48', product = 'Linen Wrap Dress' }) {
  return (
    <div className="vmock" role="img" aria-label={`Shoppable video preview featuring ${product}`}>
      <div className="vmock__screen">
        <div className="vmock__shimmer" />
        <span className="vmock__live"><i /> {label}</span>
        <div className="vmock__rail">
          {[0, 1, 2].map((i) => <span key={i} className={`vmock__dot ${i === 0 ? 'on' : ''}`} />)}
        </div>
        <div className="vmock__tag">
          <div className="vmock__thumb" />
          <div>
            <strong>{product}</strong>
            <span>{price}</span>
          </div>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

/* Reusable closing CTA band */
export function CtaBand({
  title = 'Ready to make your store shoppable?',
  sub = 'Install free in two minutes. No code, no theme edits, no developer required.',
}) {
  return (
    <section className="ctaband">
      <div className="container ctaband__inner">
        <div className="ctaband__glow" aria-hidden="true" />
        <h2 className="h-lg">{title}</h2>
        <p className="lead mx-auto" style={{ textAlign: 'center' }}>{sub}</p>
        <div className="ctaband__btns">
          <a href="https://apps.shopify.com" className="btn btn--primary btn--lg">Add to Shopify for free</a>
          <Link to="/contact" className="btn btn--ghost-light btn--lg">Talk to us</Link>
        </div>
      </div>
    </section>
  );
}

/* Sticky mobile call to action. Hidden on desktop, where the nav CTA is always visible. */
export function StickyCta() {
  return (
    <div className="stickycta" role="complementary" aria-label="Install call to action">
      <div className="stickycta__text">
        <strong>Free plan</strong>
        <span>No code needed</span>
      </div>
      <a href="https://apps.shopify.com" className="btn btn--primary">Add to Shopify</a>
    </div>
  );
}

/* Stat block */
export function Stat({ value, label }) {
  return (
    <div className="stat">
      <span className="stat__value">{value}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}
