import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectsPublic } from '@/lib/content';

type ProjectCaseStudyProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

type CaseStudyDetails = {
  role: string;
  challenge: string;
  solution: string;
  impact: string[];
  next: string;
};

const detailsBySlug: Record<string, { en: CaseStudyDetails; fr: CaseStudyDetails }> = {
  'lmo-quran-learning': {
    en: {
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
    fr: {
      role: 'Proprietaire et developpeur du projet',
      challenge:
        "Offrir une experience d'apprentissage simple et concentree aux eleves du Coran qui ont besoin d'une pratique reguliere de recitation et de memorisation en ligne.",
      solution:
        "J'ai cree une plateforme d'apprentissage dediee avec une interface claire et un parcours d'etude concret, puis deployee sur Vercel pour un acces facile.",
      impact: [
        "Rendre les ressources d'apprentissage du Coran accessibles via une seule application web",
        "Ameliorer la regularite des apprenants grace a une experience numerique structuree",
        "Renforcer l'impact du portfolio dans le developpement de produits educatifs",
      ],
      next: "Enrichir les fonctions d'apprentissage avec le suivi de progression et une personnalisation plus poussee.",
    },
  },
  'lmo-digital-academy': {
    en: {
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
    fr: {
      role: 'Product Owner et developpeur Full-Stack',
      challenge:
        "Creer une plateforme e-learning credible pour debutants, efficace sur mobile, adaptee aux habitudes de paiement locales africaines, et donnant a l'admin un moyen concret de valider l'acces Premium.",
      solution:
        "J'ai concu une experience d'apprentissage SaaS Next.js avec des cours ecrits, la progression geree par Supabase, la verification manuelle des paiements Wave/Djamo, la verification des certificats, un tableau de bord etudiant et les operations admin.",
      impact: [
        "Livrer un produit educatif en ligne avec des parcours d'apprentissage penses pour le mobile",
        "Ajouter une monetisation concrete via l'acces Premium et la validation manuelle des paiements",
        "Creer une etude de cas portfolio plus solide autour du SaaS, de l'education et des outils admin",
      ],
      next: "Ameliorer l'analytics, la planification des classes en direct et une redaction de cours plus riche pour les futures promotions.",
    },
  },
  'lmo-services-canada': {
    en: {
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
    fr: {
      role: 'Product Owner et developpeur Full-Stack',
      challenge:
        "Une agence d'admission avait besoin d'un systeme unique et fiable pour piloter les procedures Canada (PPECFSM) et France, avec des contrats clairs, des paiements transparents et un moyen pour les clients de suivre chaque etape sans allers-retours par messagerie.",
      solution:
        "J'ai construit une plateforme Next.js et Supabase avec un site public, un espace client securise et un tableau de bord admin couvrant les dossiers, la generation de contrats, le suivi des paiements et remboursements, et l'eligibilite aux procedures secondaires, proteges par Row Level Security et des autorisations cote serveur.",
      impact: [
        "Centraliser tout le parcours d'admission, de la consultation au suivi du visa",
        "Rendre explicites et auditables les conditions contractuelles et les calculs de remboursement",
        "Donner aux clients une visibilite en autonomie sur leur dossier, leurs contrats et leurs paiements",
      ],
      next: "Ajouter des notifications client plus riches, des rappels de documents et des rapports pour le cote admin.",
    },
  },
};

const genericDetails: { en: CaseStudyDetails; fr: CaseStudyDetails } = {
  en: {
    role: 'Project Owner',
    challenge: 'Deliver a practical product solving a real user problem.',
    solution: 'Built an iterative web solution using modern frontend/backend tools.',
    impact: ['Delivered a usable product', 'Improved engineering discipline', 'Created portfolio-ready output'],
    next: 'Continue improving product quality based on user feedback.',
  },
  fr: {
    role: 'Proprietaire du projet',
    challenge: 'Livrer un produit concret qui repond a un vrai besoin utilisateur.',
    solution: 'Construire une solution web iterative avec des outils frontend/backend modernes.',
    impact: ['Livrer un produit utilisable', "Renforcer la rigueur d'ingenierie", 'Produire un rendu pret pour le portfolio'],
    next: "Continuer d'ameliorer la qualite du produit a partir des retours utilisateurs.",
  },
};

function getUi(lang: 'en' | 'fr') {
  return lang === 'fr'
    ? {
        back: '← Retour aux projets',
        role: 'Role',
        techStack: 'Stack technique',
        challenge: 'Defi',
        solution: 'Solution',
        impact: 'Impact',
        nextIteration: 'Prochaine iteration',
        viewLive: 'Voir en ligne',
        github: 'Depot GitHub',
        related: 'Projets lies',
        readCase: "Lire l'etude de cas →",
      }
    : {
        back: '← Back to Projects',
        role: 'Role',
        techStack: 'Tech Stack',
        challenge: 'Challenge',
        solution: 'Solution',
        impact: 'Impact',
        nextIteration: 'Next Iteration',
        viewLive: 'View Live',
        github: 'GitHub Repository',
        related: 'Related Projects',
        readCase: 'Read Case Study →',
      };
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

export default async function ProjectCaseStudyPage({ params, searchParams }: ProjectCaseStudyProps) {
  const { slug } = await params;
  const resolvedParams = await searchParams;
  const lang = resolvedParams?.lang === 'fr' ? 'fr' : 'en';
  const projects = await getProjectsPublic();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const entry = detailsBySlug[slug] || genericDetails;
  const details = entry[lang];
  const ui = getUi(lang);
  const withLang = (path: string) => (lang === 'fr' ? `${path}?lang=fr` : path);
  const relatedProjects = projects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href={withLang('/projects')} className="text-cyan-600 dark:text-cyan-400 hover:underline mb-8 inline-block">
        {ui.back}
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 dark:text-slate-200 mb-8">{project.description}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-xl font-bold mb-2">{ui.role}</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.role}</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-xl font-bold mb-2">{ui.techStack}</h2>
          <p className="text-gray-700 dark:text-slate-200">{project.tech.join(', ')}</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">{ui.challenge}</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.challenge}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">{ui.solution}</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.solution}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-3">{ui.impact}</h2>
          <ul className="space-y-2">
            {details.impact.map((item) => (
              <li key={item} className="text-gray-700 dark:text-slate-200">
                • {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">{ui.nextIteration}</h2>
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
            {ui.viewLive}
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-semibold transition"
          >
            {ui.github}
          </a>
        )}
      </div>

      {relatedProjects.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">{ui.related}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={withLang(`/projects/${item.slug}`)}
                className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:border-cyan-500 transition"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-200">{item.description}</p>
                <p className="mt-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400">{ui.readCase}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
