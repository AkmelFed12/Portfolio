export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category?: 'frontend' | 'backend' | 'fullstack';
  link?: string;
  github?: string;
  image?: string;
  mobileImage?: string;
  promoEmbed?: string;
};

export const projects: Project[] = [
  {
    id: 0,
    slug: 'asaa-officiel',
    title: 'ASAA Officiel',
    description:
      "Site officiel de l'Association des Serviteurs d'Allah Azawajal, présentant notamment le Quiz Islamique 2026.",
    tech: [],
    link: 'https://asaaofficiel.vercel.app',
  },
  {
    id: 1,
    slug: 'lmo-quran-learning',
    title: 'LMO Quran Learning',
    description:
      "Plateforme interactive d'apprentissage du Coran qui facilite la memorisation et la pratique de la recitation.",
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'fullstack',
    link: 'https://lmo-quran-learning.vercel.app',
    image: '/images/lmo-quran-learning-desktop.jpg',
    mobileImage: '/images/lmo-quran-learning-mobile.jpg',
    promoEmbed: '/videos/lmo-quran-learning-promo.html',
  },
  {
    id: 2,
    slug: 'lmo-digital-academy',
    title: 'LMO Digital Academy',
    description:
      "Plateforme e-learning pour les competences numeriques, avec cours, paiement, espace etudiant, certificats et validation admin.",
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    category: 'fullstack',
    link: 'https://lmo-academy.vercel.app',
    image: '/images/lmo-digital-academy-desktop.svg',
    mobileImage: '/images/lmo-digital-academy-mobile.svg',
  },
  {
    id: 3,
    slug: 'lmo-services-canada',
    title: 'LMO Services - Admission Canada & France',
    description:
      "Plateforme complete pour une agence d admission : site public, espace client securise et tableau de bord pour les dossiers, contrats et paiements.",
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    category: 'fullstack',
    link: 'https://lmoservices-canada.vercel.app',
    image: '/images/lmo-services-canada-desktop.png',
    mobileImage: '/images/lmo-services-canada-mobile.png',
  },
  {
    id: 4,
    slug: 'lmo-shop-services',
    title: 'LMO SHOP SERVICES',
    description:
      "Plateforme e-commerce full stack avec authentification, dashboard admin, gestion des commandes, analytics, et deploiement production sur Vercel.",
    tech: ['JavaScript', 'Node.js', 'Serverless API', 'Vercel'],
    link: 'https://new-pro-ecommerce-demo.vercel.app',
    github: 'https://github.com/AkmelFed12/LMO-SHOP-SERVICES',
    image: '/images/lmo-shop-services-desktop.png',
    mobileImage: '/images/lmo-shop-services-mobile.png',
  },
  {
    id: 5,
    slug: 'afropulse',
    title: 'AfroPulse',
    description:
      'Réseau professionnel dédié aux talents africains et à la diaspora, avec annuaire de profils, missions, messagerie, authentification et présence en temps réel.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Supabase', 'Realtime', 'PWA', 'Netlify'],
    link: 'https://afro-pulse.netlify.app',
    github: 'https://github.com/AkmelFed12/afropulse',
    image: '/images/afropulse-desktop.png',
    mobileImage: '/images/afropulse-mobile.png',
  },
];
