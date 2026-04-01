interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

import SocialShareButtons from './SocialShareButtons';

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Tech Stack:
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            View Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded transition"
          >
            GitHub
          </a>
        )}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <SocialShareButtons title={title} description={description} />
      </div>
    </div>
  );
}
