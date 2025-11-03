interface HeroSectionProps {
  scrollY: number;
  backgroundImage: string;
  headshot: string;
}

export default function HeroSection({ scrollY, backgroundImage, headshot }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-auto md:min-h-[85vh] flex items-center justify-center px-3 sm:px-6 lg:px-8 overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Parallax Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${scrollY * 0.5}px`,
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.1) opacity(0.2)',
        }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-light/60 via-neutral-light/50 to-neutral-light/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full animate-fadeInUp">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1 space-y-6 md:space-y-8">
            <div>
              {/* Decorative top line */}
              <div className="hidden md:block mb-6">
                <div className="h-0.5 w-12 bg-gradient-to-r from-gray-400 to-transparent"></div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
                Kelsey Day
              </h1>

              {/* Decorative subtitle line */}
              <p className="text-sm md:text-base text-gray-600 tracking-widest uppercase font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Poet & Author
              </p>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Kelsey Day is a writer from southern Appalachia. Their work is urgent, evocative, and relentlessly vulnerable, and has been published in literary journals such as The Atlantic, Orion Magazine, Aeon, Freeman's, The Appalachian Review, The Washington Square Review, The Foundationalist, Brave Voices, and Our Shared Memory Collective. They are a recipient of the University of Chicago's Young Memory Fellowship and the International Women's Writing Guild Fellowship, as well as a grant recipient of the Boston Art Opportunity Fund. Their debut young adult novel, <em>The Spiral Key</em>, is forthcoming from Viking, Penguin Random House, in 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#books"
                className="px-8 py-3 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-all duration-300 font-light tracking-widest uppercase text-sm hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-gray-900 border border-gray-400 rounded-sm hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 font-light tracking-widest uppercase text-sm hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Headshot Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end px-2 sm:px-4">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Artistic background elements */}
              <div className="absolute -inset-6 sm:-inset-12 bg-gradient-to-br from-amber-100/20 via-transparent to-gray-200/10 rounded-3xl blur-2xl"></div>

              {/* Frame with artistic border */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-102 bg-white border border-gray-200">
                <img
                  src={headshot}
                  alt="Kelsey Day"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Artistic accent elements */}
              <div className="hidden sm:block absolute -bottom-8 -left-6 w-24 h-24 border border-gray-300 rounded-sm opacity-30"></div>
              <div className="hidden sm:block absolute -top-8 -right-6 w-16 h-16 border border-gray-300 rounded-sm opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
