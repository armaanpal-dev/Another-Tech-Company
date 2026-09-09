import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Faq, CtaBand } from '../components/Shared';
import './pages.css';

const groups = [
  {
    title: 'AnotherDev Shoppable Video',
    items: [
      ['What does Shoppable Video do?', 'It adds shoppable video reels to your Shopify storefront so shoppers can watch a product in action and add it to cart without leaving the page.'],
      ['Where can I show the videos?', 'On your home page, collection pages, product detail sections, and other pages, depending on your plan. Product-page and smart-tag placements unlock on higher plans.'],
      ['Do videos slow down my store?', 'No. Videos lazy-load only when in view, scripts are deferred, and the storefront code is tiny (~12 KB gzipped) with no layout shift. For best results keep individual video files light (MP4, 9:16, under about 15 MB).'],
      ['Can shoppers add to cart from the video?', 'Yes. Each reel has an Add to Cart button that adds the exact variant you linked, using your theme’s native cart.'],
      ['Can I show different videos on different pages?', 'Yes. Assign specific videos per page or per collection, and on Pro you can show a different floating video on specific pages or products.'],
      ['Can I use videos from Instagram or TikTok?', 'Upload the video file to your Shopify Files and select it in the app.'],
      ['What analytics do I get for video?', 'Impressions, plays, clicks, and add-to-cart events per reel, plus play rate, click-through rate, and conversion, with advanced charts on Pro.'],
      ['What is the Floating Reel?', 'The Floating Reel pins a small looping video to the corner of your storefront that follows shoppers as they browse. One tap opens it full-screen with sound and a Shop now button to the product. You choose the corner, control which pages it shows on by URL path (with wildcards like /collections/*), and shoppers can dismiss it anytime. It is included on the Growth and Pro plans.'],
    ],
  },
  {
    title: 'AnotherDev Search and Filters',
    items: [
      ['What does Search and Filters do?', 'It replaces your theme’s built-in product search with an index the app owns, adding instant search with typo tolerance and synonyms, and faceted filters on search and collection pages.'],
      ['What does it search?', 'Titles, descriptions, vendors, product types, tags, SKUs, variant names, options, and metafields, all from an index the app keeps in sync with your catalog.'],
      ['How many products can it index?', 'The Free plan indexes up to 100 products, Growth up to 5,000, and Pro and Custom are unlimited.'],
      ['What filter layouts are available?', 'Four genuinely different layouts: a sidebar column, a toolbar of dropdown buttons, a drawer behind a Filters button, and always-open facets stacked above the grid. Both the search results page and collection pages support all four.'],
      ['Can I control which products rank first?', 'Yes. Merchandising lets you pin, boost, bury or hide products per search term or collection, and redirect a term to any page.'],
      ['Does it handle typos and synonyms?', 'Yes. Fuzzy matching forgives misspellings, and you can define synonyms so a search for “tee” still finds your “t-shirt”.'],
      ['Will it add filters to my collection pages?', 'Yes. Filters appear on collection pages as well as search results, using either your theme’s product cards or the app’s own grid, depending on your setting.'],
      ['Does add to cart work with my cart app?', 'Yes. Adding from the results grid uses the same engine as Shoppable Video, so GoKwik, Shiprocket and other cart apps keep working.'],
      ['What search analytics do I get?', 'Top searches, zero-result searches, click-through, add-to-cart, and optional purchase attribution, so you can see what shoppers are looking for and what they cannot find.'],
      ['What is semantic search?', 'An optional Pro feature that matches by meaning as well as keywords, so a related product can surface even when the exact word is not in its title.'],
      ['Does it store shopper data?', 'No. It stores no customer identifiers, only a random browser token that is removed after 24 hours. See the Search and Filters privacy policy for details.'],
      ['How is Search and Filters priced?', 'Free, Growth $21/mo, Pro $49/mo, and Custom $70/mo, billed through Shopify. Higher tiers add more indexed products, longer analytics history, merchandising, and semantic search.'],
    ],
  },
  {
    title: 'Billing, privacy and general',
    items: [
      ['Does it work with my theme?', 'Yes. Both apps support Dawn and Online Store 2.0 themes, premium themes like Symmetry and the Clean Canvas family, and older vintage themes. Grid and cart detection is structural, not a fixed list of theme names.'],
      ['Do I need to edit my theme code?', 'No. Both apps install as app blocks you add in the theme editor, and removing an app leaves your theme exactly as it was.'],
      ['I sell in multiple currencies. Will prices be right?', 'Yes. Prices are fetched live in the shopper’s currency, so what a card shows always matches what the cart charges.'],
      ['How am I billed?', 'Through Shopify Billing, so charges appear on your Shopify invoice. Both apps are free to start; upgrade anytime, cancel anytime.'],
      ['What happens if I downgrade?', 'Anything beyond your new plan’s limits is hidden automatically. Nothing is deleted, so upgrading again brings it all back.'],
      ['Do you collect my customers’ personal data?', 'No. Storefront analytics are anonymous, keyed to a random session token only. See each app’s privacy policy for the specifics.'],
      ['Do you offer custom or enterprise setups?', 'Yes. Both apps have a Custom plan, and AnotherDev also takes on web development projects. Contact us to talk it through.'],
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <Seo
        title="FAQ"
        description="Answers about AnotherDev’s Shopify apps, Shoppable Video and Search and Filters: placements, add to cart, filter layouts, search, themes, speed, analytics, privacy, and billing."
        path="/faq"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Frequently asked questions</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Everything about our Shopify apps. Still stuck? <Link to="/support" className="post__link">Contact support</Link>.</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section--tight">
          <div className="container">
            {groups.map((g) => (
              <div className="faqgroup" key={g.title}>
                <Reveal as="h2" className="h-md faqgroup__title">{g.title}</Reveal>
                <div className="faq">
                  {g.items.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
