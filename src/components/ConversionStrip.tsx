'use client';

import { useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';
import { trackEvent } from '@/lib/analytics';

type ConversionStripProps = {
  lang: 'en' | 'fr';
};

function getVariant() {
  if (typeof window === 'undefined') return 'A' as const;

  const storedVariant = window.localStorage.getItem('cta_variant_home');
  if (storedVariant === 'A' || storedVariant === 'B') {
    return storedVariant;
  }

  const resolvedVariant = Math.random() < 0.5 ? 'A' : 'B';
  window.localStorage.setItem('cta_variant_home', resolvedVariant);
  return resolvedVariant;
}

function subscribe() {
  return () => {};
}

export default function ConversionStrip({ lang }: ConversionStripProps) {
  const variant = useSyncExternalStore(subscribe, getVariant, () => 'A');

  useEffect(() => {
    const exposureKey = `cta_variant_home_seen_${variant}_${lang}`;
    if (!window.sessionStorage.getItem(exposureKey)) {
      trackEvent('cta_variant_exposure', {
        placement: 'home_conversion_strip',
        variant,
        lang,
      });
      window.sessionStorage.setItem(exposureKey, '1');
    }
  }, [lang, variant]);

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
          titleA: 'Pret a demarrer rapidement',
          titleB: 'Besoin rapidement d un site professionnel ?',
          point1: 'Reponse habituelle en moins de 24h',
          point2: 'Canal prefere : WhatsApp',
          point3: '2 a 3 projets disponibles ce mois-ci',
          cta1A: 'Demarrer un projet',
          cta1B: 'Recevoir une proposition',
          cta2A: 'Discuter sur WhatsApp',
          cta2B: 'WhatsApp maintenant',
        };

  const copy =
    variant === 'B'
      ? {
          title: t.titleB,
          cta1: t.cta1B,
          cta2: t.cta2B,
        }
      : {
          title: t.titleA,
          cta1: t.cta1A,
          cta2: t.cta2A,
        };

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
            href="/contact"
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
            message="Bonjour Ladji, je souhaite demarrer un projet avec vous. Pouvons-nous discuter du besoin, du delai et du budget ?"
          />
        </div>
      </div>
    </section>
  );
}
