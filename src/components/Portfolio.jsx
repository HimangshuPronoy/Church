import './Portfolio.css';

const galleryItems = [
  {
    id: 1,
    image: '/images/church/hero_worship.jpg',
    title: 'Sunday Celebration Worship',
    category: 'Worship Experience',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    image: '/images/church/gallery_baptism.jpg',
    title: 'Baptism Celebrations',
    category: 'New Beginnings',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 3,
    image: '/images/church/gallery_kids.jpg',
    title: 'NextGen Kids Adventure',
    category: 'Family & Children',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    image: '/images/church/hero_fellowship.jpg',
    title: 'Coffee & Connection Atrium',
    category: 'Hospitality & Care',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 5,
    image: '/images/church/hero_sanctuary.jpg',
    title: 'Sacred Sanctuary Peace',
    category: 'Prayer & Reflection',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 6,
    image: '/images/church/gallery_prayer.jpg',
    title: 'Living Word & Bible Study',
    category: 'Spiritual Growth',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    image: '/images/church/gallery_community.jpg',
    title: 'Community Fellowship Picnic',
    category: 'Church Family',
    span: 'col-span-1 row-span-1',
  },
];

export default function Portfolio() {
  return (
    <section id="gallery" className="portfolio">
      <div className="portfolio-header">
        <p className="portfolio-eyebrow">Community Life</p>
        <h2 className="portfolio-title">Moments of Faith, Joy &amp; Grace</h2>
        <p className="portfolio-sub">
          A glimpse into life at Renewed Vision Church Community—from vibrant Sunday worship and baptisms to family picnics and outreach.
        </p>
      </div>

      <div className="portfolio-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className={`portfolio-item ${item.span}`}>
            <img src={item.image} alt={item.title} className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-item-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
