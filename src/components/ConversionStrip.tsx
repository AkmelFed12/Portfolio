'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';
import { trackEvent } from '@/lib/analytics';

type ConversionStripProps = {
  lang: 'en' | 'fr';
};

export default function ConversionStrip({ lang }: ConversionStripProps) {
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const storedVariant = window.localStorage.getItem('cta_variant_home');
    const resolvedVariant =
      storedVariant === 'A' || storedVariant === 'B'
        ? (storedVariant as 'A' | 'B')
        : Math.random() < 0.5
          ? 'A'
          : 'B';
    window.localStorage.setItem('cta_variant_home', resolvedVariant);
    setVariant(resolvedVariant);

    const exposureKey = `cta_variant_home_seen_${resolvedVariant}_${lang}`;
    if (!window.sessionStorage.getItem(exposureKey)) {
      trackEvent('cta_variant_exposure', {
        placement: 'home_conversion_strip',
        variant: resolvedVariant,
        lang,
      });
      window.sessionStorage.setItem(exposureKey, '1');
    }
  }, [lang]);

  const t =
    lang === 'fr'
      ? {
          titleA: 'Pret a demarrer rapidement',
          titleB: 'Besoin d un site pro rapidement ?',
          point1: 'Reponse en moins de 24h',
          point2: 'Canal prefere: WhatsApp',
          point3: '2 a 3 places de projet disponibles ce mois-ci',
          cta1A: 'Demarrer un projet',
          cta1B: 'Recevoir une proposition',
          cta2A: 'Discuter sur WhatsApp',
          cta2B: 'WhatsApp maintenant',
        }
      : {
          titleA: 'Ready To Start Quickly',
          titleB: 'Need A Professional Site Fast?',
          point1: 'Typical response in under 24h',
          point2: 'Preferred channel: WhatsApp',
          point3: '2 to 3 project slots available this month',
          cta1A: 'Start A Project',
          cta1B: 'Get A Proposal',
          cta2A: 'Chat On WhatsApp',
          cta2B: 'WhatsApp Now',
        };

  const copy = useMemo(() => {
    if (variant === 'B') {
      return {
        title: t.titleB,
        cta1: t.cta1B,
        cta2: t.cta2B,
      };
    }
    return {
      title: t.titleA,
      cta1: t.cta1A,
      cta2: t.cta2A,
    };
  }, [variant, t]);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="surface-card p-5 sm:p-6">
        <p className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">{copy.title}</p>
        <div className="grid gap-3 sm:grid-cols-3 mb-5">
          <p className="surface-card-soft p-3 text-sm text-slate-700 dark:text-slate-200">{t.point1}</p>
          <p className="surface-card-soft p-3 text-sm text-slate-700 dark:text-slate-200">{t.point2}</p>
          <p className="surface-card-soft p-3 text-sm text-slate-700 dark:text-slate-200">{t.point3}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={lang === 'fr' ? '/contact?lang=fr' : '/contact'}
            className="btn-primary focus-ring w-full sm:w-auto"
            onClick={() =>
              trackEvent('conversion_strip_click', {
                placement: 'home_conversion_strip',
                variant,
                channel: 'contact',
                lang,
              })
            }
          >
            {copy.cta1}
          </Link>
          <TrackedWhatsAppButton
            label={copy.cta2}
            source={`conversion_strip_${variant.toLowerCase()}`}
            className="btn-accent focus-ring w-full sm:w-auto"
            message="Hello Ladji, I want to start a project with you. Can we discuss scope, timeline, and budget?"
          />
        </div>
      </div>
    </section>
  );
}
