import React, { useState } from 'react';

interface BookData {
  title: string;
  cover: string;
  quote: string;
  description: string;
  releaseDate: string;
}

interface BookReleaseSectionProps {
  bookData: BookData;
}

export default function BookReleaseSection({ bookData }: BookReleaseSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="book-release" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Latest Release
          </h2>
          <div className="h-1 w-12 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="flex justify-center animate-slideInLeft">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-4 bg-gray-200 rounded-lg opacity-30 blur-xl"></div>
              <img
                src={bookData.cover}
                alt={bookData.title}
                className="relative w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              />
              <p className="text-center text-gray-600 font-light mt-8 text-sm tracking-wide">
                {bookData.releaseDate}
              </p>
            </div>
          </div>

          {/* Book Details */}
          <div className="animate-slideInRight space-y-8">
            <h3 className="text-4xl font-light text-gray-900 leading-tight tracking-tight">
              {bookData.title}
            </h3>

            {/* Quote */}
            <blockquote className="border-l-2 border-gray-400 pl-6 py-4">
              <p className="text-gray-700 italic whitespace-pre-line">
                {bookData.quote}
              </p>
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 font-light tracking-wide hover:shadow-lg">
                Pre-order Now
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 px-8 py-3 text-gray-900 border border-gray-300 rounded hover:bg-gray-50 transition-all duration-300 font-light tracking-wide group"
              >
                <span>Read More</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 ${isExpanded ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>

            {/* Expandable Description */}
            {isExpanded && (
              <div className="border-t border-gray-200 pt-8 animate-fadeIn">
                <p className="text-gray-700 leading-relaxed font-light whitespace-pre-line text-base">
                  {bookData.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
