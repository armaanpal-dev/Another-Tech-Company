import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import './ScrollStory.css';

/* Sticky scroll story.
   The left panel stays pinned while the steps on the right scroll past, and it
   swaps to match whichever step is currently in view. GSAP ScrollTrigger only
   detects the active step; the pinning itself is CSS position:sticky, so it is
   robust on desktop (pinned left) and mobile (pinned top). */
export default function ScrollStory({ eyebrow, title, steps }) {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    let cancelled = false;
    const triggers = [];

    import('gsap').then(async ({ gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        triggers.push(ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => { if (self.isActive) setActive(i); },
        }));
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      triggers.forEach((t) => t && t.kill());
    };
  }, [steps.length]);

  const cur = steps[active] || steps[0];

  return (
    <section className="section story">
      <div className="container story__grid">
        <div className="story__aside">
          <div className="story__panel">
            <div className="story__blob" aria-hidden="true" />
            <div className="story__panelinner" key={active}>
              <span className="story__icon"><Icon name={cur.icon} size={30} /></span>
              <span className="story__num">
                {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
              </span>
              <h3 className="h-md">{cur.t}</h3>
              <p>{cur.d}</p>
            </div>
            <div className="story__dots" aria-hidden="true">
              {steps.map((s, i) => <span key={s.t} className={`story__dot ${i === active ? 'on' : ''}`} />)}
            </div>
          </div>
        </div>

        <div className="story__steps">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="h-lg mt-s story__title">{title}</h2>}
          {steps.map((s, i) => (
            <div
              key={s.t}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`story__step ${i === active ? 'is-active' : ''}`}
            >
              <span className="story__stepicon"><Icon name={s.icon} size={22} /></span>
              <h3 className="h-md">{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
