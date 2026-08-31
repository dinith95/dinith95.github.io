import { Code, Cloud, Sparks, MapPin, Github, Linkedin, Mail } from 'iconoir-react';
import useTypewriter from '../../hooks/useTypewriter';
import './Profile.css';

const TITLES = ['Developer', 'Software Engineer', 'Cloud Engineer', 'AI Enthusiast'];

const FEATURES = [
  {
    icon: <Code />,
    title: 'Development',
    description: 'Full-stack web apps, built with maintainability in mind.',
  },
  {
    icon: <Cloud />,
    title: 'Cloud',
    description: 'Designing and running infrastructure that scales.',
  },
  {
    icon: <Sparks />,
    title: 'AI',
    description: 'Exploring how AI can solve real, practical problems.',
  },
];

function Profile() {
  const typedTitle = useTypewriter(TITLES);

  return (
    <section className="Profile" id="home">
      <div className="Profile-visual">
        <div className="Profile-decor" aria-hidden="true" />
        <div className="Profile-photo-frame">
          <img
            src={require('../../images/dinith_dp.jpeg')}
            alt="Dinith Jayabodhi"
            className="Profile-photo"
          />
        </div>
        <div className="Profile-fact-card">
          <div className="Profile-fact-row">
            <Code />
            <span>Software &amp; Cloud Engineer</span>
          </div>
          <div className="Profile-fact-row">
            <MapPin />
            <span>Based in Sri Lanka</span>
          </div>
        </div>
      </div>

      <div className="Profile-content">
        <h1 className="Profile-name">Dinith Jayabodhi</h1>
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

        <div className="Profile-features">
          {FEATURES.map((feature) => (
            <div className="Profile-feature" key={feature.title}>
              {feature.icon}
              <p className="Profile-feature-title">{feature.title}</p>
              <p className="Profile-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

         <div className="Profile-actions">
        <a
          href={require('../../images/Dinith_Jayabodhi_CV.pdf')}
          download="Dinith_Jayabodhi_CV.pdf"
          className="Profile-cta"
        >
          Download Resume
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
     
    </section>
  );
}

export default Profile;
