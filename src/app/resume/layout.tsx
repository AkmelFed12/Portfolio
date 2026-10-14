import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description: 'CV de Ladji Moussa OUATTARA avec formation, competences, projets et coordonnees.',
  openGraph: {
    title: 'CV | Ladji Moussa OUATTARA',
    description: 'Formation, competences techniques et experience projet de Ladji Moussa OUATTARA.',
    images: ['/og-resume.svg'],
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
