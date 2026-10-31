import { Heart, Globe, Sparkles, HandHeart, Church, Users } from 'lucide-react';
import './WhoWeAre.css';

const leaders = [
  {
    name: 'Gideon',
    role: 'Founder',
    initial: 'G',
    description: 'Devoted to preaching the living Gospel, discipling leaders, and guiding people into spiritual breakthrough and life-changing faith in Christ.',
  },
  {
    name: 'Kevin',
    role: 'Founder',
    initial: 'K',
    description: 'Passionate about pastoral care, kingdom vision, and expanding generous benevolence to uplift families and transform communities.',
  },
  {
    name: 'Adam',
    role: 'Co-Founder',
    initial: 'A',
    description: 'Dedicated to outreach operations, mobilizing worldwide missions, and ensuring support reaches small churches and orphanages across the globe.',
  },
];

export default function WhoWeAre() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="who-we-are">
      <div className="who__inner">
        {/* Main Section Header */}
        <div className="who__header">
          <p className="who__eyebrow">Our Story &amp; Leadership</p>
          <h2 className="who__title">Who We Are &amp; Our Calling</h2>
          <p className="who__sub">
            Get to know the heart behind Renewed Vision Church Community, our founders, and the mission that drives everything we do.
          </p>
        </div>

        {/* 1. Who Are We / Founders Grid */}
        <div className="who__card who__card--founders">
          <div className="who__card-top">
            <span className="who__badge">
              <Users size={14} />
              Question 01
            </span>
            <h3 className="who__card-heading">Who are we?</h3>
            <p className="who__card-text">
              We are the <strong>founders and visionary team of Renewed Vision Church Community</strong>. United by a shared commitment to Christ, we were called to plant a loving, authentic spiritual home where lives are restored, faith is renewed, and God’s grace is encountered daily.
            </p>
          </div>

          <div className="who__founders-grid">
            {leaders.map((leader) => (
              <div key={leader.name} className="founder-card">
                <div className="founder-card__header">
                  <div className="founder-card__avatar">
                    <span className="founder-card__initial">{leader.initial}</span>
                  </div>
                  <span className={`founder-card__tag ${leader.role.toLowerCase().includes('co') ? 'founder-card__tag--co' : ''}`}>
                    {leader.role}
                  </span>
                </div>
                <div className="founder-card__body">
                  <h4 className="founder-card__name">{leader.name}</h4>
                  <p className="founder-card__role-label">{leader.role} · Renewed Vision</p>
                  <p className="founder-card__desc">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Why Created Church & Global Organization */}
        <div className="who__two-col">
          {/* 2. Why We Created This Church */}
          <div className="who__card who__card--purpose">
            <div className="who__badge">
              <Sparkles size={14} />
              Question 02
            </div>
            <h3 className="who__card-heading">Why did we create this church?</h3>
            <p className="who__card-text">
              We created Renewed Vision Church because we have an unwavering passion to <strong>preach the Gospel</strong>, see <strong>lives transformed</strong> through Jesus Christ, and provide <strong>tangible financial help and benevolence</strong> to people facing hardship.
            </p>
            
            <div className="who__pillars-list">
              <div className="who__pillar-item">
                <div className="who__pillar-icon">
                  <Church size={20} />
                </div>
                <div>
                  <h5 className="who__pillar-title">Preaching the Gospel</h5>
                  <p className="who__pillar-desc">
                    Proclaiming the good news of salvation, hope, and redemption with biblical clarity and heartfelt truth.
                  </p>
                </div>
              </div>

              <div className="who__pillar-item">
                <div className="who__pillar-icon">
                  <Heart size={20} />
                </div>
                <div>
                  <h5 className="who__pillar-title">Transforming Lives</h5>
                  <p className="who__pillar-desc">
                    Walking alongside individuals and families through discipleship, prayer, and unconditional love.
                  </p>
                </div>
              </div>

              <div className="who__pillar-item">
                <div className="who__pillar-icon">
                  <HandHeart size={20} />
                </div>
                <div>
                  <h5 className="who__pillar-title">Helping Others with Financial Support</h5>
                  <p className="who__pillar-desc">
                    Putting faith into action by providing direct financial relief, food assistance, and benevolence to those in need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Do You Have An Organization? */}
          <div className="who__card who__card--org">
            <div className="who__badge">
              <Globe size={14} />
              Question 03
            </div>
            <h3 className="who__card-heading">Do we have an organization?</h3>
            <p className="who__card-text">
              <strong>Yes, we do have an organization.</strong> Through our global charitable benevolence initiative, we actively raise and receive funds to donate to <strong>small churches worldwide</strong> and provide essential care for <strong>orphanages</strong>.
            </p>

            <div className="org__missions-grid">
              <div className="org__mission-box">
                <div className="org__mission-header">
                  <Church size={22} color="var(--color-accent)" />
                  <h4>Small Churches Worldwide</h4>
                </div>
                <p>
                  We partner with and financially support under-resourced local congregations globally, helping them secure facilities, supplies, bibles, and operational support to keep preaching the Gospel in their regions.
                </p>
              </div>

              <div className="org__mission-box">
                <div className="org__mission-header">
                  <Heart size={22} color="#e05260" />
                  <h4>Orphanage Support &amp; Care</h4>
                </div>
                <p>
                  We direct funds to orphanages to provide children with nutritious food, safe shelter, clothing, medical supplies, education, and the warm, nurturing love of a spiritual family.
                </p>
              </div>
            </div>

            <div className="org__cta-banner">
              <div>
                <h5>Want to partner or learn more?</h5>
                <p>Join us in spreading hope locally and across the nations.</p>
              </div>
              <a
                href="#visit"
                onClick={(e) => handleLinkClick(e, 'visit')}
                className="org__cta-btn"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
