import photo from '../assets/mountains.jpeg';

export default function ImageShowcaseSection() {
  return (
    <section
      id="image-showcase"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundAttachment: 'fixed',
        filter: 'brightness(1.1) opacity(0.7)',
      }}
    >

    </section>
  );
}
