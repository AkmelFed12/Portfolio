export type Project = {
  id: number;
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
    title: 'ASAA Portal - Islamic Quiz 2026',
    description:
      'Comprehensive membership and event management platform built for Islamic Quiz 2026, including pre-selection workflows, member space, and official organization website.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://asaaofficiel.vercel.app/index.html',
    github: 'https://github.com/AkmelFed12/PRESELECTION-QI26-tst',
    image: '/images/asaa-portal-desktop.png',
    mobileImage: '/images/asaa-portal-mobile.png',
  },
  {
    id: 2,
    title: 'MyFinance LMO',
    description:
      'Personal finance management application focused on budget tracking, expense categorization, and practical financial analytics for daily decision-making.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/AkmelFed12/myfiancelmo',
    image: '/images/myfinance-desktop.svg',
    mobileImage: '/images/myfinance-mobile.svg',
  },
  {
    id: 3,
    title: 'Barakatrack by LMO',
    description:
      'Workflow tracking and management system with real-time updates, data visualization, and reporting features to improve team productivity.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    link: 'https://frontend-sigma-lyart-40.vercel.app',
    github: 'https://github.com/AkmelFed12/barakatrack-by-lmo',
    image: '/images/barakatrack-desktop.png',
    mobileImage: '/images/barakatrack-mobile.png',
  },
];
