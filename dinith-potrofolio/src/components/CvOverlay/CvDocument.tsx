import './CvDocument.css';

/*
 * On-site rendering of src/cv/Dinith_Jayabodhi_CV.html (the PDF source).
 * Keep the two in sync: edit the HTML, mirror it here, regenerate the PDF.
 * Phone number and referees are intentionally left out of the web version.
 */

type Entry = {
  title: string;
  dates: string;
  org: string;
  bullets: React.ReactNode[];
};

const EXPERIENCE: Entry[] = [
  {
    title: 'Senior Software Engineer',
    dates: 'Apr 2023 – Present',
    org: 'Cube Global (Pvt) Ltd. | London, UK',
    bullets: [
      <>
        Engaged in application development within the <strong>Reg-Tech and FinTech</strong> domains.
      </>,
      <>
        Integrated <strong>Agentic AI developments</strong> to <strong>double</strong> the
        productivity.
      </>,
      'Engineered scalable applications based on cloud technologies, resulting in a 20% increase in processing speed and a 20% reduction in cost.',
      'Streamlined the Production Support process with a solution which improved productivity by 100%.',
      <>
        Contributed to the evaluation process of <strong>Temporal and Airflow</strong> workflow
        tools.
      </>,
      'Managed 5+ crisis scenarios and developed actions to prevent such scenarios in the future.',
    ],
  },
  {
    title: 'Senior Software Engineer / Software Engineer',
    dates: 'Mar 2021 – Apr 2023',
    org: 'Insighture | Colombo, Sri Lanka',
    bullets: [
      <>
        Engaged in application development within the <strong>Reg-Tech and FinTech</strong> domains.
      </>,
      'Worked on Cube Global client projects.',
      "President of the Company's Culture Club (Aug 2021 – Jul 2022).",
      'Mentored 2 junior developers.',
      'Actively involved in the migration of its services to Kubernetes which reduced operational costs by 30%.',
    ],
  },
];

const EDUCATION: Entry[] = [
  {
    title: 'Bachelor of Science in Management Information Systems',
    dates: 'Mar 2016 – Feb 2020',
    org: 'University of Kelaniya | Sri Lanka',
    bullets: [
      'Field of Study: Management & Information Technology',
      'Final Grade: Second Class Upper Division',
      'Number of Credits: 120',
      'Thesis: Blockchain-Based Land Authentication Model for Sri Lanka',
      'Projects: Microfinance Management Portal, Lecture Schedule Management Application',
    ],
  },
];

type Certification = {
  title: string;
  dates: string;
  issuer: string;
  kind?: string;
  linkLabel: string;
  href: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Certified Kubernetes Application Developer (CKAD)',
    dates: 'Feb 2025',
    issuer: 'Linux Foundation',
    linkLabel: 'CKAD Certification',
    href: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/e8418da6-2d3d-4abd-a776-79ce7e3bada2-lulbaddha-waduge-dinith-chathuranga-jayabodhi-f86f774c-af3f-4ba4-9ab2-d954e2579511-certificate.pdf',
  },
  {
    title: 'Develop ASP.NET Core Web App',
    dates: 'Dec 2023',
    issuer: 'Microsoft',
    kind: 'Microsoft Applied Skills',
    linkLabel: 'Develop ASP.NET Core Web App',
    href: 'https://learn.microsoft.com/en-us/users/dinithjayabodhi-8479/credentials/22e79d93faa954e3',
  },
  {
    title: 'Secure storage for Azure Files and Azure Blob Storage',
    dates: 'Dec 2023',
    issuer: 'Microsoft',
    kind: 'Microsoft Applied Skills',
    linkLabel: 'Secure storage for Azure Files',
    href: 'https://learn.microsoft.com/en-us/users/dinithjayabodhi-8479/credentials/f231285cadef4101',
  },
  {
    title: 'Azure Data Fundamentals',
    dates: 'Mar 2023',
    issuer: 'Microsoft',
    kind: 'Microsoft Certifications',
    linkLabel: 'Azure Data Fundamentals',
    href: 'https://learn.microsoft.com/en-us/users/dinithjayabodhi-8479/credentials/43bf2330a9127111',
  },
  {
    title: 'Azure Cosmos DB Developer',
    dates: 'Dec 2023',
    issuer: 'Microsoft',
    kind: 'Microsoft Certifications',
    linkLabel: 'Azure Cosmos DB Developer',
    href: 'https://learn.microsoft.com/en-us/users/dinithjayabodhi-8479/credentials/5d317cd8e1fccd6a',
  },
];

const SKILL_GROUPS: { heading: string; items: string[] }[] = [
  { heading: 'Skills', items: ['C#', 'TypeScript', '.NET', 'React', 'SQL', 'NoSQL', 'Temporal'] },
  { heading: 'AI Skills', items: ['Claude Code', 'GitHub Copilot'] },
  {
    heading: 'Cloud Skills',
    items: [
      'Azure Cosmos DB',
      'Azure Storage',
      'AKS',
      'Azure Service Bus',
      'Azure Functions',
      'Azure Monitor',
      'Azure App Services',
      'Azure Virtual Machines',
    ],
  },
  {
    heading: 'DevOps Skills',
    items: ['Docker', 'Kubernetes', 'Helm', 'Azure Pipelines', 'GitHub Actions'],
  },
  {
    heading: 'Soft Skills',
    items: [
      'Communication',
      'Teamwork',
      'Problem-solving',
      'Leadership',
      'Emotional intelligence',
      'Creativity',
    ],
  },
  {
    heading: 'IDE & Tooling',
    items: [
      'Visual Studio (2019 / 2022 / 2026)',
      'Visual Studio Code',
      'GitHub Copilot',
      'Lens / Open Lens',
      'K9s',
      'Azure DevOps',
      'Azure Storage Explorer',
    ],
  },
];

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <>
      {entries.map((entry) => (
        <div key={entry.title}>
          <h3>{entry.title}</h3>
          <p className="CvDocument-meta">
            <span className="CvDocument-dates">{entry.dates}</span>
            <br />
            {entry.org}
          </p>
          <ul>
            {entry.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function CvDocument() {
  return (
    <article className="CvDocument">
      <header>
        <h1 className="CvDocument-name">Dinith Jayabodhi</h1>
        <p className="CvDocument-subtitle">Senior Software Engineer</p>
        <p className="CvDocument-contact">
          <span className="CvDocument-item">
            <span className="CvDocument-chip">E</span>
            <a href="mailto:Jdinith72@gmail.com">Jdinith72@gmail.com</a>
          </span>
          <span className="CvDocument-item">
            <span className="CvDocument-chip">L</span>
            <a
              href="https://www.linkedin.com/in/dinith-jayabodhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dinith Jayabodhi | LinkedIn
            </a>
          </span>
        </p>
      </header>

      <div className="CvDocument-columns">
        <main className="CvDocument-main">
          <h2>Objective</h2>
          <p>
            Senior Software Engineer with <strong>5+ years of experience</strong> in developing
            scalable cloud native applications using{' '}
            <strong>.NET, React, SQL, NoSQL and Azure technologies</strong> with a proven track
            record of delivering high-quality solutions. Also, an innovative individual who strives
            to stay updated with industry trends and continuously improve his skills.
          </p>

          <h2>Experience</h2>
          <EntryList entries={EXPERIENCE} />

          <h2>Education</h2>
          <EntryList entries={EDUCATION} />

          <h2>Certifications</h2>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.title}>
              <h3>{cert.title}</h3>
              <p className="CvDocument-meta">
                <span className="CvDocument-dates">{cert.dates}</span>
                <br />
                {cert.issuer}
              </p>
              <ul>
                {cert.kind && <li>{cert.kind}</li>}
                <li>
                  Certification Link:{' '}
                  <a href={cert.href} target="_blank" rel="noopener noreferrer">
                    {cert.linkLabel}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </main>

        <aside className="CvDocument-sidebar">
          {SKILL_GROUPS.map((group) => (
            <section key={group.heading}>
              <h2>{group.heading}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </aside>
      </div>
    </article>
  );
}

export default CvDocument;
