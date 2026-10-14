import type { Metadata } from 'next';
import BlogList from '@/components/BlogList';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles de Ladji Moussa OUATTARA sur l apprentissage, les projets et le developpement web.',
  openGraph: {
    title: 'Blog | Ladji Moussa OUATTARA',
    description: 'Articles sur la livraison de projets, la methode d apprentissage et le developpement full-stack.',
    images: ['/og-blog.svg'],
  },
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100 animate-slide-down">
            Blog et articles
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200">
            Retours d experience sur mon apprentissage et la construction de mes projets
          </p>
        </div>
      </section>

      <BlogList posts={posts} />
    </div>
  );
}


