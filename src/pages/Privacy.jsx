import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy policy" description="How Reelvana collects, uses, and protects data for merchants and their shoppers." path="/privacy" />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">Privacy policy</Reveal>
          <Reveal><p className="lead">Last updated: June 1, 2026</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container prose">
          <Reveal>
            <p>This Privacy Policy explains how Reelvana (“we”, “us”) handles information when you use our Shopify app and website. This is a sample template and should be reviewed by your legal counsel before publishing.</p>

            <h2>Information we collect</h2>
            <ul>
              <li>Store and account details provided through Shopify OAuth (store name, email, plan).</li>
              <li>Product catalog data needed to tag and display products in videos.</li>
              <li>Aggregated, anonymized engagement metrics (plays, clicks, add-to-carts).</li>
              <li>Support communications you send to us.</li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>To provide, maintain, and improve the Reelvana app and widgets.</li>
              <li>To generate analytics and revenue attribution for your dashboard.</li>
              <li>To respond to support requests and send service updates.</li>
            </ul>

            <h2>Data sharing</h2>
            <p>We do not sell personal data. We share data only with subprocessors required to run the service (e.g., hosting and CDN providers) under appropriate agreements.</p>

            <h2>Data retention</h2>
            <p>We retain account data while your subscription is active. On uninstall, store-identifiable data is deleted within 30 days, in line with Shopify’s requirements.</p>

            <h2>Your rights</h2>
            <p>You may request access to, correction of, or deletion of your data by emailing privacy@reelvana.app.</p>

            <h2>Contact</h2>
            <p>Questions about this policy? Email privacy@reelvana.app.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
