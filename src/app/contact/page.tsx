'use client';

import { FormEvent, useState } from 'react';
import ResumeDownload from '@/components/ResumeDownload';
import AvailabilityQuickSlots from '@/components/AvailabilityQuickSlots';
import { trackEvent } from '@/lib/analytics';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Application',
    stage: 'New project idea',
    budget: 'To be discussed',
    timeline: '2-4 weeks',
    contactPreference: 'WhatsApp',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const openEmailFallback = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent('Portfolio Contact Request');
    const body = encodeURIComponent(
      `Hello Ladji,\n\nName: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message || 'No message'}`
    );
    window.location.href = `mailto:ouattaralm12@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappNumber = '2250574724233';
    const emailValue = formData.email.trim() ? formData.email : 'Not provided';
    const whatsappMessage = [
      'Hello, I am contacting you from your portfolio.',
      '',
      `Name: ${formData.name}`,
      `Email: ${emailValue}`,
      `Service Needed: ${formData.service}`,
      `Project Stage: ${formData.stage}`,
      `Estimated Budget: ${formData.budget}`,
      `Preferred Timeline: ${formData.timeline}`,
      `Preferred Contact Method: ${formData.contactPreference}`,
      '',
      `Project Details: ${formData.message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    trackEvent('contact_form_submit_whatsapp', {
      source: 'contact_page',
      has_email: Boolean(formData.email),
      service: formData.service,
      stage: formData.stage,
      budget: formData.budget,
      timeline: formData.timeline,
      contact_preference: formData.contactPreference,
    });
    const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!popup) {
      openEmailFallback(formData.name, emailValue, formData.message);
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: '',
      email: '',
      service: 'Web Application',
      stage: 'New project idea',
      budget: 'To be discussed',
      timeline: '2-4 weeks',
      contactPreference: 'WhatsApp',
      message: '',
    });
  };

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100 animate-slide-down">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200 mb-8">
            Have a project in mind? Let&apos;s discuss it.
          </p>
          <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-8 font-semibold">
            Preferred channel: WhatsApp. Typical reply within 24h.
          </p>
          <ResumeDownload />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AvailabilityQuickSlots lang="en" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-left">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="stagger-item-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Emails</h3>
                <div className="space-y-1">
                  <a
                    href="mailto:ouattaralm12@gmail.com"
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline block transition"
                  >
                    ouattaralm12@gmail.com
                  </a>
                  <a
                    href="mailto:ouattaral2@student.iugb.edu.ci"
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline block transition"
                  >
                    ouattaral2@student.iugb.edu.ci
                  </a>
                </div>
              </div>
              <div className="stagger-item-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Phone Numbers</h3>
                <div className="space-y-1">
                  <a href="tel:+2250150070083" className="text-cyan-600 dark:text-cyan-400 hover:underline block transition">
                    +225 01 500 700 83
                  </a>
                  <a href="tel:+2250574724233" className="text-cyan-600 dark:text-cyan-400 hover:underline block transition">
                    +225 05 747 242 33
                  </a>
                  <a href="tel:+2250705583082" className="text-cyan-600 dark:text-cyan-400 hover:underline block transition">
                    +225 07 055 830 82
                  </a>
                </div>
              </div>
              <div className="stagger-item-3">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-700 dark:text-slate-200">
                  Cote d&apos;Ivoire, Abidjan, Treichville
                  <br />
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
                    className="text-gray-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition transform hover:scale-110"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition transform hover:scale-110"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold mb-8">Start Your Project Brief</h2>
            <p className="text-sm text-gray-600 dark:text-slate-300 mb-6">
              Fill this form and you will be redirected to WhatsApp with a complete, prefilled project brief.
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-300 mb-4">
              If WhatsApp does not open, use the fallback email button below.
            </p>
            {submitted && (
              <div className="mb-6 p-4 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-lg animate-scale-in border border-cyan-400 dark:border-cyan-700">
                Redirected to WhatsApp successfully. Thank you for your message.
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Your Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                >
                  <option>Web Application</option>
                  <option>Portfolio Website</option>
                  <option>Landing Page</option>
                  <option>Bug Fix / Optimization</option>
                </select>
              </div>
              <div>
                <label htmlFor="stage" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Stage
                </label>
                <select
                  id="stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                >
                  <option>New project idea</option>
                  <option>Design ready</option>
                  <option>Development in progress</option>
                  <option>Need maintenance/support</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                  >
                    <option>To be discussed</option>
                    <option>Under $200</option>
                    <option>$200 - $500</option>
                    <option>$500 - $1000</option>
                    <option>Above $1000</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                  >
                    <option>2-4 weeks</option>
                    <option>1 week (urgent)</option>
                    <option>1-2 months</option>
                    <option>Flexible timeline</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="contactPreference" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Preferred Contact Method
                </label>
                <select
                  id="contactPreference"
                  name="contactPreference"
                  value={formData.contactPreference}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition"
                >
                  <option>WhatsApp</option>
                  <option>Email</option>
                  <option>Phone Call</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition resize-none"
                  placeholder="Goals, pages/features, references, and constraints..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 font-semibold rounded-lg transition transform shadow-lg bg-cyan-700 hover:bg-cyan-800 hover:scale-105 text-white"
              >
                Send on WhatsApp
              </button>
              <button
                type="button"
                onClick={() => openEmailFallback(formData.name, formData.email, formData.message)}
                className="w-full px-6 py-3 font-semibold rounded-lg border border-cyan-600 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition"
              >
                Fallback: Send by Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}




