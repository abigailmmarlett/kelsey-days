import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaStar, FaBook, FaPen, FaGraduationCap, FaChevronDown } from 'react-icons/fa';

interface Award {
  title: string;
  category: string;
  description?: string;
  icon: React.ReactNode;
}

const awards: Award[] = [
  {
    title: 'Serendipity Literary Agency YA Discovery Contest',
    category: 'Competition',
    description: 'First Place Nationally',
    icon: <FaTrophy className="w-6 h-6" />,
  },
  {
    title: 'Reedsy\'s National Creative Writing Competition',
    category: 'Competition',
    description: 'First Place Nationally',
    icon: <FaTrophy className="w-6 h-6" />,
  },
  {
    title: 'Polaris Fiction Competition',
    category: 'Competition',
    description: 'Second Place Nationally',
    icon: <FaMedal className="w-6 h-6" />,
  },
  {
    title: 'Reviving the Dream Spoken Word Poetry Contest',
    category: 'Competition',
    description: 'Second Place Nationally',
    icon: <FaMedal className="w-6 h-6" />,
  },
  {
    title: 'Sherry Pruitt Award',
    category: 'Honor',
    description: 'North Carolina Poetry Society - Honorable Mention',
    icon: <FaStar className="w-6 h-6" />,
  },
  {
    title: 'Best-Selling Author Recognition',
    category: 'Recognition',
    description: 'Top 10 Author at Foggy Pine Books',
    icon: <FaBook className="w-6 h-6" />,
  },
  {
    title: '"Her Name Like a Question"',
    category: 'Nomination',
    description: 'Pushcart Prize Nomination',
    icon: <FaPen className="w-6 h-6" />,
  },
  {
    title: '"High Tide"',
    category: 'Nomination',
    description: 'Pushcart Prize Nomination',
    icon: <FaPen className="w-6 h-6" />,
  },
  {
    title: '"Fungi Texts"',
    category: 'Nomination',
    description: 'Penrose Poetry Prize - Shortlisted',
    icon: <FaPen className="w-6 h-6" />,
  },
  {
    title: '"Something Bright"',
    category: 'Nomination',
    description: 'Best of the Net Award Nomination',
    icon: <FaPen className="w-6 h-6" />,
  },
  {
    title: 'Rootlines Poetry Collection',
    category: 'Publication',
    description: 'Featured in Kirkus Reviews, August 2021',
    icon: <FaBook className="w-6 h-6" />,
  },
  {
    title: 'Our Shared Memory Collective Fellowship',
    category: 'Fellowship',
    description: '"More Song Than Scream" - Non-Fiction Winner & Fellowship at University of Chicago',
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
];

const INITIAL_VISIBLE = 6;

export default function RecognitionSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleAwards = isExpanded ? awards : awards.slice(0, INITIAL_VISIBLE);

  return (
    <section id="recognition" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-5xl sm:text-6xl font-black font-light uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Awards & Recognition
          </h2>
          <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#8FB9CB' }}></div>
          <p className="text-gray-600 font-light text-lg">
            Celebrating artistic achievement and literary impact
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visibleAwards.map((award, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-50 border border-gray-200 hover:border-accent-teal hover:shadow-lg transition-all duration-300 animate-floatIn overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent-teal group-hover:w-full transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-b from-accent-teal/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" style={{ fontSize: '1.25rem', color: '#8FB9CB' }}>
                  {award.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-light text-gray-900 leading-tight tracking-tight mb-3 group-hover:opacity-75 transition-opacity">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-300 text-gray-900 text-xs font-semibold uppercase tracking-widest rounded-none border transition-all duration-300" style={{ borderColor: '#8FB9CB', borderWidth: '1px' }}>
                      {award.category}
                    </span>
                  </div>
                  {award.description && (
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {awards.length > INITIAL_VISIBLE && (
          <div className="flex justify-center pt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-8 py-3 border rounded-none hover:bg-opacity-10 transition-all duration-300 font-light tracking-wide group"
              style={{ color: '#8FB9CB', borderColor: 'rgba(143, 185, 203, 0.5)' }}
            >
              <span>{isExpanded ? 'Show Less' : 'See More'}</span>
              <FaChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
