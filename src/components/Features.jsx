import './Features.css';

const features = [
  {
    icon: '✦',
    title: 'Christ-Centered Worship',
    desc: 'Uplifting, heartfelt praise that draws hearts closer to God through contemporary and reflective worship.',
  },
  {
    icon: '◈',
    title: 'Living Biblical Truth',
    desc: 'Biblically faithful, practical sermons that inspire spiritual transformation and daily purpose.',
  },
  {
    icon: '⬡',
    title: 'Warm & Inclusive Family',
    desc: 'A multigenerational community where everyone from young seekers to mature believers has a true home.',
  },
  {
    icon: '◎',
    title: 'Compassionate Outreach',
    desc: 'Putting love into action with neighborhood service projects, local food drives, and care initiatives.',
  },
];

export default function Features() {
  return (
    <section id="values" className="features">
      <div className="features__inner">
        <div className="features__header">
          <p className="features__eyebrow">Our Core Values</p>
          <h2 className="features__title">
            Rooted in Christ.<br />Bound in Love.<br />Sent to Serve.
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
