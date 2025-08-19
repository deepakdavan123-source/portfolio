// ContactSection.jsx
import './ContactSection.css';

const socials = [
  { name: 'WhatsApp', url: 'https://wa.link/t8w21y', icon: '🟢' },
  { name: 'Facebook', url: 'https://www.facebook.com/iamdeepakk.in', icon: '📘' },
  { name: 'Instagram', url: 'https://www.instagram.com/iamdeepak.kk/?next=%2Fd__eepa_k%2F&hl=en', icon: '📸' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/deepak-k10/', icon: '💼' }
];

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-socials">
        {socials.map((s, idx) => (
          <a href={s.url} key={idx} target="_blank" rel="noopener noreferrer" className="contact-social-link" title={s.name}>
            <span className="contact-social-icon">{s.icon}</span>
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
