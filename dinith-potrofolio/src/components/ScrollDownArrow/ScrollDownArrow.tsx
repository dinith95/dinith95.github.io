import { NavArrowDown } from 'iconoir-react';
import './ScrollDownArrow.css';

function ScrollDownArrow() {
  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('about')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      className="ScrollDownArrow"
      onClick={handleClick}
      aria-label="Scroll to About section"
    >
      <NavArrowDown />
    </button>
  );
}

export default ScrollDownArrow;
