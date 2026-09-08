import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import ShoppableVideoPolicyBody, { SV_LAST_UPDATED } from './policies/ShoppableVideoPolicy';
import './pages.css';

// Standalone per-app privacy policy for the Shopify App Store listing.
// Intentionally unlinked from the site and marked noindex; reachable by URL only.
export default function ShoppableVideoPrivacy() {
  return (
    <>
      <Seo
        title="AnotherDev - Shoppable Video Privacy Policy"
        description="Privacy policy for the AnotherDev - Shoppable Video Shopify app."
        path="/privacy/shoppable-video"
        noindex
      />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">AnotherDev - Shoppable Video: Privacy policy</Reveal>
          <Reveal><p className="lead">Last updated: {SV_LAST_UPDATED}</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section--tight">
          <div className="container prose">
            <Reveal>
              <ShoppableVideoPolicyBody />
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
