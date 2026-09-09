// Single source of truth for the AnotherDev - Search and Filters privacy policy
// body. Based on the app's data-practices reference: read-only catalog access,
// anonymous storefront search analytics, optional embeddings for semantic and
// visual search, PostgreSQL on Supabase, all three Shopify compliance webhooks.

export const SEARCH_LAST_UPDATED = 'August 15, 2026';

export default function SearchPolicyBody() {
  return (
    <>
      <p>AnotherDev - Search and Filters (the “App”, “we”, “us”, or “our”), provided by AnotherDev, is a search and product-filtering application for merchants using the Shopify platform. This Privacy Policy explains what information we collect, how we use it, and the choices available to you.</p>
      <p>By installing or using the App, you agree to this Privacy Policy.</p>

      <h2>1. Who this policy covers</h2>
      <ul>
        <li><strong>Merchants</strong>: Shopify store owners who install and use the App.</li>
        <li><strong>Store visitors (end customers)</strong>: people who search or filter on a merchant’s storefront where the App is active.</li>
      </ul>

      <h2>2. Information we collect</h2>
      <p><strong>From merchants (via the Shopify Admin API, read-only):</strong></p>
      <ul>
        <li>Catalog data used to build and maintain the search index: product and variant IDs, titles, descriptions, vendors, product types, tags, SKUs, options, images, and metafields, together with your collections.</li>
        <li>Store identity: your <code>.myshopify.com</code> domain and store details returned by Shopify.</li>
        <li>Configuration you create in the App: search and filter settings, facet configuration, synonyms, merchandising rules (pin, boost, bury, hide, and redirects), appearance settings, and your subscription plan.</li>
      </ul>
      <p>The App requests only <strong>read-only</strong> Shopify scopes, and only for the catalog data it needs to run search, filtering, and recommendations. The App <strong>never writes</strong> to your products, collections, theme, or any other store data. It requests <strong>no customer scopes and no order scopes</strong>, and it stores <strong>no customer personal data</strong>.</p>

      <p><strong>From store visitors (end customers):</strong></p>
      <ul>
        <li><strong>Anonymous search analytics only.</strong> When a shopper searches or filters, we record the search terms entered and engagement events such as result clicks and add-to-cart taps, and, only if the merchant enables purchase attribution, conversion events. Each event is stored with a search or event identifier and a timestamp.</li>
        <li>A <strong>randomly generated browser token</strong> is attached to events to group a single session. It is not linked to any personal identity and is removed (nulled) after 24 hours.</li>
        <li>We do <strong>not</strong> collect names, email addresses, physical addresses, IP-based profiles, or payment information from store visitors, and we store no customer identifiers.</li>
      </ul>
      <p><strong>Semantic and visual search (optional):</strong> If the merchant enables semantic (meaning-based) or image-based search, product text and, for image search, an image the shopper submits, are sent to a third-party embeddings provider (Voyage AI or OpenAI, depending on configuration) to generate the vector embeddings used for similarity matching. These features are off by default.</p>
      <p><strong>Cookies &amp; local storage:</strong> The App uses only the anonymous session token described above to group a shopper’s events. We do not use third-party advertising or cross-site tracking cookies.</p>

      <p><strong>From visitors who contact us through this website:</strong></p>
      <ul>
        <li>When you contact us through anotherdev.in, we collect the name, email address, and message you provide, and use them only to respond to your enquiry.</li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To provide and operate the App (build the search index, return search and filter results, power recommendations, and apply your merchandising and settings).</li>
        <li>To generate performance analytics for merchants (top searches, zero-result searches, click-through, add-to-cart, and revenue where enabled).</li>
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
        <li><strong>Supabase</strong>: PostgreSQL database storage (Singapore, ap-southeast-1).</li>
        <li><strong>Voyage AI or OpenAI</strong>: generating vector embeddings, only when the merchant enables semantic or image-based search.</li>
      </ul>
      <p>These providers process data on our behalf under their own security and privacy terms. We do not otherwise sell or rent data. We may disclose information if required by law.</p>

      <h2>6. Data storage &amp; security</h2>
      <ul>
        <li>Data is stored in a hosted PostgreSQL database (Supabase, ap-southeast-1) and transmitted over encrypted connections (HTTPS/TLS).</li>
        <li>Requests from your storefront to the App are verified using Shopify’s signed app-proxy requests (HMAC).</li>
        <li>We restrict access to stored data to what is necessary to operate the App. No method of transmission or storage is 100% secure, but we take reasonable measures to protect your information.</li>
      </ul>

      <h2>7. Data retention &amp; deletion</h2>
      <ul>
        <li>We retain merchant data and the search index while the App is installed. Search-event analytics are retained for up to 180 days by default.</li>
        <li>The anonymous session token attached to storefront events is removed after 24 hours.</li>
        <li>When you <strong>uninstall</strong> the App, we delete your store’s data. In line with Shopify’s requirements, we honor the <code>shop/redact</code> request and erase all remaining data for the store.</li>
        <li>Because we do not store personal data about individual store customers, the <code>customers/data_request</code> and <code>customers/redact</code> privacy webhooks contain no personal data for us to return or delete; we acknowledge them as required.</li>
      </ul>

      <h2>8. Your rights</h2>
      <p>Depending on your location (e.g., GDPR, UK GDPR, CCPA/CPRA), you may have the right to access, correct, delete, or restrict processing of your personal data, and to data portability. Merchants can exercise most of these by uninstalling the App (which triggers deletion) or by contacting us. To make a request, use the contact form at <a href="https://anotherdev.in/support">anotherdev.in/support</a>.</p>
      <p>Store visitors who wish to inquire about data should contact the merchant whose store they visited; the merchant can relay the request to us.</p>

      <h2>9. International transfers</h2>
      <p>Your information may be processed in countries other than your own (including Singapore, where our database is hosted, and wherever our other subprocessors operate). Where required, we rely on appropriate safeguards for such transfers.</p>

      <h2>10. Children’s privacy</h2>
      <p>The App is not directed to children and does not knowingly collect personal information from children.</p>

      <h2>11. Changes to this policy</h2>
      <p>We may update this Privacy Policy from time to time. We will post the updated version with a new “Last updated” date.</p>

      <h2>12. Contact us</h2>
      <p>
        AnotherDev<br />
        Contact us: <a href="https://anotherdev.in/support">anotherdev.in/support</a><br />
        Website: <a href="https://anotherdev.in" target="_blank" rel="noreferrer">https://anotherdev.in</a>
      </p>
    </>
  );
}
