import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectsPublic } from '@/lib/content';

type ProjectCaseStudyProps = {
  params: Promise<{ slug: string }>;
};

const detailsBySlug: Record<
  string,
  {
    role: string;
    challenge: string;
    solution: string;
    impact: string[];
    next: string;
  }
> = {
  'asaa-portal': {
    role: 'Student Developer (Full-Stack)',
    challenge:
      'The organization needed one reliable platform for membership, pre-selection workflow, and official public communication.',
    solution:
      'Built a structured Next.js platform with clear admin/member paths, practical data workflows, and production deployment.',
    impact: [
      'Centralized communication and candidate management in one place',
      'Improved visibility of event and committee information',
      'Enabled practical product iteration with real user feedback',
    ],
    next: 'Continue improving reliability, admin UX, and reporting features for upcoming cycles.',
  },
  'myfinance-lmo': {
    role: 'Student Developer (Frontend + Product Logic)',
    challenge:
      'Users needed a simple, understandable way to track expenses and budgets without complex financial tools.',
    solution:
      'Designed a lightweight finance flow with clear categories, easy inputs, and focused dashboard experience.',
    impact: [
      'Made daily spending tracking easier and more consistent',
      'Improved user awareness of category-based expenses',
      'Created a base for future analytics and forecasting features',
    ],
    next: 'Add richer insights and monthly reporting for better decision support.',
  },
  'barakatrack-by-lmo': {
    role: 'Student Developer (Full-Stack)',
    challenge:
      'The project required better task/workflow tracking and clearer status visibility for teams.',
    solution:
      'Built a workflow tracking interface with status visibility and a clearer organization of operational data.',
    impact: [
      'Improved clarity of progress and pending actions',
      'Created a stronger base for team coordination',
      'Enabled future extension for reporting and notifications',
    ],
    next: 'Expand collaboration features and enhance data visualization quality.',
  },
};

export async function generateStaticParams() {
  const projects = await getProjectsPublic();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectCaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjectsPublic();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This case study was not found.',
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.description,
      images: [project.image || '/og-projects.svg'],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyProps) {
  const { slug } = await params;
  const projects = await getProjectsPublic();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const details =
    detailsBySlug[slug] || {
      role: 'Project Owner',
      challenge: 'Deliver a practical product solving a real user problem.',
      solution: 'Built an iterative web solution using modern frontend/backend tools.',
      impact: ['Delivered a usable product', 'Improved engineering discipline', 'Created portfolio-ready output'],
      next: 'Continue improving product quality based on user feedback.',
    };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{project.description}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-bold mb-2">Role</h2>
          <p className="text-gray-700 dark:text-gray-300">{details.role}</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <p className="text-gray-700 dark:text-gray-300">{project.tech.join(', ')}</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Challenge</h2>
          <p className="text-gray-700 dark:text-gray-300">{details.challenge}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Solution</h2>
          <p className="text-gray-700 dark:text-gray-300">{details.solution}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-3">Impact</h2>
          <ul className="space-y-2">
            {details.impact.map((item) => (
              <li key={item} className="text-gray-700 dark:text-gray-300">
                • {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Next Iteration</h2>
          <p className="text-gray-700 dark:text-gray-300">{details.next}</p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            View Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-semibold transition"
          >
            GitHub Repository
          </a>
        )}
      </div>
    </div>
  );
}
