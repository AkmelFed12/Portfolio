'use client';

import { trackEvent } from '@/lib/analytics';

type AvailabilityQuickSlotsProps = {
  lang: 'en' | 'fr';
};

const WEEKDAY_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
});

function getNextBusinessDays(count: number): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
  }

  return days;
}

export default function AvailabilityQuickSlots({ lang }: AvailabilityQuickSlotsProps) {
  const slots = getNextBusinessDays(3).map((date) => ({
    label: `${WEEKDAY_FORMATTER.format(date)} • 18:00 GMT`,
    value: `${WEEKDAY_FORMATTER.format(date)} at 18:00 GMT`,
  }));

  const t =
    lang === 'fr'
      ? {
          title: 'Choisir un creneau rapide',
          subtitle: 'Clique et envoie directement ta disponibilite sur WhatsApp.',
          cta: 'Reserver ce creneau',
        }
      : {
          title: 'Pick A Quick Slot',
          subtitle: 'Click and send your preferred availability directly on WhatsApp.',
          cta: 'Book This Slot',
        };

  const onBook = (slot: string) => {
    const text = encodeURIComponent(
      `Hello Ladji, I would like a project call on ${slot}. Please confirm availability.`
    );
    trackEvent('availability_slot_click', { slot });
    window.open(`https://wa.me/2250574724233?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-2 sm:py-4">
      <div className="surface-card p-5 sm:p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t.title}</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-5">{t.subtitle}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {slots.map((slot) => (
            <button
              key={slot.value}
              type="button"
              onClick={() => onBook(slot.value)}
              className="surface-card-soft p-4 text-left focus-ring"
            >
              <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{slot.label}</p>
              <p className="text-sm text-cyan-700 dark:text-cyan-300">{t.cta}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
