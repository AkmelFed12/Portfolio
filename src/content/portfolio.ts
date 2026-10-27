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
      description: 'A website for the Association des Serviteurs d’Allah Azawajal, with information about the association and its 2026 Islamic Quiz.',
      objective: 'Give visitors one place to learn about the association and find details about the 2026 quiz.',
      features: ['Information about the association', 'Quiz registration and waiting list', 'Documents, events and donation details'],
    },
    fr: {
      description: 'Un site pour découvrir l’Association des Serviteurs d’Allah Azawajal et retrouver les informations sur son Quiz Islamique 2026.',
      objective: 'Rassembler au même endroit les informations sur l’association et son quiz 2026.',
      features: ['Présentation et actualités de l’association', 'Inscription au quiz et liste d’attente', 'Documents, événements et informations sur les dons'],
    },
  },
  'lmo-quran-learning': {
    en: {
      description: 'A place to study Arabic and the Quran, with reading, tajwid, recitations, memorisation and revision in one platform.',
      objective: 'Bring the main parts of Arabic and Quran study together in one learning experience.',
      features: ['Arabic and Quran lessons', 'Tajwid, recitations and revision', 'Guidance for independent study'],
    },
    fr: {
      description: 'Une plateforme pour étudier l’arabe et le Coran : lecture, tajwid, récitations, mémorisation et révision y sont réunis.',
      objective: 'Rassembler les principales étapes de l’apprentissage de l’arabe et du Coran dans un même espace.',
      features: ['Cours d’arabe et du Coran', 'Tajwid, récitations et révision', 'Repères pour apprendre en autonomie'],
    },
  },
  'lmo-digital-academy': {
    en: {
      description: 'An online learning platform for digital skills, with courses, a student area and tools to manage payments and certificates.',
      objective: 'Give students and administrators a shared place to follow courses and handle the steps around them.',
      features: ['Digital skills courses', 'Student area and certificates', 'Payment and certificate follow-up'],
    },
    fr: {
      description: 'Une plateforme de formation au numérique avec des cours, un espace étudiant et le suivi des paiements et des certificats.',
      objective: 'Permettre aux étudiants et à l’équipe de formation de suivre les cours et les démarches au même endroit.',
      features: ['Cours sur les compétences numériques', 'Espace étudiant et certificats', 'Suivi des paiements et validations'],
    },
  },
  'lmo-services-canada': {
    en: {
      description: 'A website and client portal for an admissions agency, with a dashboard to follow applications, contracts and payments.',
      objective: 'Help applicants find information and keep track of their files through a secure client space.',
      features: ['Public information about the service', 'Secure client area', 'Application, contract and payment follow-up'],
    },
    fr: {
      description: 'Un site et un espace client pour une agence d’admission, avec un tableau de bord pour suivre dossiers, contrats et paiements.',
      objective: 'Aider les candidats à trouver les informations et à suivre leur dossier dans un espace sécurisé.',
      features: ['Informations sur les services', 'Espace client sécurisé', 'Suivi des dossiers, contrats et paiements'],
    },
  },
  'lmo-shop-services': {
    en: {
      description: 'An online shop with customer accounts and an admin area to manage orders and keep an eye on sales.',
      objective: 'Bring shopping and day-to-day store management together in one place.',
      features: ['Customer accounts and admin access', 'Order follow-up', 'Sales overview'],
    },
    fr: {
      description: 'Une boutique en ligne avec des comptes clients et un espace admin pour gérer les commandes et suivre les ventes.',
      objective: 'Réunir les achats et la gestion quotidienne de la boutique dans un même outil.',
      features: ['Comptes clients et accès admin', 'Suivi des commandes', 'Vue d’ensemble des ventes'],
    },
  },
  afropulse: {
    en: {
      description: 'A network for African professionals and the diaspora to share profiles, find opportunities and get in touch.',
      objective: 'Make it easier for professionals across Africa and the diaspora to discover each other and share opportunities.',
      features: ['Professional profiles and opportunities', 'Messaging and member accounts', 'Live activity and installable app'],
    },
    fr: {
      description: 'Un réseau pour les professionnels africains et la diaspora : présenter son profil, trouver des missions et échanger.',
      objective: 'Faciliter les rencontres et le partage d’opportunités entre professionnels du continent et de la diaspora.',
      features: ['Profils professionnels et opportunités', 'Messagerie et comptes membres', 'Activité en direct et application installable'],
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
