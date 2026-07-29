import './Education.css';

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

function Education() {
  return (
    <div className="Education">
      <div className="Education-decor" aria-hidden="true" />
      <div className="Education-list">
        <ul className="Education-items">
          {educationData.map((entry, index) => (
            <li key={index} className="Education-item">
              <h3 className="Education-degree">{entry.degree}</h3>
              <p className="Education-institution">{entry.institution}</p>
              <p className="Education-meta">
                {entry.years}
                {entry.location && ` • ${entry.location}`}
              </p>
              {entry.bullets.length > 0 && (
                <ul className="Education-bullets">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
