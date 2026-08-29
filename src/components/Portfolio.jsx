import './Portfolio.css';

const placeholders = [
  { id: 1, span: 'col-span-2 row-span-2' },
  { id: 2, span: 'col-span-1 row-span-1' },
  { id: 3, span: 'col-span-1 row-span-1' },
  { id: 4, span: 'col-span-2 row-span-1' },
  { id: 5, span: 'col-span-1 row-span-2' },
  { id: 6, span: 'col-span-1 row-span-1' },
  { id: 7, span: 'col-span-1 row-span-1' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <p className="portfolio-eyebrow">Notre Portfolio</p>
        <h2 className="portfolio-title">Nos Réalisations</h2>
        <p className="portfolio-sub">Découvrez un aperçu de nos projets précédents. Des créations uniques qui transforment l'espace extérieur en véritable oasis.</p>
      </div>

      <div className="portfolio-grid">
        {placeholders.map((item) => (
          <div key={item.id} className={`portfolio-item ${item.span}`}>
            <div className="portfolio-placeholder">
              <span className="portfolio-placeholder-text">À venir</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
