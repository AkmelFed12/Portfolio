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

  return (
    <div className="surface-card group h-full overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      {(image || mobileImage) && (
        <div className="relative overflow-hidden bg-slate-100 p-3 dark:bg-slate-800/70">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {image && (
              <div className="relative col-span-3 aspect-[16/9] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={image}
                  alt={`${title} aperçu desktop`}
                  fill
                  sizes="(max-width: 768px) 60vw, 24vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            )}
            {mobileImage && (
              <div className="relative col-span-1 h-28 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <Image
                  src={mobileImage}
                  alt={`${title} aperçu mobile`}
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
        <p className="text-gray-700 dark:text-slate-200 mb-4">{description}</p>
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
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
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
