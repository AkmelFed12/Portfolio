'use client';

import { FormEvent, useState } from 'react';
import ResumeDownload from '@/components/ResumeDownload';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappNumber = '2250574724233';
    const whatsappMessage =
      `Bonjour, je vous contacte depuis votre portfolio.%0A%0A` +
      `Nom: ${encodeURIComponent(formData.name)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Message: ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-down">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Have a project in mind? Let's talk about it!
          </p>
          <p className="text-sm text-green-700 dark:text-green-300 mb-8 font-semibold">
            Preferred channel: WhatsApp. Typical reply within 24h.
          </p>
          <ResumeDownload />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-left">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="stagger-item-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Emails</h3>
                <div className="space-y-1">
                  <a
                    href="mailto:ouattaralm12@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline block transition"
                  >
                    ouattaralm12@gmail.com
                  </a>
                  <a
                    href="mailto:ouattaral2@student.iugb.edu.ci"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline block transition"
                  >
                    ouattaral2@student.iugb.edu.ci
                  </a>
                </div>
              </div>
              <div className="stagger-item-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Phone Numbers</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+22501500700"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline block transition"
                  >
                    +225 01 500 700 83
                  </a>
                  <a
                    href="tel:+22505747242"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline block transition"
                  >
                    +225 05 747 242 33
                  </a>
                  <a
                    href="tel:+22507055830"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline block transition"
                  >
                    +225 07 055 830 82
                  </a>
                </div>
              </div>
              <div className="stagger-item-3">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Côte d'Ivoire, Abidjan, Treichville<br />
                  Avenue 4 Rue 13
                </p>
              </div>
              <div className="stagger-item-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Social Links</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/AkmelFed12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition transform hover:scale-110"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition transform hover:scale-110"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold mb-8">Send Me a Message</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill the form and you will be redirected to WhatsApp to send your message directly.
            </p>
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg animate-scale-in border border-green-400 dark:border-green-700">
                ✓ Redirection vers WhatsApp effectuee. Merci pour votre message.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 font-semibold rounded-lg transition transform shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-105 text-white"
              >
                Envoyer sur WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
