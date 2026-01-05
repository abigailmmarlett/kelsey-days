import { useState, useEffect } from 'react';

export default function SpiralKeyHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="spiral-key"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-950 grain-overlay py-20"
    >
      {/* Dramatic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-black"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(214, 52, 71, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Book Cover */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
              {/* Dramatic shadow/glow behind book */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent-red/20 via-accent-gold/10 to-transparent rounded-none blur-3xl"></div>
              <div className="absolute -inset-6 bg-gradient-to-tl from-transparent via-accent-teal/5 to-transparent rounded-none blur-2xl"></div>

              {/* Book cover with rotation and shadow */}
              <div className="relative transform hover:scale-105 transition-transform duration-500 hover:-rotate-1">
                <div className="absolute -inset-2 bg-black/50 blur-2xl"></div>
                <img
                  src="/spiral-key-cover.jpeg"
                  alt="The Spiral Key Book Cover"
                  className="relative w-full h-auto shadow-2xl hover:shadow-3xl transition-all duration-500"
                />

                {/* Subtle grain overlay on cover */}
                <div className="absolute inset-0 grain-overlay pointer-events-none opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            {/* Decorative accent line */}
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent to-transparent" style={{ backgroundImage: 'linear-gradient(to right, #d4af37, transparent)' }}></div>
                <div className="h-1 w-8 bg-gradient-to-r from-transparent to-transparent" style={{ backgroundImage: 'linear-gradient(to right, #8FB9CB, transparent)' }}></div>
              </div>
              <p className="text-xs tracking-widest uppercase text-accent-gold font-light">
                Forthcoming 2026 • Penguin Random House
              </p>
            </div>

            {/* Main headline */}
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-6">
                T h e
                <br />
                <span className="text-accent-red">S p i r a l</span>
                <br />
                K e y
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              A high-stakes thriller set in a virtual-reality paradise turned hellscape. Where mystery, danger, and forbidden friendships collide.
            </p>

            {/* Quote callout */}
            <blockquote className="border-l-4 border-accent-gold pl-8 py-4 italic text-gray-100 text-lg leading-relaxed max-w-lg">
              "The Spiral Key held me utterly captive. An edge-of-your-seat thriller about friendship and ex-friendship, love, loss, and longing."
              <p className="text-accent-gold font-light text-base not-italic mt-3">— Jennifer Niven, #1 NY Times bestselling author</p>
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#books"
                className="px-8 py-4 bg-accent-red text-white font-light tracking-widest uppercase text-sm hover:bg-accent-red/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-red/50 hover:-translate-y-1 text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-accent-red/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-light tracking-widest uppercase text-sm hover:bg-accent-gold/10 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-gold/30 hover:-translate-y-1 text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
