import { Instagram, Youtube } from 'lucide-react';
import './Footer.css';

function DiscordIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function RobloxIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.165 0L0 18.835 18.835 24 24 5.165 5.165 0zm10.27 14.175l-4.945-1.325 1.325-4.945 4.945 1.325-1.325 4.945z"/>
    </svg>
  );
}

const footerLinks = {
  'Gatherings': [
    'Sunday Prayer (3:00 PM IST)',
    'Roblox 3D Sanctuary Experience',
    'Discord Stage & Voice Fellowship',
    '24/7 Prayer Channels',
    'NextGen Youth & Community',
    'Community Game Nights',
  ],
  'Get Connected': [
    'Join Official Discord Server',
    'Enter Roblox Church Game',
    'Connect With Founders',
    'Submit Prayer Requests',
    'Worldwide Church & Orphanage Fund',
    'Volunteer & Serve Team',
  ],
  'About Leadership': [
    'Who We Are & Calling',
    'Founders: Gideon & Kevin',
    'Co-Founder: Adam',
    'Why We Created This Church',
    'Support for Global Orphanages',
    'Small Churches Worldwide Support',
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
              ROBLOX &amp; DISCORD CHURCH
            </span>
          </a>
          <p className="footer__brand-text">
            A Christ-centered global family meeting on Roblox and Discord, passionately devoted to preaching the Gospel, spiritual renewal, and helping small churches and orphanages worldwide.
          </p>
          <div className="footer__contact-info" style={{ marginTop: '16px', color: '#999', fontSize: '13.5px', lineHeight: '1.6' }}>
            <p><strong>Place:</strong> Roblox Sanctuary Experience &amp; Discord Server</p>
            <p style={{ marginTop: '4px' }}><strong>Sunday Prayer:</strong> Sundays at 3:00 PM IST</p>
            <p style={{ marginTop: '4px' }}><strong>Founders:</strong> Gideon &amp; Kevin · <strong>Co-Founder:</strong> Adam</p>
            <p style={{ marginTop: '4px' }}><strong>Email:</strong> welcome@renewedvisionchurch.org</p>
          </div>
          <div className="footer__socials">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord Server" className="footer__social-link" title="Discord Server">
              <DiscordIcon size={18} />
            </a>
            <a href="https://www.roblox.com" target="_blank" rel="noopener noreferrer" aria-label="Roblox Sanctuary" className="footer__social-link" title="Roblox Church">
              <RobloxIcon size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link" title="YouTube">
              <Youtube size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link" title="Instagram">
              <Instagram size={18} />
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
            © {new Date().getFullYear()} Renewed Vision Church Community · Roblox &amp; Discord Server · All rights reserved.
          </p>
          <div className="footer__payment">
            <span className="footer__payment-label">Benevolence &amp; Missions:</span>
            <div className="footer__payment-methods">
              <div className="payment-pill">Small Churches Worldwide</div>
              <div className="payment-pill">Orphanage Support</div>
              <div className="payment-pill">Benevolence Fund</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
