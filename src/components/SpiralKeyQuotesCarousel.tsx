import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "Readers' hearts will race right along with the fast-paced, nail-biting narrative, and the well-developed characters will keep readers riveted . . .This gripping thriller, filled with ample queer representation, is a wickedly delicious read that's ideal for fans of Marie Lu's Warcross and Ernest Cline's Ready Player One. An engaging debut that pulls readers into its own twisted reality.",
    author: "Kirkus Reviews"
  },
  {
    text: "The Spiral Key held me utterly captive. An edge-of-your-seat thriller about friendship and ex-friendship, love, loss, and longing, and the need to belong that is as honest and relatable as it is spine-tingling. Don't miss this one.",
    author: "Jennifer Niven, #1 New York Times bestselling author of All the Bright Places"
  },
  {
    text: "A twisting thriller, a visceral dissection of dead friendships, and an exploration of how desperation for acceptance can fester into something awful – I had a blast with this one.",
    author: "Andrew Joseph White, New York Times bestselling author of the Printz Honor award-winning Compound Fracture"
  },
  {
    text: "A sinister, pulsing page-turner about the dark side of queer adolescent friendships and the lengths we will go to for revenge. Nothing about these characters is straightforward or wholly true. Their cruelty—and their vulnerability—will burrow into your brain and stay there.",
    author: "Kelly Quindlen, bestselling author of She Drives Me Crazy"
  },
  {
    text: "Day explores the idea that, without a clear mission, the only thing AI is actually able to deliver is our own regurgitated memories, fears, and egotistical power fantasies. The ultimate villain is wealth, lack of community, alienation, and the furious need for recognition and the adulation it produces.",
    author: "Hal Schrieve, author of the National Book Award longlisted novel Out of Salem"
  },
  {
    text: "A smart, deliciously twisty techno-thriller that proves the most frightening realities are the ones we've already lived. I could not put this down.",
    author: "Anna Carey, author of This is Not the Jess Show"
  },
  {
    text: "The Spiral Key is a pulse-pounding read, a sharply written and disturbingly vivid descent into a nightmarish—yet utterly addictive!—virtual reality. Kelsey Day has crafted a speculative horror novel that also provides an unflinching exploration of shame, regret, and the lengths we go to rewrite the reality of our past. Day forces us to confront the uncomfortable truth: sometimes the most terrifying monsters are the versions of ourselves we try to bury.",
    author: "Caitlin Barasch, author of A Novel Obsession"
  }
];

export default function SpiralKeyQuotesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setFade(true);
    }, 300);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setFade(true);
    }, 300);
  };

  const goToQuote = (index: number) => {
    setIsAutoPlay(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  const quote = quotes[currentIndex];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-5xl sm:text-6xl font-black font-light uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Advance Praise
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20" style={{ backgroundColor: '#d63447' }}></div>
            <div className="h-1 w-8" style={{ backgroundColor: '#8FB9CB' }}></div>
          </div>
        </div>

        {/* Quote carousel container */}
        <div className="relative">
          {/* Main quote display with fade animation */}
          <div
            className="transition-opacity duration-300 ease-in-out"
            style={{ opacity: fade ? 1 : 0 }}
          >
            {/* Decorative quote mark */}
            <div className="text-9xl font-black text-accent-red/10 leading-none mb-4" style={{ color: 'rgba(214, 52, 71, 0.1)' }}>
              "
            </div>

            {/* Quote text */}
            <blockquote className="mb-8 animate-slideInUp">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                {quote.text}
              </p>
            </blockquote>

            {/* Author attribution */}
            <div className="flex items-start gap-4 animate-slideInUp" style={{ animationDelay: '100ms' }}>
              <div className="h-1 w-12" style={{ backgroundColor: '#8FB9CB', marginTop: '0.75rem' }}></div>
              <p className="text-lg text-gray-700 font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {quote.author}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-12 gap-4">
            <button
              onClick={goToPrevious}
              className="flex-shrink-0 p-3 rounded-full border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#8FB9CB',
                color: '#8FB9CB',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8FB9CB';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#8FB9CB';
              }}
              title="Previous quote"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            {/* Progress indicator dots */}
            <div className="flex items-center gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuote(index)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: currentIndex === index ? '32px' : '8px',
                    height: '8px',
                    backgroundColor: currentIndex === index ? '#8FB9CB' : '#d1d5db',
                  }}
                  title={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="flex-shrink-0 p-3 rounded-full border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#8FB9CB',
                color: '#8FB9CB',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8FB9CB';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#8FB9CB';
              }}
              title="Next quote"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quote counter */}
          <div className="text-center mt-8 text-sm text-gray-500 font-light">
            {currentIndex + 1} of {quotes.length}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-xs uppercase tracking-widest font-light transition-all duration-300"
              style={{ color: isAutoPlay ? '#8FB9CB' : '#9ca3af' }}
            >
              {isAutoPlay ? '● Auto-playing' : 'Auto-play off'}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-red/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-teal/5 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
