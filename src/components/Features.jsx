import './Features.css';

const features = [
  {
    icon: '✦',
    title: 'Conception 3D Sur Mesure',
    desc: 'Chaque piscine est méticuleusement conçue en 3D pour que vous puissiez voir exactement à quoi elle ressemblera dans votre jardin.',
  },
  {
    icon: '◈',
    title: 'Matériaux Haut de Gamme',
    desc: "Nous n'utilisons que les meilleurs carrelages, margelles et finitions pour garantir que votre piscine résiste à l'épreuve du temps.",
  },
  {
    icon: '⬡',
    title: 'Plus de 1 500 Projets Réalisés',
    desc: 'La confiance de propriétaires qui apprécient la qualité, la précision et une expérience de construction sans faille.',
  },
  {
    icon: '◎',
    title: 'Savoir-Faire Expert',
    desc: 'Nos artisans expérimentés traitent chaque détail, de l\'excavation à la finition finale avec le plus grand soin.',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        <div className="features__header">
          <p className="features__eyebrow">Pourquoi Piscine Miroir Concept</p>
          <h2 className="features__title">
            Design époustouflant.<br />Savoir-faire expert.<br />Qualité durable.
          </h2>
        </div>
        <div className="features__grid">
          {features.map((f) => (
            <div key={f.title} className="features__card">
              <span className="features__card-icon">{f.icon}</span>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
