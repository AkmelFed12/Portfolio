'use client';

import { useMemo } from 'react';
import { trackEvent } from '@/lib/analytics';

type AvailabilityQuickSlotsProps = {
  lang: 'en' | 'fr';
};

type Slot = {
  date: Date;
  label: string;
  value: string;
};

function allowedHoursByDay(dayOfWeek: number): number[] {
  // JS day: 0=Sun, 1=Mon, ... 6=Sat
  if (dayOfWeek >= 1 && dayOfWeek <= 5) return [10, 14, 18, 20]; // Mon-Fri 10:00-22:00
  if (dayOfWeek === 6) return [14, 18, 20]; // Saturday 14:00-22:00
  return []; // Sunday unavailable
}

function buildNextSlots(lang: 'en' | 'fr', count: number): Slot[] {
  const now = new Date();
  const minLeadTime = new Date(now.getTime() + 60 * 60 * 1000); // +1h
  const locale = lang === 'fr' ? 'fr-FR' : 'en-GB';
  const dayFormatter = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

  const slots: Slot[] = [];
  const cursor = new Date(now);
  cursor.setHours(0, 0, 0, 0);

  // Look ahead up to ~3 weeks to guarantee enough slots
  for (let i = 0; i < 21 && slots.length < count; i += 1) {
    const day = new Date(cursor);
    day.setDate(cursor.getDate() + i);
    const hours = allowedHoursByDay(day.getDay());

    for (const hour of hours) {
      const slotDate = new Date(day);
      slotDate.setHours(hour, 0, 0, 0);
      if (slotDate <= minLeadTime) continue;

      const hourLabel = `${String(hour).padStart(2, '0')}:00`;
      const dayLabel = dayFormatter.format(slotDate);
      const label =
        lang === 'fr'
          ? `${dayLabel} • ${hourLabel} (GMT, Abidjan)`
          : `${dayLabel} • ${hourLabel} (GMT, Abidjan)`;
      const value =
        lang === 'fr'
          ? `${dayLabel} a ${hourLabel} GMT (Abidjan)`
          : `${dayLabel} at ${hourLabel} GMT (Abidjan)`;

      slots.push({ date: slotDate, label, value });
      if (slots.length >= count) break;
    }
  }

  return slots;
}

export default function AvailabilityQuickSlots({ lang }: AvailabilityQuickSlotsProps) {
  const slots = useMemo(() => buildNextSlots(lang, 3), [lang]);

  const t =
    lang === 'fr'
      ? {
          title: 'Choisir un creneau rapide',
          subtitle:
            'Disponibilite: lun-ven 10h-22h, samedi 14h-22h (GMT, Abidjan). Clique pour reserver sur WhatsApp.',
          cta: 'Reserver ce creneau',
          message:
            'Bonjour Ladji, je souhaite reserver ce creneau pour discuter de mon projet. Merci de confirmer.',
        }
      : {
          title: 'Pick A Quick Slot',
          subtitle:
            'Availability: Mon-Fri 10:00-22:00, Saturday 14:00-22:00 (GMT, Abidjan). Click to book on WhatsApp.',
          cta: 'Book This Slot',
          message:
            'Hello Ladji, I would like to book this time slot to discuss my project. Please confirm availability.',
        };

  const onBook = (slot: string) => {
    const text = encodeURIComponent(`${t.message}\n\n${slot}`);
    trackEvent('availability_slot_click', { slot, lang });
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
