// HeroSection.jsx
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero hero-dark">
      <header className="hero-header">
        <div className="hero-avatar-wrap">
          <img
            src="https://deepakkk.com/wp-content/uploads/2024/10/digital-marketing-expert-in-malappuram-kerala-india.webp"
            alt="Digital Marketing Expert"
            className="hero-avatar-img"
          />
        </div>
        <div className="hero-title-group">
          <h2 className="hero-greeting">Hi! I'm Deepak K</h2>
          <h1 className="hero-main-title">Digital Marketing Expert</h1>
          <h3 className="hero-subtitle">SEO | SMM | Google Ads | Content Marketing</h3>
          <p className="hero-desc">
            Certified digital marketer from Malappuram, Kerala. I help businesses improve their online visibility, connect with the right audience, and achieve measurable results.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="hero-btn hero-btn-primary">Contact me</a>
            <a href="#" className="hero-btn hero-btn-outline">My Resume</a>
          </div>
        </div>
      </header>
    </section>
  );
}
