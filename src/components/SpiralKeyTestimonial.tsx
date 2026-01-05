export default function SpiralKeyTestimonial() {
  return (
    <section
      className="relative border pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden py-12"
      style={{
        backgroundImage: 'linear-gradient(135deg, #8FB9CB 0%, #6FA3B8 50%, #8FB9CB 100%)',
        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Gold stripe divider - full width */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]" style={{ height: '4px', backgroundColor: '#d4af37' }}></div>

      {/* Teal background with testimonial block - sophisticated gradient and shadows */}
      <div
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-6 sm:py-8 lg:py-10 shadow-2xl"
        style={{
          backgroundImage: 'linear-gradient(135deg, #7A1414 0%, #5A0F0F 50%, #7A1414 100%)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Decorative gradient overlay for sophistication */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(143, 185, 203, 0.08) 0%, transparent 50%)',
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
          <p
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight whitespace-nowrap px-4 sm:px-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.8)',
              letterSpacing: '0.15em',
            }}
          >
            Wickedly Delicious
          </p>
          <p
            className="text-sm sm:text-base text-white/90 font-light italic px-4"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            — Kirkus Reviews
          </p>
        </div>
      </div>
    </section>
  );
}
