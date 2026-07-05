import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="Another Shoppable Video home">
          <img className="nav__mark" src="/logo.svg" alt="" width="30" height="30" />
          Another Shoppable Video
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__cta">
          <Link to="/contact" className="nav__login">Contact</Link>
          <a href="https://apps.shopify.com" className="btn btn--primary">Add to Shopify</a>
        </div>

        <button className="nav__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__mlink">{l.label}</NavLink>
          ))}
          <Link to="/contact" className="nav__mlink">Contact</Link>
          <a href="https://apps.shopify.com" className="btn btn--primary nav__mcta">Add to Shopify</a>
        </div>
      )}
    </header>
  );
}
