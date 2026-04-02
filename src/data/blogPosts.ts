export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  coverImage?: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'student-to-builder-2026',
    title: 'From Student to Builder: My 2026 Learning Approach',
    excerpt:
      'How I organize learning as a BS Computer Science student while shipping practical projects with measurable progress.',
    date: '2026-03-21',
    category: 'Learning',
    readTime: '6 min read',
    author: 'Ladji Moussa OUATTARA',
    coverImage: '/images/barakatrack-desktop.png',
    content: [
      '# From Student to Builder: My 2026 Learning Approach',
      'In 2026, my goal is clear: stay consistent as a student and become stronger through real project execution.',
      '## What I prioritize',
      'I focus on fundamentals first: problem decomposition, clean structure, and readable code before adding complexity.',
      '## How I learn efficiently',
      'I study in short cycles: learn, build, review, and improve. Every feature I build must teach me something concrete.',
      '## Tools and stack',
      'My daily stack is Next.js, React, TypeScript, Tailwind CSS, Node.js, and Firebase/PostgreSQL depending on project needs.',
      '## Outcome',
      'This approach keeps me grounded as a learner and helps me produce portfolio work that reflects real growth.',
    ],
  },
  {
    id: 2,
    slug: 'asaa-portal-real-world-lessons',
    title: 'ASAA Portal: Real-World Lessons from a Live Project',
    excerpt:
      'What building ASAA Portal taught me about delivery, responsibility, and improving a product for real users.',
    date: '2026-03-10',
    category: 'Case Study',
    readTime: '8 min read',
    author: 'Ladji Moussa OUATTARA',
    coverImage: '/images/asaa-portal-desktop-v2.png',
    content: [
      '# ASAA Portal: Real-World Lessons from a Live Project',
      'ASAA Portal helped me move from theory to responsibility. Real users quickly reveal what quality really means.',
      '## Lesson 1: clarity beats complexity',
      'Simple navigation and clear action paths improved usability more than adding extra features.',
      '## Lesson 2: backend reliability matters',
      'Validation, predictable data flow, and robust handling reduced user friction and support effort.',
      '## Lesson 3: delivery is iterative',
      'A project improves through continuous feedback, not one perfect release.',
      '## Next step',
      'I continue improving the platform while strengthening architecture and maintainability skills.',
    ],
  },
];
