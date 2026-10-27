import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/content/portfolio';

const resumeFile = '/CV_LADJI_MOUSSA_OUATTARA.pdf';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: locale === 'fr' ? 'Mon CV' : 'My CV',
    description: locale === 'fr'
      ? 'Consultez ou téléchargez le CV de Ladji Moussa OUATTARA.'
      : 'View or download the CV of Ladji Moussa OUATTARA.',
    alternates: {
      canonical: `/${locale}/cv`,
      languages: { en: '/en/cv', fr: '/fr/cv' },
    },
  };
}

export default async function ResumePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const isFrench = locale === 'fr';
  const title = isFrench ? 'Mon CV' : 'My CV';
  const description = isFrench
    ? 'Mon parcours, mes compétences et mes projets réunis dans un document clair.'
    : 'My experience, skills and projects in one clear document.';

  return (
    <div className="cv-page">
      <section className="page-intro cv-intro">
        <div className="shell">
          <p className="eyebrow">CV · Ladji Moussa OUATTARA</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="cv-actions">
            <a className="button" href={resumeFile} download>
              {isFrench ? 'Télécharger le CV' : 'Download CV'} <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href={resumeFile} target="_blank" rel="noreferrer">
              {isFrench ? 'Ouvrir le PDF' : 'Open PDF'} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="cv-document shell" aria-label={isFrench ? 'CV au format PDF' : 'CV in PDF format'}>
        <iframe
          className="cv-frame"
          src={`${resumeFile}#view=FitH`}
          title={isFrench ? 'CV de Ladji Moussa OUATTARA' : 'Ladji Moussa OUATTARA CV'}
        />
        <p className="cv-fallback">
          {isFrench ? 'Le lecteur PDF ne s’affiche pas ?' : 'Can’t see the PDF viewer?'}{' '}
          <a href={resumeFile} target="_blank" rel="noreferrer">
            {isFrench ? 'Ouvrir le CV dans un nouvel onglet.' : 'Open the CV in a new tab.'}
          </a>
        </p>
      </section>
    </div>
  );
}
