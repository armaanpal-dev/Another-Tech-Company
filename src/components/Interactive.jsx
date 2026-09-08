import { useEffect, useState } from 'react';
import Icon from './Icon';
import './Interactive.css';

/* ---------------------------------------------------------------------------
   Interactive shoppable-video demo.
   A working mock of the storefront widget: switch reels, tap Add to Cart, and
   watch the cart update. Uses CSS gradients in place of real video, and sample
   product names purely to illustrate the UI.
--------------------------------------------------------------------------- */
const REELS = [
  { product: 'Linen Wrap Dress', variant: 'Sand / M', price: '$48', compare: '$64', tag: 'Now playing', hue: 'demo--a' },
  { product: 'Suede Chelsea Boot', variant: 'Tan / 9', price: '$129', compare: '', tag: 'Tap to shop', hue: 'demo--b' },
  { product: 'Gold Hoop Earrings', variant: 'Small', price: '$36', compare: '$44', tag: 'Bestseller', hue: 'demo--c' },
];

export function ShoppableDemo() {
  const [i, setI] = useState(0);
  const [cart, setCart] = useState(0);
  const [bump, setBump] = useState(false);
  const [toast, setToast] = useState(false);
  const reel = REELS[i];

  const go = (dir) => setI((v) => (v + dir + REELS.length) % REELS.length);

  const add = () => {
    setCart((c) => c + 1);
    setBump(true);
    setToast(true);
    setTimeout(() => setBump(false), 400);
    setTimeout(() => setToast(false), 1600);
  };

  return (
    <div className="demo">
      <div className={`demo__phone ${reel.hue}`}>
        <div className="demo__screen">
          <div className="demo__shimmer" />
          <span className="demo__live"><i /> {reel.tag}</span>
          <span className={`demo__cart ${bump ? 'is-bump' : ''}`} aria-live="polite">
            <Icon name="cart" size={13} strokeWidth={2} /> {cart}
          </span>

          <div className="demo__rail" aria-hidden="true">
            {REELS.map((_, d) => <span key={d} className={`demo__dot ${d === i ? 'on' : ''}`} />)}
          </div>

          <button className="demo__nav demo__nav--prev" onClick={() => go(-1)} aria-label="Previous reel">‹</button>
          <button className="demo__nav demo__nav--next" onClick={() => go(1)} aria-label="Next reel">›</button>

          <div className="demo__card">
            <div className="demo__thumb" />
            <div className="demo__meta">
              <strong>{reel.product}</strong>
              <span className="demo__variant">{reel.variant}</span>
              <span className="demo__price">
                {reel.price}{reel.compare && <s>{reel.compare}</s>}
              </span>
            </div>
            <button className="demo__add" onClick={add}>Add to cart</button>
          </div>

          {toast && <div className="demo__toast">Added to cart</div>}
        </div>
      </div>
      <p className="demo__hint">Tap <strong>Add to cart</strong>, or use the arrows to switch reels. This is a live UI demo, no real checkout.</p>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Reel-gallery carousel: a horizontal, swipeable feed of shoppable cards,
   the way the storefront feed widget appears on a home or collection page.
--------------------------------------------------------------------------- */
const GALLERY = [
  { product: 'Ribbed Knit Set', price: '$72', hue: 'demo--a' },
  { product: 'Everyday Tote', price: '$64', hue: 'demo--c' },
  { product: 'Canvas Sneaker', price: '$88', hue: 'demo--b' },
  { product: 'Wool Overshirt', price: '$120', hue: 'demo--a' },
  { product: 'Ribbed Beanie', price: '$28', hue: 'demo--c' },
];

export function ReelCarousel() {
  return (
    <div className="reelrow" role="list" aria-label="Shoppable video feed demo">
      {GALLERY.map((g) => (
        <div className={`reelrow__card ${g.hue}`} role="listitem" key={g.product}>
          <div className="reelrow__shimmer" />
          <div className="reelrow__tag">
            <div>
              <strong>{g.product}</strong>
              <span>{g.price}</span>
            </div>
            <span className="reelrow__add">Add</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Card media: four small, non-interactive illustrations that sit at the top of
   the showcase cards. Pure CSS, no image assets, so they cost nothing to load.
--------------------------------------------------------------------------- */
export function MockFeed() {
  return (
    <div className="mm mm--feed" aria-hidden="true">
      <div className="mm__row">
        {['demo--a', 'demo--c', 'demo--b', 'demo--a'].map((h, i) => (
          <span key={i} className={`mm__tile ${h}`}>
            <em className="mm__chip" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function MockCart() {
  return (
    <div className="mm mm--cart" aria-hidden="true">
      <span className="mm__phone demo--a">
        <span className="mm__pcard">
          <span className="mm__pthumb" />
          <span className="mm__plines"><em /><em /></span>
          <span className="mm__pbtn">Add</span>
        </span>
      </span>
      <span className="mm__cursor"><Icon name="pointer" size={22} strokeWidth={1.9} /></span>
    </div>
  );
}

export function MockTags() {
  return (
    <div className="mm mm--tags" aria-hidden="true">
      <div className="mm__tagcol">
        {['summer', 'linen', 'sale'].map((t) => <span key={t} className="mm__tag">{t}</span>)}
      </div>
      <span className="mm__wire" />
      <span className="mm__tile demo--c mm__tile--tall"><em className="mm__chip" /></span>
    </div>
  );
}

export function MockChart() {
  const bars = [38, 62, 45, 78, 56, 92, 70];
  return (
    <div className="mm mm--chart" aria-hidden="true">
      <div className="mm__bars">
        {bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
      </div>
      <div className="mm__legend"><em /><em /><em /></div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Analytics flow: the events every reel reports, as a numbered stack. One row
   is highlighted at a time, cycling, so the sequence reads as a journey.
   No figures are shown, merchants see their own in the dashboard.
--------------------------------------------------------------------------- */
const STEPS = [
  { icon: 'eye', t: 'Impression', d: 'The reel is shown to a shopper' },
  { icon: 'video', t: 'Play', d: 'They start watching' },
  { icon: 'pointer', t: 'Click', d: 'They tap the product card' },
  { icon: 'cart', t: 'Add to cart', d: 'The exact variant is added' },
  { icon: 'trending', t: 'Conversion', d: 'Derived as a rate from the events above' },
];

export function FunnelViz() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setActive((v) => (v + 1) % STEPS.length), 1900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flow">
      <ol className="flow__list">
        {STEPS.map((s, i) => (
          <li key={s.t} className={`flow__row ${i === active ? 'is-on' : ''}`}>
            <span className="flow__n">{i + 1}</span>
            <span className="flow__icon"><Icon name={s.icon} size={18} /></span>
            <span className="flow__body">
              <strong>{s.t}</strong>
              <em>{s.d}</em>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Player showcase: a selectable list of what the storefront player does, with
   the live demo phone alongside. Selecting a row is optional, it also advances
   on its own.
--------------------------------------------------------------------------- */
const PLAYER_POINTS = [
  { icon: 'mobile', t: 'A social-style player', d: 'Vertical, auto-playing and muted by default, the format shoppers already know how to use.' },
  { icon: 'tag', t: 'The product, on the video', d: 'A card overlays each reel with the title, live price, compare-at price, and an Add to Cart button.' },
  { icon: 'target', t: 'The exact variant shown', d: 'The colour and size in the clip is what gets added, so nobody ends up with the wrong option.' },
  { icon: 'cart', t: 'Your own native cart', d: 'Adding opens the cart your theme actually uses, and updates the drawer and count automatically.' },
];

export function PlayerShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || paused) return;
    const id = setInterval(() => setActive((v) => (v + 1) % PLAYER_POINTS.length), 3600);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="player">
      <ul className="player__list" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {PLAYER_POINTS.map((p, i) => (
          <li key={p.t}>
            <button
              type="button"
              className={`player__item ${i === active ? 'is-on' : ''}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span className="player__icon"><Icon name={p.icon} size={20} /></span>
              <span className="player__body">
                <strong>{p.t}</strong>
                <em>{p.d}</em>
              </span>
              <span className="player__mark" aria-hidden="true">
                <Icon name="check" size={13} strokeWidth={2.6} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="player__media">
        <ShoppableDemo />
      </div>
    </div>
  );
}
