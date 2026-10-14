import Image from 'next/image';
import SocialShareButtons from './SocialShareButtons';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  caseStudyLink?: string;
  link?: string;
  github?: string;
  promoEmbed?: string;
  categoryLabel?: string;
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
  categoryLabel,
  image,
  mobileImage,
}: ProjectCardProps) {
  const shareUrl = link;
  const previewImage = image || mobileImage;

  return (
    <div className="surface-card group h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      {previewImage && (
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800/70">
          <Image
            src={previewImage}
            alt={`${title} aperçu`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex h-[calc(100%-12rem)] flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        {categoryLabel && (
          <span className="mb-3 inline-flex rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-200">
            {categoryLabel}
          </span>
        )}
        {!link && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              Demo en ligne indisponible
            </span>
          </div>
        )}
        <p className="mb-4 flex-1 text-gray-700 dark:text-slate-200">{description}</p>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-600 dark:text-slate-300 mb-2">
            Technologies :
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-cyan-100/90 dark:bg-cyan-900/70 text-cyan-800 dark:text-cyan-200 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3 mb-4">
          {caseStudyLink && (
            <a
              href={caseStudyLink}
              className="btn-secondary focus-ring px-4 py-2 w-full sm:w-auto"
            >
              Étude de cas
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring px-4 py-2 w-full sm:w-auto"
            >
              Voir le site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary focus-ring px-4 py-2 w-full sm:w-auto"
            >
              Voir le code
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
