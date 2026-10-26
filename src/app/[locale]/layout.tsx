import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocaleFooter from '@/components/LocaleFooter';
import LocaleNav from '@/components/LocaleNav';
import { dictionary } from '@/content/dictionary';
import { isLocale, locales, site, type Locale } from '@/content/portfolio';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  const t = dictionary[locale];
  return {
    title: { default: `${site.name} — ${locale === 'en' ? 'Portfolio' : 'Portfolio'}`, template: `%s | ${site.name}` },
    description: t.home.intro,
    alternates: { canonical: `/${locale}`, languages: { en: '/en', fr: '/fr' } },
    openGraph: { siteName: site.name, type: 'website', locale: locale === 'en' ? 'en_US' : 'fr_FR', url: `${site.siteUrl}/${locale}`, images: ['/og-portfolio.svg'] },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  return <><LocaleNav locale={locale} t={dictionary[locale]} /><main>{children}</main><LocaleFooter locale={locale} t={dictionary[locale]} /></>;
}
