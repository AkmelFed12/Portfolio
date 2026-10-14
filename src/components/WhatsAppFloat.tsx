'use client';

import { trackEvent } from '@/lib/analytics';

export default function WhatsAppFloat() {
  const phone = '2250574724233';
  const text = encodeURIComponent('Bonjour Ladji, je vous contacte depuis votre portfolio.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating_cta' })}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl transition focus-ring"
      aria-label="Discuter sur WhatsApp"
    >
      <span className="text-base sm:text-lg">WhatsApp</span>
    </a>
  );
}
