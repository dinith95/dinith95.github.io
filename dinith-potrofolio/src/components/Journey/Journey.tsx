import { useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { Suitcase, Medal, GraduationCap } from 'iconoir-react';
import './Journey.css';

type PaneId = 'experience' | 'certifications' | 'education';

interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  description: string;
}

interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  years: string;
  bullets: string[];
}

const PANES: { id: PaneId; label: string; shortLabel: string; icon: ReactNode }[] = [
  { id: 'experience', label: 'Experience', shortLabel: 'Experience', icon: <Suitcase /> },
  { id: 'certifications', label: 'Certifications', shortLabel: 'Certs', icon: <Medal /> },
  { id: 'education', label: 'Education', shortLabel: 'Education', icon: <GraduationCap /> },
];

const experienceData: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Cube',
    date: '2023 - Present',
    description: 'Working across full-stack development, cloud infrastructure and applied AI.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Insighture',
    date: '2022 - 2023',
    description: 'Promoted after delivering cloud-native applications on Microsoft Azure.',
  },
  {
    role: 'Software Engineer',
    company: 'Insighture',
    date: '2021 - 2022',
    description: 'Built full-stack features and cloud integrations across client projects.',
  },
];

const certificationData: CertificationEntry[] = [
  {
    title: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: 'March 2023',
    description: 'Exam DP-203: Data Engineering on Microsoft Azure.',
  },
  {
    title: 'Microsoft Certified: Azure Cosmos DB Developer Specialty',
    issuer: 'Microsoft',
    date: 'December 2022',
    description:
      'Exam DP-420: Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB.',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'September 2021',
    description: 'Exam AZ-900: Microsoft Azure Fundamentals.',
  },
];

const educationData: EducationEntry[] = [
  {
    degree: 'BSc. Honours in Management Information Technology',
    institution: 'University of Kelaniya',
    location: 'Kelaniya, Sri Lanka',
    years: '2016 - 2020',
    bullets: [
      'Major: Information Technology',
      'Undergraduate Research: Blockchain Based Land Authentication Model for Sri Lanka.',
      'GPA - 3.67/4.00 (2nd Upper Honours)',
    ],
  },
  {
    degree: 'CGMA (CIMA - UK)',
    institution: 'Chartered Institute of Management Accountants',
    location: 'United Kingdom',
    years: '2015 - 2017',
    bullets: ['Advanced Diploma in Management Accounting (2017)'],
  },
  {
    degree: 'G.C.E A/L, Physical Sciences (2014)',
    institution: 'Lyceum International School, Gampaha',
    location: '',
    years: '2012 - 2014',
    bullets: [],
  },
];

function Journey() {
  const [activePane, setActivePane] = useState<PaneId>('experience');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Roving arrow-key navigation across the tab strip (WAI-ARIA tabs pattern).
  const handleTabKeyDown = (event: KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % PANES.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + PANES.length) % PANES.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = PANES.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setActivePane(PANES[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section className="Journey-section" id="journey">
      <h2 className="Journey-heading">Journey</h2>

      <div className="Journey-tabs" role="tablist" aria-label="Background">
        {PANES.map((pane, index) => (
          <button
            key={pane.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`Journey-tab-${pane.id}`}
            aria-controls={`Journey-panel-${pane.id}`}
            aria-selected={activePane === pane.id}
            tabIndex={activePane === pane.id ? 0 : -1}
            className={`Journey-tab ${activePane === pane.id ? 'is-active' : ''}`}
            onClick={() => setActivePane(pane.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {pane.icon}
            <span className="Journey-tab-label">{pane.label}</span>
            <span className="Journey-tab-label-short">{pane.shortLabel}</span>
          </button>
        ))}
      </div>

      {activePane === 'experience' && (
        <div
          className="Journey-panel"
          role="tabpanel"
          id="Journey-panel-experience"
          aria-labelledby="Journey-tab-experience"
        >
          <ul className="Journey-cards">
            {experienceData.map((entry) => (
              <li className="Journey-card" key={`${entry.company}-${entry.date}`}>
                <div className="Journey-card-head">
                  <h3 className="Journey-card-title">{entry.role}</h3>
                  <span className="Journey-card-date">{entry.date}</span>
                </div>
                <p className="Journey-card-subtitle">{entry.company}</p>
                <p className="Journey-card-desc">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activePane === 'certifications' && (
        <div
          className="Journey-panel"
          role="tabpanel"
          id="Journey-panel-certifications"
          aria-labelledby="Journey-tab-certifications"
        >
          <ul className="Journey-cards">
            {certificationData.map((entry) => (
              <li className="Journey-card" key={entry.title}>
                <div className="Journey-card-head">
                  <h3 className="Journey-card-title">{entry.title}</h3>
                  <span className="Journey-card-date">{entry.date}</span>
                </div>
                <p className="Journey-card-subtitle">{entry.issuer}</p>
                <p className="Journey-card-desc">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activePane === 'education' && (
        <div
          className="Journey-panel"
          role="tabpanel"
          id="Journey-panel-education"
          aria-labelledby="Journey-tab-education"
        >
          <ul className="Journey-cards">
            {educationData.map((entry) => (
              <li className="Journey-card" key={entry.degree}>
                <div className="Journey-card-head">
                  <h3 className="Journey-card-title">{entry.degree}</h3>
                  <span className="Journey-card-date">{entry.years}</span>
                </div>
                <p className="Journey-card-subtitle">
                  {entry.location ? `${entry.institution} • ${entry.location}` : entry.institution}
                </p>
                {entry.bullets.length > 0 && (
                  <ul className="Journey-bullets">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Journey;
