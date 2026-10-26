import Link from 'next/link';
import { headers } from 'next/headers';
import { dictionary } from '@/content/dictionary';
import { localizedPath, type Locale } from '@/content/portfolio';

export default async function NotFound() {
  const locale: Locale = (await headers()).get('x-portfolio-locale') === 'fr' ? 'fr' : 'en';
  const t = dictionary[locale];

  return (
    <div className="not-found-page">
      <div className="shell not-found-content">
        <p className="eyebrow">404</p>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
        <div className="hero-actions">
          <Link className="button" href={localizedPath(locale)}>{t.notFound.home}</Link>
          <Link className="button button-quiet" href={localizedPath(locale, '/projects')}>{t.notFound.projects}</Link>
        </div>
      </div>
    </div>
  );
}
