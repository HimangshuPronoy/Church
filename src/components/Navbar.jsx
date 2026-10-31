import { useState } from 'react';
import { Menu, X, Heart, Cross } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'About Us', id: 'about' },
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
      {/* Top row */}
      <div className="navbar__top">
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a href="/" className="navbar__logo" onClick={(e) => handleLinkClick(e, null)}>
          <span className="navbar__logo-cross">✝</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">RENEWED VISION</span>
            <span className="navbar__logo-sub">CHURCH COMMUNITY</span>
          </div>
        </a>
        
        <div className="navbar__top-right">
          <a href="#visit" onClick={(e) => handleLinkClick(e, 'visit')} className="navbar__top-cta">
            Plan a Visit
          </a>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="navbar__nav">
        {navItems.map((item) => (
          <div key={item.label} className="navbar__nav-item">
            <a 
              href={`#${item.id}`} 
              onClick={(e) => handleLinkClick(e, item.id)} 
              className="navbar__nav-btn"
            >
              {item.label}
            </a>
          </div>
        ))}
        <a 
          href="#visit" 
          onClick={(e) => handleLinkClick(e, 'visit')} 
          className="navbar__nav-btn navbar__nav-special"
        >
          Sunday Service: 9:00 & 11:15 AM
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleLinkClick(e, 'contact')} 
          className="navbar__nav-btn navbar__nav-highlight"
        >
          Connect &amp; Prayer
        </a>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-item">
              <a 
                href={`#${item.id}`}
                className="navbar__mobile-btn"
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            </div>
          ))}
          <a href="#visit" onClick={(e) => handleLinkClick(e, 'visit')} className="navbar__mobile-btn navbar__mobile-btn--highlight">
            Plan Your Visit
          </a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="navbar__mobile-btn">
            Connect &amp; Prayer Requests
          </a>
        </div>
      )}
    </header>
  );
}
