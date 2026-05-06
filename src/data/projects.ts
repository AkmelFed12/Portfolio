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
    slug: 'asaa-portal',
    title: 'ASAA Portal - Islamic Quiz 2026',
    description:
      'Comprehensive membership and event management platform built for Islamic Quiz 2026, including pre-selection workflows, member space, and official organization website.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://asaaofficiel.vercel.app/index.html',
    github: 'https://github.com/AkmelFed12/PRESELECTION-QI26-tst',
    image: '/images/asaa-portal-desktop-v2.png',
    mobileImage: '/images/asaa-portal-mobile-v2.png',
  },
];