import React from 'react';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Work',
      links: [
        { label: 'Latest Release', href: '#' },
        { label: 'Publications', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Twitter', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Events', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-light text-sm uppercase tracking-widest mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gray-200 transition-colors font-light text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 font-light text-sm">
            © 2024 Kelsey Day. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
