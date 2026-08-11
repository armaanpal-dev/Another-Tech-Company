# AnotherDev Website: Changes and Rationale

This document records the changes made to the marketing site (anotherdev.in) and
why each was made. It is grouped by theme rather than by date. The guiding rules
throughout were: describe only what the app actually does (no invented stats or
promises), keep the branding consistent, and make the site fast and easy for
search engines and AI assistants to read.

Note on style: the site and this document avoid em dashes on purpose.

---

## 1. Accuracy and copy cleanup

**What changed**
- Removed all fabricated social proof: the "4.9/5 from 1,280 merchants" rating,
  invented stats (for example "+38% conversion", "2.4x time on page"), the fake
  testimonial (Priya Nair), the fake brand logo row, and the `aggregateRating`
  in structured data.
- Deleted the Case Studies page, which was built entirely on invented brand
  results.
- Corrected feature claims to the real product: import is from Shopify Files or a
  hosted video URL (not "import from TikTok / Instagram / YouTube"); the app does
  "add to cart inside the video" (not "in-video checkout"); dropped features the
  app does not have (A/B testing, headless / Hydrogen, auto-sync UGC feeds,
  multi-store management, and third-party "integrations" like Klaviyo / Judge.me).

**Why**
- The product's own copy rules forbid invented statistics, testimonials, and
  promises. Fabricated claims fail Shopify App Store review and mislead merchants.
- Feature claims must match the app exactly, or the listing and the site
  contradict the product.

---

## 2. Branding and naming

**What changed (in order, as decisions were made)**
1. Standardized the product name to "Another Shoppable Video" (replacing the older
   "Reelvana" placeholder).
2. Later changed the public name to "AnotherDev - Shoppable Video" (full app name)
   with "AnotherDev" as the short brand, used in the logo wordmark, nav, footer,
   and body copy, while the full name is used in page titles, legal text, and
   structured data.
3. Recreated the app icon as a scalable SVG (dark navy rounded square with a
   pink-to-purple gradient "A") and wired it in as the favicon, apple-touch-icon,
   and the nav and footer logo.
4. Fixed rename artifacts where the app name and company name were both
   "AnotherDev" and produced awkward phrasing (for example "AnotherDev is built by
   AnotherDev"), by using the full app name for the app and "AnotherDev" for the
   company.

**Why**
- The reference documents flagged a naming mismatch and asked for one public name
  everywhere. The final decision (per the build blueprint) was "AnotherDev -
  Shoppable Video".
- A single, consistent brand across the site, the app listing, and structured data
  helps both users and search or AI systems recognize the entity.

---

## 3. Pricing

**What changed**
- Rebuilt the plan table to four tiers: Free ($0), Growth ($21/mo), Pro ($49/mo),
  and Custom (contact). Replaced the old Free / Growth / Plus set and its
  incorrect prices.
- Aligned every plan's features with the product docs (video counts of 4 / 21 /
  49, placements per tier, Floating Reel on Growth and above, Smart tag matching
  and page galleries on Pro).
- Removed all "watermark" and "branding removed" claims, because the app does not
  add branding on Free or Growth, so "branding removed" implied a watermark that
  does not exist.
- Added risk-reversal microcopy ("free plan, no credit card, theme untouched").

**Why**
- Prices on the site must match the Shopify Managed Pricing plans exactly, or app
  review flags the mismatch.
- Claiming a watermark that is not there is inaccurate.

---

## 4. Site structure (per the build blueprint)

**What changed**
- Rebuilt the Home page into the full section set: hero, "what it is", an
  eight-card feature grid, a five-card Placements section, a Compatibility band,
  a three-step "how it works", a pricing preview, an FAQ teaser, and a final CTA.
- Added a dedicated Compatibility page (themes, GoKwik and Shiprocket carts,
  Shopify Markets currency, no theme code edits), which is the product's strongest
  and most honest differentiator.
- Added a dedicated FAQ page with an accordion and `FAQPage` structured data.
- Renamed the Contact route to `/support` (the App Store expects a support route),
  kept `/contact` working as a redirect, and added a "Request a custom feature"
  topic to feed the Custom / Enterprise tier.
- Restructured the top navigation to Features, Pricing, How it works, FAQ, Support.
- Restructured the footer into four columns (Product, Company, Legal, Get started
  with the support email) and added the required disclaimer line: "Not affiliated
  with or endorsed by Shopify."
- Wrote seven real blog posts (guides on shoppable video, placements, add to cart,
  speed, UGC, and choosing an app), each on its own route with `BlogPosting`
  structured data.

**Why**
- The blueprint defines the exact pages and layout the site needs, including the
  App Store required Support, Privacy, and Terms routes.
- Genuine, useful content (Compatibility, FAQ, blog) supports SEO and answers the
  questions merchants actually ask.

---

## 5. Legal pages

**What changed**
- Published the full Privacy Policy: the exact Shopify scopes requested
  (`read_products`, `read_files`), anonymous storefront analytics with a
  `localStorage` de-duplication ID, subprocessors (Shopify, Railway, Supabase,
  Resend, and EmailJS for website contact submissions), and the mandatory Shopify
  privacy webhooks (`shop/redact`, `customers/data_request`, `customers/redact`).
- Added a section covering data collected through the website contact form, since
  the form now sends real submissions.
- Published the Terms of Service starter.

**Why**
- A live Privacy Policy URL is mandatory for the Shopify App Store listing.
- The policy must reflect exactly what data is collected, including the new
  contact form flow.

---

## 6. Compliance and honesty guardrails

**What changed**
- Changed the footer badge from "Built for Shopify" to "Made for Shopify stores".
- Added the footer disclaimer "Not affiliated with or endorsed by Shopify."
- Deliberately did not add `AggregateRating` or `Review` structured data, and did
  not put the word "best" into schema as a self-claim.

**Why**
- "Built for Shopify" is a specific Shopify program designation; claiming it
  without being accepted implies endorsement and can trigger app review issues.
- Fabricated ratings or self-declared "best" claims risk Google manual actions and
  break the product's copy rules. Rankings and recommendations are earned through
  real reviews, links, and usage, not self-assertion.

---

## 7. Contact form (EmailJS)

**What changed**
- Wired the Support form to EmailJS so submissions are delivered by email.
- Two templates are used: a notification to the owner with the submission details,
  and a confirmation to the person who submitted.
- Added a hidden honeypot field and email validation to reduce spam and errors.
- Only the EmailJS public key and service ID are in the client code (safe to
  expose); the private key is intentionally not used in the browser.

**Why**
- The form previously discarded submissions silently. It now reaches the inbox.
- The private key is server-side only; putting it in a static site would leak it.

---

## 8. SEO and structured data

**What changed**
- Added per-route prerendering: a small SSR entry plus a build step renders every
  route to static HTML, so each page ships with its own title, meta description,
  canonical URL, and JSON-LD, even without JavaScript. The client hydrates the
  prerendered markup, and a `noscript` fallback reveals content when JS is off.
- Structured data now includes Organization and WebSite (site-wide), a rich
  SoftwareApplication (with description, `featureList`, `keywords`, all three
  Offers, and `installUrl` / `sameAs` pointing to the App Store listing), FAQPage,
  HowTo, Blog and BlogPosting, and a BreadcrumbList generated automatically on
  every non-home page.
- Fixed a broken Open Graph image: the site referenced `og-image.png`, which did
  not exist and returned a 404 on every share. Created a 1200x630 branded
  `og-image.svg`.
- Expanded `robots.txt` to explicitly welcome major search and AI crawlers, and
  wrote an `llms.txt` machine-readable summary that maps common search intents
  (shoppable video app, reel app, UGC video app, Instagram or TikTok video for
  Shopify) to honest positioning.
- Improved the sitemap with `lastmod` and `changefreq`, and set unique, keyword-
  aware titles and descriptions per page.

**Why**
- The site is a client-rendered single page app. Without prerendering, crawlers and
  AI systems that do not run JavaScript saw an empty shell with identical metadata
  on every route. Prerendering gives them real, per-page content.
- Structured data makes the site eligible for rich results and helps search and AI
  understand what the app is and which queries it fits.

---

## 9. Conversion (CRO)

**What changed**
- Added a sticky mobile call-to-action bar.
- Added risk-reversal microcopy on pricing.
- Added the Compatibility story prominently on Home and as its own page.
- Reduced contact form friction (optional fields marked, clear validation, and a
  short reassurance line).

**Why**
- These are standard, low-risk ways to make it easier for a visitor to install and
  to trust the app, without making any unverifiable claims.

---

## 10. Hosting and domain

**What changed (configuration, done in Vercel, not in code)**
- Set the apex `anotherdev.in` as the primary domain so it serves directly with a
  200 response, and set `www.anotherdev.in` to redirect (308) to the apex.
- Centralized the App Store listing URL and support email in one config file, and
  wired the real listing URL (`apps.shopify.com/another-shoppable-video-app`) into
  every call-to-action, with the autocomplete tracking parameters stripped.
- Added `cleanUrls`, a `/contact` to `/support` redirect, and long cache headers
  for static assets in `vercel.json`.

**Why**
- An SEO or AIO tool reported "no meta description" because it fetched the apex,
  which used to return only a redirect stub with no HTML head. Serving the apex
  directly (200) fixes this; the meta descriptions were always present on the
  actual pages.
- Every canonical URL, the sitemap, and the structured data use the apex host, so
  the apex must be the single serving host to keep everything consistent.
- Centralizing the App Store URL means future changes are a single edit.

---

## Verification performed

- `npm run build` completes and prerenders 18 static pages.
- `npm run lint` passes with no errors.
- No em dashes remain in the source, public files, or `index.html`.
- Every page has exactly one unique title and meta description in the built HTML.
- Live checks confirmed the apex serves 200 with the meta description, `www`
  redirects to the apex, and all hosts declare the apex as canonical.

---

## Still outstanding (owner actions, not code)

- Provide a raster Open Graph image (1200x630 PNG or JPG). The current file is SVG,
  which some social platforms do not render in link previews.
- Add analytics and Search Console (for example GA4 or Plausible) so changes can be
  measured. None is installed yet.
- Test the Support form end to end and confirm both emails arrive.
- Gather real Shopify App Store reviews. Reviews, backlinks, and usage are what
  actually drive "best app" rankings and AI recommendations; no on-site change can
  substitute for them.
