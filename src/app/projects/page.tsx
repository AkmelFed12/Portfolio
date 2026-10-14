import type { Metadata } from 'next';
import ProjectsFilterGrid from '@/components/ProjectsFilterGrid';
import { getProjectsPublic } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projets',
  description: 'Selection de projets de Ladji Moussa OUATTARA dans le commerce, le networking et le developpement web.',
  openGraph: {
    title: 'Projets | Ladji Moussa OUATTARA',
    description:
      'Decouvrez les projets de Ladji Moussa OUATTARA, du e-commerce full-stack au networking professionnel.',
    images: ['/og-projects.svg'],
  },
};

export default async function Projects() {
  const lang = 'fr' as const;
  const projects = await getProjectsPublic();
  const t =
    lang === 'fr'
      ? {
          title: 'Mes projets',
          subtitle: 'Des produits web construits pour apprendre, resoudre et progresser.',
        }
      : {
          title: 'Mes projets',
          subtitle: "A collection of projects I've built using modern web technologies",
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
        <ProjectsFilterGrid projects={projects} lang={lang} />
      </section>
    </div>
  );
}
