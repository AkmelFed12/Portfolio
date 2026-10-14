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
    title: 'De l etudiant au createur : ma methode d apprentissage en 2026',
    excerpt:
      'Comment j organise mon apprentissage tout en livrant des projets pratiques avec une progression mesurable.',
    date: '2026-03-21',
    category: 'Apprentissage',
    readTime: '6 min de lecture',
    author: 'Ladji Moussa OUATTARA',
    coverImage: '/images/barakatrack-desktop.png',
    content: [
      '# De l etudiant au createur : ma methode d apprentissage en 2026',
      'En 2026, mon objectif est clair : rester constant dans mes etudes et progresser grace a des projets concrets.',
      '## Mes priorites',
      'Je commence par les fondamentaux : decomposition du probleme, structure claire et code lisible avant d ajouter de la complexite.',
      '## Comment j apprends efficacement',
      'Je travaille par cycles courts : apprendre, construire, revoir et ameliorer. Chaque fonctionnalite doit m apporter un apprentissage concret.',
      '## Outils et stack',
      'Ma stack quotidienne comprend Next.js, React, TypeScript, Tailwind CSS, Node.js et Firebase/PostgreSQL selon le besoin.',
      '## Resultat',
      'Cette methode me garde ancre dans la progression et m aide a produire un portfolio qui reflete une vraie evolution.',
    ],
  },
];
