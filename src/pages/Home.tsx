import { useState, useEffect } from 'react';
import RecognitionSection from '../components/RecognitionSection';
import PublicationsSection from '../components/PublicationsSection';
import BooksSection from '../components/BooksSection';
import TourDatesSection from '../components/TourDatesSection';
import ImageShowcaseSection from '../components/ImageShowcaseSection';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

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
    <div className="bg-neutral-light">
      <HeroSection
        scrollY={scrollY}
        backgroundImage="/mountains.webp"
        headshot="/kelsey-headshot.png"
      />
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
