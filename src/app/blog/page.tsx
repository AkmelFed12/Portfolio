import type { Metadata } from 'next';
import BlogList from '@/components/BlogList';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles from Ladji Moussa OUATTARA about learning, projects, and practical web development.',
  openGraph: {
    title: 'Blog | Ladji Moussa OUATTARA',
    description: 'Articles about project delivery, learning strategy, and full-stack development.',
    images: ['/og-blog.svg'],
  },
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100 animate-slide-down">
            Blog & Articles
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Insights from my learning and project-building journey
          </p>
        </div>
      </section>

      <BlogList posts={posts} />
    </div>
  );
}


