'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  createPost,
  updatePost,
  deletePost,
  createProject,
  updateProject,
  deleteProject,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '@/lib/admin';
import { isAdminAuthenticated } from '@/lib/admin-auth';

async function assertAdminAccess() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect('/admin/login');
  }
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export async function createPostAction(formData: FormData) {
  await assertAdminAccess();
  const title = String(formData.get('title') || '');
  const slugInput = String(formData.get('slug') || '');
  const slug = slugInput || slugify(title);

  await createPost({
    slug,
    title,
    excerpt: String(formData.get('excerpt') || ''),
    content: String(formData.get('content') || ''),
    category: String(formData.get('category') || 'General'),
    readTime: String(formData.get('readTime') || '5 min read'),
    author: String(formData.get('author') || 'Ladji Moussa OUATTARA'),
    publishedAt: String(formData.get('publishedAt') || ''),
  });

  revalidatePath('/admin');
  revalidatePath('/blog');
}

export async function updatePostAction(formData: FormData) {
  await assertAdminAccess();
  await updatePost({
    id: Number(formData.get('id')),
    slug: String(formData.get('slug') || ''),
    title: String(formData.get('title') || ''),
    excerpt: String(formData.get('excerpt') || ''),
    content: String(formData.get('content') || ''),
    category: String(formData.get('category') || ''),
    readTime: String(formData.get('readTime') || ''),
    author: String(formData.get('author') || ''),
    publishedAt: String(formData.get('publishedAt') || ''),
  });

  revalidatePath('/admin');
  revalidatePath('/blog');
}

export async function deletePostAction(formData: FormData) {
  await assertAdminAccess();
  await deletePost(Number(formData.get('id')));
  revalidatePath('/admin');
  revalidatePath('/blog');
}

export async function createProjectAction(formData: FormData) {
  await assertAdminAccess();
  await createProject({
    title: String(formData.get('title') || ''),
    description: String(formData.get('description') || ''),
    tech: String(formData.get('tech') || ''),
    link: String(formData.get('link') || ''),
    github: String(formData.get('github') || ''),
    image: String(formData.get('image') || ''),
  });

  revalidatePath('/admin');
  revalidatePath('/projects');
}

export async function updateProjectAction(formData: FormData) {
  await assertAdminAccess();
  await updateProject({
    id: Number(formData.get('id')),
    title: String(formData.get('title') || ''),
    description: String(formData.get('description') || ''),
    tech: String(formData.get('tech') || ''),
    link: String(formData.get('link') || ''),
    github: String(formData.get('github') || ''),
    image: String(formData.get('image') || ''),
  });

  revalidatePath('/admin');
  revalidatePath('/projects');
}

export async function deleteProjectAction(formData: FormData) {
  await assertAdminAccess();
  await deleteProject(Number(formData.get('id')));
  revalidatePath('/admin');
  revalidatePath('/projects');
}

export async function createTestimonialAction(formData: FormData) {
  await assertAdminAccess();
  await createTestimonial({
    name: String(formData.get('name') || ''),
    company: String(formData.get('company') || ''),
    role: String(formData.get('role') || ''),
    quote: String(formData.get('quote') || ''),
    rating: Number(formData.get('rating') || 5),
  });

  revalidatePath('/admin');
}

export async function updateTestimonialAction(formData: FormData) {
  await assertAdminAccess();
  await updateTestimonial({
    id: Number(formData.get('id')),
    name: String(formData.get('name') || ''),
    company: String(formData.get('company') || ''),
    role: String(formData.get('role') || ''),
    quote: String(formData.get('quote') || ''),
    rating: Number(formData.get('rating') || 5),
  });

  revalidatePath('/admin');
}

export async function deleteTestimonialAction(formData: FormData) {
  await assertAdminAccess();
  await deleteTestimonial(Number(formData.get('id')));
  revalidatePath('/admin');
}
