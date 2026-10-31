import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    image: '/images/church/hero_worship.jpg',
    eyebrow: 'Welcome to Renewed Vision Church Community',
    title: 'A Place to Belong, Believe & Flourish',
    subtitle: 'We are a vibrant, Christ-centered family devoted to authentic worship, transformative faith, and loving service in our city.',
    ctaPrimary: { label: 'Plan Your Visit', target: 'visit' },
    ctaSecondary: { label: 'Explore Ministries', target: 'ministries' },
  },
  {
    image: '/images/church/hero_fellowship.jpg',
    eyebrow: 'Authentic Community & Care',
    title: 'You Were Never Meant to Walk Alone',
    subtitle: 'Find genuine friendships, warm coffee & fellowship, and life-changing encouragement in our weekly Life Groups.',
    ctaPrimary: { label: 'Join a Life Group', target: 'ministries' },
    ctaSecondary: { label: 'Community Life', target: 'gallery' },
  },
  {
    image: '/images/church/hero_sanctuary.jpg',
    eyebrow: 'Sunday Prayer Service · 3:00 PM IST',
    title: 'Encounter God’s Transforming Grace',
    subtitle: 'Gather with us every Sunday at 3:00 PM IST for our uplifting Prayer Service, inspiring biblical truth, and heartfelt prayer. In-person & live online.',
    ctaPrimary: { label: 'Service Times & Location', target: 'visit' },
    ctaSecondary: { label: 'Prayer & Connect', target: 'contact' },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const active = slides[currentSlide];

  return (
    <>
      <section className="hero">
        <div className="hero__carousel">
          {slides.map((s, idx) => (
            <div
              key={s.image}
              className={`hero__slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
              role="img"
              aria-label={s.title}
            >
              <div className="hero__slide-backdrop" />
            </div>
          ))}

          <div className="hero__content-overlay">
            <p className="hero__eyebrow">{active.eyebrow}</p>
            <h1 className="hero__title">{active.title}</h1>
            <p className="hero__subtitle">{active.subtitle}</p>
            
            <div className="hero__actions">
              <a
                href={`#${active.ctaPrimary.target}`}
                onClick={(e) => handleLinkClick(e, active.ctaPrimary.target)}
                className="hero__cta hero__cta--primary"
              >
                {active.ctaPrimary.label}
              </a>
              <a
                href={`#${active.ctaSecondary.target}`}
                onClick={(e) => handleLinkClick(e, active.ctaSecondary.target)}
                className="hero__cta hero__cta--secondary"
              >
                {active.ctaSecondary.label}
              </a>
            </div>
          </div>

          <div className="hero__carousel-nav">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`hero__carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sub-hero tiles */}
      <div className="hero__tiles">
        <div className="hero__tile hero__tile--dark">
          <img
            src="/images/church/hero_sanctuary.jpg"
            alt="Sunday Worship Sanctuary"
            className="hero__tile-img"
          />
          <div className="hero__tile-content">
            <span className="hero__tile-label">Sunday Prayer Service · 3:00 PM IST</span>
            <h3 className="hero__tile-title">Encounter God in uplifting worship &amp; prayer</h3>
            <a href="#visit" onClick={(e) => handleLinkClick(e, 'visit')} className="hero__tile-link">
              Plan Your Sunday Visit →
            </a>
          </div>
        </div>
        <div className="hero__tile">
          <img
            src="/images/church/hero_fellowship.jpg"
            alt="Life Groups and Fellowship"
            className="hero__tile-img"
          />
          <div className="hero__tile-content hero__tile-content--light">
            <span className="hero__tile-label">Community & Connection</span>
            <h3 className="hero__tile-title">Find your family in small groups</h3>
            <a href="#ministries" onClick={(e) => handleLinkClick(e, 'ministries')} className="hero__tile-link hero__tile-link--dark">
              Explore Life Groups →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
