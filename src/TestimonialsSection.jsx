// TestimonialsSection.jsx
import './TestimonialsSection.css';

const testimonials = [
    {
        name: 'Fayiz',
        title: 'Entrepreneur',
        image: 'https://deepakkk.com/wp-content/uploads/2024/09/best-digital-marketer-in-malappuram-kerala-india-225x300.webp',
        text: 'An awesome Digital marketer from Malappuram. He has absolutely upped my online visibility with the implementation of his SEO and Google Ads strategies. Highly professional, knowledgeable, result-driven, and an even higher recommendation for the service.'
    },
    {
        name: 'Manu Pradhap',
        title: 'Software Developer',
        image: 'https://deepakkk.com/wp-content/uploads/2024/09/best-freelance-digital-marketer-in-malappuram.webp',
        text: 'Deepak\'s Digital marketing expert in Malappuram has significantly boosted my business online. His SEO strategies and social media marketing delivered impressive results. I will recommend his services to anyone seeking digital marketing solutions!'
    },
    {
        name: 'Godwin',
        title: 'Entrepreneur',
        image: 'https://deepakkk.com/wp-content/uploads/2024/09/best-freelance-digital-marketer-in-malappuram-kerala.webp',
        text: 'Deepak, a dedicated Digital Marketer in Malappuram, delivered great results for my business. His expertise in SEO and social media marketing improved our online reach. I highly recommend him for digital marketing service.'
    },
    {
        name: 'Mahesh',
        title: 'Designer',
        image: 'https://deepakkk.com/wp-content/uploads/2024/09/top-digital-marketer-in-malappuram-kerala-225x300.webp',
        text: 'Working with Deepak, a talented Digital Marketer in Malappuram, was a game-changer for my business. His deep understanding of SEO and social media marketing helped improve my website\'s ranking and boosted traffic. Thanks to his expertise in Google Ads, we saw a noticeable increase in leads and conversions.'
    },
    {
        name: 'Shani Alan',
        title: 'Mern Stack Engineer',
        image: 'https://deepakkk.com/wp-content/uploads/2024/09/top-digital-marketer-in-malappuram-kerala-225x300.webp',
        text: 'Working with this digital marketer has been an excellent experience. Their strategies were smart, well-executed, and delivered real improvements in visibility and engagement. The professionalism, creativity, and attention to detail made the entire process smooth and effective. Truly the Best Digital Marketer I’ve worked with, and I highly recommend their services to anyone looking to grow online.'
    },
    {
        name: 'Manu',
        title: 'Mearn Stack Developer',
        image: 'https://manuamarnath.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-img.7d5f38b4.png&w=1920&q=75',
        text: 'Working with this digital marketer was a game-changer. Their strategies were practical, data-driven, and delivered results faster than I expected. They have an excellent eye for detail and know exactly how to position a brand online. Truly the Best Digital Marketer I’ve collaborated with, and I would recommend them to anyone serious about growth.'
    }
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-grid">
                {testimonials.map((t, idx) => (
                    <div className="testimonial-card" key={idx}>
                        <img src={t.image} alt={t.name} className="testimonial-img" />
                        <blockquote>“{t.text}”</blockquote>
                        <div className="testimonial-meta">
                            <span className="testimonial-name">{t.name}</span>
                            <span className="testimonial-title">{t.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
