import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Download, Xmark } from 'iconoir-react';
import CvDocument from './CvDocument';
import './CvOverlay.css';

type CvOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfHref: string;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function CvOverlay({ isOpen, onClose, pdfHref }: CvOverlayProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="CvOverlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="CvOverlay-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum vitae"
        ref={dialogRef}
      >
        <div className="CvOverlay-header">
          <span className="CvOverlay-filename">{'// Dinith_Jayabodhi_CV'}</span>
          <a
            className="CvOverlay-download"
            href={pdfHref}
            download="Dinith_Jayabodhi_CV.pdf"
            aria-label="Download CV as PDF"
          >
            <span className="CvOverlay-download-label">Download</span>
            <Download aria-hidden="true" />
          </a>
          <button
            type="button"
            className="CvOverlay-close"
            onClick={onClose}
            aria-label="Close CV"
            ref={closeRef}
          >
            <Xmark aria-hidden="true" />
          </button>
        </div>

        <div className="CvOverlay-body">
          <CvDocument />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default CvOverlay;
