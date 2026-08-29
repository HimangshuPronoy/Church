import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Consultation & Vision',
    desc: 'Nous commençons par comprendre votre vision, votre mode de vie et par évaluer l\'espace de votre jardin.',
  },
  {
    number: '02',
    title: 'Conception 3D & Permis',
    desc: 'Nos concepteurs créent un modèle 3D réaliste. Une fois approuvé, nous nous occupons de tous les permis de construire nécessaires.',
  },
  {
    number: '03',
    title: 'Construction & Finitions',
    desc: 'Nos artisans qualifiés creusent, construisent et appliquent des finitions haut de gamme à votre nouvelle piscine.',
  },
  {
    number: '04',
    title: 'Inspection Finale & Profitez',
    desc: 'Nous vous livrons votre oasis achevée, en nous assurant que tout fonctionne parfaitement pour que vous puissiez plonger.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <p className="how__eyebrow">Le Processus</p>
          <h2 className="how__title">Comment ça marche</h2>
          <p className="how__sub">Construire la piscine de vos rêves est plus facile que vous ne le pensez, avec une approche étape par étape sans faille.</p>
        </div>
        
        <div className="how__grid">
          <div className="how__visual">
            <img src="/images/nano_spa_feature.jpg" alt="Construction Process" className="how__img" />
          </div>
          
          <div className="how__steps">
            {steps.map((s, i) => (
              <div key={s.number} className="how__step">
                <div className="how__step-number">{s.number}</div>
                <h3 className="how__step-title">{s.title}</h3>
                <p className="how__step-desc">{s.desc}</p>
              </div>
            ))}
            <div className="how__cta-wrap">
              <a href="#" className="how__cta">Réserver une consultation gratuite</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
