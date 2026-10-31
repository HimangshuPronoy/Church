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
          <p className="newsletter__eyebrow">Stay Connected &amp; Encouraged</p>
          <h2 className="newsletter__title">Subscribe to The Weekly Vision</h2>
          <p className="newsletter__sub">
            Receive weekly devotionals, sermon reflections, upcoming church events, and life group news delivered to your inbox every Friday.
          </p>
        </div>
        <div className="newsletter__form-wrap">
          {submitted ? (
            <div className="newsletter__success">
              <span className="newsletter__success-icon">✓</span>
              <p>Welcome! You are now subscribed to The Weekly Vision.</p>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__btn">Subscribe</button>
            </form>
          )}
          <p className="newsletter__disclaimer">
            We honor your privacy and will never share your email. Unsubscribe anytime with a single click.
          </p>
        </div>
      </div>
    </section>
  );
}
