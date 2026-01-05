
export default function NewsletterSection() {

  return (
    <section
      id="newsletter"
      className="relative py-40 sm:py-48 lg:py-64 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url('/kelsey-mic.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/25 to-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-sm mx-auto px-2 animate-fadeInUp hidden">
        {/* Form hidden - email and subscribe button removed */}
      </div>
    </section>
  );
}
