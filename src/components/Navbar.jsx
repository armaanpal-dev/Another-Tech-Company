import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { APP_STORE_URL } from '../config';
import './Navbar.css';

const links = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/faq', label: 'FAQ' },
  { to: '/support', label: 'Support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  // Close the mobile menu when the route changes. Adjusting state during render
  // is React's recommended pattern here, and avoids an extra render pass.
  const [lastPath, setLastPath] = useState(loc.pathname);
  if (lastPath !== loc.pathname) {
    setLastPath(loc.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="AnotherDev home">
          <img className="nav__mark" src="/logo.svg" alt="" width="30" height="30" />
          AnotherDev
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__cta">
          <a href={APP_STORE_URL} className="btn btn--primary">Add to Shopify</a>
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
          <a href={APP_STORE_URL} className="btn btn--primary nav__mcta">Add to Shopify</a>
        </div>
      )}
    </header>
  );
}
