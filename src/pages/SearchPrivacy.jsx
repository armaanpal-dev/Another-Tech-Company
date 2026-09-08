import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import SearchPolicyBody, { SEARCH_LAST_UPDATED } from './policies/SearchPolicy';
import './pages.css';

// Standalone per-app privacy policy for the Shopify App Store listing.
// Intentionally unlinked from the site and marked noindex; reachable by URL only.
export default function SearchPrivacy() {
  return (
    <>
      <Seo
        title="AnotherDev - Search and Filters Privacy Policy"
        description="Privacy policy for the AnotherDev - Search and Filters Shopify app."
        path="/privacy/search"
        noindex
      />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">AnotherDev - Search and Filters: Privacy policy</Reveal>
          <Reveal><p className="lead">Last updated: {SEARCH_LAST_UPDATED}</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section--tight">
          <div className="container prose">
            <Reveal>
              <SearchPolicyBody />
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
