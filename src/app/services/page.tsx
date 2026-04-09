import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web services offered by Ladji Moussa OUATTARA including websites, dashboards, and maintenance.',
  keywords: ['Web services', 'Portfolio website', 'Landing page', 'Full-stack app', 'LMO Web Services'],
  alternates: {
    canonical: '/services',
    languages: {
      'en-US': '/services',
      'fr-FR': '/services?lang=fr',
    },
  },
  openGraph: {
    title: 'Services | Ladji Moussa OUATTARA',
    description: 'Portfolio websites, full-stack apps, landing pages, and maintenance services.',
    url: '/services',
    images: ['/og-services.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Ladji Moussa OUATTARA',
    description: 'Portfolio websites, full-stack apps, landing pages, and maintenance services.',
    images: ['/og-services.svg'],
  },
};

type ServicesPageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = await searchParams;
  const lang = params?.lang === 'fr' ? 'fr' : 'en';
  const withLang = (path: string) => (lang === 'fr' ? `${path}?lang=fr` : path);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lmoportfolio.vercel.app';

  const t =
    lang === 'fr'
      ? {
          title: 'Services',
          subtitle: 'Solutions web pratiques pour organisations, createurs et projets en croissance.',
          reply: 'Reponse habituelle en moins de 24h via WhatsApp.',
          availabilityNote: 'Disponible actuellement pour 2 nouveaux projets ce mois-ci.',
          blockTitle: 'Ce Que Je Peux Construire Pour Vous',
          pricingTitle: 'Offres & Tarifs',
          starterFor: 'Landing page simple ou portfolio',
          growthFor: 'Site business avec meilleure conversion',
          customFor: 'Projet full-stack sur mesure avec workflow specifique',
          starterIncludes: ['1 a 3 pages', 'Design responsive', 'SEO de base', 'Integration WhatsApp / contact'],
          growthIncludes: [
            "Jusqu'a 8 pages",
            'Sections optimisees conversion',
            'Optimisation performance',
            'Support de deployment',
          ],
          customIncludes: ['Architecture adaptee', 'Fonctionnalites avancees', 'Livraison par jalons', 'Support post-lancement'],
          choose: 'Choisir',
          ready: 'Pret a demarrer ?',
          readyText: "Envoie ton brief et je reviens avec perimetre, delai et prochaines etapes.",
          startBrief: 'Commencer le Brief Projet',
          whatsapp: 'Discuter sur WhatsApp',
          services: [
            {
              title: 'Sites Portfolio & Business',
              description: 'Sites modernes et responsives avec UI propre, support bilingue et structure SEO.',
            },
            {
              title: 'Applications Web Full-Stack',
              description: 'Developpement sur mesure avec frontend React/Next.js et logique backend robuste.',
            },
            {
              title: 'Landing Pages & Conversion',
              description: 'Pages rapides optimisees pour messaging clair, performance CTA et confiance.',
            },
            {
              title: 'Correction Bugs & Performance',
              description: 'Correction UI/deploiement et amelioration vitesse sur projets existants.',
            },
          ],
        }
      : {
          title: 'Services',
          subtitle: 'Practical web solutions for organizations, creators, and growing projects.',
          reply: 'Typical first reply in under 24h via WhatsApp.',
          availabilityNote: 'Currently available for 2 new projects this month.',
          blockTitle: 'What I Can Build For You',
          pricingTitle: 'Packages & Pricing',
          starterFor: 'Simple landing pages or portfolio setup',
          growthFor: 'Business website with stronger conversion',
          customFor: 'Custom full-stack project with specific workflow',
          starterIncludes: ['1 to 3 pages', 'Responsive design', 'Basic SEO setup', 'WhatsApp / contact integration'],
          growthIncludes: ['Up to 8 pages', 'Conversion-focused sections', 'Performance optimization', 'Deployment support'],
          customIncludes: ['Tailored architecture', 'Advanced features', 'Milestone-based delivery', 'Post-launch support'],
          choose: 'Choose',
          ready: 'Ready To Start?',
          readyText: 'Send your brief and I will reply with scope, timeline, and next steps.',
          startBrief: 'Start Project Brief',
          whatsapp: 'Discuss on WhatsApp',
          services: [
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
          ],
        };

  const packages = [
    { name: 'Starter', price: '$150 - $300', for: t.starterFor, includes: t.starterIncludes },
    { name: 'Growth', price: '$300 - $700', for: t.growthFor, includes: t.growthIncludes, featured: true },
    { name: 'Custom', price: lang === 'fr' ? 'A partir de $700' : 'From $700', for: t.customFor, includes: t.customIncludes },
  ];
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Services',
    provider: {
      '@type': 'Person',
      name: 'Ladji Moussa OUATTARA',
      url: siteUrl,
    },
    areaServed: 'Worldwide',
    serviceType: ['Portfolio Websites', 'Landing Pages', 'Full-Stack Web Applications'],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, '\\u003c') }}
      />
      <section className="min-h-[40vh] bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-slate-200">
            {t.subtitle}
          </p>
          <p className="text-sm text-cyan-700 dark:text-cyan-300 mt-3 font-semibold">
            {t.reply}
          </p>
          <p className="mt-3 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200">
            {t.availabilityNote}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">{t.blockTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.services.map((service) => (
            <article key={service.title} className="surface-card p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h2>
              <p className="text-gray-700 dark:text-slate-200">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-slate-100">{t.pricingTitle}</h2>
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
                label={`${t.choose} ${pkg.name}`}
                source={`services_package_${pkg.name.toLowerCase()}`}
                className="btn-accent focus-ring w-full"
                message={`Hello Ladji, I am interested in your ${pkg.name} package. Can we discuss details?`}
              />
            </article>
          ))}
        </div>

        <div className="surface-card-soft p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t.ready}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-5">
            {t.readyText}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={withLang('/contact')} className="btn-primary focus-ring w-full sm:w-auto">
              {t.startBrief}
            </Link>
            <TrackedWhatsAppButton
              label={t.whatsapp}
              source="services_bottom_cta"
              className="btn-accent focus-ring w-full sm:w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}



