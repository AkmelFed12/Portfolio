import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web services offered by Ladji Moussa OUATTARA including websites, dashboards, and maintenance.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Portfolio & Business Websites',
      description: 'Modern, responsive websites with clean UI, bilingual support, and SEO-ready structure.',
    },
    {
      title: 'Full-Stack Web Apps',
      description: 'Custom app development with React/Next.js frontend and robust backend logic.',
    },
    {
      title: 'Landing Pages & Conversion Flows',
      description: 'Fast-loading pages optimized for clear messaging, CTA performance, and trust signals.',
    },
    {
      title: 'Bug Fixing & Performance Cleanup',
      description: 'Fixes for broken UI, deployment issues, and speed improvements across existing projects.',
    },
  ];

  return (
    <div>
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Practical web solutions for organizations, creators, and growing projects.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
