import { FaExternalLinkAlt } from 'react-icons/fa';

interface Book {
  title: string;
  year: number;
  description: string;
  image: string;
  links: {
    label: string;
    url: string;
  }[];
  status?: string;
  price?: string;
  publisher?: string;
  quote?: string;
}

const books: Book[] = [
  {
    title: 'The Spiral Key',
    year: 2026,
    status: 'Forthcoming',
    publisher: 'Viking, Penguin Random House',
    description:
      'For fans of Holly Jackson and Jessica Goodman, this high-stakes thriller is set in a virtual-reality paradise turned hellscape. At the start of each school year, Madison Pembroke sends out invitations to her epic birthday party in the form of custom forged spiral keys. As Madison\'s hated ex-BFF, Bree Benson never receives a key—until this year. But as the party games begin to turn provocative and violent, Bree finds that Ametrine might not be the virtual paradise she was promised.',
    image: '/the-spiral-key.png', // Updated path
    quote: 'For fans of Holly Jackson and Jessica Goodman, this high-stakes thriller is set in a virtual-reality paradise turned hellscape. At the start of each school year, Madison Pembroke sends out invitations to her epic birthday party in the form of custom forged spiral keys. As Madison\'s hated ex-BFF, Bree Benson never receives a key—until this year. But as the party games begin to turn provocative and violent, Bree finds that Ametrine might not be the virtual paradise she was promised.',
    links: [],
  },
  {
    title: 'rootlines',
    year: 2021,
    price: '$8',
    status: 'Available',
    description:
      'Kelsey Day\'s sophomore poetry book, rootlines, is a visceral collection about hope during the apocalypse. It blurs the lines between the human and non-human world, paying testimony to the Appalachian mountains that have long been abused by the fossil fuel industry. A collection about place, risk, and grief – about the roots we grow from and the branches we reach with.',
    image: '/rootlines.png', // Updated path
    links: [
      {
        label: 'Buy on Amazon',
        url: 'https://www.amazon.com/rootlines-poetry-collection-kelsey-day/dp/0578901412',
      },
    ],
  },
  {
    title: 'The Last Four Years',
    year: 2018,
    price: '$18',
    status: 'Available',
    description:
      'Kelsey Day\'s debut poetry book is a chronicle of four transformative years. A vivid song to self, this collection of lethal moments is accompanied by the quirky illustrations of Lily Young-Fritchie. Four chapters: growing backwards [poems of unwellness], him [poems of love], me [poems of discovery], growing forwards [poems of healing].',
    image: '/last-four.jpg', // Updated path
    links: [
      {
        label: 'Buy on Amazon',
        url: 'https://www.amazon.com/last-four-years-kelsey-day/dp/1978114575/',
      },
    ],
  },
];

export default function BooksSection() {
  const newRelease = books[0];
  const otherBooks = books.slice(1);

  return (
    <section id="books" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-5xl sm:text-6xl font-black font-light uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Works
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            <div className="h-1 w-20" style={{ backgroundColor: '#d63447' }}></div>
            <div className="h-1 w-8" style={{ backgroundColor: '#8FB9CB' }}></div>
          </div>
          <p className="text-gray-600 font-light text-lg">
            Poetry, prose, and the thriller that changes everything
          </p>
        </div>

        {/* Featured New Release - The Spiral Key */}
        <div className="mb-32 animate-slideInUp">
          <div className="bg-white border border-gray-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-accent-red/50">
            <div className="p-8 md:p-16">
              {/* Mobile Layout: Title and Image side-by-side */}
              <div className="books-mobile-layout flex gap-4 mb-8 items-start">
                {/* Title Section - left side */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-4 py-1 bg-accent-red/10 text-accent-red text-xs font-light uppercase tracking-widest rounded-none mb-4 border border-accent-red/30">
                    {newRelease.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-light uppercase tracking-tighter text-gray-900 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {newRelease.title}
                  </h3>
                </div>

                {/* Book Cover Image - right side */}
                <div style={{ width: '140px', flexShrink: 0 }}>
                  <img
                    src={newRelease.image}
                    alt={newRelease.title}
                    style={{ width: '100%', height: 'auto', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb' }}
                  />
                </div>
              </div>

              {/* Mobile Publication Info */}
              <div className="books-mobile-layout flex items-center gap-3 text-sm mb-8">
                <span className="text-gray-600 font-light">{newRelease.year}</span>
                {newRelease.publisher && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-600 font-light text-xs uppercase tracking-widest">{newRelease.publisher}</span>
                  </>
                )}
              </div>

              {/* Mobile: Description and Button */}
              <div className="books-mobile-layout flex flex-col space-y-8">
                <p className="text-gray-700 leading-relaxed font-light text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {newRelease.description}
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <button className="px-8 py-4 bg-accent-red text-white font-light tracking-widest uppercase text-sm hover:bg-accent-red/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-red/50 hover:-translate-y-1 group relative overflow-hidden">
                    <span className="relative z-10">Pre-order Now</span>
                    <div className="absolute inset-0 bg-accent-red/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>

              {/* Desktop Layout: Grid with image left, content right */}
              <div className="books-desktop-layout grid grid-cols-2 gap-16 items-start">
                {/* Desktop: Image on the left */}
                <div className="flex justify-start">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute -inset-6 bg-gradient-to-br from-accent-red/20 via-accent-gold/10 to-transparent rounded-none blur-3xl"></div>
                    <div className="relative hover:scale-105 transition-transform duration-500 hover:-rotate-1">
                      <div className="absolute -inset-2 bg-black/50 blur-2xl"></div>
                      <img
                        src={newRelease.image}
                        alt={newRelease.title}
                        className="relative w-full h-auto shadow-2xl hover:shadow-3xl transition-all duration-500"
                      />
                      <div className="absolute inset-0 grain-overlay pointer-events-none opacity-50"></div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Title, Metadata, Description and Button on the right */}
                <div className="flex flex-col space-y-8">
                  <div>
                    <span className="inline-block px-4 py-1 bg-accent-red/10 text-accent-red text-xs font-light uppercase tracking-widest rounded-none mb-6 border border-accent-red/30">
                      {newRelease.status}
                    </span>
                    <h3 className="text-6xl sm:text-7xl font-black font-light uppercase tracking-tighter text-gray-900 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {newRelease.title}
                    </h3>
                  </div>

                  {/* Publication Info */}
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-600 font-light">{newRelease.year}</span>
                    {newRelease.publisher && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-600 font-light text-xs uppercase tracking-widest">{newRelease.publisher}</span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed font-light text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {newRelease.description}
                  </p>

                  {/* Action Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button className="px-8 py-4 bg-accent-red text-white font-light tracking-widest uppercase text-sm hover:bg-accent-red/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-red/50 hover:-translate-y-1 group relative overflow-hidden">
                      <span className="relative z-10">Pre-order Now</span>
                      <div className="absolute inset-0 bg-accent-red/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Books Grid */}
        <div>
          <h3 className="text-3xl font-black font-light uppercase tracking-tighter text-gray-900 mb-12 text-center" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Poetry & More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {otherBooks.map((book, index) => (
              <div
                key={index}
                className="group animate-floatIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-full flex flex-col bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl hover:border-accent-red/30 transition-all duration-500 hover:scale-105">
                  {/* Book Cover Image */}
                  <div className="relative w-full h-96 overflow-hidden bg-gray-100">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Status Badge */}
                    {book.status && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-light uppercase tracking-widest rounded-none border border-accent-red/30">
                          {book.status}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Book Details */}
                  <div className="flex flex-col flex-1 p-8">
                    <h4 className="text-3xl font-light text-gray-900 mb-4 group-hover:text-accent-red transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <em>{book.title}</em>
                    </h4>

                    {/* Publication Info */}
                    <div className="flex items-center gap-3 mb-8 text-sm">
                      <span className="text-gray-600 font-light">{book.year}</span>
                      {book.price && (
                        <>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-600 font-light">{book.price}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed font-light mb-8 flex-grow" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>
                      {book.description}
                    </p>

                    {/* Action Buttons and Links */}
                    <div className="pt-8 border-t border-gray-200 space-y-3">
                      {book.links.length > 0 && (
                        <div className="space-y-3">
                          {book.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-accent-red hover:text-accent-red/80 transition-colors font-light text-sm group/link"
                            >
                              <span>{link.label}</span>
                              <FaExternalLinkAlt className="w-3 h-3 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
