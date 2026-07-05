# Another Shoppable Video — Shoppable Video for Shopify (Marketing Website)

A complete, production-ready React marketing site for a shoppable video Shopify app,
modeled on the structure of sites like ReelUp. Built with **Vite + React + React Router**,
with first-class **SEO** and **CRO** baked in.

## Pages included
- `/` Home (hero, stats, features, how-it-works, testimonial, CTA)
- `/features` Features (alternating feature rows, integrations)
- `/how-it-works` 4-step setup with HowTo schema
- `/pricing` 3-tier pricing + FAQ with FAQPage schema
- `/case-studies` Results-driven case study cards
- `/blog` Blog listing grid
- `/about` Brand story + values
- `/contact` Working client-side contact form
- `/privacy` Privacy policy (template)
- `/terms` Terms of service (template)
- `*` 404 page

## SEO features
- Per-page <title>, meta description, canonical, Open Graph & Twitter cards via react-helmet-async
- JSON-LD structured data: SoftwareApplication (home), HowTo (how-it-works), FAQPage (pricing), Blog
- robots.txt and sitemap.xml in /public
- Semantic HTML, single H1 per page, descriptive alt text
- SPA routing fallbacks for Netlify (_redirects) and Vercel (vercel.json)

## CRO features
- Clear primary CTA ("Add to Shopify — free") repeated in nav, hero, sections, and footer
- Social proof: ratings, logo wall, stats, testimonials, case-study numbers
- Friction-reducing copy ("no code", "2 minutes", "free plan")
- Sticky nav, reveal-on-scroll, hover micro-interactions
- Most-popular plan highlighted; risk reversal ("cancel anytime", "14-day trial")

## Accessibility
- Skip-to-content link, visible focus rings, keyboard-operable menu & FAQ
- prefers-reduced-motion respected, responsive down to mobile

## Run locally
    npm install
    npm run dev      # http://localhost:5173

## Build & preview
    npm run build    # outputs to /dist
    npm run preview

## Deploy
Deploy the dist/ folder (or connect the repo) to Netlify, Vercel, or any static host.
SPA rewrites are pre-configured for Netlify and Vercel. Update the base domain in
src/components/Seo.jsx, public/sitemap.xml, and public/robots.txt.

## Customizing
- Brand name / colors / fonts: src/styles/global.css (CSS variables at the top)
- Nav links: src/components/Navbar.jsx
- Footer links: src/components/Footer.jsx
- App Store link: replace https://apps.shopify.com placeholders with your listing URL
- Contact form: wire the submit() handler in src/pages/Contact.jsx to your endpoint
  (EmailJS, Formspree, or your backend)

The video previews are pure CSS/SVG (no external assets), so the site is fully self-contained.
