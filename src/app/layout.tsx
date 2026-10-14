import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ladji Moussa OUATTARA | Portfolio',
    template: '%s | Ladji Moussa OUATTARA',
  },
  applicationName: 'Ladji Moussa Portfolio',
  description:
    'Etudiant en informatique et developpeur full-stack, je construis des applications web utiles et concretes.',
  keywords: [
    'Ladji Moussa OUATTARA',
    'Developpeur full-stack',
    'Portfolio Next.js',
    'Developpeur React',
    'Developpeur web Abidjan',
    'Etudiant en informatique',
    'LMO Web Services',
  ],
  authors: [{ name: 'Ladji Moussa OUATTARA' }],
  creator: 'Ladji Moussa OUATTARA',
  publisher: 'LMO Web Services',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ladji Moussa OUATTARA | Portfolio',
    description:
      'Etudiant en informatique et developpeur full-stack, je construis des applications web utiles.',
    url: siteUrl,
    siteName: 'Ladji Portfolio',
    images: [
      {
        url: '/og-portfolio.svg',
        width: 1200,
        height: 630,
        alt: 'Ladji Moussa OUATTARA Portfolio',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladji Moussa OUATTARA | Portfolio',
    description:
      'Etudiant en informatique et developpeur full-stack, je construis des applications web utiles.',
    images: ['/og-portfolio.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var useDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', useDark);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ladji Moussa OUATTARA',
              url: siteUrl,
              jobTitle: 'Etudiant en informatique | Developpeur Full-Stack',
              description:
                'Etudiant en informatique et developpeur full-stack qui construit des applications web utiles.',
              image: `${siteUrl}/og-portfolio.svg`,
              sameAs: [
                'https://github.com/AkmelFed12',
                'https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                url: `${siteUrl}/contact`,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: siteUrl,
              name: 'Ladji Moussa Portfolio',
              description:
                'Etudiant en informatique et developpeur full-stack qui construit des applications web utiles.',
              inLanguage: 'fr-FR',
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-white">
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
