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
  viewUrl?: string;
  downloadUrl?: string;
  stats?: {
    views: number;
    totalDownloads: number;
    pdfDownloads?: number;
    epubDownloads?: number;
    kindleDownloads?: number;
    rating?: string;
    votes?: number;
  };
  content: string[];
  titleFr?: string;
  excerptFr?: string;
  categoryFr?: string;
  readTimeFr?: string;
  contentFr?: string[];
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
    titleFr: "De l'etudiant au createur : mon approche d'apprentissage 2026",
    excerptFr:
      "Comment j'organise mon apprentissage en tant qu'etudiant en Computer Science tout en livrant des projets concrets avec des progres mesurables.",
    categoryFr: 'Apprentissage',
    readTimeFr: '6 min de lecture',
    contentFr: [
      "# De l'etudiant au createur : mon approche d'apprentissage 2026",
      "En 2026, mon objectif est clair : rester regulier comme etudiant et devenir plus fort grace a l'execution de reels projets.",
      '## Ce que je privilegie',
      "Je me concentre d'abord sur les fondamentaux : decomposition des problemes, structure propre et code lisible avant d'ajouter de la complexite.",
      "## Comment j'apprends efficacement",
      "J'etudie en cycles courts : apprendre, construire, revoir, ameliorer. Chaque fonctionnalite que je developpe doit m'apprendre quelque chose de concret.",
      '## Outils et stack',
      'Ma stack quotidienne est Next.js, React, TypeScript, Tailwind CSS, Node.js, et Firebase/PostgreSQL selon les besoins du projet.',
      '## Resultat',
      'Cette approche me garde ancre comme apprenant et m\'aide a produire un travail de portfolio qui reflete une vraie croissance.',
    ],
  },
  {
    id: 2,
    slug: 'desir-et-passion-book-release',
    title: 'Desir Et Passion: Official Reading and Download Access',
    excerpt:
      "My first published book is now available online. Access the official page for both reading and download.",
    date: '2021-02-02',
    category: 'Book Release',
    readTime: '3 min read',
    author: 'Ladji Moussa OUATTARA',
    coverImage: '/images/desir-et-passion-cover.jpg',
    viewUrl: 'https://www.edition999.info/Desir-Et-Passion.html',
    downloadUrl: 'https://www.edition999.info/Desir-Et-Passion.html',
    stats: {
      views: 1245,
      totalDownloads: 638,
      pdfDownloads: 482,
      epubDownloads: 95,
      kindleDownloads: 61,
      rating: '4.8/5',
      votes: 40,
    },
    content: [
      '# Desir Et Passion',
      'I am pleased to share my first published book, now available through Edition999.',
      '## About this release',
      'This publication reflects my personal writing journey and my commitment to delivering meaningful, high-quality work across disciplines.',
      '## Access',
      'You can read the book online or download it directly from the official Edition999 page using the links below.',
      '## Thank you',
      'Thank you for your support. Your trust and encouragement continue to inspire my next projects.',
    ],
    titleFr: 'Desir Et Passion : acces officiel a la lecture et au telechargement',
    excerptFr:
      'Mon premier livre publie est desormais en ligne. Accede a la page officielle pour la lecture et le telechargement.',
    categoryFr: 'Sortie de livre',
    readTimeFr: '3 min de lecture',
    contentFr: [
      '# Desir Et Passion',
      'Je suis heureux de partager mon premier livre publie, desormais disponible via Edition999.',
      '## A propos de cette sortie',
      'Cette publication reflete mon parcours d\'ecriture personnel et mon engagement a livrer un travail de qualite, riche de sens.',
      '## Acces',
      'Vous pouvez lire le livre en ligne ou le telecharger directement depuis la page officielle Edition999 via les liens ci-dessous.',
      '## Merci',
      'Merci pour votre soutien. Votre confiance et vos encouragements continuent d\'inspirer mes prochains projets.',
    ],
  },
  {
    id: 3,
    slug: 'le-temps-additionnel-tome1-book-release',
    title: 'Le temps additionnel Tome 1: Avant le coup de sifflet final',
    excerpt:
      'My second book is now available. Visit the official page to read online and access the download.',
    date: '2026-02-04',
    category: 'Book Release',
    readTime: '3 min read',
    author: 'Ladji Moussa OUATTARA',
    coverImage: '/images/temps-additionnel-cover.jpg',
    viewUrl:
      'https://www.edition999.info/Le-temps-additionnel-Tome1-Avant-le-coup-de-sifflet-final.html',
    downloadUrl:
      'https://www.edition999.info/Le-temps-additionnel-Tome1-Avant-le-coup-de-sifflet-final.html',
    stats: {
      views: 105,
      totalDownloads: 115,
      pdfDownloads: 62,
      epubDownloads: 29,
      kindleDownloads: 24,
    },
    content: [
      '# Le temps additionnel - Tome 1',
      "I am proud to present my second published book, continuing my literary and creative development.",
      '## Positioning',
      'This release extends my author portfolio with a focused narrative project designed for engaged readers.',
      '## Access',
      'Reading and download are available from the official Edition999 page via the action buttons below.',
      '## Perspective',
      'I will continue to publish with the same standard of quality, clarity, and long-term ambition.',
    ],
    titleFr: 'Le temps additionnel Tome 1 : Avant le coup de sifflet final',
    excerptFr:
      'Mon deuxieme livre est desormais disponible. Visitez la page officielle pour lire en ligne et acceder au telechargement.',
    categoryFr: 'Sortie de livre',
    readTimeFr: '3 min de lecture',
    contentFr: [
      '# Le temps additionnel - Tome 1',
      'Je suis fier de presenter mon deuxieme livre publie, qui poursuit mon developpement litteraire et creatif.',
      '## Positionnement',
      "Cette sortie etend mon portfolio d'auteur avec un projet narratif concentre, pense pour des lecteurs engages.",
      '## Acces',
      "La lecture et le telechargement sont disponibles depuis la page officielle Edition999 via les boutons d'action ci-dessous.",
      '## Perspective',
      "Je continuerai a publier avec le meme standard de qualite, de clarte et d'ambition a long terme.",
    ],
  },
];
