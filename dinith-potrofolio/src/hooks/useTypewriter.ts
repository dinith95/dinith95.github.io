import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Types out each phrase character by character, pauses, deletes it, then moves
 * on to the next — looping indefinitely. Returns the currently visible text.
 *
 * Pass `phrases` as a module-scope constant so its reference stays stable
 * across renders; an inline array literal re-runs the effect every render.
 */
function useTypewriter(phrases: string[], options: UseTypewriterOptions = {}): string {
  const { typeSpeed = 90, deleteSpeed = 45, pauseMs = 1600 } = options;

  const [reduceMotion] = useState(prefersReducedMotion);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || phrases.length === 0) {
      return;
    }

    const phrase = phrases[index % phrases.length];
    const atFullPhrase = !isDeleting && text === phrase;
    const atEmpty = isDeleting && text === '';

    let delay = typeSpeed;
    if (atFullPhrase) {
      delay = pauseMs;
    } else if (isDeleting) {
      delay = deleteSpeed;
    }

    const timer = window.setTimeout(() => {
      if (atFullPhrase) {
        setIsDeleting(true);
      } else if (atEmpty) {
        setIsDeleting(false);
        setIndex((current) => (current + 1) % phrases.length);
      } else {
        setText(
          isDeleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, index, isDeleting, phrases, typeSpeed, deleteSpeed, pauseMs, reduceMotion]);

  if (reduceMotion) {
    return phrases[0] ?? '';
  }

  return text;
}

export default useTypewriter;
