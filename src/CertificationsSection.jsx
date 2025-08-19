// CertificationsSection.jsx
import './CertificationsSection.css';

const certifications = [
  {
    title: 'CDA Digital Marketer',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/digital-marketer-in-malappuram-300x300.webp'
  },
  {
    title: 'Hubspot Digital Marketer',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/digital-marketer-in-malappuram-kerala-300x300.webp'
  }
];

export default function CertificationsSection() {
  return (
    <section className="certifications">
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <img src={cert.image} alt={cert.title} className="cert-img" />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
