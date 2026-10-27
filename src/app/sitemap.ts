import type { MetadataRoute } from 'next';
import { getSiteUrl, localizedAlternates, projects, locales } from '@/content/portfolio';

const siteUrl = getSiteUrl();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUpdatedAt = new Date();
  const staticRoutes = locales.flatMap((locale) =>
    ['', '/projects', '/about', '/cv', '/contact'].map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: { languages: localizedAlternates(locale, path).languages },
      lastModified: siteUpdatedAt,
      changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
  );
  const projectRoutes = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/projects/${project.slug}`,
      alternates: { languages: localizedAlternates(locale, `/projects/${project.slug}`).languages },
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  );
  return [...staticRoutes, ...projectRoutes];
}
