'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const withLang = (path: string) => path;

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => path === '/' ? pathname === path : pathname.startsWith(path);
  const linkClass = (path: string) =>
    `rounded-lg px-2 py-1.5 text-sm font-medium transition ${
      isActive(path)
        ? 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-200'
        : 'text-gray-700 hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-cyan-300'
    }`;

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 border-b border-gray-200 dark:border-slate-700/80 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <Link
            href={withLang('/')}
            className="inline-flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-100"
          >
            <Image
              src="/images/ladji-moussa-profile.jpeg"
              alt="Portrait de Ladji Moussa OUATTARA"
              width={38}
              height={38}
              className="h-9 w-9 rounded-xl object-cover shadow-sm ring-2 ring-cyan-100 dark:ring-cyan-900"
            />
            <span>Ladji Moussa</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link href={withLang('/')} className={linkClass('/')}>
              Accueil
            </Link>
            <Link href={withLang('/projects')} className={linkClass('/projects')}>
              Projets
            </Link>
            <Link href={withLang('/services')} className={linkClass('/services')}>
              Services
            </Link>
            <Link href={withLang('/about')} className={linkClass('/about')}>
              A propos
            </Link>
            <Link href={withLang('/blog')} className={linkClass('/blog')}>
              Blog
            </Link>
            <Link href={withLang('/resume')} className={linkClass('/resume')}>
              CV
            </Link>
            <Link href={withLang('/contact')} className={linkClass('/contact')}>
              Contact
            </Link>
            <a
              href="/CV_LADJI_MOUSSA_OUATTARA.pdf"
              download
              onClick={() => trackEvent('resume_download', { source: 'navbar_desktop' })}
              className="btn-primary focus-ring px-3 py-2 text-sm"
            >
              Telecharger le CV
            </a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 focus-ring"
              aria-label="Ouvrir le menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link onClick={closeMenu} href={withLang('/')} className={`block ${linkClass('/')}`}>
              Accueil
            </Link>
            <Link onClick={closeMenu} href={withLang('/projects')} className={`block ${linkClass('/projects')}`}>
              Projets
            </Link>
            <Link onClick={closeMenu} href={withLang('/services')} className={`block ${linkClass('/services')}`}>
              Services
            </Link>
            <Link onClick={closeMenu} href={withLang('/about')} className={`block ${linkClass('/about')}`}>
              A propos
            </Link>
            <Link onClick={closeMenu} href={withLang('/blog')} className={`block ${linkClass('/blog')}`}>
              Blog
            </Link>
            <Link onClick={closeMenu} href={withLang('/resume')} className={`block ${linkClass('/resume')}`}>
              CV
            </Link>
            <Link onClick={closeMenu} href={withLang('/contact')} className={`block ${linkClass('/contact')}`}>
              Contact
            </Link>
            <a
              href="/CV_LADJI_MOUSSA_OUATTARA.pdf"
              download
              onClick={() => trackEvent('resume_download', { source: 'navbar_mobile' })}
              className="btn-primary focus-ring w-full px-3 py-2 text-center"
            >
              Telecharger le CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
