import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { APP_STORE_URL } from '../config';
import './Shared.css';

/* Accordion FAQ item */
export function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq__item ${open ? 'open' : ''}`}>
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen(!open)}>
        {q}
        <i className="faq__plus" aria-hidden="true"><span /><span /></i>
      </button>
      <div className="faq__a"><p>{a}</p></div>
    </div>
  );
}

/* Reveal-on-scroll wrapper.

   The resting state is visible. Only elements that begin below the
   fold get armed into their hidden start state, so the first frame
   of the page is complete rather than a grid of empty boxes waiting
   on an observer. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add('is-armed');
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.remove('is-armed');
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

/* Centred (or left-aligned) section heading: badge pill, title, lead. */
export function SectionHead({ badge, icon, title, sub, align = 'center', className = '' }) {
  return (
    <div className={`shead ${align === 'left' ? 'shead--left' : ''} ${className}`}>
      {badge && (
        <Reveal>
          <span className="badge">
            {icon && <Icon name={icon} size={16} strokeWidth={1.8} />}
            {badge}
          </span>
        </Reveal>
      )}
      <Reveal as="h2" className="h-lg" delay={60}>{title}</Reveal>
      {sub && <Reveal delay={110}><p className="lead">{sub}</p></Reveal>}
    </div>
  );
}

/* Endless scrolling chip row. The list is rendered twice so the
   translate(-50%) loop is seamless. */
export function Marquee({ items, reverse = false }) {
  // Repeat the list so a single half is wider than any viewport, then render
  // two identical halves. The CSS animates to translateX(-50%), which lands
  // exactly on the second half, so the loop is continuous with no blank space.
  const half = [...items, ...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'marquee--rev' : ''}`} aria-label={items.join(', ')}>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          half.map((t, i) => (
            <span className="marquee__item" key={`${copy}-${i}-${t}`} aria-hidden="true">
              <Icon name="check" size={15} strokeWidth={2.2} />{t}
            </span>
          ))
        ))}
      </div>
    </div>
  );
}

/* Row of pills (chips).
   With more than four pills it becomes an auto-sliding row on mobile (the
   same seamless marquee mechanism used elsewhere), and stays a wrapped grid
   on desktop. Four or fewer stay a grid on every screen. */
export function PillRow({ items, className = '' }) {
  const chip = (t, key) => (
    <span className="chip" key={key}><Icon name="check" size={15} strokeWidth={2.2} />{t}</span>
  );

  if (items.length <= 4) {
    return <div className={`chips ${className}`}>{items.map((t) => chip(t, t))}</div>;
  }

  // Repeat so a single half is wider than the viewport; two halves loop seamlessly.
  const loop = [...items, ...items, ...items];
  return (
    <div className={`pillrow ${className}`}>
      <div className="chips pillrow__grid">{items.map((t) => chip(t, t))}</div>
      <div className="marquee pillrow__slide" aria-label={items.join(', ')}>
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            loop.map((t, i) => (
              <span className="marquee__item" key={`${copy}-${i}-${t}`} aria-hidden="true">
                <Icon name="check" size={15} strokeWidth={2.2} />{t}
              </span>
            ))
          ))}
        </div>
      </div>
    </div>
  );
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

/* Reusable closing CTA, as an inset panel rather than a full-bleed band. */
export function CtaBand({
  title = 'Ready to make your store shoppable?',
  sub = 'Install free in two minutes. No code, no theme edits, no developer required.',
}) {
  return (
    <section className="ctaband">
      <div className="container">
        <Reveal>
          <div className="ctaband__panel">
            <div className="ctaband__glow" aria-hidden="true" />
            <div className="ctaband__inner">
              <h2 className="h-lg">{title}</h2>
              <p className="lead mx-auto">{sub}</p>
              <div className="ctaband__btns">
                <a href={APP_STORE_URL} className="btn btn--primary btn--lg">
                  Add to Shopify, free plan available <Icon name="arrow" size={18} />
                </a>
                <Link to="/support" className="btn btn--ghost-light btn--lg">Talk to us</Link>
              </div>
            </div>
          </div>
        </Reveal>
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
      <a href={APP_STORE_URL} className="btn btn--primary">Add to Shopify</a>
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

/* Large stat card: icon tile, headline figure, label, supporting line. */
export function StatCard({ icon, value, label, note }) {
  return (
    <div className="statcard card card--lit">
      <span className="statcard__icon"><Icon name={icon} size={22} /></span>
      <span className="statcard__value">{value}</span>
      <span className="statcard__label">{label}</span>
      {note && <span className="statcard__note">{note}</span>}
    </div>
  );
}
