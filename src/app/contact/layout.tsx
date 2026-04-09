import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ladji Moussa OUATTARA via WhatsApp, email, and phone.',
  keywords: ['Contact web developer', 'WhatsApp developer contact', 'Ladji Moussa contact'],
  alternates: {
    canonical: '/contact',
    languages: {
      'en-US': '/contact',
      'fr-FR': '/contact?lang=fr',
    },
  },
  openGraph: {
    title: 'Contact | Ladji Moussa OUATTARA',
    description: 'Reach out via WhatsApp, email, and phone for project inquiries.',
    url: '/contact',
    images: ['/og-contact.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Ladji Moussa OUATTARA',
    description: 'Reach out via WhatsApp, email, and phone for project inquiries.',
    images: ['/og-contact.svg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
