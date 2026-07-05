import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Shared.css';

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
          <a href="https://apps.shopify.com" className="btn btn--primary btn--lg">Add to Shopify — free</a>
          <Link to="/contact" className="btn btn--ghost-light btn--lg">Talk to us</Link>
        </div>
      </div>
    </section>
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
