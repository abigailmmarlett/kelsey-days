import { useState, useEffect } from 'react';
import SpiralKeyHero from '../components/SpiralKeyHero';
import SpiralKeyPromoBanner from '../components/SpiralKeyPromoBanner';
import SpiralKeyTestimonial from '../components/SpiralKeyTestimonial';
import SpiralKeyQuotesCarousel from '../components/SpiralKeyQuotesCarousel';
import BooksSection from '../components/BooksSection';
import PublicationsSection from '../components/PublicationsSection';
import RecognitionSection from '../components/RecognitionSection';
import ImageShowcaseSection from '../components/ImageShowcaseSection';
import TourDatesSection from '../components/TourDatesSection';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-charcoal-950">
      <SpiralKeyHero scrollY={scrollY} />
      <SpiralKeyTestimonial />
      <SpiralKeyPromoBanner />
      <SpiralKeyQuotesCarousel />
      <BooksSection />
      <PublicationsSection />
      <RecognitionSection />
      <ImageShowcaseSection />
      <TourDatesSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
