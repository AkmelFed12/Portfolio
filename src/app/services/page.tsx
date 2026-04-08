import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web services offered by Ladji Moussa OUATTARA including websites, dashboards, and maintenance.',
  openGraph: {
    title: 'Services | Ladji Moussa OUATTARA',
    description: 'Portfolio websites, full-stack apps, landing pages, and maintenance services.',
    images: ['/og-services.svg'],
  },
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
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Services
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200">
            Practical web solutions for organizations, creators, and growing projects.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
              <p className="text-gray-700 dark:text-slate-200">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}



