import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Ladji Moussa OUATTARA with education, skills, projects, and contact information.',
  openGraph: {
    title: 'Resume | Ladji Moussa OUATTARA',
    description: 'Education, technical skills, and project experience of Ladji Moussa OUATTARA.',
    images: ['/og-portfolio.svg'],
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
