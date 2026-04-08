import Image from 'next/image';
import SocialShareButtons from './SocialShareButtons';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  caseStudyLink?: string;
  link?: string;
  github?: string;
  image?: string;
  mobileImage?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  caseStudyLink,
  link,
  github,
  image,
  mobileImage,
}: ProjectCardProps) {
  const shareUrl = link || github;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {(image || mobileImage) && (
        <div className="p-4 bg-gray-100 dark:bg-gray-800">
          <div className="grid grid-cols-3 gap-3">
            {image && (
              <div className="relative col-span-2 h-36 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={image}
                  alt={`${title} desktop preview`}
                  fill
                  sizes="(max-width: 768px) 60vw, 24vw"
                  className="object-cover"
                />
              </div>
            )}
            {mobileImage && (
              <div className="relative col-span-1 h-36 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={mobileImage}
                  alt={`${title} mobile preview`}
                  fill
                  sizes="(max-width: 768px) 30vw, 12vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        {!link && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              No live demo yet
            </span>
          </div>
        )}
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
          {caseStudyLink && (
            <a
              href={caseStudyLink}
              className="inline-block px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded transition"
            >
              Case Study
            </a>
          )}
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
          <SocialShareButtons
            title={title}
            description={description}
            url={shareUrl}
          />
        </div>
      </div>
    </div>
  );
}

