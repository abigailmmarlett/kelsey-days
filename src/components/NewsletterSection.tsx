import React from 'react';

export default function NewsletterSection() {
  return (
    <section 
      id="newsletter" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/75 to-gray-900/80"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 tracking-tight">
          Stay Connected
        </h2>
        <p className="text-lg text-gray-200 mb-10 leading-relaxed font-light">
          Subscribe for exclusive updates, behind-the-scenes insights, and early access to new releases and readings.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-6 py-3 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 font-light"
          />
          <button className="px-8 py-3 bg-gray-100 text-gray-900 rounded hover:bg-white transition-colors duration-300 font-light tracking-wide hover:shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
