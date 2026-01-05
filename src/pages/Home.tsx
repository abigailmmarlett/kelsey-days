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

  return (
    <div className="bg-charcoal-950">
      <SpiralKeyHero />
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
