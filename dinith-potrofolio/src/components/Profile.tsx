import { Github, Linkedin, Mail } from 'iconoir-react';
import './Profile.css';

function Profile() {
  return (
    <section className="Profile">
      <h1 className="Profile-name">Dinith Jayabodhi</h1>
      <p className="Profile-title">Developer</p>
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
    </section>
  );
}

export default Profile;
