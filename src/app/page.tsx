import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillsGallery from '@/components/SkillsGallery';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getProjectsPublic } from '@/lib/content';

type HomePageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = params?.lang === 'fr' ? 'fr' : 'en';
  const projects = await getProjectsPublic();
  const featuredProjects = projects.slice(0, 3);

  const t = lang === 'fr'
    ? {
        role: 'Etudiant BS Computer Science | Apprenant Full-Stack',
        summary:
          "Je construis des projets full-stack utiles qui repondent a des besoins reels. Je me concentre sur une interface claire, une logique backend fiable et une progression continue par la pratique.",
        ctaWork: 'Voir mes projets',
        ctaContact: 'Me contacter',
        featured: 'Projets Phares',
        viewAll: 'Voir tous les projets',
        learning: 'En Cours d\'Apprentissage',
        learn1: 'Architecture logicielle evolutive, API bien structurees et organisation de code maintainable.',
        learn2: 'Approfondissement Node.js, authentification, modelisation des donnees et fiabilite des API.',
        learn3: 'Amelioration continue de la qualite avec validation, debogage et logique orientee tests.',
        badge1: 'Diplome prevu: 2028',
        badge2: 'Disponible pour stage',
        badge3: 'Ouvert aux collaborations',
      }
    : {
        role: 'BS Computer Science Student | Full-Stack Learner',
        summary:
          'Building practical full-stack projects that solve real community needs. Strong focus on clean frontend experience, reliable backend logic, and continuous learning through delivery.',
        ctaWork: 'View My Work',
        ctaContact: 'Get In Touch',
        featured: 'Featured Projects',
        viewAll: 'View All Projects',
        learning: 'Currently Learning',
        learn1: 'Designing scalable architecture, clear API boundaries, and maintainable project structure.',
        learn2: 'Deepening Node.js knowledge, authentication flows, database modeling, and API reliability.',
        learn3: 'Improving code quality with better validation, debugging discipline, and test-oriented development.',
        badge1: 'Expected Graduation: 2028',
        badge2: 'Available for Internship',
        badge3: 'Open to Collaboration',
      };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-down">
            Ladji Moussa OUATTARA
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up">{t.role}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
              {t.badge1}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
              {t.badge2}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300">
              {t.badge3}
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            {t.summary}
          </p>
          <div className="flex gap-4 justify-center flex-wrap stagger-item-1">
            <Link
              href={`/projects?lang=${lang}`}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              {t.ctaWork}
            </Link>
            <Link
              href={`/contact?lang=${lang}`}
              className="px-8 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg font-semibold transition transform hover:scale-105"
            >
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">{t.featured}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`stagger-item-${index + 1}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                github={project.github}
                image={project.image}
                mobileImage={project.mobileImage}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={`/projects?lang=${lang}`}
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 rounded-lg font-semibold transition transform hover:scale-105"
          >
            {t.viewAll} →
          </Link>
        </div>
      </section>

      {/* Skills Gallery Section */}
      <SkillsGallery />

      {/* Currently Learning Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">{t.learning}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">System Design</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t.learn1}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Backend Engineering</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t.learn2}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Testing & Quality</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t.learn3}
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}
