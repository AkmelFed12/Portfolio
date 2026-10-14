'use client';

import { trackEvent } from '@/lib/analytics';

type TrackedWhatsAppButtonProps = {
  label: string;
  source: string;
  className: string;
  message?: string;
};

export default function TrackedWhatsAppButton({ label, source, className, message }: TrackedWhatsAppButtonProps) {
  const text = encodeURIComponent(
    message || 'Bonjour Ladji, j ai decouvert votre portfolio et je souhaite discuter d une opportunite.'
  );

  return (
    <a
      href={`https://wa.me/2250574724233?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', { source })}
      className={className}
    >
      {label}
    </a>
  );
}
