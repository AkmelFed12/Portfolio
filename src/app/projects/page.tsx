import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'ASAA Portal - Islamic Quiz 2026',
      description: 'A comprehensive web platform designed to manage pre-selections for the Islamic Quiz 2026, provide a dedicated member space, and serve as the official website of the ASAA organization. Functions as a complete membership and event management system.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://asaaofficiel.vercel.app',
      github: 'https://github.com/AkmelFed12/PRESELECTION-QI26-tst',
    },
    {
      title: 'MyFinance LMO',
      description: 'A financial management application designed to help users track and manage their personal finances effectively. Features budget tracking, expense categorization, and financial analytics.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      link: '#',
      github: 'https://github.com/AkmelFed12/myfiancelmo',
    },
    {
      title: 'Barakatrack by LMO',
      description: 'A tracking and management system designed to streamline workflows and improve productivity. Includes real-time updates, data visualization, and comprehensive reporting features.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
      link: '#',
      github: 'https://github.com/AkmelFed12/barakatrack-by-lmo',
    },
  ];

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A collection of projects I've built using modern web technologies
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
