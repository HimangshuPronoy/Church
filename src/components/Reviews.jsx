import { Star, Heart } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Marcus & Jessica T.',
    location: 'Church Members since 2022',
    rating: 5,
    text: 'When our family first walked through the doors of Renewed Vision, we were looking for a place where our children could flourish spiritually and where we could build real, lasting friendships. We found a true spiritual home.',
    product: 'Family & Life Groups',
  },
  {
    name: 'David K.',
    location: 'Young Adults Ministry',
    rating: 5,
    text: 'The worship is authentic and the sermons meet you right where you are. Going through college transitions was tough, but this community surrounded me with prayer, genuine grace, and consistent mentorship.',
    product: 'NextGen Young Adults',
  },
  {
    name: 'Elena & Carlos R.',
    location: 'Life Group Leaders',
    rating: 5,
    text: 'Hosting a Life Group has been one of the greatest blessings of our lives. Opening our home to break bread, pray together, and share joys and sorrows is what the church was always meant to be.',
    product: 'Life Groups & Prayer',
  },
  {
    name: 'Hannah P.',
    location: 'Outreach Volunteer',
    rating: 5,
    text: 'Serving in our weekend food pantry and community outreach opened my eyes to how much difference a loving church family can make. Renewed Vision puts love into action every single week.',
    product: 'Community Compassion',
  },
];

function StarRow({ count }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? '#c99e32' : 'none'}
          stroke={i < count ? '#c99e32' : '#ccc'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="stories" className="reviews">
      <div className="reviews__inner">
        {/* Header */}
        <div className="reviews__header">
          <p className="reviews__eyebrow">Stories of Grace &amp; Faith</p>
          <h2 className="reviews__title">Voices from our church community</h2>
        </div>

        {/* Infinite Marquee */}
        <div className="reviews__marquee">
          <div className="reviews__marquee-track">
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
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="reviews__community-link"
          >
            <Heart size={16} color="var(--color-accent)" />
            <span>Have a testimony to share or need prayer? Connect with our team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
