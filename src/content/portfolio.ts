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

export type LocalizedProject = SourceProject & {
  copy: {
    en: { description: string; features: string[] };
    fr: { description: string; features: string[] };
  };
};

const projectCopy: Record<string, LocalizedProject['copy']> = {
  'lmo-quran-learning': {
    en: {
      description: 'An educational platform for learning Arabic, reading the Quran with tajwid, listening to recitations, memorising and revising methodically.',
      features: ['Arabic and Quran learning journeys', 'Tajwid, recitation and revision support', 'Responsible learning guidance'],
    },
    fr: {
      description: "Plateforme educative pour apprendre l'arabe, lire le Coran avec le tajwid, ecouter des recitations, memoriser et reviser avec methode.",
      features: ['Parcours d’apprentissage de l’arabe et du Coran', 'Tajwid, récitation et révision', 'Repères pour un apprentissage responsable'],
    },
  },
  'lmo-digital-academy': {
    en: {
      description: 'A French-language, mobile-first learning platform for practical digital skills, with courses, exercises, premium access and certificates.',
      features: ['Written lessons and guided exercises', 'Wave and Djamo payment flows', 'Student dashboard, certificates and admin validation'],
    },
    fr: {
      description: 'Plateforme d’apprentissage francophone et mobile-first pour les competences numeriques, avec cours, exercices, acces Premium et certificats.',
      features: ['Lecons ecrites et exercices guides', 'Paiements Wave et Djamo', 'Dashboard etudiant, certificats et validation admin'],
    },
  },
  'lmo-services-canada': {
    en: {
      description: 'A complete admissions platform with a public site, secure client area and dashboard for files, contracts and payments.',
      features: ['Public information experience', 'Secure client area', 'File, contract and payment management'],
    },
    fr: {
      description: "Plateforme complete pour une agence d'admission : site public, espace client securise et tableau de bord pour les dossiers, contrats et paiements.",
      features: ['Experience d’information publique', 'Espace client securise', 'Gestion des dossiers, contrats et paiements'],
    },
  },
  'lmo-shop-services': {
    en: {
      description: 'A full-stack e-commerce platform with authentication, admin dashboard, order management, analytics and Vercel deployment.',
      features: ['Authentication and admin dashboard', 'Order management', 'Analytics and production deployment'],
    },
    fr: {
      description: "Plateforme e-commerce full-stack avec authentification, tableau de bord admin, gestion des commandes, analytics et deploiement sur Vercel.",
      features: ['Authentification et dashboard admin', 'Gestion des commandes', 'Analytics et deploiement production'],
    },
  },
  afropulse: {
    en: {
      description: 'A professional network for African talent and the diaspora with profiles, missions, messaging, authentication and real-time presence.',
      features: ['Professional profiles and missions', 'Messaging and authentication', 'Real-time presence and PWA delivery'],
    },
    fr: {
      description: 'Reseau professionnel pour les talents africains et la diaspora, avec profils, missions, messagerie, authentification et presence en temps reel.',
      features: ['Profils professionnels et missions', 'Messagerie et authentification', 'Presence temps reel et PWA'],
    },
  },
};

export const projects: LocalizedProject[] = sourceProjects.map((project) => ({
  ...project,
  copy: projectCopy[project.slug] ?? {
    en: { description: project.description, features: [] },
    fr: { description: project.description, features: [] },
  },
}));

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = '') {
  return `/${locale}${path}`;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
