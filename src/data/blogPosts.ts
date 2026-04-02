export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'my-coding-journey',
    title: 'My Journey from Curiosity to Full-Stack Development',
    excerpt:
      'How I discovered my passion for coding and transitioned into becoming a full-stack developer. From HTML basics to building production applications.',
    date: '2024-03-20',
    category: 'Personal',
    readTime: '6 min read',
    author: 'Ladji Moussa OUATTARA',
    content: [
      '# My Journey from Curiosity to Full-Stack Development',
      'Two years ago, I could not imagine where I would be today. Like many people, I started with curiosity about how websites and apps work. That curiosity led me to a path that changed my life.',
      '## The Beginning: Pure Curiosity',
      'In 2021, I started with HTML, CSS, and JavaScript. These were not just concepts. They were tools to build real things on the internet. Every progress felt exciting.',
      '## The Learning Phase: 2022-2023',
      'I pursued formal education at the International University of Grand-Bassam, then joined the University of the People Computer Science program.',
      'During this period, I learned modern frameworks like React and Next.js, backend development with Node.js, and the value of TypeScript for building reliable systems.',
      '## The Breakthrough: 2024',
      'In 2024, everything came together. I built the ASAA Portal, a real application for the Islamic Quiz 2026 that manages members, events, and pre-selections.',
      '## Key Lessons',
      'Good software is about solving real problems, listening to users, and improving through iterations. Clear architecture, clean UI, and reliable performance matter.',
      '## Advice to Beginners',
      'Start simple, build projects, learn from bugs, use helpful tools like AI, and stay curious.',
    ],
  },
  {
    id: 2,
    slug: 'asaa-portal-lessons',
    title: 'Building ASAA Portal: Lessons Learned',
    excerpt:
      'My experience building a comprehensive membership and event management platform for Islamic Quiz 2026. Technical challenges, solutions, and what I learned.',
    date: '2024-03-15',
    category: 'Case Study',
    readTime: '8 min read',
    author: 'Ladji Moussa OUATTARA',
    content: [
      '# Building ASAA Portal: Lessons Learned',
      'ASAA Portal was my first major production app. It taught me how to build for real users, not just for tutorials.',
      '## The Challenge',
      'The platform needed a pre-selection system, a member portal, event information, and an official public website.',
      '## Technical Stack',
      'I used Next.js, React, TypeScript, Tailwind CSS, and Firebase. This combination helped me build fast, scalable, and maintainable features.',
      '## Key Lessons',
      'Architecture matters. User feedback is gold. Performance is non-negotiable. Security must be considered from day one.',
      '## The Result',
      'The platform is live, used by real people, and continues to improve based on feedback.',
    ],
  },
  {
    id: 3,
    slug: 'nextjs-typescript-power',
    title: 'The Power of Modern Web Technologies: Next.js and TypeScript',
    excerpt:
      'Why I chose Next.js and TypeScript for my projects. Performance benefits, developer experience, and how they accelerate development.',
    date: '2024-03-10',
    category: 'Technical',
    readTime: '7 min read',
    author: 'Ladji Moussa OUATTARA',
    content: [
      '# The Power of Modern Web Technologies: Next.js and TypeScript',
      'Next.js gives performance, routing, and deployment tools out of the box. TypeScript adds safety and clarity for larger projects.',
      '## Why Next.js',
      'Automatic code splitting, image optimization, and static generation help keep apps fast.',
      '## Why TypeScript',
      'TypeScript catches bugs earlier, improves IDE support, and makes refactors safer.',
      '## The Combination',
      'Together, Next.js and TypeScript help me build reliable, scalable web applications faster.',
    ],
  },
];
