import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight tracking-tight">
              About
            </h2>
            <div className="h-1 w-12 bg-gray-400"></div>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              From the misty peaks of the Cascades to the bustling streets of Manhattan, my writing explores the delicate threads that connect us to place, memory, and each other. I am a poet and author whose work finds beauty in the spaces between—between nature and city, solitude and community, past and present.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
              My latest collection examines the profound ways our landscapes shape our inner worlds, weaving together personal narrative with universal truths about belonging and transformation. As a queer Appalachian writer, I bring authenticity to stories that deserve to be told.
            </p>
          </div>

          <div 
            className="space-y-4 animate-slideInRight bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249, 240, 231, 0.4), transparent 50%)',
            }}
          >
            <div>
              <h3 className="text-sm font-light uppercase text-gray-500 tracking-widest mb-2">Background</h3>
              <p className="text-gray-900 font-light text-lg">Queer Appalachian poet and author</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-light uppercase text-gray-500 tracking-widest mb-2">Focus Areas</h3>
              <p className="text-gray-900 font-light text-lg">Identity, place, belonging, and transformation</p>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-light uppercase text-gray-500 tracking-widest mb-2">Debut Novel</h3>
              <p className="text-gray-900 font-light text-lg">The Spiral Key (Viking, Penguin Random House, 2026)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
