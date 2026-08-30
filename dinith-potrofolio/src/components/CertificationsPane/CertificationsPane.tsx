import { JSX } from 'react';
import { OpenInWindow } from 'iconoir-react';
import './CertificationsPane.css';

interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  description: JSX.Element;
  link: string;
}

const certificationData: CertificationEntry[] = [
  {
    title: 'Microsoft Certified: Azure Cosmos DB Developer Specialty',
    issuer: 'Microsoft',
    date: 'December 2025 (Renewed)',
    description:
      <>
        <p>Exam DP-420: validated expertise in designing, implementing, and optimizing NoSQL data solutions on Azure Cosmos DB, including data modeling, indexing, querying, and integration with Azure services.</p>
      </>,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/DinithJayabodhi-8479/5D317CD8E1FCCD6A?sharingId=B10163EE96CCECE4'
  },
  {
    title: 'Certified Kubernetes Application Developer',
    issuer: 'Linux Foundation',
    date: 'Feb 2025',
    description: 
      <>
          <p>validated hands-on ability to design, build, deploy, and troubleshoot cloud-native applications on Kubernetes through a performance-based exam.</p>
      </>,
      link : 'https://ti-user-certificates.s3.us-east-1.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/e8418da6-2d3d-4abd-a776-79ce7e3bada2-lulbaddha-waduge-dinith-chathuranga-jayabodhi-f86f774c-af3f-4ba4-9ab2-d954e2579511-certificate.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJPREDE4LLNE2GD6Q%2F20260830%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260830T184014Z&X-Amz-Expires=900&X-Amz-Signature=b0f1e2c4dfff0fc28aa11fb11dbcc7c884a2d4226c92d84b99b201f0fb23f1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
  },
  {
    title: 'Microsoft Applied Skills: Secure storage for Azure Files and Azure Blob Storage',
    issuer: 'Microsoft',
    date: 'Dec 2023',
    description: 
    <>
      <p>validated hands-on ability to configure secure Azure storage accounts, Blob Storage, Azure Files, encryption, and networking.</p>
    </>,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/DinithJayabodhi-8479/F231285CADEF4101?sharingId=B10163EE96CCECE4'
  },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals',
    issuer: 'Microsoft',
    date: 'March 2023',
    description: <>Exam DP-900: validated foundational knowledge of core data concepts and Azure data services, including relational, non-relational, and analytics workloads. </>,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/DinithJayabodhi-8479/43BF2330A9127111?sharingId=B10163EE96CCECE4'
  },
  
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'September 2021',
    description: <> <p>Exam AZ-900: validated foundational knowledge of cloud concepts, core Azure services (compute, networking, storage), and Azure management and governance.</p></>,
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/DinithJayabodhi-8479/CA09EB4FD0764B11?sharingId=B10163EE96CCECE4'
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
          <div className="CertificationsPane-card-desc">{entry.description}</div>
          <a className="CertificationsPane-card-link" href={entry.link} target="_blank" rel="noopener noreferrer"><span>View Certification</span><OpenInWindow aria-hidden="true" /></a>
        </li>
      ))}
    </ul>
  );
}

export default CertificationsPane;
