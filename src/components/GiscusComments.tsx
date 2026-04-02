'use client';

import { useEffect, useRef } from 'react';

interface GiscusCommentsProps {
  mapping?: 'pathname' | 'url' | 'title' | 'og:title';
}

export default function GiscusComments({ mapping = 'pathname' }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.childElementCount > 0) return;

    const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
    const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
    const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
    const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

    if (!repo || !repoId || !category || !categoryId) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');

    containerRef.current.appendChild(script);
  }, [mapping]);

  const configured =
    process.env.NEXT_PUBLIC_GISCUS_REPO &&
    process.env.NEXT_PUBLIC_GISCUS_REPO_ID &&
    process.env.NEXT_PUBLIC_GISCUS_CATEGORY &&
    process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  if (!configured) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-6 text-center text-gray-600 dark:text-gray-400">
        Comments are not configured yet. Add your Giscus settings in `.env.local`.
      </div>
    );
  }

  return <div ref={containerRef} />;
}

