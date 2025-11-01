import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navSections = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Books', href: '#books' },
        { label: 'About', href: '#about' },
      ],
    },
    {
      title: 'Events',
      links: [
        { label: 'Tour Dates', href: '#tour-dates' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact', href: '#newsletter' },
      ],
    },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo */}
          <div className="absolute left-0 flex-shrink-0">
            <a href="#home" className="text-xl font-light text-gray-900 tracking-tight">
              Kelsey Day
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-0">
              {navSections.map((section) =>
                section.links.map((link, linkIdx, allLinks) => {
                  const allNavLinks = navSections.flatMap(s => s.links);
                  const currentLinkIdx = allNavLinks.findIndex(l => l.label === link.label);

                  return (
                    <div key={link.label} className="flex items-center gap-0">
                      <a
                        href={link.href}
                        className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors font-light text-sm tracking-wide group whitespace-nowrap"
                      >
                        {link.label}
                        <span className="block h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                      {currentLinkIdx !== allNavLinks.length - 1 && (
                        <div className="w-px h-4 bg-gray-300"></div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-0 md:hidden inline-flex items-center justify-center p-2 rounded text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navSections.map((section) => (
              <div key={section.title} className="px-3 py-4">
                <p className="text-xs uppercase text-gray-500 font-light tracking-widest mb-2">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-2 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors font-light"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
