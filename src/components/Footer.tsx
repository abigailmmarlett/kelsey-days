import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Sections */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mb-16 pb-12 border-b border-gray-800">
          <div className="text-center">
            <h3 className="text-white font-black font-light text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Work
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#books"
                  className="font-light text-xs sm:text-sm transition-colors"
                  style={{ color: '#8FB9CB' }}
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="font-light text-xs sm:text-sm transition-colors"
                  style={{ color: '#8FB9CB' }}
                >
                  Publications
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white font-black font-light text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Explore
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#spiral-key"
                  className="font-light text-xs sm:text-sm transition-colors"
                  style={{ color: '#8FB9CB' }}
                >
                  The Spiral Key
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-light text-xs sm:text-sm transition-colors"
                  style={{ color: '#8FB9CB' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white font-black font-light text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Follow
            </h3>
            <div className="space-y-2 sm:space-y-3 flex flex-col items-center">
              <a
                href="https://kelseydays.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors group flex items-center gap-2 font-light text-xs sm:text-sm"
                style={{ color: '#8FB9CB' }}
                title="Substack Newsletter"
              >
                <SiSubstack className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Substack</span>
              </a>
              <a
                href="https://www.instagram.com/kelseydays"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors group flex items-center gap-2 font-light text-xs sm:text-sm"
                style={{ color: '#8FB9CB' }}
                title="Instagram"
              >
                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://facebook.com/kelseydaywriting"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors group flex items-center gap-2 font-light text-xs sm:text-sm"
                style={{ color: '#8FB9CB' }}
                title="Facebook"
              >
                <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="h-px w-8" style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(143, 185, 203, 0.5), transparent)' }}></div>
          </div>
          <p className="text-gray-600 font-light text-xs">
            © {new Date().getFullYear()} Kelsey Day. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
