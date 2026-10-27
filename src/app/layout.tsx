import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getSiteUrl } from '@/content/portfolio';

const siteUrl = getSiteUrl();
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ladji Moussa OUATTARA | Founder of LMO Services',
    template: '%s | Ladji Moussa OUATTARA',
  },
  applicationName: 'LMO Services',
  description:
    'Ladji Moussa OUATTARA is the founder of LMO Services and a web developer building websites and web applications.',
  keywords: [
    'Ladji Moussa OUATTARA',
    'Founder of LMO Services',
    'Fondateur de LMO Services',
    'Web developer',
    'Développeur web',
    'Portfolio Next.js',
    'Web development',
    'React development',
    'Computer science student',
    'LMO Services',
  ],
  authors: [{ name: 'Ladji Moussa OUATTARA' }],
  creator: 'Ladji Moussa OUATTARA',
  publisher: 'LMO Services',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ladji Moussa OUATTARA | Founder of LMO Services',
    description:
      'Ladji Moussa OUATTARA is the founder of LMO Services and a web developer building websites and web applications.',
    url: siteUrl,
    siteName: 'LMO Services · Ladji Moussa OUATTARA',
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
    title: 'Ladji Moussa OUATTARA | Founder of LMO Services',
    description:
      'Ladji Moussa OUATTARA is the founder of LMO Services and a web developer building websites and web applications.',
    images: ['/og-portfolio.svg'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get('x-portfolio-locale') === 'fr' ? 'fr' : 'en';
  const schemaDescription = locale === 'fr'
    ? 'Ladji Moussa OUATTARA est le fondateur de LMO Services et développeur web. Il conçoit des sites et des applications web pour les entreprises, les associations et les porteurs de projets.'
    : 'Ladji Moussa OUATTARA is the founder of LMO Services and a web developer building websites and web applications for businesses, associations and growing projects.';
  return (
    <html
      lang={locale}
      className={`h-full antialiased ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var match = window.location.pathname.match(/^\\/(en|fr)(?:\\/|$)/);
                if (match) document.documentElement.lang = match[1];
              })();
            `,
          }}
        />
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
              jobTitle: locale === 'fr' ? 'Fondateur de LMO Services · Développeur web' : 'Founder of LMO Services · Web developer',
              description: schemaDescription,
              image: `${siteUrl}/og-portfolio.svg`,
              worksFor: {
                '@type': 'Organization',
                name: 'LMO Services',
              },
              sameAs: [
                'https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'General contact',
                url: `${siteUrl}/${locale}/contact`,
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
              name: 'LMO Services · Ladji Moussa OUATTARA',
              description: schemaDescription,
              inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
            }),
          }}
        />
      </head>
      <body className="min-h-full">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
