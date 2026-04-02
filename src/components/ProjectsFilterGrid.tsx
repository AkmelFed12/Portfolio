'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/data/projects';

type ProjectsFilterGridProps = {
  projects: Project[];
  lang?: 'en' | 'fr';
};

type FilterKey = 'all' | 'frontend' | 'backend' | 'fullstack' | 'live';

function detectCategory(project: Project): Exclude<FilterKey, 'all' | 'live'> {
  const stack = project.tech.map((t) => t.toLowerCase());
  const hasFrontend = stack.some((t) => ['react', 'next.js', 'tailwind css', 'html/css/javascript', 'typescript'].includes(t));
  const hasBackend = stack.some((t) => ['node.js', 'express.js', 'firebase', 'postgresql', 'mongodb', 'rest apis'].includes(t));

  if (hasFrontend && hasBackend) {
    return 'fullstack';
  }
  if (hasBackend) {
    return 'backend';
  }
  return 'frontend';
}

export default function ProjectsFilterGrid({ projects, lang = 'en' }: ProjectsFilterGridProps) {
  const [filter, setFilter] = useState<FilterKey>('all');

  const labels =
    lang === 'fr'
      ? {
          all: 'Tous',
          frontend: 'Frontend',
          backend: 'Backend',
          fullstack: 'Full Stack',
          live: 'Avec Demo',
          showing: 'Affichage',
        }
      : {
          all: 'All',
          frontend: 'Frontend',
          backend: 'Backend',
          fullstack: 'Full Stack',
          live: 'Has Live Demo',
          showing: 'Showing',
        };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (filter === 'all') return true;
      if (filter === 'live') return Boolean(project.link);
      return detectCategory(project) === filter;
    });
  }, [projects, filter]);

  const buttons: { key: FilterKey; label: string }[] = [
    { key: 'all', label: labels.all },
    { key: 'frontend', label: labels.frontend },
    { key: 'backend', label: labels.backend },
    { key: 'fullstack', label: labels.fullstack },
    { key: 'live', label: labels.live },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.key}
            type="button"
            onClick={() => setFilter(btn.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter === btn.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Filter
          </span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {buttons.find((btn) => btn.key === filter)?.label}
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-4 py-2 border border-blue-200 dark:border-blue-900 animate-fade-in">
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            {labels.showing}
          </span>
          <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
            {filteredProjects.length}
          </span>
        </div>
      </div>

      <div key={filter} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={`stagger-item-${(index % 6) + 1}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
              image={project.image}
              mobileImage={project.mobileImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
