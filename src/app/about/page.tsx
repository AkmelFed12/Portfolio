import type { Metadata } from 'next';
import ResumeDownload from '@/components/ResumeDownload';
import JourneyTimeline from '@/components/JourneyTimeline';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ladji Moussa OUATTARA, BS Computer Science student and project-based full-stack learner.',
  openGraph: {
    title: 'About | Ladji Moussa OUATTARA',
    description: 'Education, timeline, and project-based learning journey of Ladji Moussa OUATTARA.',
    images: ['/og-about.svg'],
  },
};

type AboutPageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function About({ searchParams }: AboutPageProps) {
  const params = await searchParams;
  const lang = params?.lang === 'fr' ? 'fr' : 'en';
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
          expTitle: 'Projet ASAA Portal - Developpeur Etudiant',
          expSub: 'Apprentissage Full-Stack par Projet | 2025 - Present',
          education: 'Education',
          educationSub: 'University of the People | Diplome prevu en 2028',
        }
      : {
          hero: 'About Ladji Moussa',
          heroSub: 'Professional background, education, and hands-on project experience',
          summary: 'Professional Summary',
          summary1:
            'BS Computer Science student and full-stack learner with hands-on experience building production-grade web applications using modern technologies. Passionate about creating practical solutions for real-world problems, with strong proficiency in React, Next.js, TypeScript, and Tailwind CSS.',
          summary2:
            'In 2026, still actively learning and continuously improving in backend engineering, databases, and system design while leveraging AI tools to improve delivery quality and speed.',
          experience: 'Experience',
          expTitle: 'ASAA Portal Project - Student Developer',
          expSub: 'Project-Based Full-Stack Learning | 2025 - Present',
          education: 'Education',
          educationSub: 'University of the People | Expected 2028',
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
                <li>Designed and built a complete membership and event management platform.</li>
                <li>Implemented authentication, pre-selection workflows, and member space features.</li>
                <li>Deployed to production on Vercel with strong availability and performance.</li>
                <li>Tech stack: Next.js, React, TypeScript, Tailwind CSS, Firebase, Vercel.</li>
              </ul>
            </div>
            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Learning & Development</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-3">Computer Science Student | Ongoing</p>
              <ul className="space-y-2 text-gray-700 dark:text-slate-200">
                <li>Pursuing a Bachelor of Science in Computer Science at University of the People.</li>
                <li>Building practical projects to strengthen full-stack engineering skills.</li>
                <li>Focused on backend development, databases, and scalable architecture.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">{t.education}</h2>
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-lg mb-4">
            <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-slate-300 mb-2">{t.educationSub}</p>
            <p className="text-gray-700 dark:text-slate-200">
              Building strong foundations in computer science principles and practical applications.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Previous Studies</h3>
            <p className="text-gray-600 dark:text-slate-300 mb-2">International University of Grand-Bassam</p>
            <p className="text-gray-700 dark:text-slate-200">
              Started computer science studies before stopping and applying to University of the People.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}




