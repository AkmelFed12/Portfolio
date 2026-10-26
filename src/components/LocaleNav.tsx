'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Locale } from '@/content/portfolio';
import { localizedPath } from '@/content/portfolio';
import type { Dictionary } from '@/content/dictionary';

export default function LocaleNav({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const items = [
    [localizedPath(locale), t.nav.home],
    [localizedPath(locale, '/projects'), t.nav.work],
    [localizedPath(locale, '/about'), t.nav.about],
    [localizedPath(locale, '/contact'), t.nav.contact],
  ] as const;
  const switchLocale = locale === 'en' ? 'fr' : 'en';
  const equivalent = pathname.replace(/^\/(en|fr)/, `/${switchLocale}`) || `/${switchLocale}`;

  return (
    <header className="site-header">
      <nav className="shell nav-shell" aria-label="Primary navigation">
        <Link className="brand" href={localizedPath(locale)} onClick={() => setOpen(false)}>
          <span className="brand-mark">LM</span>
          <span>Ladji Moussa</span>
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-menu" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <div id="site-menu" className={`nav-menu ${open ? 'is-open' : ''}`}>
          <div className="nav-links">
            {items.map(([href, label]) => <Link key={href} href={href} className={pathname === href || (href !== localizedPath(locale) && pathname.startsWith(`${href}/`)) ? 'nav-link active' : 'nav-link'} onClick={() => setOpen(false)}>{label}</Link>)}
          </div>
          <div className="nav-actions">
            <Link href={equivalent} className="locale-switch" aria-label={`Switch to ${switchLocale.toUpperCase()}`} onClick={() => setOpen(false)}>
              <span className={locale === 'en' ? 'selected' : ''}>EN</span><span aria-hidden="true">/</span><span className={locale === 'fr' ? 'selected' : ''}>FR</span>
            </Link>
            <a className="button button-small" href="/CV_LADJI_MOUSSA_OUATTARA.pdf" download onClick={() => setOpen(false)}>{t.nav.cv}</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
