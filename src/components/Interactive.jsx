import { useState } from 'react';
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
          <span className={`demo__cart ${bump ? 'is-bump' : ''}`} aria-live="polite">🛒 {cart}</span>

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
   Conversion-funnel visualizer: the events every reel reports, in order.
   No numbers are shown, this illustrates the stages; merchants see their own
   figures in the dashboard.
--------------------------------------------------------------------------- */
const STEPS = [
  { icon: '👁️', t: 'Impression', d: 'The reel is shown to a shopper' },
  { icon: '▶️', t: 'Play', d: 'They start watching' },
  { icon: '👆', t: 'Click', d: 'They tap the product card' },
  { icon: '🛒', t: 'Add to cart', d: 'The exact variant is added' },
  { icon: '📈', t: 'Conversion', d: 'Derived as a rate from the events above' },
];

export function FunnelViz() {
  return (
    <div className="funnel">
      {STEPS.map((s, idx) => (
        <div className="funnel__step" key={s.t} style={{ '--w': `${100 - idx * 14}%` }}>
          <div className="funnel__bar">
            <span className="funnel__icon" aria-hidden="true">{s.icon}</span>
            <span className="funnel__name">{s.t}</span>
          </div>
          <p className="funnel__desc">{s.d}</p>
        </div>
      ))}
      <p className="funnel__note">These are the event types each reel reports in real time. You see your own numbers, play rate, click-through, and conversion, in the dashboard.</p>
    </div>
  );
}
