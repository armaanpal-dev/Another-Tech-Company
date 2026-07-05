import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

export default function Terms() {
  return (
    <>
      <Seo title="Terms of service" description="The terms governing your use of the Reelvana shoppable video app and website." path="/terms" />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">Terms of service</Reveal>
          <Reveal><p className="lead">Last updated: June 1, 2026</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container prose">
          <Reveal>
            <p>These Terms govern your access to and use of Reelvana. This is a sample template and should be reviewed by your legal counsel before publishing.</p>

            <h2>1. Acceptance</h2>
            <p>By installing or using Reelvana, you agree to these Terms and to Shopify’s own terms that apply to apps in the Shopify ecosystem.</p>

            <h2>2. Subscriptions & billing</h2>
            <p>Paid plans are billed monthly through Shopify’s billing system. Free trials convert to paid plans unless cancelled before the trial ends. You can cancel anytime from the app.</p>

            <h2>3. Acceptable use</h2>
            <ul>
              <li>You will only upload content you have the rights to use.</li>
              <li>You will not use Reelvana for unlawful, infringing, or harmful content.</li>
              <li>You will not attempt to disrupt or reverse-engineer the service.</li>
            </ul>

            <h2>4. Content ownership</h2>
            <p>You retain ownership of videos and assets you upload. You grant us a limited license to host and display that content for the purpose of operating the service.</p>

            <h2>5. Service availability</h2>
            <p>We aim for high availability but do not guarantee uninterrupted service. Features may change as we improve the product.</p>

            <h2>6. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Reelvana is not liable for indirect or consequential damages arising from use of the service.</p>

            <h2>7. Termination</h2>
            <p>You may stop using Reelvana at any time by uninstalling the app. We may suspend accounts that violate these Terms.</p>

            <h2>8. Contact</h2>
            <p>Questions about these Terms? Email legal@reelvana.app.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
