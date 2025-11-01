import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16 pb-12 border-b border-gray-800">
          <div className="text-center">
            <h3 className="text-white font-light text-sm uppercase tracking-widest mb-6">
              Work
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#books"
                  className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm"
                >
                  Publications
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white font-light text-sm uppercase tracking-widest mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#tour-dates"
                  className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm"
                >
                  Tour Dates
                </a>
              </li>
              <li>
                <a
                  href="#newsletter"
                  className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-white font-light text-sm uppercase tracking-widest mb-6">
              Follow
            </h3>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="https://kelseydays.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors group flex items-center gap-2 font-light text-sm"
                title="Substack Newsletter"
              >
                <SiSubstack className="w-4 h-4" />
                <span>Substack</span>
              </a>
              <a
                href="https://www.instagram.com/kelseydays"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors group flex items-center gap-2 font-light text-sm"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com/kelseydaywriting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors group flex items-center gap-2 font-light text-sm"
                title="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-gray-500 font-light text-xs">
            © {new Date().getFullYear()} Kelsey Day. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
