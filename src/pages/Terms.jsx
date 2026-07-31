import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

export default function Terms() {
  return (
    <>
      <Seo title="Terms of service" description="The terms governing your use of the AnotherDev shoppable video app and website." path="/terms" />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">Terms of service</Reveal>
          <Reveal><p className="lead">Last updated: July 5, 2026</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container prose">
          <Reveal>
            <p>These Terms govern your access to and use of AnotherDev, operated by AnotherDev. This is a starter template and should be reviewed by your legal counsel before publishing.</p>

            <h2>1. Agreement</h2>
            <p>By installing or using AnotherDev (the “App”), you agree to these Terms. If you do not agree, do not use the App.</p>

            <h2>2. The service</h2>
            <p>The App lets Shopify merchants display shoppable video on their storefront and view engagement analytics, subject to the plan you select.</p>

            <h2>3. Accounts &amp; eligibility</h2>
            <p>You must have a Shopify store and comply with Shopify’s terms. You are responsible for the content (videos, product links, text) you add.</p>

            <h2>4. Plans, billing &amp; cancellation</h2>
            <p>Paid plans are billed monthly through Shopify Billing and appear on your Shopify invoice. Taxes may apply. You can change or cancel your plan at any time; downgrades take effect per the plan’s limits. Custom plans are arranged separately.</p>

            <h2>5. Acceptable use</h2>
            <p>You will not upload unlawful, infringing, or harmful content, or misuse the App or attempt to circumvent plan limits or security.</p>

            <h2>6. Content &amp; IP</h2>
            <p>You retain ownership of your content and grant us a limited license to host and display it to operate the App. The App, its code, and branding remain our property.</p>

            <h2>7. Third parties</h2>
            <p>The App relies on Shopify and other providers; we are not responsible for their services or downtime.</p>

            <h2>8. Disclaimers</h2>
            <p>The App is provided “as is”, without warranties. We do not guarantee specific sales or conversion results.</p>

            <h2>9. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, our liability is limited to the amount you paid for the App in the 3 months before the claim.</p>

            <h2>10. Termination</h2>
            <p>We may suspend or terminate access for breach. On uninstall, your data is deleted as described in the Privacy Policy.</p>

            <h2>11. Changes</h2>
            <p>We may update these Terms; continued use means acceptance.</p>

            <h2>12. Contact</h2>
            <p>
              AnotherDev<br />
              Email: <a href="mailto:armaanpal1996@gmail.com">armaanpal1996@gmail.com</a><br />
              Website: <a href="https://anotherdev.in" target="_blank" rel="noreferrer">https://anotherdev.in</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
