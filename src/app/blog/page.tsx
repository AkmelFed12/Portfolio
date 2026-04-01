'use client';

import SocialShareButtons from '@/components/SocialShareButtons';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js and Tailwind CSS',
      excerpt: 'Learn how to build modern web applications with Next.js and style them with Tailwind CSS.',
      date: '2024-03-15',
      category: 'Tutorial',
      readTime: '5 min read',
      slug: 'nextjs-tailwind-guide',
    },
    {
      id: 2,
      title: 'Building Full-Stack Applications with TypeScript',
      excerpt: 'A comprehensive guide to using TypeScript for both frontend and backend development.',
      date: '2024-03-10',
      category: 'Guide',
      readTime: '8 min read',
      slug: 'typescript-fullstack',
    },
    {
      id: 3,
      title: 'The Power of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build web applications.',
      date: '2024-03-05',
      category: 'Insights',
      readTime: '6 min read',
      slug: 'ai-web-development',
    },
    {
      id: 4,
      title: 'Creating Responsive Web Designs',
      excerpt: 'Best practices for building websites that work seamlessly on all devices.',
      date: '2024-02-28',
      category: 'Best Practices',
      readTime: '7 min read',
      slug: 'responsive-design',
    },
  ];

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-down">
            Blog & Articles
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Insights, tutorials, and thoughts on web development
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 stagger-item-${(index % 3) + 1}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 mb-4">
                <time className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition">
                  Read More →
                </button>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <SocialShareButtons title={post.title} description={post.excerpt} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
