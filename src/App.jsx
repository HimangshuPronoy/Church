import './App.css';
import PromoBar from './components/PromoBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import FabricBanner from './components/FabricBanner';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Features />
        <Categories />
        <HowItWorks />
        <FabricBanner />
        <Portfolio />
        <Reviews />
        <BookingForm />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
