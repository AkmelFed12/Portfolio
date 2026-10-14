'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import SocialShareButtons from './SocialShareButtons';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  categoryLabel?: string;
  caseStudyLink?: string;
  link?: string;
  image?: string;
  mobileImage?: string;
  promoEmbed?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  categoryLabel,
  caseStudyLink,
  link,
  image,
  mobileImage,
  promoEmbed,
}: ProjectCardProps) {
  const shareUrl = link;
  const hasVisuals = Boolean(image || mobileImage || promoEmbed);
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = useMemo(() => {
    const items: Array<'images' | 'promo'> = [];
    if (image || mobileImage) {
      items.push('images');
    }
    if (promoEmbed) {
      items.push('promo');
    }
    return items;
  }, [image, mobileImage, promoEmbed]);
  const slideCount = slides.length;

  return (
    <div className="surface-card overflow-hidden hover:shadow-md transition-shadow">
      {hasVisuals && (
        <div className="p-4 bg-slate-100 dark:bg-slate-800/70">
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1"
            onScroll={(event) => {
              const target = event.currentTarget;
              const width = target.clientWidth;
              if (!width) return;
              const nextSlide = Math.round(target.scrollLeft / width) + 1;
              const bounded = Math.max(1, Math.min(slideCount, nextSlide));
              if (bounded !== activeSlide) {
                setActiveSlide(bounded);
              }
            }}
          >
            {(image || mobileImage) && (
              <div className="min-w-full snap-start">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {image && (
                    <div className="relative col-span-2 h-28 sm:h-36 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
                    <div className="relative col-span-1 h-28 sm:h-36 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
            {promoEmbed && (
              <div className="min-w-full snap-start">
                <div className="relative h-28 sm:h-36 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-black">
                  <iframe
                    src={promoEmbed}
                    title={`${title} promo`}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
          {slideCount > 1 && (
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-600 dark:text-slate-300">
              {slides.map((_, index) => {
                const position = index + 1;
                const isActive = activeSlide === position;
                return (
                  <span
                    key={`slide-indicator-${position}`}
                    className={`px-2 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-cyan-600 text-white border-cyan-600'
                        : 'bg-white/80 dark:bg-slate-900/70 border-gray-200 dark:border-slate-700'
                    }`}
                  >
                    {position}/{slideCount}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        {categoryLabel && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
              {categoryLabel}
            </span>
          </div>
        )}
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
              Case Study
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring px-4 py-2 w-full sm:w-auto"
            >
              View Live
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
