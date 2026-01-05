import React, { useState } from 'react';

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
      className="relative py-40 sm:py-48 lg:py-64 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url('/kelsey-mic.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/25 to-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-sm mx-auto px-2 animate-fadeInUp hidden">
        {/* Form hidden - email and subscribe button removed */}
      </div>
    </section>
  );
}
