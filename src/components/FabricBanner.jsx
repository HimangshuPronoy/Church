import './FabricBanner.css';

export default function FabricBanner() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="fabric-banner">
      <div
        className="fabric-banner__parallax-bg"
        style={{ backgroundImage: 'url(/images/church/banner_inspiration.jpg)' }}
      />
      <div className="fabric-banner__overlay" />
      
      <div className="fabric-banner__glass-card">
        <p className="fabric-banner__eyebrow">A Place For You</p>
        <h2 className="fabric-banner__title">
          A Global Sanctuary<br />Open to the World
        </h2>
        <p className="fabric-banner__text">
          No background is too distant, and no question is off-limits. Whether you join us on PC, mobile, or console, you have a seat saved in our 3D Roblox Sanctuary and Discord server every Sunday at 3:00 PM IST.
        </p>
        <div className="fabric-banner__actions">
          <a
            href="#visit"
            onClick={(e) => handleLinkClick(e, 'visit')}
            className="fabric-banner__btn fabric-banner__btn--primary"
          >
            Join on Roblox &amp; Discord
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="fabric-banner__btn fabric-banner__btn--secondary"
          >
            Connect With Pastors
          </a>
        </div>
      </div>
    </section>
  );
}
