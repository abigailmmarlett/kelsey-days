import { FaExternalLinkAlt } from 'react-icons/fa';
import spiralKeyImage from '../assets/the-spiral-key.png';
import rootlinesImage from '../assets/rootlines.png';
import lastFourImage from '../assets/last-four.jpg';

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
    image: spiralKeyImage,
    quote: '"The Spiral Key held me utterly captive. An edge-of-your-seat thriller about friendship and ex-friendship, love, loss, and longing, and the need to belong that is as honest and relatable as it is spine-tingling. Don\'t miss this one." — Jennifer Niven, #1 NY Times bestselling author of All the Bright Places',
    links: [],
  },
  {
    title: 'rootlines',
    year: 2021,
    price: '$8',
    status: 'Available',
    description:
      'Kelsey Day\'s sophomore poetry book, rootlines, is a visceral collection about hope during the apocalypse. It blurs the lines between the human and non-human world, paying testimony to the Appalachian mountains that have long been abused by the fossil fuel industry. A collection about place, risk, and grief – about the roots we grow from and the branches we reach with.',
    image: rootlinesImage,
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
    image: lastFourImage,
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
    <section id="books" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Books
          </h2>
          <div className="h-1 w-12 bg-gray-400 mx-auto"></div>
          <p className="text-gray-600 font-light text-lg mt-6">
            Poetry, prose, and stories
          </p>
        </div>

        {/* Featured New Release */}
        <div className="mb-20 animate-slideInUp">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
              {/* Left Column - Title, Metadata, Quote, Description, Button */}
              <div className="flex flex-col space-y-6 order-1 lg:order-2">
                {/* Title and Status */}
                <div>
                  <span className="inline-block px-4 py-1 bg-gray-900 text-white text-xs font-light uppercase tracking-widest rounded-sm mb-4">
                    {newRelease.status}
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <em>{newRelease.title}</em>
                  </h3>
                </div>

                {/* Publication Info */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-600 font-light">{newRelease.year}</span>
                  {newRelease.publisher && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 font-light text-xs uppercase tracking-widest">{newRelease.publisher}</span>
                    </>
                  )}
                </div>

                {/* Mobile Image - appears before quote on mobile, hidden on desktop */}
                <div className="flex justify-center lg:hidden">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute -inset-4 bg-gray-200 rounded-lg opacity-20 blur-xl"></div>
                    <img
                      src={newRelease.image}
                      alt={newRelease.title}
                      className="relative w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Quote */}
                {newRelease.quote && (
                  <blockquote className="border-l-2 border-gray-900 pl-6 py-4 italic text-gray-700 leading-relaxed">
                    {newRelease.quote}
                  </blockquote>
                )}

                {/* Description */}
                <p className="text-gray-700 leading-relaxed font-light text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {newRelease.description}
                </p>

                {/* Action Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button className="px-8 py-3 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-all duration-300 font-light tracking-widest uppercase text-sm hover:shadow-xl hover:-translate-y-0.5">
                    Pre-order Now
                  </button>
                </div>
              </div>

              {/* Right Column - Image (hidden on mobile, shown on desktop on left) */}
              <div className="hidden lg:flex justify-start order-2 lg:order-1">
                <div className="relative w-full max-w-sm lg:max-w-2xl">
                  <div className="absolute -inset-4 bg-gray-200 rounded-lg opacity-20 blur-xl"></div>
                  <img
                    src={newRelease.image}
                    alt={newRelease.title}
                    className="relative w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Books Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherBooks.map((book, index) => (
              <div
                key={index}
                className="group animate-floatIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  {/* Book Cover Image */}
                  <div className="relative w-full h-80 overflow-hidden bg-gray-100">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Status Badge */}
                    {book.status && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-light uppercase tracking-widest rounded-sm">
                          {book.status}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Book Details */}
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <h4 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-gray-700 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <em>{book.title}</em>
                    </h4>

                    {/* Publication Info */}
                    <div className="flex items-center gap-3 mb-6 text-sm">
                      <span className="text-gray-600 font-light">{book.year}</span>
                      {book.price && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 font-light">{book.price}</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed font-light mb-8 flex-grow" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>
                      {book.description}
                    </p>

                    {/* Action Buttons and Links */}
                    <div className="pt-6 border-t border-gray-200 space-y-2">
                      {book.links.length > 0 && (
                        <div className="space-y-2">
                          {book.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors font-light text-sm group/link"
                            >
                              <span>{link.label}</span>
                              <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
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
