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
    <div className="surface-card overflow-hidden hover:shadow-md transition-shadow">
      {(image || mobileImage) && (
        <div className="p-4 bg-slate-100 dark:bg-slate-800/70">
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
        <p className="text-gray-700 dark:text-slate-200 mb-4">{description}</p>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-600 dark:text-slate-300 mb-2">
            Tech Stack:
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-blue-100/90 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          {caseStudyLink && (
            <a
              href={caseStudyLink}
              className="btn-secondary focus-ring px-4 py-2"
            >
              Case Study
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring px-4 py-2"
            >
              View Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary focus-ring px-4 py-2"
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


