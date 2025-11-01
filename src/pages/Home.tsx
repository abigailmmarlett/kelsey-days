import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import BookReleaseSection from '../components/BookReleaseSection';
import AboutSection from '../components/AboutSection';
import RecognitionSection from '../components/RecognitionSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import spiralKeyCover from '../assets/spiral-key-cover.jpeg';
import blueridgeMountains from '../assets/blueridge-mountains.jpg';
import kelseyHeadshot from '../assets/kelsey-headshot.png';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bookData = {
    title: 'The Spiral Key',
    cover: spiralKeyCover,
    quote: '"The Spiral Key held me utterly captive. An edge-of-your-seat thriller about friendship and ex-friendship, love, loss, and longing, and the need to belong that is as honest and relatable as it is spine-tingling. Don\'t miss this one." —Jennifer Niven, #1 NY Times bestselling author of All the Bright Places',
    description: `At the start of each school year, Madison Pembroke, the most popular girl at Lincoln Academy, sends out invitations to her epic birthday party in the form of custom forged spiral keys. For that one night, a few lucky teens get to enter Ametrine, a virtual paradise that hosts the party of the year—a wild, unforgettable celebration that will secure their social status in the real world. As Madison's hated ex-BFF, Bree Benson never receives a key. \n\nUntil now. \n\nDespite warnings from her boyfriend, Bree sees the invite as an olive branch, the perfect opportunity to rekindle her once-amazing friendship with Madison. But as the party games begin to turn provocative and violent, Bree finds that Ametrine might not be the decadent wonderland she was promised. And that Madison may have let Bree enter Ametrine, but she has no intention of ever letting her leave... \n\nKelsey Day's gripping debut shows that while best friends know each other the best, ex–best friends know how to hurt each other the worst.`,
    releaseDate: 'Available for Pre-Order',
  };

  return (
    <div className="bg-neutral-light">
      <HeroSection
        scrollY={scrollY}
        backgroundImage={blueridgeMountains}
        headshot={kelseyHeadshot}
      />
      <BookReleaseSection bookData={bookData} />
      <AboutSection />
      <RecognitionSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
