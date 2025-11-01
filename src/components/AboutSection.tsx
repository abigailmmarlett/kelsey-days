import React from 'react';
import kelsey from '../assets/kelsey-headshot.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            About
          </h2>
          <div className="h-1 w-12 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left */}
          <div className="animate-slideInLeft space-y-6">
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              Kelsey Day is a writer from southern Appalachia. Their work is urgent, evocative, and relentlessly vulnerable, and has been published in literary journals such as The Atlantic, Orion Magazine, Aeon, Freeman's, The Appalachian Review, The Washington Square Review, The Foundationalist, Brave Voices, and Our Shared Memory Collective. They are a recipient of the University of Chicago's Young Memory Fellowship and the International Women's Writing Guild Fellowship, as well as a grant recipient of the Boston Art Opportunity Fund. Their debut young adult novel, The Spiral Key, is forthcoming from Viking, Penguin Random House, in 2026.
            </p>
          </div>

          {/* Image - Right */}
          <div className="animate-slideInRight flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              {/* Decorative background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-gray-200/40 to-transparent rounded-xl blur-2xl"></div>

              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white p-1">
                <img
                  src={kelsey}
                  alt="Kelsey Day"
                  className="w-full h-auto object-cover rounded-lg"
                />
                {/* Subtle border */}
                <div className="absolute inset-0 rounded-lg border border-gray-200 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
