import { useState } from 'react';
import { Send, Mail, Clock, CheckCircle, ExternalLink, Heart, MessageSquare } from 'lucide-react';
import './BookingForm.css';

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

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discordUser: '',
    robloxUser: '',
    interest: 'Join Discord & Roblox Sanctuary',
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
    setSubmitted(true);
  };

  return (
    <section id="visit" className="booking">
      <div id="contact" style={{ position: 'relative', top: '-60px' }} />
      <div className="booking__inner">
        <div className="booking__content">
          <p className="booking__eyebrow">Connect &amp; Join Community</p>
          <h2 className="booking__title">Meet us in Roblox &amp; Discord Server</h2>
          <p className="booking__sub">
            Renewed Vision Church Community meets in the metaverse. Join our vibrant Discord server and enter our 3D Roblox Sanctuary every Sunday at 3:00 PM IST.
          </p>
          
          <div className="booking__quick-links">
            <a
              href="https://discord.gg/Un68FwruM"
              target="_blank"
              rel="noopener noreferrer"
              className="booking__hub-btn booking__hub-btn--discord"
            >
              <DiscordIcon size={20} />
              <div className="booking__hub-text">
                <strong>Official Discord Server</strong>
                <span>24/7 Fellowship, Prayer &amp; Stage</span>
              </div>
              <ExternalLink size={16} className="booking__hub-arrow" />
            </a>

            <a
              href="https://www.roblox.com/games/87206202638986"
              target="_blank"
              rel="noopener noreferrer"
              className="booking__hub-btn booking__hub-btn--roblox"
            >
              <RobloxIcon size={20} />
              <div className="booking__hub-text">
                <strong>Roblox Church Sanctuary</strong>
                <span>3D Virtual Worship &amp; Prayer Chapel</span>
              </div>
              <ExternalLink size={16} className="booking__hub-arrow" />
            </a>
          </div>

          <div className="booking__contact-info">
            <div className="booking__info-item">
              <Clock size={20} className="booking__info-icon" />
              <div>
                <strong>Sunday Prayer Service</strong>
                <p>Sundays at 3:00 PM IST · Roblox Sanctuary &amp; Discord Voice Stage</p>
              </div>
            </div>

            <div className="booking__info-item">
              <MessageSquare size={20} className="booking__info-icon" />
              <div>
                <strong>Discord Community Server</strong>
                <p>Renewed Vision Church Official Community</p>
              </div>
            </div>

            <div className="booking__info-item">
              <Heart size={20} className="booking__info-icon" />
              <div>
                <strong>Founders &amp; Leadership</strong>
                <p>Gideon &amp; Kevin (Founders) · Adam (Co-Founder)</p>
              </div>
            </div>

            <div className="booking__info-item">
              <Mail size={20} className="booking__info-icon" />
              <div>
                <strong>Email Leadership Team</strong>
                <p>welcome@renewedvisionchurch.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking__form-wrapper">
          {submitted ? (
            <div className="booking__success-card">
              <CheckCircle size={52} color="var(--color-accent)" className="booking__success-icon" />
              <h3 className="booking__success-title">
                Thank You for Connecting!
              </h3>
              <p className="booking__success-desc">
                Welcome to the family! Founders <strong>Gideon</strong>, <strong>Kevin</strong>, and <strong>Adam</strong> along with our community look forward to seeing you inside our Roblox Church Sanctuary and Discord server this <strong>Sunday at 3:00 PM IST</strong>.
              </p>

              <div className="booking__success-actions">
                <a
                  href="https://discord.gg/Un68FwruM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking__hub-btn booking__hub-btn--discord"
                >
                  <DiscordIcon size={18} />
                  <span>Open Discord Server</span>
                </a>
                <a
                  href="https://www.roblox.com/games/87206202638986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking__hub-btn booking__hub-btn--roblox"
                >
                  <RobloxIcon size={18} />
                  <span>Enter Roblox Sanctuary</span>
                </a>
                <button
                  type="button"
                  className="booking__reset-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Note
                </button>
              </div>
            </div>
          ) : (
            <form className="booking__form" onSubmit={handleSubmit}>
              <div className="booking__form-group">
                <label htmlFor="name" className="booking__label">Your Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="booking__input"
                  placeholder="Enter your name"
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

              <div className="booking__form-row">
                <div className="booking__form-group">
                  <label htmlFor="discordUser" className="booking__label">Discord Username</label>
                  <input
                    type="text"
                    id="discordUser"
                    name="discordUser"
                    className="booking__input"
                    placeholder="e.g. username#0000 or @handle"
                    value={formData.discordUser}
                    onChange={handleChange}
                  />
                </div>

                <div className="booking__form-group">
                  <label htmlFor="robloxUser" className="booking__label">Roblox Username (Optional)</label>
                  <input
                    type="text"
                    id="robloxUser"
                    name="robloxUser"
                    className="booking__input"
                    placeholder="Your Roblox handle"
                    value={formData.robloxUser}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="booking__form-group">
                <label htmlFor="interest" className="booking__label">How can we help or connect?</label>
                <select
                  id="interest"
                  name="interest"
                  className="booking__input booking__select"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="Join Discord & Roblox Sanctuary">Joining Discord &amp; Roblox Sunday Gathering</option>
                  <option value="Prayer Request">Prayer Request &amp; Spiritual Support</option>
                  <option value="Meet Founders Gideon, Kevin & Adam">Connecting with Gideon, Kevin &amp; Adam</option>
                  <option value="Partner with Worldwide Church & Orphanage Fund">Partnering with Small Churches &amp; Orphanages</option>
                  <option value="Community Fellowship & Gaming">Discord Life Groups &amp; Community Game Nights</option>
                  <option value="General Question">General Church Inquiry</option>
                </select>
              </div>

              <div className="booking__form-group">
                <label htmlFor="message" className="booking__label">Message or Prayer Request</label>
                <textarea
                  id="message"
                  name="message"
                  className="booking__input booking__textarea"
                  placeholder="Share any prayer requests, how you found us, or questions for our pastoral team..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="booking__submit">
                <span>Connect With Pastors</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
