import { Github, Linkedin, Mail } from 'iconoir-react';
import useTypewriter from '../../hooks/useTypewriter';
import './Profile.css';

const TITLES = ['Developer', 'Software Engineer', 'Cloud Engineer', 'AI Enthusiast'];

function Profile() {
  const typedTitle = useTypewriter(TITLES);

  return (
    <section className="Profile">
      <h1 className="Profile-name">Dinith Jayabodhi</h1>
      <p className="Profile-title">
        <span aria-hidden="true" >{typedTitle}</span>
        <span className="Profile-title-caret" aria-hidden="true" />
        <span className="Profile-visually-hidden">{TITLES[0]}</span>
      </p>
      <p className="Profile-bio">
        I'm a developer who enjoys building web applications and exploring new
        technologies, with a focus on writing clean, maintainable code.
      </p>

      <div className="Profile-social">
        <a
          className="Profile-social-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a className="Profile-social-link" href="mailto:dinith@example.com" aria-label="Email">
          <Mail />
        </a>
        <a
          className="Profile-social-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
      </div>

      <a
        href={require('../../images/Dinith_Jayabodhi_CV.pdf')}
        download="Dinith_Jayabodhi_CV.pdf"
        className="Profile-cta"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Profile;
