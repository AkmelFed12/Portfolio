'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SocialShareButtons from '@/components/SocialShareButtons';
import type { BlogPost } from '@/data/blogPosts';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((post) => post.category)));
    return ['All', ...unique];
  }, [posts]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search posts
          </label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="category" className="sr-only">
            Filter by category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((post, index) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.01] stagger-item-${(index % 3) + 1} h-full cursor-pointer`}
            >
              {post.coverImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={`${post.title} cover image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-slate-300">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-700 dark:text-slate-200 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mb-4">
                  <time className="text-sm text-gray-600 dark:text-slate-300">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold transition">Read More →</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <SocialShareButtons
                    title={post.title}
                    description={post.excerpt}
                    url={`${baseUrl}/blog/${post.slug}`}
                  />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 text-center text-gray-600 dark:text-slate-300">
          No posts match your search yet.
        </div>
      )}
    </section>
  );
}

