import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Ladji Moussa OUATTARA with education, skills, projects, and contact information.',
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
