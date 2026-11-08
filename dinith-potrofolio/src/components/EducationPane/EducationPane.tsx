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
    <ol className="Journey-timeline">
      {educationData.map((entry) => (
        <li className="Journey-entry" key={entry.degree}>
          <span className="Journey-marker" aria-hidden="true" />
          <div className="Journey-meta">
            <span className="Journey-when">{entry.years}</span>
            <span className="Journey-where">
              {entry.location ? `${entry.institution} • ${entry.location}` : entry.institution}
            </span>
          </div>
          <div className="Journey-body">
            <h3 className="Journey-title">{entry.degree}</h3>
            {entry.bullets.length > 0 && (
              <ul className="Journey-bullets">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default EducationPane;
