import Link from 'next/link';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';

type ConversionStripProps = {
  lang: 'en' | 'fr';
};

export default function ConversionStrip({ lang }: ConversionStripProps) {
  const t =
    lang === 'fr'
      ? {
          title: 'Pret a demarrer rapidement',
          point1: 'Reponse en moins de 24h',
          point2: 'Canal prefere: WhatsApp',
          point3: 'Disponible: stage, freelance, collaboration',
          cta1: 'Demarrer un projet',
          cta2: 'Discuter sur WhatsApp',
        }
      : {
          title: 'Ready To Start Quickly',
          point1: 'Typical response in under 24h',
          point2: 'Preferred channel: WhatsApp',
          point3: 'Available for internship, freelance, and collaborations',
          cta1: 'Start A Project',
          cta2: 'Chat On WhatsApp',
        };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="surface-card p-5 sm:p-6">
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">{t.title}</p>
        <div className="grid gap-3 sm:grid-cols-3 mb-5">
          <p className="surface-card-soft p-3 text-sm text-slate-700 dark:text-slate-200">{t.point1}</p>
          <p className="surface-card-soft p-3 text-sm text-slate-700 dark:text-slate-200">{t.point2}</p>
          <p className="surface-card-soft p-3 text-sm text-slate-700 dark:text-slate-200">{t.point3}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={lang === 'fr' ? '/contact?lang=fr' : '/contact'}
            className="btn-primary focus-ring w-full sm:w-auto"
          >
            {t.cta1}
          </Link>
          <TrackedWhatsAppButton
            label={t.cta2}
            source="conversion_strip"
            className="btn-accent focus-ring w-full sm:w-auto"
            message="Hello Ladji, I want to start a project with you. Can we discuss scope, timeline, and budget?"
          />
        </div>
      </div>
    </section>
  );
}

