import { useState } from 'react';
import './Header.css';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Contact'];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="Header">
      <nav className="Header-nav">
        <a className="Header-brand" href="#home" onClick={() => setIsMenuOpen(false)}>
          Dinith
        </a>

        <button
          className="Header-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`Header-links ${isMenuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
