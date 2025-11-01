import React from 'react';

interface HeroSectionProps {
  scrollY: number;
  backgroundImage: string;
  headshot: string;
}

export default function HeroSection({ scrollY, backgroundImage, headshot }: HeroSectionProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Parallax Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${scrollY * 0.5}px`,
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.1) opacity(0.4)',
        }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-light/50 via-neutral-light/40 to-neutral-light/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full animate-fadeInUp">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Kelsey Day
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed font-light">
              Poet & Author bridging mountain roots with metropolitan narratives. A queer Appalachian voice exploring the delicate threads that connect us to place, memory, and each other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide hover:shadow-lg">
                Explore Work
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-300 font-light tracking-wide hover:shadow-lg">
                About Me
              </button>
            </div>
          </div>

          {/* Headshot Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end px-4">
            <div className="relative w-full max-w-xs md:max-w-md">
              {/* Decorative background circle */}
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
              
              {/* Image container with frame effect */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white p-1">
                <img
                  src={headshot}
                  alt="Kelsey Day"
                  className="w-full h-auto object-cover rounded-xl"
                />
                {/* Subtle border */}
                <div className="absolute inset-0 rounded-xl border border-gray-200 pointer-events-none"></div>
              </div>

              {/* Accent line */}
              <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
