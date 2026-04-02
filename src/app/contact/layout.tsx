import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ladji Moussa OUATTARA via WhatsApp, email, and phone.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
