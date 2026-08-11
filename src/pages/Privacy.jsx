import Seo from '../components/Seo';
import { Reveal } from '../components/Shared';
import './pages.css';

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy policy" description="How AnotherDev collects, uses, and protects data for Shopify merchants and their store visitors." path="/privacy" />
      <section className="phero">
        <div className="container phero__inner">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal as="h1" className="h-lg mt-s">Privacy policy</Reveal>
          <Reveal><p className="lead">Last updated: July 5, 2026</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container prose">
          <Reveal>
            <p>AnotherDev - Shoppable Video (the “App”, “we”, “us”, or “our”), provided by AnotherDev, is a shoppable-video application for merchants using the Shopify platform. This Privacy Policy explains what information we collect, how we use it, and the choices available to you.</p>
            <p>By installing or using the App, you agree to this Privacy Policy.</p>

            <h2>1. Who this policy covers</h2>
            <ul>
              <li><strong>Merchants</strong>: Shopify store owners who install and use the App.</li>
              <li><strong>Store visitors (end customers)</strong>: people who browse a merchant’s storefront where the App’s video widgets appear.</li>
            </ul>

            <h2>2. Information we collect</h2>
            <p><strong>From merchants (via the Shopify Admin API, with your permission):</strong></p>
            <ul>
              <li>Store identity: your <code>.myshopify.com</code> domain, store name, and store contact email.</li>
              <li>Product data you choose to use in reels: product and variant IDs, titles, handles, prices, and product images (read-only).</li>
              <li>Your video library metadata (Shopify Files) when you import a video.</li>
              <li>Content and settings you create in the App: reels (video URLs, linked product/variant, ribbon text), placements, styling settings, onboarding status, and your subscription plan.</li>
            </ul>
            <p>We request only the Shopify permission scopes we need: <strong>read access to products</strong> and <strong>read access to files</strong>. We do <strong>not</strong> request access to customers, orders, or payment data.</p>

            <p><strong>From store visitors (end customers):</strong></p>
            <ul>
              <li><strong>Anonymous engagement analytics only.</strong> When the video widget is shown, we record events such as impressions, plays, clicks, and add-to-cart taps, along with a reel identifier and a timestamp.</li>
              <li>A <strong>randomly generated session identifier</strong> is stored in the visitor’s browser <code>localStorage</code> to avoid counting the same view twice. It is not linked to any personal identity.</li>
              <li>We do <strong>not</strong> collect names, email addresses, physical addresses, IP-based profiles, or payment information from store visitors. Adding an item to cart uses Shopify’s native cart on the merchant’s store; we do not process or store cart or checkout data.</li>
            </ul>
            <p><strong>Cookies &amp; local storage:</strong> We use a single first-party <code>localStorage</code> value (the anonymous session ID described above) for analytics de-duplication. We do not use third-party advertising or cross-site tracking cookies.</p>

            <p><strong>From visitors who contact us through this website:</strong></p>
            <ul>
              <li>When you submit the contact form on anotherdev.in, we collect the name, email address, store URL, plan interest, and message you provide.</li>
              <li>We use these details only to respond to your enquiry and provide support. The form is delivered to us by email through EmailJS; we do not use it for advertising.</li>
            </ul>

            <h2>3. How we use information</h2>
            <ul>
              <li>To provide and operate the App (show reels, add products to cart, apply your settings).</li>
              <li>To generate performance analytics for merchants (impressions, plays, clicks, conversions).</li>
              <li>To enforce plan features and limits.</li>
              <li>To provide support and respond to enquiries.</li>
              <li>To maintain security, prevent abuse, and comply with legal obligations.</li>
            </ul>
            <p>We do <strong>not</strong> sell personal information, and we do not use store-visitor data for advertising.</p>

            <h2>4. Legal bases (EEA/UK)</h2>
            <p>Where GDPR applies, we process data to perform our contract with the merchant, for our legitimate interests in operating and improving the App, and to comply with legal obligations.</p>

            <h2>5. How information is shared (subprocessors)</h2>
            <p>We share data only with service providers that help us run the App:</p>
            <ul>
              <li><strong>Shopify</strong>: the platform the App runs on (data flows through Shopify’s APIs and app proxy).</li>
              <li><strong>Railway</strong>: application hosting.</li>
              <li><strong>Supabase</strong>: database storage.</li>
              <li><strong>Resend</strong>: sending support emails, if applicable.</li>
              <li><strong>EmailJS</strong>: delivering contact-form submissions from our website to us by email.</li>
            </ul>
            <p>These providers process data on our behalf under their own security and privacy terms. We do not otherwise sell or rent data. We may disclose information if required by law.</p>

            <h2>6. Data storage &amp; security</h2>
            <ul>
              <li>Data is stored in a hosted PostgreSQL database and transmitted over encrypted connections (HTTPS/TLS).</li>
              <li>Requests from your storefront to the App are verified using Shopify’s signed app-proxy requests.</li>
              <li>We restrict access to stored data to what is necessary to operate the App. No method of transmission or storage is 100% secure, but we take reasonable measures to protect your information.</li>
            </ul>

            <h2>7. Data retention &amp; deletion</h2>
            <ul>
              <li>We retain merchant data while the App is installed.</li>
              <li>When you <strong>uninstall</strong> the App, we delete your store’s data. In line with Shopify’s requirements, we also honor the <code>shop/redact</code> request (typically 48 hours after uninstall) and erase all remaining data for the store.</li>
              <li>Because we do not store personal data about individual store customers, the <code>customers/data_request</code> and <code>customers/redact</code> privacy webhooks contain no personal data for us to return or delete; we acknowledge them as required.</li>
            </ul>

            <h2>8. Your rights</h2>
            <p>Depending on your location (e.g., GDPR, UK GDPR, CCPA/CPRA), you may have the right to access, correct, delete, or restrict processing of your personal data, and to data portability. Merchants can exercise most of these by uninstalling the App (which triggers deletion) or by contacting us. To make a request, email <a href="mailto:armaanpal1996@gmail.com">armaanpal1996@gmail.com</a>.</p>
            <p>Store visitors who wish to inquire about data should contact the merchant whose store they visited; the merchant can relay the request to us.</p>

            <h2>9. International transfers</h2>
            <p>Your information may be processed in countries other than your own (including where our subprocessors operate). Where required, we rely on appropriate safeguards for such transfers.</p>

            <h2>10. Children’s privacy</h2>
            <p>The App is not directed to children and does not knowingly collect personal information from children.</p>

            <h2>11. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. We will post the updated version with a new “Last updated” date.</p>

            <h2>12. Contact us</h2>
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
