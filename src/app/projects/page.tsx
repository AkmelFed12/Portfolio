import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { getProjectsPublic } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects by Ladji Moussa OUATTARA including ASAA Portal, MyFinance LMO, and Barakatrack.',
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
          caseStudy: 'Etude de Cas: ASAA Portal',
          caseDesc:
            "Plateforme orientee projet pour soutenir les operations du Quiz Islamique 2026, avec gestion des membres, flux de preselection et site public de l'organisation.",
          challenge: 'Defi',
          challengeText:
            'Structurer la preselection des participants et fournir un espace numerique fiable pour membres et administrateurs.',
          solution: 'Solution',
          solutionText:
            "Conception d'une plateforme full-stack avec navigation claire, parcours membre et deploiement en production.",
          result: 'Resultat',
          resultText:
            'Experience concrete de livraison projet avec impact reel, meilleure rigueur technique et resultat valorisable en portfolio.',
        }
      : {
          title: 'My Projects',
          subtitle: "A collection of projects I've built using modern web technologies",
          caseStudy: 'Case Study: ASAA Portal',
          caseDesc:
            'A project-focused platform built to support Islamic Quiz 2026 operations, combining member management, pre-selection workflows, and a public-facing organization website.',
          challenge: 'Challenge',
          challengeText:
            'Organize participant pre-selection and create a reliable digital space for members and admins.',
          solution: 'Solution',
          solutionText:
            'Built a full-stack web platform with structured navigation, member flows, and production deployment.',
          result: 'Result',
          resultText:
            'Real project delivery experience with practical impact, stronger engineering discipline, and portfolio-ready output.',
        };

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">{t.subtitle}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-4">{t.caseStudy}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{t.caseDesc}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{t.challenge}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.challengeText}</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{t.solution}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.solutionText}</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{t.result}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.resultText}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
              image={project.image}
              mobileImage={project.mobileImage}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
