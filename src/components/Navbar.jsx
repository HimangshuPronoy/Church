import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Collections', id: 'collections' },
  { label: 'Nos Réalisations', id: 'portfolio' },
  { label: 'Avis', id: 'reviews' },
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
    
    // Default to top if no ID provided or element not found
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
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <a href="/" className="navbar__logo" onClick={(e) => handleLinkClick(e, null)}>
          <span className="navbar__logo-main">PISCINE MIROIR CONCEPT</span>
          <span className="navbar__logo-tm">™</span>
        </a>
        
        {/* Intentionally left empty to balance the hamburger icon if needed */}
        <div></div>
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
          href="#booking" 
          onClick={(e) => handleLinkClick(e, 'booking')} 
          className="navbar__nav-btn navbar__nav-special"
        >
          Obtenir un Devis
        </a>
        <a 
          href="#booking" 
          onClick={(e) => handleLinkClick(e, 'booking')} 
          className="navbar__nav-btn navbar__nav-special"
        >
          Centre de Design
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
          <a href="#booking" onClick={(e) => handleLinkClick(e, 'booking')} className="navbar__mobile-btn">Obtenir un Devis</a>
          <a href="#booking" onClick={(e) => handleLinkClick(e, 'booking')} className="navbar__mobile-btn">Centre de Design</a>
        </div>
      )}
    </header>
  );
}
