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
            href="https://www.roblox.com/games/87206202638986"
            target="_blank"
            rel="noopener noreferrer"
            className="fabric-banner__btn fabric-banner__btn--primary"
          >
            Launch Roblox Sanctuary
          </a>
          <a
            href="https://discord.gg/Un68FwruM"
            target="_blank"
            rel="noopener noreferrer"
            className="fabric-banner__btn fabric-banner__btn--secondary"
          >
            Join Discord Server
          </a>
        </div>
      </div>
    </section>
  );
}
