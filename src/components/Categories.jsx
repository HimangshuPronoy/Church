import './Categories.css';

const categories = [
  {
    title: 'Worship & Creative Arts',
    sub: 'Encountering God through passionate praise and musicianship',
    image: '/images/church/ministry_worship.jpg',
    link: '#visit',
    actionText: 'Join Worship Experience →',
  },
  {
    title: 'Life Groups & Fellowship',
    sub: 'Authentic friendships, weekly study, and walking together in faith',
    image: '/images/church/ministry_lifegroups.jpg',
    link: '#contact',
    actionText: 'Find a Group →',
  },
  {
    title: 'NextGen Youth & Kids',
    sub: 'Inspiring young hearts to grow bold in faith, hope, and joy',
    image: '/images/church/ministry_youth.jpg',
    link: '#visit',
    actionText: 'NextGen Details →',
  },
  {
    title: 'Compassion & Outreach',
    sub: 'Serving our city, feeding families, and sharing Christ’s love',
    image: '/images/church/ministry_outreach.jpg',
    link: '#contact',
    actionText: 'Get Involved →',
  },
];

export default function Categories() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (targetId && targetId.startsWith('#')) {
      const el = document.getElementById(targetId.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="ministries" className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Ministries & Communities</p>
          <h2 className="categories__title">Find your place to connect and grow</h2>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.link}
              className="cat-card"
              onClick={(e) => handleLinkClick(e, cat.link)}
            >
              <img src={cat.image} alt={cat.title} className="cat-card__img" />
              <div className="cat-card__overlay">
                <h3 className="cat-card__title">{cat.title}</h3>
                <p className="cat-card__sub">{cat.sub}</p>
                <span className="cat-card__shop">{cat.actionText}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
