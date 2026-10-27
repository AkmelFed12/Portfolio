'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Locale } from '@/content/portfolio';
import { localizedPath, projects } from '@/content/portfolio';
import type { Dictionary } from '@/content/dictionary';
import ThemeToggle from '@/components/ThemeToggle';

export default function LocaleNav({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = [
    [localizedPath(locale), t.nav.home],
    [localizedPath(locale, '/projects'), t.nav.work],
    [localizedPath(locale, '/services'), t.nav.services],
    [localizedPath(locale, '/about'), t.nav.about],
    [localizedPath(locale, '/cv'), t.nav.resume],
    [localizedPath(locale, '/contact'), t.nav.contact],
  ] as const;
  const switchLocale = locale === 'en' ? 'fr' : 'en';
  const currentPath = pathname.replace(/^\/(en|fr)/, '');
  const knownPaths = new Set(['/','/projects','/services','/about','/cv','/contact']);
  const isKnownProject = projects.some((project) => currentPath === `/projects/${project.slug}`);
  const equivalent = knownPaths.has(currentPath) || isKnownProject
    ? `/${switchLocale}${currentPath === '/' ? '' : currentPath}`
    : `/${switchLocale}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <header className="site-header">
      <nav className="shell nav-shell" aria-label={t.nav.primary}>
        <Link className="brand" href={localizedPath(locale)} onClick={() => setOpen(false)}>
          <span className="brand-mark">LM</span>
          <span>Ladji Moussa</span>
        </Link>
        <button className={`menu-button ${open ? 'is-open' : ''}`} type="button" aria-expanded={open} aria-controls="site-menu" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <div id="site-menu" className={`nav-menu ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {items.map(([href, label]) => <Link key={href} href={href} className={pathname === href || (href !== localizedPath(locale) && pathname.startsWith(`${href}/`)) ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>{label}</Link>)}
          </div>
          <div className="nav-actions">
            <Link href={equivalent} className="locale-switch" aria-label={`${t.nav.switchLanguage}: ${t.nav.switchTo} ${switchLocale.toUpperCase()}`} onClick={() => setOpen(false)}>
              <span className={locale === 'en' ? 'selected' : ''} aria-current={locale === 'en' ? 'page' : undefined}>EN</span><span aria-hidden="true">/</span><span className={locale === 'fr' ? 'selected' : ''} aria-current={locale === 'fr' ? 'page' : undefined}>FR</span>
            </Link>
            <ThemeToggle locale={locale} />
            <a className="button button-small" href="/CV_LADJI_MOUSSA_OUATTARA.pdf" download onClick={() => setOpen(false)}>{t.nav.cv}</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
