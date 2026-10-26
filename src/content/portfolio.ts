import { projects as sourceProjects, type Project as SourceProject } from '@/data/projects';

export type Locale = 'en' | 'fr';

export const locales: Locale[] = ['en', 'fr'];

export const site = {
  name: 'Ladji Moussa OUATTARA',
  email: 'ouattaralm12@gmail.com',
  phone: '+225 05 747 242 33',
  whatsapp: '2250574724233',
  linkedin: 'https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298',
  siteUrl: 'https://lmoportfolio.vercel.app',
};

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;
}

export type LocalizedProject = SourceProject & {
  copy: {
    en: { description: string; objective: string; features: string[] };
    fr: { description: string; objective: string; features: string[] };
  };
};

const projectCopy: Record<string, LocalizedProject['copy']> = {
  'asaa-officiel': {
    en: {
      description: 'The official website of Association des Serviteurs d’Allah Azawajal, featuring information about its 2026 Islamic Quiz.',
      objective: 'Present the association and bring together practical information about the 2026 Islamic Quiz.',
      features: ['Association information and announcements', 'Quiz registration and waiting-list sections', 'Public documents, events and donation information'],
    },
    fr: {
      description: "Site officiel de l’Association des Serviteurs d’Allah Azawajal, avec des informations sur son Quiz Islamique 2026.",
      objective: 'Présenter l’association et rassembler les informations pratiques autour du Quiz Islamique 2026.',
      features: ['Informations et communiqués de l’association', 'Rubriques d’inscription et de liste d’attente au quiz', 'Documents publics, événements et informations sur les dons'],
    },
  },
  'lmo-quran-learning': {
    en: {
      description: 'An educational platform for learning Arabic, reading the Quran with tajwid, listening to recitations, memorising and revising methodically.',
      objective: 'Organise Arabic and Quran learning around reading, tajwid, recitation, memorisation and revision.',
      features: ['Arabic and Quran learning journeys', 'Tajwid, recitation and revision support', 'Responsible learning guidance'],
    },
    fr: {
      description: "Plateforme éducative pour apprendre l’arabe, lire le Coran avec le tajwid, écouter des récitations, mémoriser et réviser avec méthode.",
      objective: 'Structurer l’apprentissage de l’arabe et du Coran autour de la lecture, du tajwid, de la récitation, de la mémorisation et de la révision.',
      features: ['Parcours d’apprentissage de l’arabe et du Coran', 'Tajwid, récitation et révision', 'Repères pour un apprentissage responsable'],
    },
  },
  'lmo-digital-academy': {
    en: {
      description: 'An e-learning platform for digital skills, with courses, payments, a student area, certificates and administrative validation.',
      objective: 'Bring courses, student access, payments and certificate administration into one learning platform.',
      features: ['Digital-skills courses', 'Student area and certificates', 'Administrative validation'],
    },
    fr: {
      description: 'Plateforme d’apprentissage des compétences numériques, avec des cours, des paiements, un espace étudiant, des certificats et une validation administrative.',
      objective: 'Réunir cours, espace étudiant, paiements et gestion des certificats au sein d’une plateforme de formation.',
      features: ['Cours de compétences numériques', 'Espace étudiant et certificats', 'Validation administrative'],
    },
  },
  'lmo-services-canada': {
    en: {
      description: 'A complete admissions platform with a public site, secure client area and dashboard for files, contracts and payments.',
      objective: 'Connect public admissions information with a secure client area and tools to follow application files.',
      features: ['Public information experience', 'Secure client area', 'File, contract and payment management'],
    },
    fr: {
      description: "Plateforme complète pour une agence d’admission : site public, espace client sécurisé et tableau de bord pour les dossiers, contrats et paiements.",
      objective: 'Relier les informations publiques sur les admissions à un espace client sécurisé et au suivi des dossiers.',
      features: ['Site d’information publique', 'Espace client sécurisé', 'Gestion des dossiers, contrats et paiements'],
    },
  },
  'lmo-shop-services': {
    en: {
      description: 'A full-stack e-commerce platform with authentication, admin dashboard, order management, analytics and Vercel deployment.',
      objective: 'Cover the shopping flow and store administration with account access, order management and analytics.',
      features: ['Authentication and admin dashboard', 'Order management', 'Analytics and production deployment'],
    },
    fr: {
      description: "Plateforme e-commerce full-stack avec authentification, tableau de bord administrateur, gestion des commandes, statistiques et déploiement sur Vercel.",
      objective: 'Couvrir le parcours d’achat et l’administration de la boutique avec des comptes, le suivi des commandes et des statistiques.',
      features: ['Authentification et tableau de bord administrateur', 'Gestion des commandes', 'Statistiques et déploiement en production'],
    },
  },
  afropulse: {
    en: {
      description: 'A professional network for African talent and the diaspora with profiles, missions, messaging, authentication and real-time presence.',
      objective: 'Bring professional profiles, opportunities and conversations together for talent across Africa and the diaspora.',
      features: ['Professional profiles and missions', 'Messaging and authentication', 'Real-time presence and PWA delivery'],
    },
    fr: {
      description: 'Réseau professionnel pour les talents africains et la diaspora, avec profils, missions, messagerie, authentification et présence en temps réel.',
      objective: 'Réunir profils professionnels, missions et échanges pour les talents africains et la diaspora.',
      features: ['Profils professionnels et missions', 'Messagerie et authentification', 'Présence en temps réel et PWA'],
    },
  },
};

export const projects: LocalizedProject[] = sourceProjects.map((project) => ({
  ...project,
  copy: projectCopy[project.slug] ?? {
    en: { description: project.description, objective: project.description, features: [] },
    fr: { description: project.description, objective: project.description, features: [] },
  },
}));

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = '') {
  return `/${locale}${path}`;
}

export function localizedAlternates(locale: Locale, path = '') {
  const baseUrl = getSiteUrl();
  const targetUrl = (targetLocale: Locale) => `${baseUrl}/${targetLocale}${path}`;
  return {
    canonical: targetUrl(locale),
    languages: {
      en: targetUrl('en'),
      fr: targetUrl('fr'),
    },
  };
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
