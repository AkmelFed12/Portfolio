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
  'lmo-quran-learning': {
    role: 'Project Owner and Developer',
    challenge:
      'Provide a focused and simple learning experience for Quran students who need consistent recitation and memorization practice online.',
    solution:
      'Built a dedicated learning platform with a clear interface and practical study flow, then deployed it on Vercel for easy access.',
    impact: [
      'Made Quran learning resources available through one accessible web app',
      'Improved consistency for learners through a structured digital experience',
      'Expanded portfolio impact in education-focused product development',
    ],
    next: 'Enhance learning features with progress tracking and deeper personalization.',
  },
  'lmo-digital-academy': {
    role: 'Product Owner and Full-Stack Developer',
    challenge:
      'Create a credible e-learning platform for beginners that works well on mobile, supports local African payment habits, and gives the admin a practical way to validate Premium access.',
    solution:
      'Built a Next.js SaaS learning experience with written courses, Supabase-backed progress, manual Wave/Djamo payment review, certificate verification, student dashboard, and admin operations.',
    impact: [
      'Delivered a live education product with mobile-first learning flows',
      'Added practical monetization through Premium access and manual payment validation',
      'Created a stronger portfolio case study around SaaS, education, and admin tooling',
    ],
    next: 'Improve analytics, live class scheduling, and richer course authoring for future cohorts.',
  },
  'lmo-services-canada': {
    role: 'Product Owner and Full-Stack Developer',
    challenge:
      'An admission agency needed one trusted system to run Canadian (PPECFSM) and France procedures, with clear contracts, transparent payments, and a way for clients to follow each step without back-and-forth over messaging.',
    solution:
      'Built a Next.js and Supabase platform with a public site, a secure client space, and an admin dashboard covering dossiers, contract generation, payment and refund tracking, and secondary-procedure eligibility, protected by Row Level Security and server-side authorization.',
    impact: [
      'Centralized the full admission workflow from consultation to visa follow-up',
      'Made contractual terms and refund calculations explicit and auditable',
      'Gave clients self-service visibility into their dossier, contracts, and payments',
    ],
    next: 'Add richer client notifications, document reminders, and reporting for the admin side.',
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lmoportfolio.vercel.app';
  const canonicalUrl = `${siteUrl}/projects/${slug}`;

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This case study was not found.',
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.description,
      url: canonicalUrl,
      images: [project.image || '/og-projects.svg'],
    },
    twitter: {
      card: 'summary_large_image',
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
  const relatedProjects = projects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="text-cyan-600 dark:text-cyan-400 hover:underline mb-8 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 dark:text-slate-200 mb-8">{project.description}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-xl font-bold mb-2">Role</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.role}</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
          <p className="text-gray-700 dark:text-slate-200">{project.tech.join(', ')}</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Challenge</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.challenge}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Solution</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.solution}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-3">Impact</h2>
          <ul className="space-y-2">
            {details.impact.map((item) => (
              <li key={item} className="text-gray-700 dark:text-slate-200">
                • {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Next Iteration</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.next}</p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
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

      {relatedProjects.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Related Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:border-cyan-500 transition"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-200">{item.description}</p>
                <p className="mt-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400">Read Case Study →</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
