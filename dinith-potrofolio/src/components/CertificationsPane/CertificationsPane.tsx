import { JSX } from 'react';
import './CertificationsPane.css';

interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  description: JSX.Element;
}

const certificationData: CertificationEntry[] = [
  {
    title: 'Certified Kubernetes Application Developer',
    issuer: 'Linux Foundation',
    date: 'Feb 2025',
    description: <><a href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/e8418da6-2d3d-4abd-a776-79ce7e3bada2-lulbaddha-waduge-dinith-chathuranga-jayabodhi-f86f774c-af3f-4ba4-9ab2-d954e2579511-certificate.pdf" target="_blank" rel="noopener noreferrer">certfication link</a></>,
  },
  {
    title: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: 'March 2023',
    description: <>Exam DP-203: Data Engineering on Microsoft Azure.</>,
  },
  {
    title: 'Microsoft Certified: Azure Cosmos DB Developer Specialty',
    issuer: 'Microsoft',
    date: 'December 2022',
    description:
      <>Exam DP-420: Designing and Implementing Cloud-Native Applications Using Microsoft Azure Cosmos DB.</>
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'September 2021',
    description: <>Exam AZ-900: Microsoft Azure Fundamentals.</>
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
