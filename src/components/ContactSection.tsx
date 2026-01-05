import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS once on component mount
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-5xl sm:text-6xl font-black font-light uppercase tracking-tighter text-gray-900 mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Get in Touch
          </h2>
          <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#8FB9CB' }}></div>
        </div>

        {/* Mobile: Stack vertically, Desktop: 2 columns with aligned heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:auto-rows-fr items-start">
          {/* Left Column */}
          <div className="space-y-8 lg:pl-4">
            {/* Literary Representatives */}
            <div className="animate-slideInLeft group">
              <div className="bg-white p-8 border border-gray-200 hover:border-red-200 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-red-500 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-2xl font-black font-light text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Literary Representatives</h3>
                <div className="space-y-8 text-gray-900 leading-relaxed font-light">
                  <div className="pb-6 border-b border-gray-200">
                    <p className="mb-3 text-base text-gray-900">
                      For adult literary fiction, poetry commissions, permission use, and lecture inquiries:
                    </p>
                    <p className="font-semibold text-base text-gray-900 mb-2">
                      Kate Johnson
                    </p>
                    <a
                      href="mailto:Kate@wolflit.com"
                      className="text-base transition-colors border-b"
                      style={{ color: '#8FB9CB', borderColor: '#8FB9CB' }}
                    >
                      Wolf Literary Services
                    </a>
                  </div>

                  <div>
                    <p className="mb-3 text-base text-gray-900">
                      For young adult and children's fiction inquiries:
                    </p>
                    <p className="font-semibold text-base text-gray-900 mb-2">
                      Elizabeth Rudnick
                    </p>
                    <a
                      href="mailto:erudnick@gmalit.com"
                      className="text-base transition-colors border-b"
                      style={{ color: '#8FB9CB', borderColor: '#8FB9CB' }}
                    >
                      Gillian MacKenzie Agency
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image - Mobile only, appears after representatives */}
            <div className="animate-slideInRight lg:hidden">
              <img
                src="/kelsey-flowers.JPG"
                alt="Kelsey Day"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <div className="p-4 border rounded-none text-sm font-light animate-pulse" style={{ backgroundColor: 'rgba(143, 185, 203, 0.1)', borderColor: 'rgba(143, 185, 203, 0.5)', color: '#8FB9CB' }}>
                    ✓ Thank you for your message. We'll be in touch soon.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-accent-red/10 border border-accent-red/50 rounded-none text-accent-red text-sm font-light">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                    Name <span className="text-gray-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-none focus:outline-none focus:ring-1 font-light transition-all duration-200 placeholder:text-gray-400"
                    style={{ '--tw-ring-color': '#7A1414' } as React.CSSProperties}
                    onFocus={(e) => e.target.style.borderColor = '#7A1414'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                    Email <span className="text-gray-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-none focus:outline-none focus:ring-1 font-light transition-all duration-200 placeholder:text-gray-400"
                    style={{ '--tw-ring-color': '#8FB9CB' } as React.CSSProperties}
                    onFocus={(e) => e.target.style.borderColor = '#8FB9CB'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                    Message <span className="text-gray-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-none focus:outline-none focus:ring-1 font-light transition-all duration-200 resize-none placeholder:text-gray-400"
                    style={{ '--tw-ring-color': '#7A1414' } as React.CSSProperties}
                    onFocus={(e) => e.target.style.borderColor = '#7A1414'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || submitted}
                  className="w-full px-8 py-4 text-white rounded-none hover:opacity-90 transition-all duration-300 font-bold tracking-widest uppercase text-base hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed border-2"
                  style={{ backgroundColor: '#7A1414', borderColor: '#7A1414', fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Desktop only */}
          <div className="hidden lg:flex lg:flex-col lg:space-y-8">
            {/* Featured Image */}
            <div className="animate-slideInRight">
              <img
                src="/kelsey-flowers.JPG"
                alt="Kelsey Day"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Social Links */}
            <div className="animate-slideInRight group bg-gray-50 p-8 border border-gray-200 transition-colors relative overflow-hidden hover:border-opacity-50" style={{ borderColor: 'rgba(211, 213, 219, 1)', '--hover-border-color': '#8FB9CB' } as React.CSSProperties}>
              <div className="absolute top-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#8FB9CB' }}></div>
              <h3 className="text-xl font-black font-light text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Follow</h3>
              <div className="space-y-3 flex flex-col">
                <a
                  href="https://kelseydays.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-none bg-white border transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: '#e5e7eb' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                  title="Substack Newsletter"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:opacity-75" style={{ color: '#8FB9CB' }}>
                    <SiSubstack className="w-5 h-5" />
                  </div>
                  <span className="flex-1 font-light text-sm transition-colors" style={{ color: '#8FB9CB' }}>Substack</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8FB9CB' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kelseydays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-none bg-white border transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: '#e5e7eb' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                  title="Instagram"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:opacity-75" style={{ color: '#8FB9CB' }}>
                    <FaInstagram className="w-5 h-5" />
                  </div>
                  <span className="flex-1 font-light text-sm transition-colors" style={{ color: '#8FB9CB' }}>Instagram</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8FB9CB' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/kelseydaywriting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-none bg-white border transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: '#e5e7eb' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                  title="Facebook"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:opacity-75" style={{ color: '#8FB9CB' }}>
                    <FaFacebook className="w-5 h-5" />
                  </div>
                  <span className="flex-1 font-light text-sm transition-colors" style={{ color: '#8FB9CB' }}>Facebook</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8FB9CB' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Social Links - appears at bottom */}
        <div className="lg:hidden mt-8 animate-slideInRight group">
          <div className="bg-gray-50 p-8 border border-gray-200 transition-colors relative overflow-hidden" style={{ borderColor: 'rgba(211, 213, 219, 1)' }}>
            <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#8FB9CB' }}></div>
            <h3 className="text-lg font-black font-light text-gray-900 mb-6 tracking-tight uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Follow</h3>
            <div className="space-y-3 flex flex-col">
              <a
                href="https://kelseydays.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-none bg-white border transition-all duration-300 hover:shadow-md"
                style={{ borderColor: '#e5e7eb' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                title="Substack Newsletter"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:opacity-75" style={{ color: '#8FB9CB' }}>
                  <SiSubstack className="w-5 h-5" />
                </div>
                <span className="flex-1 font-light text-sm transition-colors" style={{ color: '#8FB9CB' }}>Substack</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8FB9CB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kelseydays"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-none bg-white border transition-all duration-300 hover:shadow-md"
                style={{ borderColor: '#e5e7eb' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                title="Instagram"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:opacity-75" style={{ color: '#8FB9CB' }}>
                  <FaInstagram className="w-5 h-5" />
                </div>
                <span className="flex-1 font-light text-sm transition-colors" style={{ color: '#8FB9CB' }}>Instagram</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8FB9CB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://facebook.com/kelseydaywriting"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-none bg-white border transition-all duration-300 hover:shadow-md"
                style={{ borderColor: '#e5e7eb' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8FB9CB'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                title="Facebook"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:opacity-75" style={{ color: '#8FB9CB' }}>
                  <FaFacebook className="w-5 h-5" />
                </div>
                <span className="flex-1 font-light text-sm transition-colors" style={{ color: '#8FB9CB' }}>Facebook</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8FB9CB' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
