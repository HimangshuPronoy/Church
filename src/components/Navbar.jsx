import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function DiscordIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function RobloxIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.165 0L0 18.835 18.835 24 24 5.165 5.165 0zm10.27 14.175l-4.945-1.325 1.325-4.945 4.945 1.325-1.325 4.945z"/>
    </svg>
  );
}

const navItems = [
  { label: 'About Us', id: 'about' },
  { label: 'Roblox & Discord', id: 'visit' },
  { label: 'Ministries', id: 'ministries' },
  { label: 'Community Life', id: 'gallery' },
  { label: 'Stories', id: 'stories' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Brand Logo on Left */}
        <a href="/" className="navbar__logo" onClick={(e) => handleLinkClick(e, null)}>
          <span className="navbar__logo-cross">✝</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">RENEWED VISION</span>
            <span className="navbar__logo-sub">ROBLOX &amp; DISCORD CHURCH</span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="navbar__nav">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={`#${item.id}`} 
              onClick={(e) => handleLinkClick(e, item.id)} 
              className="navbar__nav-btn"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar__actions">
          <span className="navbar__service-badge">
            Sunday Prayer: 3:00 PM IST
          </span>

          <a 
            href="#visit" 
            onClick={(e) => handleLinkClick(e, 'visit')} 
            className="navbar__btn navbar__btn--discord"
            title="Join Our Discord Server"
          >
            <DiscordIcon />
            <span>Discord Server</span>
          </a>

          <a 
            href="#visit" 
            onClick={(e) => handleLinkClick(e, 'visit')} 
            className="navbar__btn navbar__btn--roblox"
            title="Join Roblox Church Sanctuary"
          >
            <RobloxIcon />
            <span>Roblox Church</span>
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          <div className="navbar__mobile-badge">
            Sunday Prayer Service: 3:00 PM IST (Roblox &amp; Discord)
          </div>

          {navItems.map((item) => (
            <a 
              key={item.label}
              href={`#${item.id}`}
              className="navbar__mobile-btn"
              onClick={(e) => handleLinkClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}

          <div className="navbar__mobile-actions">
            <a 
              href="#visit" 
              onClick={(e) => handleLinkClick(e, 'visit')} 
              className="navbar__btn navbar__btn--discord navbar__btn--full"
            >
              <DiscordIcon />
              <span>Join Discord Server</span>
            </a>
            <a 
              href="#visit" 
              onClick={(e) => handleLinkClick(e, 'visit')} 
              className="navbar__btn navbar__btn--roblox navbar__btn--full"
            >
              <RobloxIcon />
              <span>Join Roblox Sanctuary</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
