import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Faq, CtaBand } from '../components/Shared';
import './pages.css';

const faqs = [
  ['What does AnotherDev do?', 'It adds shoppable video reels to your Shopify storefront so shoppers can watch a product in action and add it to cart without leaving the page.'],
  ['Where can I show the videos?', 'On your home page, collection pages, product detail sections, and other pages, depending on your plan. Product-page and smart-tag placements unlock on higher plans.'],
  ['Do videos slow down my store?', 'No. Videos lazy-load only when in view, scripts are deferred, and the storefront code is tiny (~12 KB gzipped) with no layout shift. For best results keep individual video files light (MP4, 9:16, under about 15 MB).'],
  ['Can shoppers add to cart from the video?', 'Yes. Each reel has an Add to Cart button that adds the exact variant you linked, using your theme native cart.'],
  ['Does it work with my theme?', 'Yes. Dawn and Online Store 2.0 themes, premium themes like Symmetry and the Clean Canvas family, and older vintage themes.'],
  ['I use GoKwik or Shiprocket. Will add to cart still work?', 'Yes. Adding from a video opens your cart app’s own cart, exactly like your theme’s own Add to Cart button.'],
  ['I sell in multiple currencies. Will prices be right?', 'Yes. Prices are fetched live in the shopper’s currency, so the card always matches what the cart charges. Sold-out variants are detected and shown as unavailable.'],
  ['Can I show different videos on different pages?', 'Yes. Assign specific videos per page or per collection, and on Pro you can show a different floating video on specific pages or products.'],
  ['Do I need to edit my theme code?', 'No. It installs as an app block you add in the theme editor, and removing it leaves your theme exactly as it was.'],
  ['Can I use videos from Instagram or TikTok?', 'Upload the video file to your Shopify Files and select it in the app.'],
  ['What happens if I downgrade?', 'Videos and placements beyond your new plan’s limits are hidden from your storefront automatically. Nothing is deleted, so upgrade again and it all returns.'],
  ['How is it billed?', 'Through Shopify Billing, so charges appear on your Shopify invoice. Free to start, upgrade anytime, cancel anytime.'],
  ['What analytics do I get?', 'Impressions, plays, clicks, and add-to-cart events per reel, plus play rate, click-through rate, and conversion, with advanced charts on Pro.'],
  ['Do you collect my customers personal data?', 'No. Storefront analytics are anonymous (a random session ID for de-duplication only). See the Privacy policy for details.'],
  ['Do you offer custom or enterprise setups?', 'Yes. The Custom plan includes unlimited reels, custom layouts, and features built for your store. Contact us to discuss it.'],
  ['What is the Floating Reel?', 'The Floating Reel pins a small looping video to the corner of your storefront that follows shoppers as they browse. One tap opens it full-screen with sound and a Shop now button to the product. You choose the corner, control which pages it shows on by URL path (with wildcards like /collections/*), and shoppers can dismiss it anytime. It is included on the Growth and Pro plans.'],
];

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to common questions about AnotherDev: placements, add to cart, themes, speed, analytics, privacy, billing, and custom setups for Shopify."
        path="/faq"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Frequently asked questions</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Everything you need to know about adding shoppable video to your Shopify store. Still stuck? <Link to="/support" className="post__link">Contact support</Link>.</p></Reveal>
        </div>
      </section>

      <div className="lightzone">
        <section className="section--tight">
          <div className="container">
            <div className="faq">
              {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
            </div>
          </div>
        </section>
      </div>
      <CtaBand title="Ready to make your store shoppable?" sub="Install AnotherDev free and add your first shoppable reel in minutes." />
    </>
  );
}
