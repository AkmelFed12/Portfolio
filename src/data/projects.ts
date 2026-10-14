export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  mobileImage?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'lmo-shop-services',
    title: 'LMO SHOP SERVICES',
    description:
      "Plateforme e-commerce full stack avec authentification, dashboard admin, gestion des commandes, analytics, et deploiement production sur Vercel.",
    tech: ['JavaScript', 'Node.js', 'Serverless API', 'Vercel'],
    link: 'https://new-pro-ecommerce-demo.vercel.app',
    github: 'https://github.com/AkmelFed12/LMO-SHOP-SERVICES',
    image: '/images/lmo-shop-services.svg',
  },
  {
    id: 2,
    slug: 'afropulse',
    title: 'AfroPulse',
    description:
      'Réseau professionnel dédié aux talents africains et à la diaspora, avec annuaire de profils, missions, messagerie, authentification et présence en temps réel.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Supabase', 'Realtime', 'PWA', 'Netlify'],
    link: 'https://afro-pulse.netlify.app',
    github: 'https://github.com/AkmelFed12/afropulse',
    image: '/images/afropulse.svg',
  },
];
