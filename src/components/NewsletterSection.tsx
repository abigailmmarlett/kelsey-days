import React, { useState } from 'react';
import kelseyMic from '../assets/kelsey-mic.jpg';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!agreed) {
      setError('Please agree to receive updates');
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
          '_u753266812554369703': email,
          'opted_in': agreed ? '1' : '0',
        }).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setAgreed(false);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Failed to subscribe. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${kelseyMic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/25 to-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-sm mx-auto px-2 animate-fadeInUp">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join the list
          </h2>
          <p className="text-sm text-white/80 font-light leading-relaxed">
            New releases, readings, and writing news—straight to you.
          </p>
        </div>

        {submitted && (
          <div className="mb-5 p-3 bg-white/10 rounded-lg text-white text-sm font-light border border-white/20 animate-pulse">
            ✓ You're all set. Check your inbox.
          </div>
        )}

        {error && (
          <div className="mb-5 p-3 bg-red-500/15 rounded-lg text-red-100 text-sm font-light border border-red-400/30">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email Field + Submit Button (responsive) */}
          <div className="relative flex flex-col sm:flex-row gap-2 sm:gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/8 border border-white/20 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/40 focus:bg-white/10 font-light transition-all duration-200"
              required
            />

            {/* Submit Button with Animated Checkmark */}
            <div className="relative w-full sm:w-auto">
              {/* Button (visible when not submitted) */}
              <button
                type="submit"
                disabled={isLoading || submitted}
                className={`w-full sm:w-auto px-5 py-2.5 bg-white text-black rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 whitespace-nowrap ${submitted ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100 hover:bg-white/90 hover:shadow-xl active:scale-95'
                  } ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>

              {/* Checkmark Circle (visible when submitted) */}
              {submitted && (
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${submitted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-black animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Consent Checkbox */}
          <label className="flex items-start gap-2.5 text-xs text-white/75 font-light cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 rounded accent-white"
              required
            />
            <span className="leading-relaxed">
              Send me updates and occasional notes
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}
