import type { MetadataRoute } from 'next';
import { projects, site, locales } from '@/content/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUpdatedAt = new Date('2026-10-14T00:00:00.000Z');
  const staticRoutes = locales.flatMap((locale) =>
    ['', '/projects', '/about', '/contact'].map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: siteUpdatedAt,
      changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
  );
  const projectRoutes = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/projects/${project.slug}`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  );
  return [...staticRoutes, ...projectRoutes];
}
