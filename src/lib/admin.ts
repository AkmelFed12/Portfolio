import 'server-only';
import { db } from '@/lib/db';

export type DbPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  author: string;
  published_at: string | null;
};

export type DbProject = {
  id: number;
  title: string;
  description: string;
  tech: string;
  link: string | null;
  github: string | null;
  image: string | null;
};

export type DbTestimonial = {
  id: number;
  name: string;
  company: string | null;
  role: string;
  quote: string;
  rating: number;
};

export async function getPosts(): Promise<DbPost[]> {
  if (!db) return [];
  const rows = await db`
    select id, slug, title, excerpt, content, category, read_time, author, published_at
    from posts
    order by published_at desc nulls last, id desc
  `;
  return rows as DbPost[];
}

export async function getProjects(): Promise<DbProject[]> {
  if (!db) return [];
  const rows = await db`
    select id, title, description, tech, link, github, image
    from projects
    order by id desc
  `;
  return rows as DbProject[];
}

export async function getTestimonials(): Promise<DbTestimonial[]> {
  if (!db) return [];
  const rows = await db`
    select id, name, company, role, quote, rating
    from testimonials
    order by id desc
  `;
  return rows as DbTestimonial[];
}

export async function createPost(input: {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  publishedAt: string;
}) {
  if (!db) return;
  await db`
    insert into posts (slug, title, excerpt, content, category, read_time, author, published_at)
    values (
      ${input.slug},
      ${input.title},
      ${input.excerpt},
      ${input.content},
      ${input.category},
      ${input.readTime},
      ${input.author},
      ${input.publishedAt || null}
    )
  `;
}

export async function updatePost(input: {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  publishedAt: string;
}) {
  if (!db) return;
  await db`
    update posts
    set slug = ${input.slug},
        title = ${input.title},
        excerpt = ${input.excerpt},
        content = ${input.content},
        category = ${input.category},
        read_time = ${input.readTime},
        author = ${input.author},
        published_at = ${input.publishedAt || null}
    where id = ${input.id}
  `;
}

export async function deletePost(id: number) {
  if (!db) return;
  await db`delete from posts where id = ${id}`;
}

export async function createProject(input: {
  title: string;
  description: string;
  tech: string;
  link: string;
  github: string;
  image: string;
}) {
  if (!db) return;
  await db`
    insert into projects (title, description, tech, link, github, image)
    values (
      ${input.title},
      ${input.description},
      ${input.tech},
      ${input.link || null},
      ${input.github || null},
      ${input.image || null}
    )
  `;
}

export async function updateProject(input: {
  id: number;
  title: string;
  description: string;
  tech: string;
  link: string;
  github: string;
  image: string;
}) {
  if (!db) return;
  await db`
    update projects
    set title = ${input.title},
        description = ${input.description},
        tech = ${input.tech},
        link = ${input.link || null},
        github = ${input.github || null},
        image = ${input.image || null}
    where id = ${input.id}
  `;
}

export async function deleteProject(id: number) {
  if (!db) return;
  await db`delete from projects where id = ${id}`;
}

export async function createTestimonial(input: {
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
}) {
  if (!db) return;
  await db`
    insert into testimonials (name, company, role, quote, rating)
    values (${input.name}, ${input.company || null}, ${input.role}, ${input.quote}, ${input.rating})
  `;
}

export async function updateTestimonial(input: {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
}) {
  if (!db) return;
  await db`
    update testimonials
    set name = ${input.name},
        company = ${input.company || null},
        role = ${input.role},
        quote = ${input.quote},
        rating = ${input.rating}
    where id = ${input.id}
  `;
}

export async function deleteTestimonial(id: number) {
  if (!db) return;
  await db`delete from testimonials where id = ${id}`;
}
