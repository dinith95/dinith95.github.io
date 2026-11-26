import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Xmark } from 'iconoir-react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Journey', to: '/journey' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJourneyInView, setIsJourneyInView] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = () => setIsMenuOpen(false);

  // On the home page Journey is a section below the hero: mark its link active while that
  // section crosses the middle of the viewport.
  useEffect(() => {
    const journey = pathname === '/' ? document.getElementById('journey') : null;
    if (!journey || typeof IntersectionObserver === 'undefined') {
      setIsJourneyInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsJourneyInView(entry.isIntersecting),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    observer.observe(journey);
    return () => observer.disconnect();
  }, [pathname]);

  const isLinkActive = (to: string) => {
    if (to === '/journey') {
      return pathname === '/journey' || (pathname === '/' && isJourneyInView);
    }
    return pathname === to && !(to === '/' && isJourneyInView);
  };

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
              <Link
                to={link.to}
                className={isLinkActive(link.to) ? 'active' : undefined}
                aria-current={isLinkActive(link.to) ? 'page' : undefined}
                onClick={closeMenu}
              >
                <span className="Header-link-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && <div className="Header-scrim" aria-hidden="true" onClick={closeMenu} />}
    </header>
  );
}

export default Header;
