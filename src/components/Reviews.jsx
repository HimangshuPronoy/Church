import { Star, Heart } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Marcus & Jessica T.',
    location: 'Discord Members since 2023',
    rating: 5,
    text: 'When our family first logged into Renewed Vision on Roblox, we were blown away by how welcoming the community was. Gathering for Sunday prayer service at 3 PM IST has become the highlight of our week.',
    product: 'Roblox Sanctuary',
  },
  {
    name: 'David K.',
    location: 'Discord Youth & Gaming',
    rating: 5,
    text: 'The Discord stage sermons and voice chats meet you right where you are. Gideon, Kevin and Adam lead with so much humility. The community game nights and 24/7 prayer channels are incredible.',
    product: 'Discord Fellowship',
  },
  {
    name: 'Elena & Carlos R.',
    location: 'Global Missions Partner',
    rating: 5,
    text: 'Knowing that Renewed Vision directly channels donations and support to small churches worldwide and local orphanages gives our family purpose. We love partnering with this vision.',
    product: 'Worldwide Benevolence',
  },
  {
    name: 'Hannah P.',
    location: 'Prayer Team Member',
    rating: 5,
    text: 'Stepping into the 3D prayer chapel inside Roblox during Sunday prayer at 3:00 PM IST is deeply moving. You feel God’s presence and the love of brothers and sisters from around the globe.',
    product: 'Sunday Prayer Service',
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
