import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavArrowDown } from 'iconoir-react';
import './ScrollDownArrow.css';

/** Hide the arrow once the user has clearly started scrolling. */
const HIDE_AFTER_PX = 120;

function ScrollDownArrow() {
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsHidden(window.scrollY > HIDE_AFTER_PX);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const journey = document.getElementById('journey');
    if (!journey) {
      navigate('/journey');
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    journey.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`ScrollDownArrow ${isHidden ? 'is-hidden' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to Journey section"
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : 0}
    >
      <NavArrowDown />
    </button>
  );
}

export default ScrollDownArrow;
