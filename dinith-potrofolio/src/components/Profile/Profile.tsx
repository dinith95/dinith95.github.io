import { useCallback, useState } from 'react';
import { Cloud, Code, Download, Eye, Github, Linkedin, Mail, Sparks, Whatsapp } from 'iconoir-react';
import CvOverlay from '../CvOverlay/CvOverlay';
import './Profile.css';

const TITLES = ['Developer', 'Forward Deployed Engineer', 'Cloud Engineer', 'AI Enthusiast'];

// International format, digits only (no +, spaces or leading zero), e.g. 94771234567.
const WHATSAPP_NUMBER = '94767332737';

const FEATURES = [
  {
    number: '01',
    title: 'Development',
    description: 'Full-stack web apps, built with maintainability in mind.',
    Icon: Code,
  },
  {
    number: '02',
    title: 'Cloud',
    description: 'Designing and running infrastructure that scales.',
    Icon: Cloud,
  },
  {
    number: '03',
    title: 'AI',
    description: 'Exploring how AI can solve real, practical problems.',
    Icon: Sparks,
  },
];

function Profile() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  // Stable reference: a new callback each render would re-run the overlay's focus/scroll effect.
  const closeCv = useCallback(() => setIsCvOpen(false), []);
  const cvPdf = require('../../images/Dinith_Jayabodhi_CV.pdf');

  return (
    <section className="Profile" id="home">
      <div className="Profile-visual">
        <div className="Profile-photo-frame">
          <span className="Profile-corner is-tl" aria-hidden="true" />
          <span className="Profile-corner is-tr" aria-hidden="true" />
          <span className="Profile-corner is-bl" aria-hidden="true" />
          <span className="Profile-corner is-br" aria-hidden="true" />

          <img
            src={require('../../images/dinith_dp.jpeg')}
            alt="Dinith Jayabodhi"
            className="Profile-photo"
          />
          <span className="Profile-photo-tint" aria-hidden="true" />
          <span className="Profile-photo-beam" aria-hidden="true" />

          <span className="Profile-chip Profile-photo-id" aria-hidden="true">
            <span className="Profile-photo-dot" />
            ID_01
          </span>

          <div className="Profile-chip Profile-photo-info">
            <span className="Profile-photo-role">
              <span className="Profile-photo-prompt">&gt;</span> software &amp; cloud engineer
              <span className="Profile-photo-block" aria-hidden="true" />
            </span>
            <span className="Profile-photo-location">
              location: <span>sri_lanka</span>
            </span>
          </div>
        </div>
      </div>

      <div className="Profile-content">
        <div className="Profile-eyebrow">
          <span className="Profile-eyebrow-rule" aria-hidden="true" />
          <span>Hello, I'm</span>
        </div>

        <h1 className="Profile-name">
          Dinith
          <br />
          <span className="Profile-name-last">Jayabodhi</span>
        </h1>

        <ul className="Profile-roles" aria-label="Roles">
          {TITLES.map((title, index) => (
            <li className={index === 0 ? 'Profile-role is-active' : 'Profile-role'} key={title}>
              {title}
            </li>
          ))}
        </ul>

        <p className="Profile-bio">
          I'm a developer who enjoys building web applications and exploring new technologies,
          with a focus on writing clean, maintainable code. My work spans full-stack development,
          cloud infrastructure, and applying AI to real problems.
        </p>

        <div className="Profile-actions">
          <button
            type="button"
            className="Profile-cta"
            aria-haspopup="dialog"
            onClick={() => setIsCvOpen(true)}
          >
            View CV
            <Eye aria-hidden="true" />
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="Profile-cta is-whatsapp"
          >
            <Whatsapp aria-hidden="true" />
            Chat on WhatsApp
          </a>

          <a href={cvPdf} download="Dinith_Jayabodhi_CV.pdf" className="Profile-cta is-ghost">
            Download CV
            <Download aria-hidden="true" />
          </a>
        </div>

        <div className="Profile-social">
          <span className="Profile-social-label">Find me online</span>
          <span className="Profile-social-rule" aria-hidden="true" />
          <div className="Profile-social-links">
            <a
              className="Profile-social-link"
              href="https://www.linkedin.com/in/dinith-jayabodhi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a className="Profile-social-link" href="mailto:jdinith72@gmail.com" aria-label="Email">
              <Mail />
            </a>
            <a
              className="Profile-social-link"
              href="https://github.com/dinith95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>

      <ul className="Profile-features">
        {FEATURES.map(({ number, title, description, Icon }) => (
          <li className="Profile-feature" key={title}>
            <div className="Profile-feature-head">
              <span className="Profile-feature-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="Profile-feature-number">{number}</span>
            </div>
            <h2 className="Profile-feature-title">{title}</h2>
            <p className="Profile-feature-desc">{description}</p>
          </li>
        ))}
      </ul>

      <CvOverlay isOpen={isCvOpen} onClose={closeCv} pdfHref={cvPdf} />
    </section>
  );
}

export default Profile;
