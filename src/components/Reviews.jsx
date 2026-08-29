import { Star } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Orgeval, FR',
    rating: 5,
    text: 'Du concept initial à la révélation finale, l\'équipe a été exceptionnelle. Notre nouvelle piscine à débordement a complètement transformé notre jardin en une retraite luxueuse.',
    product: 'Piscine à Débordement Sur Mesure',
  },
  {
    name: 'James D.',
    location: 'Orgeval, FR',
    rating: 5,
    text: 'Une attention aux détails incroyable. Le spa personnalisé qu\'ils ont conçu s\'intègre parfaitement à notre paysage existant. Je recommande vivement leur savoir-faire.',
    product: 'Spa Intégré',
  },
  {
    name: 'Elena R.',
    location: 'Orgeval, FR',
    rating: 5,
    text: 'Professionnels, ponctuels et transparents tout au long du processus. La conception géométrique correspond exactement à l\'esthétique moderne que nous recherchions.',
    product: 'Piscine Géométrique',
  },
  {
    name: 'Sophie L.',
    location: 'Orgeval, FR',
    rating: 5,
    text: 'Une expérience de construction fantastique. L\'équipe de Piscine Miroir Concept a fait preuve d\'un grand professionnalisme, et notre piscine lagon est le joyau de notre maison.',
    product: 'Piscine Lagon & Spa',
  }
];

function StarRow({ count }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#c8a96e' : 'none'}
          stroke={i < count ? '#c8a96e' : '#ccc'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="reviews__inner">
        
        {/* Header */}
        <div className="reviews__header">
          <p className="reviews__eyebrow">Histoires de Clients</p>
          <h2 className="reviews__title">Ce que disent nos clients</h2>
        </div>

        {/* Infinite Marquee */}
        <div className="reviews__marquee">
          <div className="reviews__marquee-track">
            {/* Render array twice for infinite loop effect */}
            {[...reviews, ...reviews, ...reviews].map((r, i) => (
              <div key={`${r.name}-${i}`} className="review-card">
                <StarRow count={r.rating} />
                <p className="review-card__text">"{r.text}"</p>
                <div className="review-card__footer">
                  <div>
                    <p className="review-card__name">{r.name}</p>
                    <p className="review-card__location">{r.location}</p>
                  </div>
                  <span className="review-card__product">{r.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews__cta-wrap">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews__trustpilot-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Trustpilot_Logo_%282022%29.svg"
              alt="Trustpilot"
              className="reviews__trustpilot-logo"
            />
            <span>Lire tous les avis sur Trustpilot</span>
          </a>
        </div>
      </div>
    </section>
  );
}
