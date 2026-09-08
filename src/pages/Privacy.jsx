import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import ShoppableVideoPolicyBody, { SV_LAST_UPDATED } from './policies/ShoppableVideoPolicy';
import './pages.css';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy policy" description="How AnotherDev collects, uses, and protects data across its Shopify apps, for merchants and their store visitors." path="/privacy" />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">Privacy policy</Reveal>
          <Reveal><p className="lead">Last updated: {SV_LAST_UPDATED}</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container prose">
          <Reveal>
            <div className="policy-notice">
              <p><strong>AnotherDev operates more than one Shopify app, and each app has its own privacy policy.</strong> This page is the privacy policy for <strong>AnotherDev - Shoppable Video</strong> (also available as a <Link to="/privacy/shoppable-video">standalone page</Link>). Privacy policies for our other apps are published separately.</p>
            </div>
            <ShoppableVideoPolicyBody />
          </Reveal>
        </div>
      </section>
    </>
  );
}
