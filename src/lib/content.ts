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
    return blogPosts.map(localizeBlogPost);
  }

  const rows = await getPosts();
  if (rows.length === 0) {
    return blogPosts.map(localizeBlogPost);
  }

  const databasePosts = rows.map((row, index) => {
    const localPost = blogPosts.find((post) => post.slug === row.slug);
    return localizeBlogPost({
      id: row.id || index + 1,
      slug: row.slug,
      title: localPost?.title || row.title,
      excerpt: localPost?.excerpt || row.excerpt,
      date: row.published_at || new Date().toISOString().slice(0, 10),
      category: localPost?.category || row.category || 'General',
      readTime: localPost?.readTime || row.read_time || '5 min read',
      author: row.author || 'Ladji Moussa OUATTARA',
      coverImage: localPost?.coverImage || (row as { cover_image?: string }).cover_image || undefined,
      content: localPost?.content || splitContent(row.content || ''),
      titleFr: localPost?.titleFr,
      excerptFr: localPost?.excerptFr,
      categoryFr: localPost?.categoryFr,
      readTimeFr: localPost?.readTimeFr,
      contentFr: localPost?.contentFr,
      viewUrl: localPost?.viewUrl,
      downloadUrl: localPost?.downloadUrl,
      stats: localPost?.stats,
    });
  });

  const knownSlugs = new Set(databasePosts.map((post) => post.slug));
  return [...databasePosts, ...blogPosts.filter((post) => !knownSlugs.has(post.slug)).map(localizeBlogPost)];
}

function localizeBlogPost(post: BlogPost): BlogPost {
  return {
    ...post,
    title: post.titleFr || post.title,
    excerpt: post.excerptFr || post.excerpt,
    category: post.categoryFr || post.category,
    readTime: post.readTimeFr || post.readTime,
    content: post.contentFr || post.content,
  };
}

export async function getProjectsPublic(): Promise<Project[]> {
  if (!isDbEnabled) {
    return projects;
  }

  const rows = await getProjects();
  if (rows.length === 0) {
    return projects;
  }

  return rows.map((row) => {
    const slug =
      (row as { slug?: string }).slug ||
      row.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    const normalizeProjectKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const localProject = projects.find(
      (project) =>
        normalizeProjectKey(project.slug) === normalizeProjectKey(slug) ||
        normalizeProjectKey(project.title) === normalizeProjectKey(row.title)
    );

    return {
      id: row.id,
      slug,
      title: row.title,
      description: row.description,
      tech: row.tech.split(',').map((item) => item.trim()).filter(Boolean),
      category: localProject?.category,
      link: row.link || localProject?.link,
      github: row.github || localProject?.github,
      image: localProject?.image || row.image || undefined,
      mobileImage: localProject?.mobileImage,
      promoEmbed: localProject?.promoEmbed,
    };
  });
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
