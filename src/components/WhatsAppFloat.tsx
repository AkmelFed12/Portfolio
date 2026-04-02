'use client';

import { trackEvent } from '@/lib/analytics';

export default function WhatsAppFloat() {
  const phone = '2250574724233';
  const text = encodeURIComponent('Hello Ladji, I am contacting you from your portfolio website.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating_cta' })}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 shadow-xl transition"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-lg">WhatsApp</span>
    </a>
  );
}
