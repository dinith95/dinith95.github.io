interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  description: string;
}

const experienceData: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Cube',
    date: '2023 — Present',
    description: 'Working across full-stack development, cloud infrastructure and applied AI.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Insighture',
    date: '2022 — 2023',
    description: 'Promoted after delivering cloud-native applications on Microsoft Azure.',
  },
  {
    role: 'Software Engineer',
    company: 'Insighture',
    date: '2021 — 2022',
    description: 'Built full-stack features and cloud integrations across client projects.',
  },
];

// Timeline styles are shared across all Journey panes and live in Journey.css.
function ExperiencePane() {
  return (
    <ol className="Journey-timeline">
      {experienceData.map((entry) => (
        <li className="Journey-entry" key={`${entry.company}-${entry.date}`}>
          <span className="Journey-marker" aria-hidden="true" />
          <div className="Journey-meta">
            <span className="Journey-when">{entry.date}</span>
            <span className="Journey-where">{entry.company}</span>
          </div>
          <div className="Journey-body">
            <h3 className="Journey-title">{entry.role}</h3>
            <p className="Journey-desc">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default ExperiencePane;
