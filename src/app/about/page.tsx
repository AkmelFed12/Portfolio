import type { Metadata } from 'next';
import ResumeDownload from '@/components/ResumeDownload';
import JourneyTimeline from '@/components/JourneyTimeline';

export const metadata: Metadata = {
  title: 'A propos',
  description: 'A propos de Ladji Moussa OUATTARA, etudiant en informatique et developpeur full-stack.',
  keywords: ['A propos de Ladji Moussa', 'Etudiant en informatique', 'Developpeur full-stack'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'A propos | Ladji Moussa OUATTARA',
    description: 'Formation, parcours et experience pratique de Ladji Moussa OUATTARA.',
    url: '/about',
    images: ['/og-about.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A propos | Ladji Moussa OUATTARA',
    description: 'Formation, parcours et experience pratique de Ladji Moussa OUATTARA.',
    images: ['/og-about.svg'],
  },
};

export default async function About() {
  const lang = 'fr' as const;
  const t =
    lang === 'fr'
      ? {
          hero: 'A propos de Ladji Moussa',
          heroSub: 'Parcours professionnel, formation et experience pratique projet',
          summary: 'Resume Professionnel',
          summary1:
            "Etudiant en BS Computer Science et apprenant full-stack avec experience pratique sur des applications web modernes. Je me concentre sur des solutions utiles et realistes avec React, Next.js, TypeScript et Tailwind CSS.",
          summary2:
            "En 2026, je continue d'apprendre en backend, bases de donnees et conception systeme, avec une approche orientee progression continue.",
          experience: 'Experience',
          expTitle: 'Projets personnels - Developpeur Full-Stack',
          expSub: 'Apprentissage Full-Stack par projet | 2025 - Aujourd hui',
          education: 'Formation',
          educationSub: 'University of the People | Diplome prevu en 2028',
        }
      : {
          hero: 'A propos de Ladji Moussa',
          heroSub: 'Parcours, formation et experience pratique sur des projets web',
          summary: 'Resume professionnel',
          summary1:
            'BS Computer Science student and full-stack learner with hands-on experience building production-grade web applications using modern technologies. Passionate about creating practical solutions for real-world problems, with strong proficiency in React, Next.js, TypeScript, and Tailwind CSS.',
          summary2:
            'In 2026, still actively learning and continuously improving in backend engineering, databases, and system design while leveraging AI tools to improve delivery quality and speed.',
          experience: 'Experience',
          expTitle: 'Projets personnels - Developpeur Full-Stack',
          expSub: 'Apprentissage pratique du full-stack | 2025 - Aujourd hui',
          education: 'Formation',
          educationSub: 'University of the People | Diplome prevu en 2028',
        };

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100 animate-slide-down">
            {t.hero}
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200 mb-8">{t.heroSub}</p>
          <ResumeDownload />
        </div>
      </section>

      <JourneyTimeline />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose dark:prose-invert max-w-none animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">{t.summary}</h2>
          <p className="text-lg text-gray-700 dark:text-slate-200 mb-6 leading-relaxed">{t.summary1}</p>
          <p className="text-lg text-gray-700 dark:text-slate-200 mb-6 leading-relaxed">{t.summary2}</p>

          <h2 className="text-3xl font-bold mb-6 mt-12">{t.experience}</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">{t.expTitle}</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-3">{t.expSub}</p>
              <ul className="space-y-2 text-gray-700 dark:text-slate-200">
                <li>Conception et developpement d applications web pour le commerce et le networking.</li>
                <li>Mise en place d interfaces responsives, d authentification et de parcours fondes sur les donnees.</li>
                <li>Deploiement en production et amelioration continue de l ergonomie et de la qualite.</li>
                <li>Stack : React, Next.js, TypeScript, Tailwind CSS, Node.js, Supabase, Vercel.</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Apprentissage et developpement</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-3">Etudiant en informatique | En cours</p>
              <ul className="space-y-2 text-gray-700 dark:text-slate-200">
                <li>Preparation d un Bachelor of Science in Computer Science a University of the People.</li>
                <li>Creation de projets pratiques pour renforcer mes competences full-stack.</li>
                <li>Focus sur le backend, les bases de donnees et l architecture evolutive.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">{t.education}</h2>
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-lg mb-4">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science en informatique</h3>
            <p className="text-gray-600 dark:text-slate-300 mb-2">{t.educationSub}</p>
            <p className="text-gray-700 dark:text-slate-200">
              Construction de bases solides en informatique et en applications pratiques.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Etudes precedentes</h3>
            <p className="text-gray-600 dark:text-slate-300 mb-2">International University of Grand-Bassam</p>
            <p className="text-gray-700 dark:text-slate-200">
              Debut d etudes en informatique avant une nouvelle orientation vers University of the People.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
