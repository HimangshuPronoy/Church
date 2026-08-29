import { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import './BookingForm.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Piscine Sur Mesure',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Nouvelle demande depuis le site web:\n\n*Nom:* ${formData.name}\n*Téléphone:* ${formData.phone}\n*Service:* ${formData.service}\n\n*Message:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Business WhatsApp number: 06 78 53 37 52 -> +33 6 78 53 37 52
    const waNumber = '33678533752';
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <section id="booking" className="booking">
      <div className="booking__inner">
        <div className="booking__content">
          <p className="booking__eyebrow">Réservez votre consultation</p>
          <h2 className="booking__title">Prêt à construire votre oasis ?</h2>
          <p className="booking__sub">
            Discutez directement de votre projet avec notre équipe. Remplissez le formulaire ci-dessous et nous recevrons votre demande instantanément sur WhatsApp.
          </p>
          
          <div className="booking__contact-info">
            <div className="booking__info-item">
              <Phone size={20} className="booking__info-icon" />
              <span>06 78 53 37 52</span>
            </div>
          </div>
        </div>

        <div className="booking__form-wrapper">
          <form className="booking__form" onSubmit={handleSubmit}>
            <div className="booking__form-group">
              <label htmlFor="name" className="booking__label">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                className="booking__input"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="booking__form-group">
              <label htmlFor="phone" className="booking__label">Numéro de téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="booking__input"
                placeholder="Votre numéro"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="booking__form-group">
              <label htmlFor="service" className="booking__label">Type de projet</label>
              <select
                id="service"
                name="service"
                className="booking__input booking__select"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Piscine Sur Mesure">Piscine Sur Mesure</option>
                <option value="Piscine à Débordement">Piscine à Débordement</option>
                <option value="Piscine Miroir">Piscine Miroir</option>
                <option value="Spas & Bains à Remous">Spas & Bains à Remous</option>
                <option value="Rénovation">Rénovation</option>
                <option value="Aménagement Extérieur">Aménagement Extérieur</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="booking__form-group">
              <label htmlFor="message" className="booking__label">Détails de votre projet</label>
              <textarea
                id="message"
                name="message"
                className="booking__input booking__textarea"
                placeholder="Parlez-nous de ce que vous souhaitez construire..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="booking__submit">
              <span>Envoyer sur WhatsApp</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
