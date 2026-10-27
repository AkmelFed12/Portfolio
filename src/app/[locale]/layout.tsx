import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocaleFooter from '@/components/LocaleFooter';
import LocaleNav from '@/components/LocaleNav';
import { dictionary } from '@/content/dictionary';
import { getSiteUrl, isLocale, locales, type Locale } from '@/content/portfolio';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  const baseUrl = getSiteUrl();
  const pageTitle = locale === 'en'
    ? 'Ladji Moussa OUATTARA | Founder of LMO Services'
    : 'Ladji Moussa OUATTARA | Fondateur de LMO Services';
  const defaultTitle = locale === 'en' ? 'Founder of LMO Services' : 'Fondateur de LMO Services';
  const description = locale === 'en'
    ? 'Ladji Moussa OUATTARA is the founder of LMO Services and a web developer building websites and web applications for businesses, associations and growing projects.'
    : 'Ladji Moussa OUATTARA, fondateur de LMO Services et développeur web. Création de sites et d’applications web pour les entreprises, associations et porteurs de projets.';
  return {
    title: { default: defaultTitle, template: `%s | Ladji Moussa OUATTARA` },
    description,
    keywords: locale === 'en'
      ? ['Ladji Moussa OUATTARA', 'Founder of LMO Services', 'Web developer', 'Website development', 'Web applications']
      : ['Ladji Moussa OUATTARA', 'Fondateur de LMO Services', 'Développeur web', 'Création de site web', 'Application web'],
    alternates: { canonical: `/${locale}`, languages: { en: '/en', fr: '/fr' } },
    openGraph: { title: pageTitle, description, siteName: 'LMO Services · Ladji Moussa OUATTARA', type: 'website', locale: locale === 'en' ? 'en_US' : 'fr_FR', url: `${baseUrl}/${locale}`, images: ['/og-portfolio.svg'] },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: ['/og-portfolio.svg'],
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  return <><a className="skip-link" href="#main-content">{locale === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a><LocaleNav locale={locale} t={dictionary[locale]} /><main id="main-content" tabIndex={-1}>{children}</main><LocaleFooter locale={locale} t={dictionary[locale]} /></>;
}
