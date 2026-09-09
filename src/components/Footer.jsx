import { Link } from 'react-router-dom';
import { APP_STORE_URL } from '../config';
import './Footer.css';

const cols = [
  {
    title: 'Apps',
    links: [
      ['Shoppable Video', '/shoppable-video'],
      ['Search & Filters', '/search-and-filters'],
      ['Compatibility', '/compatibility'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '/about'],
      ['Blog', '/blog'],
      ['FAQ', '/faq'],
      ['Support', '/support'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy policy', '/privacy'],
      ['Shoppable Video privacy', '/privacy/shoppable-video'],
      ['Terms of service', '/terms'],
      ['Affiliate terms', '/affiliate-terms'],
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img className="footer__mark" src="/logo.svg" alt="" width="32" height="32" /> AnotherDev
            </Link>
            <p className="footer__tag">
              Shoppable video for Shopify. Add to cart inside the video, on any page of your store.
            </p>
            <a href={APP_STORE_URL} className="btn btn--primary footer__cta">Add to Shopify, free plan available</a>
          </div>

          <div className="footer__cols">
            {cols.map((c) => (
              <div key={c.title} className="footer__col">
                <h4>{c.title}</h4>
                <ul>
                  {c.links.map(([label, to]) => (
                    <li key={label}><Link to={to}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer__col">
              <h4>Get started</h4>
              <ul>
                <li><a href={APP_STORE_URL}>Add to Shopify</a></li>
                <li><Link to="/support">Contact support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} AnotherDev. Not affiliated with or endorsed by Shopify.</span>
          <span className="footer__badge">Made for Shopify stores</span>
        </div>
      </div>
    </footer>
  );
}
