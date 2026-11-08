import { Download, Github, Linkedin, Mail } from 'iconoir-react';
import useTypewriter from '../../hooks/useTypewriter';
import './Profile.css';

const TITLES = ['Developer', 'Forward Deployed Engineer', 'Cloud Engineer', 'AI Enthusiast'];

const FEATURES = [
  {
    number: '01',
    title: 'Development',
    description: 'Full-stack web apps, built with maintainability in mind.',
  },
  {
    number: '02',
    title: 'Cloud',
    description: 'Designing and running infrastructure that scales.',
  },
  {
    number: '03',
    title: 'AI',
    description: 'Exploring how AI can solve real, practical problems.',
  },
];

function Profile() {
  const typedTitle = useTypewriter(TITLES);

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

          <div className="Profile-photo-tags" aria-hidden="true">
            <span>{'// dinith_jayabodhi'}</span>
            <span>ID_01</span>
          </div>

          <div className="Profile-photo-caption">
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

        <p className="Profile-title">
          <span aria-hidden="true">{typedTitle}</span>
          <span className="Profile-title-caret" aria-hidden="true" />
          <span className="Profile-visually-hidden">{TITLES[0]}</span>
        </p>

        <p className="Profile-bio">
          I'm a developer who enjoys building web applications and exploring new technologies,
          with a focus on writing clean, maintainable code. My work spans full-stack development,
          cloud infrastructure, and applying AI to real problems.
        </p>

        <div className="Profile-actions">
          <a
            href={require('../../images/Dinith_Jayabodhi_CV.pdf')}
            download="Dinith_Jayabodhi_CV.pdf"
            className="Profile-cta"
          >
            Download Resume
            <Download aria-hidden="true" />
          </a>

          <div className="Profile-social">
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
        {FEATURES.map((feature) => (
          <li className="Profile-feature" key={feature.title}>
            <span className="Profile-feature-number">{feature.number}</span>
            <h2 className="Profile-feature-title">{feature.title}</h2>
            <p className="Profile-feature-desc">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Profile;
