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
  const t = dictionary[locale];
  const baseUrl = getSiteUrl();
  return {
    title: { default: `Ladji Moussa OUATTARA — Portfolio`, template: `%s | Ladji Moussa OUATTARA` },
    description: t.home.intro,
    keywords: locale === 'en'
      ? ['Ladji Moussa OUATTARA', 'Computer science student', 'Web development', 'Portfolio']
      : ['Ladji Moussa OUATTARA', 'Étudiant en informatique', 'Développement web', 'Portfolio'],
    alternates: { canonical: `/${locale}`, languages: { en: '/en', fr: '/fr' } },
    openGraph: { siteName: 'Ladji Moussa Portfolio', type: 'website', locale: locale === 'en' ? 'en_US' : 'fr_FR', url: `${baseUrl}/${locale}`, images: ['/og-portfolio.svg'] },
    twitter: {
      card: 'summary_large_image',
      title: 'Ladji Moussa OUATTARA — Portfolio',
      description: t.home.intro,
      images: ['/og-portfolio.svg'],
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  return <><LocaleNav locale={locale} t={dictionary[locale]} /><main>{children}</main><LocaleFooter locale={locale} t={dictionary[locale]} /></>;
}
