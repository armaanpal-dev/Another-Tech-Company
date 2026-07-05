import { Link } from 'react-router-dom';
import './Footer.css';

const cols = [
  {
    title: 'Product',
    links: [
      ['Features', '/features'],
      ['How it works', '/how-it-works'],
      ['Pricing', '/pricing'],
      ['Compatibility', '/features#compatibility'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Blog', '/blog'],
      ['About', '/about'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy policy', '/privacy'],
      ['Terms of service', '/terms'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer dark-bg">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__mark" aria-hidden="true">▶</span> Another Shoppable Video
            </Link>
            <p className="footer__tag">
              Turn browsers into buyers with shoppable video and UGC, built for Shopify.
            </p>
            <a href="https://apps.shopify.com" className="btn btn--primary footer__cta">Add to Shopify — free</a>
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
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Another Shoppable Video. All rights reserved.</span>
          <span className="footer__badge">Built for Shopify</span>
        </div>
      </div>
    </footer>
  );
}
