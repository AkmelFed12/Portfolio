'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // For now, just validate email and show success
      // In production, integrate with Mailchimp, ConvertKit, or similar
      if (!email || !email.includes('@')) {
        setError('Please enter a valid email address');
        setLoading(false);
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch {
      // Error handled silently
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="surface-card p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Subscribe to My Newsletter
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
          Get insights about web development, my projects, and learning updates delivered to your inbox
        </p>

        {subscribed ? (
          <div className="surface-card-soft p-6 animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-semibold text-slate-900 dark:text-slate-100">Thanks for subscribing!</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">Check your email for confirmation</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus-ring"
              required
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-cyan-700 text-white hover:bg-cyan-800 focus-ring'
              }`}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {error && (
          <div className="mt-4 text-red-600 dark:text-red-300 text-sm">
            {error}
          </div>
        )}

        <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
          No spam, unsubscribe anytime. I share updates about 2-3 times per month.
        </p>
        </div>
      </div>
    </section>
  );
}


