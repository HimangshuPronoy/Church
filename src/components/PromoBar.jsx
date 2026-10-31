import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PromoBar.css';

const promos = [
  { text: '🎮 Gathering on Roblox & Discord Server · Sunday Prayer Service at 3:00 PM IST', link: 'https://www.roblox.com/games/87206202638986' },
  { text: '💬 Join our Official Discord Server for 24/7 Fellowship, Prayer & Announcements', link: 'https://discord.gg/Un68FwruM' },
  { text: '✝ Renewed Vision Church Community · Preaching the Gospel & Transforming Lives in the Metaverse', link: '#about' },
  { text: '🌍 Supporting Small Churches Worldwide & Orphanages Through Our Benevolence Fund', link: '#about' },
];

export default function PromoBar() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  if (!visible) return null;

  const prev = () => setIndex((i) => (i - 1 + promos.length) % promos.length);
  const next = () => setIndex((i) => (i + 1) % promos.length);

  const current = promos[index];

  return (
    <div className="promo-bar">
      <button className="promo-bar__nav" onClick={prev} aria-label="Previous">
        <ChevronLeft size={14} />
      </button>
      {current.link.startsWith('http') ? (
        <a href={current.link} target="_blank" rel="noopener noreferrer" className="promo-bar__text promo-bar__link">
          {current.text}
        </a>
      ) : (
        <a href={current.link} className="promo-bar__text promo-bar__link">
          {current.text}
        </a>
      )}
      <button className="promo-bar__nav" onClick={next} aria-label="Next">
        <ChevronRight size={14} />
      </button>
      <button className="promo-bar__close" onClick={() => setVisible(false)} aria-label="Close">
        <X size={14} />
      </button>
    </div>
  );
}
