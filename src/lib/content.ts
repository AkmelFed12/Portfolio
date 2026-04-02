import 'server-only';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { projects, Project } from '@/data/projects';
import { testimonials, Testimonial } from '@/data/testimonials';
import { getPosts, getProjects, getTestimonials } from '@/lib/admin';
import { isDbEnabled } from '@/lib/db';

function splitContent(content: string) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isDbEnabled) {
    return blogPosts;
  }

  const rows = await getPosts();
  if (rows.length === 0) {
    return blogPosts;
  }

  return rows.map((row, index) => ({
    id: row.id || index + 1,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    date: row.published_at || new Date().toISOString().slice(0, 10),
    category: row.category || 'General',
    readTime: row.read_time || '5 min read',
    author: row.author || 'Ladji Moussa OUATTARA',
    coverImage: (row as { cover_image?: string }).cover_image || undefined,
    content: splitContent(row.content || ''),
  }));
}

export async function getProjectsPublic(): Promise<Project[]> {
  if (!isDbEnabled) {
    return projects;
  }

  const rows = await getProjects();
  if (rows.length === 0) {
    return projects;
  }

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    tech: row.tech.split(',').map((item) => item.trim()).filter(Boolean),
    link: row.link || undefined,
    github: row.github || undefined,
    image: row.image || undefined,
  }));
}

export async function getTestimonialsPublic(): Promise<Testimonial[]> {
  if (!isDbEnabled) {
    return testimonials;
  }

  const rows = await getTestimonials();
  if (rows.length === 0) {
    return testimonials;
  }

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    title: row.role,
    company: row.company || '',
    testimonial: row.quote,
    rating: row.rating || 5,
  }));
}
