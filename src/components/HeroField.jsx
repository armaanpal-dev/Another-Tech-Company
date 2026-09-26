import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Interactive hero dot field.
   Renders a grid of dots on a canvas behind the hero content. Dots scatter
   away from the pointer or finger and spring slowly back to their home
   position. Works with mouse and touch. Falls back to the static CSS dots
   when the visitor prefers reduced motion. The loop pauses itself once the
   field settles, so it costs nothing while idle. */
export default function HeroField() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const heroes = Array.from(document.querySelectorAll('.hero'));
    if (!heroes.length) return undefined;

    const teardowns = heroes.map(setupField);
    return () => teardowns.forEach((fn) => fn && fn());
  }, [pathname]);

  return null;
}

function setupField(hero) {
  const canvas = document.createElement('canvas');
  canvas.className = 'hero__dots';
  canvas.setAttribute('aria-hidden', 'true');
  hero.appendChild(canvas);
  hero.classList.add('is-dots');

  const ctx = canvas.getContext('2d');
  const pointer = { x: -9999, y: -9999, active: false };
  let dots = [];
  let W = 0;
  let H = 0;
  let raf = 0;
  let running = false;

  // Physics. A soft push away from the pointer, a slow spring home.
  const R = 96;          // pointer influence radius (css px)
  const R2 = R * R;
  const PUSH = 5.2;      // scatter strength
  const SPRING = 0.032;  // return speed (small = slow)
  const FRICTION = 0.9;

  const gap = () => (window.matchMedia('(max-width: 780px)').matches ? 28 : 32);

  function build() {
    const rect = hero.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const g = gap();
    dots = [];
    for (let y = g / 2; y < H; y += g) {
      for (let x = g / 2; x < W; x += g) {
        dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0 });
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    let moving = false;

    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];

      if (pointer.active) {
        const dx = d.x - pointer.x;
        const dy = d.y - pointer.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < R2) {
          const dist = Math.sqrt(dist2) || 0.001;
          const f = (1 - dist / R) * PUSH;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
      }

      d.vx += (d.hx - d.x) * SPRING;
      d.vy += (d.hy - d.y) * SPRING;
      d.vx *= FRICTION;
      d.vy *= FRICTION;
      d.x += d.vx;
      d.y += d.vy;

      const disp = Math.hypot(d.x - d.hx, d.y - d.hy);
      if (disp > 0.05 || Math.abs(d.vx) > 0.05 || Math.abs(d.vy) > 0.05) moving = true;

      const alpha = Math.min(0.18 + disp * 0.03, 0.85);
      let fill;
      if (pointer.active) {
        // Warm the dots toward coral as they near the pointer.
        const pd = Math.hypot(d.x - pointer.x, d.y - pointer.y);
        const t = Math.max(0, 1 - pd / (R * 1.5));
        const r = Math.round(184 + (255 - 184) * t);
        const g = Math.round(169 + (92 - 169) * t);
        const b = Math.round(255 + (122 - 255) * t);
        fill = `rgba(${r},${g},${b},${alpha})`;
      } else {
        fill = `rgba(184,169,255,${alpha})`;
      }

      const rad = 1.3 + Math.min(disp * 0.02, 1.1);
      ctx.beginPath();
      ctx.arc(d.x, d.y, rad, 0, 6.283185);
      ctx.fillStyle = fill;
      ctx.fill();
    }

    if (moving || pointer.active) {
      raf = requestAnimationFrame(frame);
    } else {
      running = false; // settled: stop until the pointer returns
    }
  }

  function start() {
    if (!running) {
      running = true;
      raf = requestAnimationFrame(frame);
    }
  }

  function onMove(e) {
    const rect = hero.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
    start();
  }

  function onLeave() {
    pointer.active = false;
    start();
  }

  // Touch fires pointerup (not pointerleave) when the finger lifts, so the
  // field would otherwise stay scattered. Release it on a touch lift.
  function onUp(e) {
    if (e.pointerType === 'touch') onLeave();
  }

  let resizeT;
  function onResize() {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => { build(); start(); }, 150);
  }

  build();
  frame(); // one static frame so the grid shows before any interaction

  hero.addEventListener('pointermove', onMove);
  hero.addEventListener('pointerdown', onMove);
  hero.addEventListener('pointerleave', onLeave);
  hero.addEventListener('pointercancel', onLeave);
  hero.addEventListener('pointerup', onUp);
  window.addEventListener('resize', onResize);

  return () => {
    cancelAnimationFrame(raf);
    clearTimeout(resizeT);
    hero.removeEventListener('pointermove', onMove);
    hero.removeEventListener('pointerdown', onMove);
    hero.removeEventListener('pointerleave', onLeave);
    hero.removeEventListener('pointercancel', onLeave);
    hero.removeEventListener('pointerup', onUp);
    window.removeEventListener('resize', onResize);
    hero.classList.remove('is-dots');
    canvas.remove();
  };
}
