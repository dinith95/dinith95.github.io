import './ExperiencePane.css';

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

function ExperiencePane() {
  return (
    <ol className="ExperiencePane-timeline">
      {experienceData.map((entry, index) => (
        <li
          className={`ExperiencePane-item ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
          key={`${entry.company}-${entry.date}`}
        >
          <span className="ExperiencePane-marker" aria-hidden="true" />
          <div className="ExperiencePane-card">
            <div className="ExperiencePane-card-head">
              <h3 className="ExperiencePane-card-title">{entry.role}</h3>
              <span className="ExperiencePane-card-date">{entry.date}</span>
            </div>
            <p className="ExperiencePane-card-subtitle">{entry.company}</p>
            <p className="ExperiencePane-card-desc">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default ExperiencePane;
