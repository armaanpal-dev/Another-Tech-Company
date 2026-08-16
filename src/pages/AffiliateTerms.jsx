import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

// Unlisted page. It is intentionally not linked from the nav, footer, or sitemap,
// and is marked noindex. It is reachable only by its direct URL, for sharing with
// affiliates.
const terms = [
  'Commission is earned only on paid installs and active subscriptions referred through your unique link. Commission is never paid for reviews, ratings, or testimonials, and must never be offered, requested, or implied as a condition for a merchant leaving a review.',
  'You must not use fake, misleading, or duplicate accounts to generate referrals, and must not use bots, cookie-stuffing, or other fraudulent traffic methods.',
  'When promoting AnotherDev - Shoppable Video, you must clearly disclose that you receive compensation for referrals, in line with FTC endorsement guidelines and any applicable local advertising laws.',
  'You must not make false, exaggerated, or unverifiable claims about the app (for example, fabricated merchant counts, conversion percentages, or guarantees) in your marketing.',
  'You must not promote the app through spam, unsolicited messaging, deceptive links, or on coupon or incentivized-click platforms.',
  'Referrals must be genuine. A merchant you refer cannot be a store you own or control.',
  'We reserve the right to withhold commission or terminate this agreement for any breach of these terms, including any activity that violates the Shopify Partner Program Agreement.',
];

export default function AffiliateTerms() {
  return (
    <>
      <Seo
        title="Affiliate Program Terms"
        description="Affiliate Program Terms for AnotherDev - Shoppable Video."
        path="/affiliate-terms"
        noindex
      />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">Affiliate Program Terms</Reveal>
          <Reveal><p className="lead">AnotherDev - Shoppable Video</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container prose">
          <Reveal>
            <p>By participating in the AnotherDev - Shoppable Video affiliate program, you agree to the following terms.</p>
            <ol>
              {terms.map((t, i) => <li key={i} style={{ marginBottom: 14 }}>{t}</li>)}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
