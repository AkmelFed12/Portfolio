'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { trackEvent } from '@/lib/analytics';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') === 'fr' ? 'fr' : 'en';

  const withLang = (path: string) => (lang === 'fr' ? `${path}?lang=fr` : path);
  const switchHref = lang === 'fr' ? pathname : `${pathname}?lang=fr`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/95 dark:bg-slate-900/95 border-b border-gray-200 dark:border-slate-700/80 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <Link
            href={withLang('/')}
            className="font-bold text-xl text-slate-900 dark:text-slate-100"
          >
            Ladji Moussa
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link href={withLang('/')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              Home
            </Link>
            <Link href={withLang('/projects')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              Projects
            </Link>
            <Link href={withLang('/services')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              Services
            </Link>
            <Link href={withLang('/about')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              About
            </Link>
            <Link href={withLang('/blog')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              Blog
            </Link>
            <Link href={withLang('/resume')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              Resume
            </Link>
            <Link href={withLang('/contact')} className="text-gray-700 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-300 transition">
              Contact
            </Link>
            <a
              href="/CV_LADJI_MOUSSA_OUATTARA.pdf"
              download
              onClick={() => trackEvent('resume_download', { source: 'navbar_desktop' })}
              className="px-3 py-2 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={switchHref}
              className="px-3 py-1 rounded-full text-xs font-semibold border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </Link>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link onClick={closeMenu} href={withLang('/')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Home
            </Link>
            <Link onClick={closeMenu} href={withLang('/projects')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Projects
            </Link>
            <Link onClick={closeMenu} href={withLang('/services')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Services
            </Link>
            <Link onClick={closeMenu} href={withLang('/about')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              About
            </Link>
            <Link onClick={closeMenu} href={withLang('/blog')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Blog
            </Link>
            <Link onClick={closeMenu} href={withLang('/resume')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Resume
            </Link>
            <Link onClick={closeMenu} href={withLang('/contact')} className="block px-3 py-2 text-gray-700 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800 rounded">
              Contact
            </Link>
            <a
              href="/CV_LADJI_MOUSSA_OUATTARA.pdf"
              download
              onClick={() => trackEvent('resume_download', { source: 'navbar_mobile' })}
              className="block px-3 py-2 rounded text-center text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}



