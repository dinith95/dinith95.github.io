import './CertificationsPane.css';

interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

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

function CertificationsPane() {
  return (
    <ul className="CertificationsPane-cards">
      {certificationData.map((entry) => (
        <li className="CertificationsPane-card" key={entry.title}>
          <div className="CertificationsPane-card-head">
            <h3 className="CertificationsPane-card-title">{entry.title}</h3>
            <span className="CertificationsPane-card-date">{entry.date}</span>
          </div>
          <p className="CertificationsPane-card-subtitle">{entry.issuer}</p>
          <p className="CertificationsPane-card-desc">{entry.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default CertificationsPane;
