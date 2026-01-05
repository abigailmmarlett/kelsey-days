export default function ImageShowcaseSection() {
  return (
    <section
      id="image-showcase"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url('/mountains.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.6) opacity(0.85)',
      }}
    >
      {/* Overlay for dark theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/20 to-charcoal-950/40"></div>
    </section>
  );
}
