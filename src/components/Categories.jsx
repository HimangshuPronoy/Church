import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    title: 'Piscines à Débordement',
    sub: 'Se fondent parfaitement avec l\'horizon',
    image: '/images/nano_infinity_pool.jpg',
    link: '/',
  },
  {
    title: 'Piscines Géométriques',
    sub: 'Lignes épurées et modernes pour un look contemporain',
    image: '/images/nano_geometric_pool.jpg',
    link: '/',
  },
  {
    title: 'Piscines Libres',
    sub: 'Design naturel, style lagon',
    image: '/images/nano_freeform_pool.jpg',
    link: '/',
  },
  {
    title: 'Spas & Bains à Remous',
    sub: 'Détente absolue dans votre jardin',
    image: '/images/nano_spa_feature.jpg',
    link: '/',
  },
];

export default function Categories() {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="collections" className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Styles de Piscines</p>
          <h2 className="categories__title">Trouvez la piscine parfaite</h2>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <a key={cat.title} href={cat.link} className="cat-card" onClick={handleLinkClick}>
              <img src={cat.image} alt={cat.title} className="cat-card__img" />
              <div className="cat-card__overlay">
                <h3 className="cat-card__title">{cat.title}</h3>
                <p className="cat-card__sub">{cat.sub}</p>
                <span className="cat-card__shop">Voir la Galerie →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
