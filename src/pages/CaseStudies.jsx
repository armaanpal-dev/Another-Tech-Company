import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Stat, CtaBand } from '../components/Shared';
import './pages.css';

const cases = [
  { cat: 'Fashion', brand: 'Bloom&Co', headline: 'How Bloom&Co lifted add-to-cart 41% with shoppable Reels', body: 'The womenswear label embedded creator Reels on product pages and saw engagement and conversion climb in the first month.', s1: ['41%', 'Add-to-cart lift'], s2: ['2.6×', 'Time on page'] },
  { cat: 'Beauty', brand: 'Velour', headline: 'Velour turned tutorials into a 23% AOV increase', body: 'By tagging full routines inside how-to videos, Velour nudged shoppers toward multi-product bundles.', s1: ['23%', 'Higher AOV'], s2: ['+34%', 'Repeat purchase'] },
  { cat: 'Home', brand: 'Maison', headline: 'Maison cut bounce rate with a homepage story bar', body: 'A swipeable story bar gave first-time visitors an instant feel for the brand and kept them browsing.', s1: ['-28%', 'Bounce rate'], s2: ['3.1×', 'Pages per session'] },
  { cat: 'Fitness', brand: 'Kindred', headline: 'Kindred scaled UGC to 120 shoppable videos hands-free', body: 'Auto-sync pulled fresh customer clips daily, keeping the storefront alive without manual work.', s1: ['120', 'Videos auto-synced'], s2: ['+19%', 'Conversion rate'] },
];

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case studies"
        description="See how Shopify brands use Reelvana shoppable video to lift conversion, AOV, and engagement. Real results from fashion, beauty, home, and fitness merchants."
        path="/case-studies"
      />

      <section className="phero dark-bg">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow eyebrow--light">Case studies</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Results, not just views</Reveal>
          <Reveal><p className="lead">Brands across every category use Reelvana to turn attention into orders. Here's what that looks like in numbers.</p></Reveal>
        </div>
      </section>

      <section className="section--tight dark-bg" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-3">
            <Reveal><Stat value="38%" label="Average conversion lift" /></Reveal>
            <Reveal delay={80}><Stat value="$4.2M" label="Attributed revenue tracked" /></Reveal>
            <Reveal delay={160}><Stat value="1,280+" label="Stores using Reelvana" /></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cs-grid">
            {cases.map((c, i) => (
              <Reveal key={c.brand} delay={i * 70}>
                <article className="cs-card">
                  <div className="cs-card__top">
                    <span className="cs-card__cat">{c.cat} · {c.brand}</span>
                    <h3 className="h-md">{c.headline}</h3>
                    <p>{c.body}</p>
                  </div>
                  <div className="cs-card__band">
                    <Stat value={c.s1[0]} label={c.s1[1]} />
                    <Stat value={c.s2[0]} label={c.s2[1]} />
                  </div>
                  <Link to="/contact" className="cs-card__link">Get results like these →</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Your store could be next" sub="Install Reelvana free and start measuring video-driven revenue today." />
    </>
  );
}
