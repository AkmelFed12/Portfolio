import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter Ladji Moussa OUATTARA par WhatsApp, email ou telephone.',
  keywords: ['Contacter un developpeur web', 'Contact developpeur WhatsApp', 'Contact Ladji Moussa'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Ladji Moussa OUATTARA',
    description: 'Contactez Ladji Moussa OUATTARA par WhatsApp, email ou telephone pour votre projet.',
    url: '/contact',
    images: ['/og-contact.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Ladji Moussa OUATTARA',
    description: 'Contactez Ladji Moussa OUATTARA par WhatsApp, email ou telephone pour votre projet.',
    images: ['/og-contact.svg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
