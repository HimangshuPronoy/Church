import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  'Services': [
    'Piscines Sur Mesure',
    'Spas & Bains à Remous',
    'Rénovation de Piscines',
    'Aménagement Extérieur',
    'Entretien',
    'Piscines Commerciales',
  ],
  'Ressources': [
    'Galerie de Design',
    'Guide des Matériaux',
    'Options de Financement',
    'Infos Permis',
    'Conseils d\'Entretien',
    'FAQ',
  ],
  'Entreprise': [
    'À Propos de Piscine Miroir Concept',
    'Notre Processus',
    'Témoignages',
    'Prix & Reconnaissances',
    'Carrières',
    'Nous Contacter',
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main footer */}
      <div className="footer__main">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            PISCINE MIROIR CONCEPT<sup>™</sup>
          </a>
          <p className="footer__brand-text">
            Concept de piscines miroir et à débordement. Design et construction générale.
          </p>
          <div className="footer__contact-info" style={{ marginTop: '16px', color: '#888', fontSize: '13.5px', lineHeight: '1.6' }}>
            <p>1560 Rte de Quarante Sous<br />78630 Orgeval</p>
            <p style={{ marginTop: '8px' }}>Tél : 06 78 53 37 52</p>
          </div>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="footer__social-link">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="footer__social-link">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="footer__social-link">
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="footer__social-link">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-title">{heading}</h4>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
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
            © {new Date().getFullYear()} Piscine Miroir Concept™ · Tous droits réservés
          </p>
          <div className="footer__payment">
            <span className="footer__payment-label">Nous acceptons :</span>
            <div className="footer__payment-methods">
              <div className="payment-pill">Visa</div>
              <div className="payment-pill">Mastercard</div>
              <div className="payment-pill">Apple Pay</div>
              <div className="payment-pill">Google Pay</div>
              <div className="payment-pill">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
