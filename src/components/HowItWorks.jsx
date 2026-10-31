import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Join Our Discord Server',
    desc: 'Jump into our friendly Discord community to get the verified Roblox sanctuary game link, meet founders Gideon, Kevin & Adam, and access 24/7 prayer channels.',
  },
  {
    number: '02',
    title: 'Launch Roblox & Step Into the Sanctuary',
    desc: 'Join the Renewed Vision 3D Church Sanctuary on PC, mobile, or console. Customize your avatar, explore the prayer chapel, and find a seat.',
  },
  {
    number: '03',
    title: 'Sunday Prayer Service at 3:00 PM IST',
    desc: 'Every Sunday at 3:00 PM IST, gather with believers worldwide for live uplifting praise, communal prayer, and an inspiring Gospel message streamed live.',
  },
  {
    number: '04',
    title: 'Voice Hangouts & Community Game Nights',
    desc: 'Stay connected after service on Discord voice stages for fellowship, Life Group discussions, community gaming events, and global missions updates.',
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
          <p className="how__eyebrow">Roblox &amp; Discord Experience</p>
          <h2 className="how__title">How to join our Sunday gathering</h2>
          <p className="how__sub">
            Gathering together is effortless and accessible from anywhere in the world. Here is how you can step into our 3D Roblox Sanctuary and Discord community this Sunday at 3:00 PM IST.
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
            <div className="how__cta-wrap" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://discord.gg/Un68FwruM"
                target="_blank"
                rel="noopener noreferrer"
                className="how__cta"
              >
                Join Discord Server
              </a>
              <a
                href="https://www.roblox.com/games/87206202638986"
                target="_blank"
                rel="noopener noreferrer"
                className="how__cta"
                style={{ background: '#111', borderColor: '#111' }}
              >
                Enter Roblox Game
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
