import type { Metadata } from 'next';
import BlogList from '@/components/BlogList';
import { getBlogPosts } from '@/lib/content';
import PageHero from '@/components/PageHero';

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
      <PageHero
        eyebrow="Notes & retours d experience"
        title="Blog et articles"
        description="Apprentissage, construction de produits et decisions techniques partagees sans jargon inutile."
      />

      <BlogList posts={posts} />
    </div>
  );
}

