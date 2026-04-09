import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';

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

  const packages = [
    {
      name: 'Starter',
      price: '$150 - $300',
      for: 'Simple landing pages or portfolio setup',
      includes: [
        '1 to 3 pages',
        'Responsive design',
        'Basic SEO setup',
        'WhatsApp / contact integration',
      ],
    },
    {
      name: 'Growth',
      price: '$300 - $700',
      for: 'Business website with stronger conversion',
      includes: [
        'Up to 8 pages',
        'Conversion-focused sections',
        'Performance optimization',
        'Deployment support',
      ],
      featured: true,
    },
    {
      name: 'Custom',
      price: 'From $700',
      for: 'Custom full-stack project with specific workflow',
      includes: [
        'Tailored architecture',
        'Advanced features',
        'Milestone-based delivery',
        'Post-launch support',
      ],
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
          <p className="text-sm text-cyan-700 dark:text-cyan-300 mt-3 font-semibold">
            Typical first reply in under 24h via WhatsApp.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">What I Can Build For You</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article key={service.title} className="surface-card p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
              <p className="text-gray-700 dark:text-slate-200">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">Packages & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`surface-card p-6 ${pkg.featured ? 'ring-2 ring-cyan-500/70 dark:ring-cyan-400/60' : ''}`}
            >
              <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-1">{pkg.name}</p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">{pkg.price}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{pkg.for}</p>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200 mb-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-600 dark:text-cyan-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedWhatsAppButton
                label={`Choose ${pkg.name}`}
                source={`services_package_${pkg.name.toLowerCase()}`}
                className="btn-accent focus-ring w-full"
                message={`Hello Ladji, I am interested in your ${pkg.name} package. Can we discuss details?`}
              />
            </article>
          ))}
        </div>

        <div className="surface-card-soft p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Ready To Start?</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-5">
            Send your brief and I will reply with scope, timeline, and next steps.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary focus-ring w-full sm:w-auto">
              Start Project Brief
            </Link>
            <TrackedWhatsAppButton
              label="Discuss on WhatsApp"
              source="services_bottom_cta"
              className="btn-accent focus-ring w-full sm:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}



