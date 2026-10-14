import type { Metadata } from 'next';
import ProjectsFilterGrid from '@/components/ProjectsFilterGrid';
import { getProjectsPublic } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects by Ladji Moussa OUATTARA including LMO Services, LMO Digital Academy, and LMO Quran Learning.',
  openGraph: {
    title: 'Projects | Ladji Moussa OUATTARA',
    description:
      'Selected projects including LMO Services, LMO Digital Academy, and LMO Quran Learning by Ladji Moussa OUATTARA.',
    images: ['/og-projects.svg'],
  },
};

type ProjectsPageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Projects({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const lang = params?.lang === 'fr' ? 'fr' : 'en';
  const projects = await getProjectsPublic();
  const t =
    lang === 'fr'
      ? {
          title: 'Mes Projets',
          subtitle: 'Une selection de projets construits avec des technologies web modernes',
          caseStudy: 'Etude de Cas: LMO Services',
          caseDesc:
            "Plateforme complete pour une agence d'admission d'etudes, couvrant les procedures Canada (PPECFSM) et France : site public, espace client securise et tableau de bord admin pour dossiers, contrats, paiements et remboursements.",
          challenge: 'Defi',
          challengeText:
            "Donner a une agence d'admission un systeme fiable pour piloter les procedures Canada et France avec des contrats clairs, des paiements transparents et un suivi visible pour les clients.",
          solution: 'Solution',
          solutionText:
            "Conception d'une plateforme Next.js et Supabase avec site public, espace client securise et tableau de bord admin, proteges par Row Level Security et autorisations cote serveur.",
          result: 'Resultat',
          resultText:
            "Centralisation de tout le parcours d'admission, conditions contractuelles et remboursements explicites et auditables, et visibilite self-service pour les clients.",
        }
      : {
          title: 'My Projects',
          subtitle: "A collection of projects I've built using modern web technologies",
          caseStudy: 'Case Study: LMO Services',
          caseDesc:
            'End-to-end platform for a study-abroad admission agency, covering Canadian (PPECFSM) and France procedures: public site, secure client space, and an admin dashboard for dossiers, contracts, payments, and refunds.',
          challenge: 'Challenge',
          challengeText:
            'Give an admission agency one trusted system to run Canadian and France procedures with clear contracts, transparent payments, and visible progress for clients.',
          solution: 'Solution',
          solutionText:
            'Built a Next.js and Supabase platform with a public site, a secure client space, and an admin dashboard, protected by Row Level Security and server-side authorization.',
          result: 'Result',
          resultText:
            'Centralized the full admission workflow, made contractual terms and refunds explicit and auditable, and gave clients self-service visibility into their dossier.',
        };

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200">{t.subtitle}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-slate-700">
          <h2 className="text-3xl font-bold mb-4">{t.caseStudy}</h2>
          <p className="text-gray-700 dark:text-slate-200 mb-6">{t.caseDesc}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2">{t.challenge}</h3>
              <p className="text-gray-700 dark:text-slate-200">{t.challengeText}</p>
            </div>
            <div>
              <h3 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2">{t.solution}</h3>
              <p className="text-gray-700 dark:text-slate-200">{t.solutionText}</p>
            </div>
            <div>
              <h3 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2">{t.result}</h3>
              <p className="text-gray-700 dark:text-slate-200">{t.resultText}</p>
            </div>
          </div>
        </div>

        <ProjectsFilterGrid projects={projects} lang={lang} />
      </section>
    </div>
  );
}




