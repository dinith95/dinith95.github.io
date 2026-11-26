import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Xmark } from 'iconoir-react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Journey', to: '/journey' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="Header">
      <nav className="Header-nav" aria-label="Primary">
        <Link to="/" className="Header-brand" onClick={closeMenu}>
          Dinith Jayabodhi
        </Link>

        <span className="Header-separator" aria-hidden="true">
          |
        </span>

        <button
          type="button"
          className="Header-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <Xmark aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <ul className={`Header-links ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link, index) => (
            <li key={link.label}>
              <NavLink to={link.to} end onClick={closeMenu}>
                <span className="Header-link-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && <div className="Header-scrim" aria-hidden="true" onClick={closeMenu} />}
    </header>
  );
}

export default Header;
