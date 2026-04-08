import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SocialShareButtons from '@/components/SocialShareButtons';
import GiscusComments from '@/components/GiscusComments';
import { getBlogPosts } from '@/lib/content';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested article was not found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || '/og-blog.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || '/og-blog.svg'],
    },
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((item) => item.slug === slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lmoportfolio.vercel.app';

  if (!post) {
    notFound();
  }

  const morePosts = posts.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    image: post.coverImage ? [`${siteUrl}${post.coverImage}`] : [`${siteUrl}/og-blog.svg`],
    publisher: {
      '@type': 'Organization',
      name: 'LMO Web Services',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/og-home.svg`,
      },
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-12 animate-fade-in">
            {post.coverImage && (
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
                <Image src={post.coverImage} alt={`${post.title} cover image`} fill sizes="100vw" className="object-cover" />
              </div>
            )}

            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-4 items-center text-gray-600 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>{post.readTime}</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-none mb-12 animate-slide-up">
            {post.content.map((block, index) => {
              if (block.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-6">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mt-8">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('# ')) {
                return (
                  <h2 key={index} className="text-4xl font-bold text-gray-900 dark:text-white mt-8">
                    {block.replace('# ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <SocialShareButtons title={post.title} description={post.excerpt} />
          </div>
        </div>
      </article>

      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <GiscusComments />
        </div>
      </section>

      <section className="bg-white dark:bg-black py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="space-y-4">
            {morePosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

