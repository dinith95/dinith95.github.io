import './EducationPane.css';

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  years: string;
  bullets: string[];
}

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

function EducationPane() {
  return (
    <ul className="EducationPane-cards">
      {educationData.map((entry) => (
        <li className="EducationPane-card" key={entry.degree}>
          <div className="EducationPane-card-head">
            <h3 className="EducationPane-card-title">{entry.degree}</h3>
            <span className="EducationPane-card-date">{entry.years}</span>
          </div>
          <p className="EducationPane-card-subtitle">
            {entry.location ? `${entry.institution} • ${entry.location}` : entry.institution}
          </p>
          {entry.bullets.length > 0 && (
            <ul className="EducationPane-bullets">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EducationPane;
