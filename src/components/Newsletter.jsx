import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <p className="newsletter__eyebrow">Restez Informé</p>
          <h2 className="newsletter__title">Rejoignez la communauté Piscine Miroir Concept</h2>
          <p className="newsletter__sub">
            Recevez des offres exclusives, des guides de conception d'aménagement extérieur et de nouvelles inspirations de projets directement dans votre boîte de réception.
          </p>
        </div>
        <div className="newsletter__form-wrap">
          {submitted ? (
            <div className="newsletter__success">
              <span className="newsletter__success-icon">✓</span>
              <p>Merci ! Vous êtes maintenant inscrit.</p>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="Entrez votre adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__btn">S'abonner</button>
            </form>
          )}
          <p className="newsletter__disclaimer">
            En vous abonnant, vous acceptez notre Politique de Confidentialité. Désabonnez-vous à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
