import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    image: '/images/church/hero_worship.jpg',
    eyebrow: 'Roblox & Discord Church Community',
    title: 'A Place to Belong, Believe & Flourish',
    subtitle: 'We are a vibrant, Christ-centered community meeting on Roblox and Discord, passionate about preaching the Gospel, spiritual renewal, and helping others worldwide.',
    ctaPrimary: { label: 'Join Discord Server', target: 'visit' },
    ctaSecondary: { label: 'Explore Roblox Church', target: 'visit' },
  },
  {
    image: '/images/church/hero_fellowship.jpg',
    eyebrow: 'Discord Fellowship & Life Groups',
    title: 'You Were Never Meant to Walk Alone',
    subtitle: 'Find genuine friendships, 24/7 prayer channels, voice stages, and life-changing encouragement in our active Discord community.',
    ctaPrimary: { label: 'Join Discord Community', target: 'visit' },
    ctaSecondary: { label: 'Community Life', target: 'gallery' },
  },
  {
    image: '/images/church/hero_sanctuary.jpg',
    eyebrow: 'Sunday Prayer Service · 3:00 PM IST',
    title: 'Encounter God in the Metaverse',
    subtitle: 'Gather with us every Sunday at 3:00 PM IST inside our Roblox Church Sanctuary and Discord Stage for uplifting praise, biblical truth, and heartfelt prayer.',
    ctaPrimary: { label: 'Roblox & Discord Details', target: 'visit' },
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
            <span className="hero__tile-label">Roblox Sanctuary · Sundays at 3:00 PM IST</span>
            <h3 className="hero__tile-title">Encounter God in our 3D Roblox Sanctuary &amp; Discord Stage</h3>
            <a href="#visit" onClick={(e) => handleLinkClick(e, 'visit')} className="hero__tile-link">
              How to Join on Roblox →
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
            <span className="hero__tile-label">Discord Community &amp; Fellowship</span>
            <h3 className="hero__tile-title">24/7 Prayer Channels &amp; Voice Hangouts</h3>
            <a href="#visit" onClick={(e) => handleLinkClick(e, 'visit')} className="hero__tile-link hero__tile-link--dark">
              Join Discord Server →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
