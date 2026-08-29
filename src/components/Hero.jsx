import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const videos = [
  '/videos/hero_video_1.mp4',
  '/videos/hero_video_2.mp4',
  '/videos/hero_video_3.mp4',
  '/videos/hero_video_4.mp4'
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);

  // Auto-play next video when current one ends
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    // Ensure the current video plays
    videos.forEach((_, idx) => {
      const vid = videoRefs.current[idx];
      if (vid) {
        if (idx === currentVideo) {
          vid.currentTime = 0;
          vid.play().catch(e => console.log("Autoplay blocked:", e));
        } else {
          vid.pause();
        }
      }
    });
  }, [currentVideo]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero__carousel">
          {videos.map((src, idx) => (
            <video
              key={src}
              ref={el => videoRefs.current[idx] = el}
              className={`hero__video ${idx === currentVideo ? 'active' : ''}`}
              src={src}
              muted
              playsInline
              onEnded={handleVideoEnd}
            />
          ))}
          <div className="hero__content-overlay">
            <p className="hero__eyebrow">Designs Primés</p>
            <h1 className="hero__title">
              La Piscine de vos Rêves,<br />Conçue à la Perfection
            </h1>
            <p className="hero__subtitle">
              Sublimez votre espace extérieur avec une oasis sur mesure.<br />
              Qualité irréprochable et savoir-faire expert.
            </p>
            <a href="#booking" onClick={(e) => handleLinkClick(e, 'booking')} className="hero__cta">Commencer votre Projet</a>
          </div>

          <div className="hero__carousel-nav">
            {videos.map((_, idx) => (
              <button
                key={idx}
                className={`hero__carousel-dot ${idx === currentVideo ? 'active' : ''}`}
                onClick={() => setCurrentVideo(idx)}
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
            src="/images/nano_geometric_pool.jpg"
            alt="New Construction"
            className="hero__tile-img"
          />
          <div className="hero__tile-content">
            <span className="hero__tile-label">Nouvelle Construction</span>
            <h3 className="hero__tile-title">La perfection géométrique moderne</h3>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="hero__tile-link">Voir la Galerie →</a>
          </div>
        </div>
        <div className="hero__tile">
          <img
            src="/images/nano_spa_feature.jpg"
            alt="Spas & Features"
            className="hero__tile-img"
          />
          <div className="hero__tile-content hero__tile-content--light">
            <span className="hero__tile-label">Spas & Équipements</span>
            <h3 className="hero__tile-title">Le luxe dans les moindres détails</h3>
            <a href="#collections" onClick={(e) => handleLinkClick(e, 'collections')} className="hero__tile-link hero__tile-link--dark">Explorer les Options →</a>
          </div>
        </div>
      </div>
    </>
  );
}
