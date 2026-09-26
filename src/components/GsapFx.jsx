import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* GSAP-powered motion layer.
   GSAP and ScrollTrigger are loaded on demand (dynamic import) so they stay
   out of the initial bundle and never run during server prerender. Every
   effect is skipped when the visitor prefers reduced motion, and all triggers
   and listeners are torn down on route change so nothing leaks between pages. */
export default function GsapFx() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let ctx;
    let cancelled = false;
    const cleanups = [];
    const hoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Parallax on the hero's decorative layers only, never the text.
        document.querySelectorAll('.hero').forEach((hero) => {
          const scrub = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
          const glow = hero.querySelector('.hero__glow');
          const grid = hero.querySelector('.hero__grid-lines');
          if (glow) gsap.to(glow, { yPercent: 26, ease: 'none', scrollTrigger: scrub });
          if (grid) gsap.to(grid, { yPercent: 12, opacity: 0.35, ease: 'none', scrollTrigger: scrub });
        });
      });

      // Pointer-driven 3D tilt on the big cards (hover-capable devices only).
      if (hoverable) {
        gsap.utils.toArray('.appcard, .showcase__card').forEach((card) => {
          gsap.set(card, { transformPerspective: 900 });
          const rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3' });
          const ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3' });
          const onMove = (e) => {
            const r = card.getBoundingClientRect();
            rx((-(e.clientY - r.top) / r.height + 0.5) * 6);
            ry(((e.clientX - r.left) / r.width - 0.5) * 8);
          };
          const onLeave = () => { rx(0); ry(0); };
          card.addEventListener('mousemove', onMove);
          card.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            card.removeEventListener('mousemove', onMove);
            card.removeEventListener('mouseleave', onLeave);
            gsap.set(card, { clearProps: 'transform' });
          });
        });
      }

      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      if (ctx) ctx.revert();
    };
  }, [pathname]);

  return null;
}
