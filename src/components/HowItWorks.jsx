import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'A Warm Welcome & Fresh Coffee',
    desc: 'From the moment you step into our atrium, our welcome team is ready to greet you, answer questions, and treat you to complimentary coffee.',
  },
  {
    number: '02',
    title: 'Safe & Engaging NextGen Kids',
    desc: 'If you bring your family, our secure check-in gives parents peace of mind while kids experience fun, age-appropriate bible adventures.',
  },
  {
    number: '03',
    title: 'Inspiring Worship & Practical Truth',
    desc: 'Experience 70 minutes of authentic, modern worship music and an inspiring, biblically grounded message that speaks to your everyday life.',
  },
  {
    number: '04',
    title: 'Connection & Community Lounge',
    desc: 'After the service, meet our pastors, grab your first-time visitor welcome gift, and discover simple ways to join a Life Group.',
  },
];

export default function HowItWorks() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <p className="how__eyebrow">Visiting Renewed Vision</p>
          <h2 className="how__title">What to expect on your first Sunday</h2>
          <p className="how__sub">
            Walking through church doors shouldn’t feel intimidating. Here is the seamless, welcoming experience waiting for you and your family.
          </p>
        </div>
        
        <div className="how__grid">
          <div className="how__visual">
            <img
              src="/images/church/hero_fellowship.jpg"
              alt="Community Fellowship at Renewed Vision Church"
              className="how__img"
            />
          </div>
          
          <div className="how__steps">
            {steps.map((s) => (
              <div key={s.number} className="how__step">
                <div className="how__step-number">{s.number}</div>
                <h3 className="how__step-title">{s.title}</h3>
                <p className="how__step-desc">{s.desc}</p>
              </div>
            ))}
            <div className="how__cta-wrap">
              <a
                href="#visit"
                onClick={(e) => handleLinkClick(e, 'visit')}
                className="how__cta"
              >
                Plan Your Sunday Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
