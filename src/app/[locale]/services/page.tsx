import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dictionary } from '@/content/dictionary';
import { isLocale, localizedAlternates, type Locale } from '@/content/portfolio';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  const fr = locale === 'fr';
  const title = fr ? 'Formation, études à l’étranger et services numériques' : 'Digital training, study-abroad and support services';
  const description = fr
    ? 'LMO Services accompagne les jeunes, étudiants et particuliers en formation numérique, préparation de projets d’études au Canada et en France, et assistance administrative.'
    : 'LMO Services supports young people, students and individuals with digital skills, study-abroad applications for Canada and France, and administrative assistance.';
  return { title, description, alternates: localizedAlternates(locale, '/services'), openGraph: { title, description, locale: fr ? 'fr_FR' : 'en_US', type: 'website' } };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const copy = dictionary[locale].services;
  const whatsappUrl = `https://wa.me/${copy.whatsappNumber}`;

  return <div className="services-page">
    <section className="page-intro"><div className="shell services-intro"><p className="eyebrow">{copy.eyebrow} <span aria-hidden="true">·</span> {locale === 'fr' ? 'Apprendre • Comprendre • Pratiquer • Innover' : 'Learn • Understand • Practise • Innovate'}</p><h1>{copy.title}</h1><p>{copy.intro}</p><a className="button services-intro-cta" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.cta}<span aria-hidden="true"> ↗</span></a></div></section>
    <section className="section shell" aria-labelledby="services-list-title">
      <div className="section-heading services-heading"><div><p className="eyebrow">01 / {copy.eyebrow}</p><h2 id="services-list-title">{copy.section}</h2></div><span className="services-heading-mark" aria-hidden="true">✳</span></div>
      <div className="services-grid">{copy.items.map(([title, description], index) => <article className="service-card" key={title}>
        <span className="service-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p>
      </article>)}</div>
    </section>
    <section className="section section-tinted services-process" aria-labelledby="services-process-title"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">02 / {locale === 'fr' ? 'Méthode' : 'Approach'}</p><h2 id="services-process-title">{copy.processTitle}</h2></div></div>
      <div className="services-steps">{copy.process.map(([number, title, description]) => <article className="service-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>
    <section className="section shell"><div className="contact-banner services-contact"><div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><div className="services-contact-details"><a href={`mailto:${copy.email}`}>{copy.email}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp · {copy.whatsapp}</a></div></div><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.contact}<span aria-hidden="true"> ↗</span></a></div></section>
  </div>;
}
