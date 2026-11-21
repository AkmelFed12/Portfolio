import type { Metadata } from 'next';
import ProjectsFilterGrid from '@/components/ProjectsFilterGrid';
import PageHero from '@/components/PageHero';
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
      <PageHero eyebrow="Portefeuille 2026" title={t.title} description={t.subtitle} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ProjectsFilterGrid projects={projects} lang={lang} />
      </section>
    </div>
  );
}
