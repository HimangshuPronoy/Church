import { Instagram, Facebook, Youtube } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  'Ministries': [
    'Sunday Worship Services',
    'Life Groups & Community',
    'NextGen Kids & Youth',
    'Prayer & Healing Ministry',
    'Local Compassion & Outreach',
    'Worship & Creative Arts',
  ],
  'Get Connected': [
    'Plan Your Sunday Visit',
    'Watch Sermons Online',
    'Baptisms & New Life',
    'Volunteer & Serve Teams',
    'Online Giving & Generosity',
    'Submit Prayer Requests',
  ],
  'About Us': [
    'Our Story & Calling',
    'Founders: Gideon, Kevin & Adam',
    'Global Churches & Orphanage Fund',
    'Our Vision & Beliefs',
    'Weekly Vision Newsletter',
    'Directions & Campus Map',
  ],
};

export default function Footer() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__brand">
          <a href="/" onClick={(e) => handleLinkClick(e, null)} className="footer__logo">
            <span style={{ color: 'var(--color-accent)', marginRight: '6px' }}>✝</span>
            RENEWED VISION
            <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--color-accent)', marginTop: '2px' }}>
              CHURCH COMMUNITY
            </span>
          </a>
          <p className="footer__brand-text">
            A Christ-centered family passionately devoted to inspiring worship, biblical truth, and loving service in our community.
          </p>
          <div className="footer__contact-info" style={{ marginTop: '16px', color: '#999', fontSize: '13.5px', lineHeight: '1.6' }}>
            <p>100 Grace Way, Community Sanctuary</p>
            <p style={{ marginTop: '4px' }}>Sunday Worship: 9:00 AM &amp; 11:15 AM</p>
            <p style={{ marginTop: '4px' }}>Phone: +1 (555) 789-2026</p>
            <p style={{ marginTop: '4px' }}>Email: welcome@renewedvisionchurch.org</p>
          </div>
          <div className="footer__socials">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">
              <Youtube size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-title">{heading}</h4>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#visit"
                    onClick={(e) => handleLinkClick(e, 'visit')}
                    className="footer__link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Renewed Vision Church Community · All rights reserved.
          </p>
          <div className="footer__payment">
            <span className="footer__payment-label">Ways to Give &amp; Partner:</span>
            <div className="footer__payment-methods">
              <div className="payment-pill">Online Giving</div>
              <div className="payment-pill">Text-to-Give</div>
              <div className="payment-pill">Sunday Offering</div>
              <div className="payment-pill">Planned Gifts</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
