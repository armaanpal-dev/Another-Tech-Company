import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Reveal, Faq, CtaBand } from '../components/Shared';
import './pages.css';

const faqs = [
  ['What does Another Shoppable Video do?', 'It adds shoppable video reels to your Shopify storefront so shoppers can watch a product in action and add it to cart without leaving the page.'],
  ['Where can I show the videos?', 'On your home page, collection pages, product detail sections, and other pages, depending on your plan. Product-page and smart-tag placements unlock on higher plans.'],
  ['Do videos slow down my store?', 'No. Videos lazy-load only when in view, scripts are deferred, and the storefront code is tiny (~12 KB gzipped) with no layout shift. For best results keep individual video files light (MP4, 9:16, under about 15 MB).'],
  ['Can shoppers add to cart from the video?', 'Yes. Each reel has an Add to Cart button that adds the exact variant you linked, using your theme native cart.'],
  ['Does it work with my theme?', 'Yes. It supports Online Store 2.0 themes (Dawn and others) and popular themes like Prestige and Marmeto, updating the cart drawer automatically.'],
  ['How is it billed?', 'Through Shopify Billing, so charges appear on your Shopify invoice. Free to start, upgrade anytime, cancel anytime.'],
  ['What analytics do I get?', 'Impressions, plays, clicks, and add-to-cart events per reel, plus play rate, click-through rate, and conversion, with advanced charts on Pro.'],
  ['Do you collect my customers personal data?', 'No. Storefront analytics are anonymous (a random session ID for de-duplication only). See the Privacy policy for details.'],
  ['Can I remove the "Powered by Another Shoppable Video" watermark?', 'Yes, it is removed on the Growth plan and above.'],
  ['Do you offer custom or enterprise setups?', 'Yes. The Custom plan includes unlimited reels, custom layouts, and features built for your store. Contact us to discuss it.'],
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
        description="Answers to common questions about Another Shoppable Video: placements, add to cart, themes, speed, analytics, privacy, billing, and custom setups for Shopify."
        path="/faq"
        schema={schema}
      />

      <section className="phero center">
        <div className="container">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal as="h1" className="h-xl mt-s">Frequently asked questions</Reveal>
          <Reveal><p className="lead mx-auto mt-s" style={{ textAlign: 'center' }}>Everything you need to know about adding shoppable video to your Shopify store. Still stuck? <Link to="/contact" className="post__link">Talk to us</Link>.</p></Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="faq">
            {faqs.map(([q, a]) => <Faq key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to make your store shoppable?" sub="Install Another Shoppable Video free and add your first shoppable reel in minutes." />
    </>
  );
}
