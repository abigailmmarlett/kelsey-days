import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Latest Book', href: '#book-release' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#newsletter' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-light text-gray-900 tracking-tight">
              Kelsey Day
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors font-light text-sm tracking-wide group"
              >
                {link.label}
                <span className="block h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors font-light tracking-wide text-sm hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors font-light"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors font-light">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
