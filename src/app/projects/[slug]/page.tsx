import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    learnings: string[];
  }
> = {
  'lmo-quran-learning': {
    role: 'Conception et developpement Full-Stack',
    challenge: "Rendre l apprentissage et la memorisation du Coran plus accessibles avec une experience simple et progressive.",
    solution: "Creation d une plateforme interactive responsive avec parcours d apprentissage et interface adaptee aux differents ecrans.",
    impact: [
      'Organisation claire des contenus et des parcours d apprentissage',
      'Experience responsive utilisable sur mobile et ordinateur',
      'Base technique prete a accueillir de nouvelles fonctionnalites pedagogiques',
    ],
    next: 'Ajouter davantage de suivi de progression et de contenus interactifs.',
    learnings: [
      'Concevoir une interface calme et lisible pour un usage regulier.',
      'Transformer un besoin pedagogique en parcours numerique concret.',
    ],
  },
  'lmo-digital-academy': {
    role: 'Conception produit et developpement Full-Stack',
    challenge: 'Structurer une experience de formation numerique avec des cours, un espace etudiant et un parcours de certification.',
    solution: 'Developpement d une plateforme e-learning avec contenus, paiement, tableau de bord et workflows de validation.',
    impact: [
      'Regroupement des contenus et du suivi etudiant dans une seule plateforme',
      'Mise en place d une base pour les cours premium et les certificats',
      'Separation claire entre experience etudiante et administration',
    ],
    next: 'Enrichir le catalogue et ameliorer le suivi des apprentissages.',
    learnings: [
      'Modeliser les roles et les parcours avant de construire les ecrans.',
      'Garder une architecture evolutive pour accompagner un produit educatif.',
    ],
  },
  'lmo-services-canada': {
    role: 'Developpeur Full-Stack',
    challenge: 'Centraliser les demandes d admission, les dossiers clients et le suivi administratif dans une experience fiable.',
    solution: 'Creation d un site public, d un espace client et d un dashboard admin relies a Supabase.',
    impact: [
      'Centralisation du suivi des dossiers et des etapes de procedure',
      'Meilleure separation entre informations publiques et donnees client',
      'Base operationnelle pour la gestion des contrats et des paiements',
    ],
    next: 'Continuer a renforcer les workflows metier et les notifications client.',
    learnings: [
      'Concevoir des interfaces distinctes pour plusieurs types d utilisateurs.',
      'Accorder une attention particuliere a la clarte des workflows administratifs.',
    ],
  },
  'lmo-shop-services': {
    role: 'Developpeur Full-Stack',
    challenge: 'Creer une boutique en ligne fiable avec des parcours clairs pour les produits, les commandes et l administration.',
    solution: 'Developpement d une experience e-commerce full-stack avec authentification, outils admin, gestion des commandes, analytics et deploiement en production.',
    impact: [
      'Livraison d un parcours e-commerce complet, de la navigation a la gestion des commandes',
      'Centralisation de l administration et du suivi operationnel',
      'Amelioration continue grace aux deploiements et aux tests',
    ],
    next: 'Continuer a ameliorer l experience boutique, les performances et les rapports operationnels.',
    learnings: [
      'Structurer un parcours d achat simple avant d ajouter des fonctions avancees.',
      'Relier les besoins metier aux outils d administration et de suivi.',
    ],
  },
  afropulse: {
    role: 'Createur produit et developpeur Full-Stack',
    challenge: 'Faciliter la decouverte de profils, d opportunites et de connexions utiles pour les talents africains et la diaspora.',
    solution: 'Creation d un reseau professionnel responsive avec profils, missions, messagerie, authentification, mises a jour en temps reel et support PWA.',
    impact: [
      'Creation d un espace dedie a la decouverte professionnelle et a la collaboration',
      'Regroupement des profils, missions et conversations dans une seule experience',
      'Association des fonctions realtime de Supabase a une interface PWA responsive',
    ],
    next: 'Developper la decouverte, ameliorer la mise en relation et renforcer l engagement de la communaute.',
    learnings: [
      'Concevoir une experience communautaire qui reste claire sur mobile.',
      'Exploiter le temps reel pour rendre les interactions plus utiles.',
    ],
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
      title: 'Projet introuvable',
      description: 'Cette etude de cas est introuvable.',
    };
  }

  return {
    title: `${project.title} - Etude de cas`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} - Etude de cas`,
      description: project.description,
      url: canonicalUrl,
      images: [project.image || '/og-projects.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Etude de cas`,
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

  const details = detailsBySlug[slug] || {
    role: 'Responsable du projet',
    challenge: 'Construire un produit pratique qui repond a un besoin utilisateur reel.',
    solution: 'Developper une solution web iterative avec des outils frontend et backend modernes.',
    impact: ['Livraison d un produit utilisable', 'Progression de la rigueur technique', 'Creation d un resultat presentable'],
    next: 'Continuer a ameliorer la qualite du produit selon les retours utilisateurs.',
    learnings: ['Continuer a apprendre a partir des retours utilisateurs.'],
  };
  const relatedProjects = projects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="text-cyan-600 dark:text-cyan-400 hover:underline mb-8 inline-block">
        ← Retour aux projets
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 dark:text-slate-200 mb-8">{project.description}</p>

      {project.image && (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <Image
            src={project.image}
            alt={`Apercu de ${project.title}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-xl font-bold mb-2">Rôle</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.role}</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
          <h2 className="text-xl font-bold mb-2">Technologies</h2>
          <p className="text-gray-700 dark:text-slate-200">{project.tech.join(', ')}</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-2">Defi</h2>
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
          <h2 className="text-2xl font-bold mb-2">Prochaine etape</h2>
          <p className="text-gray-700 dark:text-slate-200">{details.next}</p>
        </section>

        <section className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <h2 className="text-2xl font-bold mb-3">Ce que j’ai appris</h2>
          <ul className="space-y-2">
            {details.learnings.map((item) => (
              <li key={item} className="text-gray-700 dark:text-slate-200">
                • {item}
              </li>
            ))}
          </ul>
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
            Voir le site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-semibold transition"
          >
            Depot GitHub
          </a>
        )}
      </div>

      {relatedProjects.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-4">Projets similaires</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:border-cyan-500 transition"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-200">{item.description}</p>
                <p className="mt-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400">Lire l etude de cas →</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
