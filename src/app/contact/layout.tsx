import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ladji Moussa OUATTARA via WhatsApp, email, and phone.',
  openGraph: {
    title: 'Contact | Ladji Moussa OUATTARA',
    description: 'Reach out via WhatsApp, email, and phone for project inquiries.',
    images: ['/og-contact.svg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
