import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PromoBar.css';

const promos = [
  'Join Us This Sunday at 9:00 AM & 11:15 AM · In-Person & Online Livestream',
  'Welcome to Renewed Vision Church Community · A Place to Belong & Grow in Grace',
  'Find Your People · Autumn Life Groups Are Now Open for Registration',
  'Midweek Prayer & Worship Every Wednesday at 7:00 PM',
];

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  if (!visible) return null;

  const prev = () => setIndex((i) => (i - 1 + promos.length) % promos.length);
  const next = () => setIndex((i) => (i + 1) % promos.length);

  return (
    <div className="promo-bar">
      <button className="promo-bar__nav" onClick={prev} aria-label="Previous">
        <ChevronLeft size={14} />
      </button>
      <p className="promo-bar__text">{promos[index]}</p>
      <button className="promo-bar__nav" onClick={next} aria-label="Next">
        <ChevronRight size={14} />
      </button>
      <button className="promo-bar__close" onClick={() => setVisible(false)} aria-label="Close">
        <X size={14} />
      </button>
    </div>
  );
}
