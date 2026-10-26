import Link from 'next/link';
import type { Locale } from '@/content/portfolio';
import { localizedPath, site } from '@/content/portfolio';
import type { Dictionary } from '@/content/dictionary';

export default function LocaleFooter({ locale, t }: { locale: Locale; t: Dictionary }) {
  return <footer className="site-footer"><div className="shell footer-grid"><div><Link className="brand" href={localizedPath(locale)}><span className="brand-mark">LM</span><span>{site.name}</span></Link><p className="footer-copy">{t.footer.built}</p></div><div className="footer-links"><Link href={localizedPath(locale, '/projects')}>{t.nav.work}</Link><Link href={localizedPath(locale, '/about')}>{t.nav.about}</Link><Link href={localizedPath(locale, '/contact')}>{t.nav.contact}</Link><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>{t.footer.rights}</span></div></footer>;
}
