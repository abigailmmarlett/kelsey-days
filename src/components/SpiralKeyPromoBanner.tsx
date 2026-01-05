export default function SpiralKeyPromoBanner() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950 grain-overlay overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(214, 52, 71, 0.1) 0%, transparent 50%), 
                            linear-gradient(-45deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent-red/30 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          {/* Main quote callout */}
          <blockquote className="space-y-6">
            <p className="text-5xl sm:text-6xl lg:text-7xl font-black font-light uppercase tracking-tighter text-white leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              "Where Mystery, Danger,
              <br />
              and Forbidden Friendships
              <br />
              <span className="text-accent-red">Collide</span>"
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
              A high-stakes thriller set in a virtual-reality paradise turned hellscape. For fans of Holly Jackson and Jessica Goodman. As Madison's hated ex-BFF, Bree Benson never received an invitation to the epic birthday party—until this year. But as the party games begin to turn provocative and violent, nothing is as it seems.
            </p>
          </blockquote>

          {/* Stats/highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-charcoal-800">
            <div className="space-y-2">
              <p className="text-2xl font-black text-accent-gold uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>2026</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Coming Soon</p>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-black text-accent-red uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>YA</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Genre</p>
            </div>
            <div className="space-y-2 sm:col-span-1">
              <p className="text-2xl font-black text-accent-teal uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>PRH</p>
              <p className="text-xs tracking-widest uppercase text-gray-400">Viking</p>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-12 left-0 w-20 h-20 border-t-2 border-l-2 border-accent-gold/30 rounded-none"></div>
        <div className="absolute bottom-12 right-0 w-20 h-20 border-b-2 border-r-2 border-accent-red/30 rounded-none"></div>
      </div>
    </section>
  );
}
