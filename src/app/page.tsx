'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillsGallery from '@/components/SkillsGallery';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const featuredProjects = [
    {
      title: 'ASAA Portal - Islamic Quiz 2026',
      description: 'A comprehensive web platform designed to manage pre-selections for the Islamic Quiz 2026, provide a dedicated member space, and serve as the official website of the ASAA organization. Live and deployed!',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://asaaofficiel.vercel.app',
      github: 'https://github.com/AkmelFed12/PRESELECTION-QI26-tst',
    },
    {
      title: 'MyFinance LMO',
      description: 'A financial management application to help users track and manage their personal finances effectively with budget tracking and analytics.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: 'https://github.com/AkmelFed12/myfiancelmo',
    },
    {
      title: 'Barakatrack by LMO',
      description: 'A tracking and management system designed to streamline workflows with real-time updates and data visualization.',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/AkmelFed12/barakatrack-by-lmo',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-down">
            Ladji Moussa OUATTARA
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up">Beginner Full Stack Developer</p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Motivated junior developer with a strong passion for building practical and impactful digital solutions. I combine programming fundamentals with AI tools to enhance efficiency and turn ideas into functional systems.
          </p>
          <div className="flex gap-4 justify-center flex-wrap stagger-item-1">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg font-semibold transition transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`stagger-item-${index + 1}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 rounded-lg font-semibold transition transform hover:scale-105"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Skills Gallery Section */}
      <SkillsGallery />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
