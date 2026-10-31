import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import './BookingForm.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Plan a Sunday Visit',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp or Church Communication
    const text = `Renewed Vision Church Community Inquiry:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Interest:* ${formData.interest}\n\n*Message / Prayer Request:*\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp connect or show success message
    const waUrl = `https://wa.me/?text=${encodedText}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="visit" className="booking">
      <div id="contact" style={{ position: 'relative', top: '-60px' }} />
      <div className="booking__inner">
        <div className="booking__content">
          <p className="booking__eyebrow">Connect &amp; Plan Your Visit</p>
          <h2 className="booking__title">We would love to welcome you this Sunday</h2>
          <p className="booking__sub">
            Whether you are planning your first visit, seeking a warm Life Group, or have a prayer request for our pastoral team, let us know! We have a seat saved for you.
          </p>
          
          <div className="booking__contact-info">
            <div className="booking__info-item">
              <Clock size={20} className="booking__info-icon" />
              <div>
                <strong>Sunday Service Times</strong>
                <p>9:00 AM &amp; 11:15 AM · In-Person &amp; Online</p>
              </div>
            </div>

            <div className="booking__info-item">
              <MapPin size={20} className="booking__info-icon" />
              <div>
                <strong>Church Campus</strong>
                <p>100 Grace Way, Community Sanctuary</p>
              </div>
            </div>

            <div className="booking__info-item">
              <Phone size={20} className="booking__info-icon" />
              <div>
                <strong>Call or WhatsApp Us</strong>
                <p>+1 (555) 789-2026</p>
              </div>
            </div>

            <div className="booking__info-item">
              <Mail size={20} className="booking__info-icon" />
              <div>
                <strong>Email Pastoral Team</strong>
                <p>welcome@renewedvisionchurch.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking__form-wrapper">
          {submitted ? (
            <div className="booking__success-card" style={{ padding: '40px', textAlign: 'center' }}>
              <CheckCircle size={48} color="var(--color-accent)" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', marginBottom: '12px' }}>
                Thank You for Connecting!
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
                Your message has been received. Our welcome team will reach out warmly with everything you need for Sunday.
              </p>
              <button
                type="button"
                className="booking__submit"
                onClick={() => setSubmitted(false)}
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form className="booking__form" onSubmit={handleSubmit}>
              <div className="booking__form-group">
                <label htmlFor="name" className="booking__label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="booking__input"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="booking__form-group">
                <label htmlFor="email" className="booking__label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="booking__input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="booking__form-group">
                <label htmlFor="phone" className="booking__label">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="booking__input"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="booking__form-group">
                <label htmlFor="interest" className="booking__label">How can we help you?</label>
                <select
                  id="interest"
                  name="interest"
                  className="booking__input booking__select"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="Plan a Sunday Visit">Planning a First-Time Sunday Visit</option>
                  <option value="Join a Life Group">Joining a Life Group / Community</option>
                  <option value="Partner with Worldwide Church & Orphanage Fund">Partner with Worldwide Churches &amp; Orphanage Fund</option>
                  <option value="Prayer Request">Prayer Request &amp; Pastoral Support</option>
                  <option value="NextGen Kids / Youth">NextGen Kids &amp; Youth Information</option>
                  <option value="Volunteering & Serving">Volunteering &amp; Serving Opportunities</option>
                  <option value="General Question">General Church Inquiry</option>
                </select>
              </div>

              <div className="booking__form-group">
                <label htmlFor="message" className="booking__label">Message or Prayer Request</label>
                <textarea
                  id="message"
                  name="message"
                  className="booking__input booking__textarea"
                  placeholder="Tell us what brings you here, who is coming with you, or any prayer requests..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="booking__submit">
                <span>Send Message &amp; Connect</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
