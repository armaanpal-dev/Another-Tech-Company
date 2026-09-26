import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { APP_STORE_URL } from '../config';
import './Navbar.css';

const PRODUCTS = [
  { to: '/shoppable-video', icon: 'video', name: 'Shoppable Video', desc: 'Add to cart inside the video' },
  { to: '/search-and-filters', icon: 'search', name: 'Search & Filters', desc: 'Instant search and faceted filters' },
];
const LINKS = [
  { to: '/web-development', label: 'Website' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/support', label: 'Support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);   // mobile menu
  const [drop, setDrop] = useState(false);   // products dropdown
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  // Close menus on route change (adjusting state during render, React-recommended).
  const [lastPath, setLastPath] = useState(loc.pathname);
  if (lastPath !== loc.pathname) { setLastPath(loc.pathname); setOpen(false); setDrop(false); }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDrop(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock the page behind the open mobile menu so it cannot scroll through.
  // Pinning the body with position:fixed at the current offset is what iOS
  // actually respects; the offset is restored when the menu closes.
  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    const { body } = document;
    body.classList.add('nav-lock');
    body.style.top = `-${y}px`;
    return () => {
      body.classList.remove('nav-lock');
      body.style.top = '';
      window.scrollTo(0, y);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="AnotherDev home">
          <img className="nav__mark" src="/logo.svg" alt="" width="30" height="30" />
          AnotherDev
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <div
            className={`nav__drop ${drop ? 'is-open' : ''}`}
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
          >
            <button className="nav__link nav__droptoggle" aria-expanded={drop} onClick={() => setDrop((v) => !v)}>
              Products <Icon name="chevron" size={15} className="nav__caret" strokeWidth={2} />
            </button>
            <div className="nav__menu" role="menu">
              {PRODUCTS.map((p) => (
                <Link key={p.to} to={p.to} className="nav__prod" role="menuitem">
                  <span className="nav__prodicon"><Icon name={p.icon} size={20} /></span>
                  <span className="nav__prodtext">
                    <strong>{p.name}</strong>
                    <em>{p.desc}</em>
                  </span>
                  <Icon name="arrow" size={16} className="nav__prodarrow" />
                </Link>
              ))}
            </div>
          </div>

          {LINKS.map((l) => (
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
          <span className="nav__mlabel">Apps</span>
          {PRODUCTS.map((p) => (
            <NavLink key={p.to} to={p.to} className="nav__mlink">{p.name}</NavLink>
          ))}
          <span className="nav__mlabel">More</span>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__mlink">{l.label}</NavLink>
          ))}
          <a href={APP_STORE_URL} className="btn btn--primary nav__mcta">Add to Shopify</a>
        </div>
      )}
    </header>
  );
}
