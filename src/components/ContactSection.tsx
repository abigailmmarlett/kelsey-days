import React, { useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import kelseyFlowers from '../assets/kelsey-flowers.jpg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch('https://www.kelseydays.com/ajax/apps/formSubmitAjax.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          '_u116485263460613739[first]': formData.name.split(' ')[0],
          '_u116485263460613739[last]': formData.name.split(' ').slice(1).join(' '),
          '_u627038614722257783': formData.email,
          '_u916200394255324700': formData.message,
          'wsite_subject': 'Contact Form Submission',
          'form_version': '2',
          'wsite_approved': 'approved',
        }).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact the Author
          </h2>
          <div className="h-1 w-12 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 auto-rows-max lg:auto-rows-fr">
          {/* Left Column - Representatives and Form */}
          <div className="animate-slideInLeft space-y-8">
            {/* Literary Representatives */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-light text-gray-900 mb-4 tracking-tight">Literary Representatives</h3>
              <div className="space-y-6 text-gray-700 leading-relaxed font-light text-sm">
                <div>
                  <p className="mb-2">
                    For adult literary fiction, poetry commissions, permission use, and lecture inquiries:
                  </p>
                  <p className="font-medium">
                    Kate Johnson
                  </p>
                  <a
                    href="mailto:Kate@wolflit.com"
                    className="text-gray-900 hover:text-gray-600 border-b border-gray-900 hover:border-gray-600 transition-colors"
                  >
                    Wolf Literary Services
                  </a>
                </div>

                <div>
                  <p className="mb-2">
                    For young adult and children's fiction inquiries:
                  </p>
                  <p className="font-medium">
                    Elizabeth Rudnick
                  </p>
                  <a
                    href="mailto:erudnick@gmalit.com"
                    className="text-gray-900 hover:text-gray-600 border-b border-gray-900 hover:border-gray-600 transition-colors"
                  >
                    Gillian MacKenzie Agency
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm font-light animate-pulse">
                  ✓ Thank you for your message. We'll be in touch soon.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm font-light">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-light transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-light transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-light transition-all duration-200 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || submitted}
                className="w-full px-8 py-3 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-all duration-300 font-light tracking-widest uppercase text-sm hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column - Image and Social */}
          <div className="animate-slideInRight space-y-8">
            {/* Featured Image */}
            <div>
              <img
                src={kelseyFlowers}
                alt="Kelsey Day"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border border-gray-200">
              <div className="space-y-3 flex flex-col">
                <a
                  href="https://kelseydays.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all duration-300"
                  title="Substack Newsletter"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-all duration-300">
                    <SiSubstack className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="flex-1 text-gray-900 font-light text-sm group-hover:text-gray-700 transition-colors">Substack</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/kelseydays"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all duration-300"
                  title="Instagram"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-all duration-300">
                    <FaInstagram className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="flex-1 text-gray-900 font-light text-sm group-hover:text-gray-700 transition-colors">Instagram</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/kelseydaywriting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all duration-300"
                  title="Facebook"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-all duration-300">
                    <FaFacebook className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="flex-1 text-gray-900 font-light text-sm group-hover:text-gray-700 transition-colors">Facebook</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
