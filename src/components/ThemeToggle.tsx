'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/content/portfolio';

export default function ThemeToggle({ locale = 'fr' }: { locale?: Locale } = {}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', nextIsDark);
    setIsDark(nextIsDark);
    try {
      localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
    } catch {
      // Keep the in-session theme switch available when storage is disabled.
    }
  };

  const label = locale === 'fr'
    ? (isDark ? 'Passer au thème clair' : 'Passer au thème sombre')
    : (isDark ? 'Switch to light theme' : 'Switch to dark theme');

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path d="M20.4 15.4A8.5 8.5 0 0 1 8.6 3.6 8.6 8.6 0 1 0 20.4 15.4Z" />
        </svg>
      )}
      <span className="theme-toggle-label">{label}</span>
    </button>
  );
}
