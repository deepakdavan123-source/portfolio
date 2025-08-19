// ServicesSection.jsx
import './ServicesSection.css';

const services = [
  {
    title: 'Search Engine Optimisation (SEO)',
    image: 'https://deepakkk.com/wp-content/uploads/2024/10/digital-marketing-expert-in-malappuram-kerala-india.webp',
    desc: 'Boost your online visibility and profitability with technical and content SEO strategies that drive organic traffic and improve search rankings.'
  },
  {
    title: 'Social Media Marketing',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/top-digital-marketer-in-malappuram.webp',
    desc: 'Connect with your audience through engaging content and targeted ads on Facebook, Instagram, and Twitter. Build brand awareness and drive traffic.'
  },
  {
    title: 'Content Marketing',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/top-digital-marketing-expert-in-malappuram.webp',
    desc: 'Develop and share valuable content as part of a comprehensive digital strategy. Attract, engage, and convert your ideal customers.'
  },
  {
    title: 'Google Ads',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/digital-marketing-expert-in-malappuram-kerala-1024x1024.webp',
    desc: 'Set up and manage Google Ads campaigns to reach your audience, drive website traffic, and increase sales with measurable results.'
  },
  {
    title: 'Influencer Marketing',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/top-digital-marketer-in-malappuram-kerala-225x300.webp',
    desc: 'Leverage trusted voices to promote your brand, increase awareness, and drive engagement through strategic influencer partnerships.'
  },
  {
    title: 'Website Development',
    image: 'https://deepakkk.com/wp-content/uploads/2024/09/digital-marketing-expert.webp',
    desc: 'Design and develop modern, responsive websites that showcase your brand and convert visitors into customers.'
  }
];

export default function ServicesSection() {
  return (
    <section className="services">
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-img-wrap">
              <img src={service.image} alt={service.title} className="service-img" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
