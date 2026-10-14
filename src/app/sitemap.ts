import type { MetadataRoute } from 'next';
import { getBlogPosts, getProjectsPublic } from '@/lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lmoportfolio.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUpdatedAt = new Date('2026-10-14T00:00:00.000Z');
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: siteUpdatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const posts = await getBlogPosts();
  const projects = await getProjectsPublic();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: siteUpdatedAt,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
