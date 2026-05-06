import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import FAQSection from '@/components/FAQSection';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';
import ConversionStrip from '@/components/ConversionStrip';
import { getProjectsPublic } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Portfolio homepage of Ladji Moussa OUATTARA, BS Computer Science student, full-stack learner, and internship-ready developer in 2026.',
  openGraph: {
    title: 'Ladji Moussa OUATTARA | Portfolio',
    description:
      'BS Computer Science student, full-stack learner, and available for internship opportunities in 2026.',
    images: ['/og-home.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladji Moussa OUATTARA | Portfolio',
    description:
      'BS Computer Science student, full-stack learner, and available for internship opportunities in 2026.',
    images: ['/og-home.svg'],
  },
};

type HomePageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = params?.lang === 'fr' ? 'fr' : 'en';
  const projects = await getProjectsPublic();
  const featuredProjects = projects.slice(0, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lmoportfolio.vercel.app';

  const t =
    lang === 'fr'
      ? {
          role: 'Etudiant BS Computer Science | Apprenant Full-Stack',
          summary:
            "Je construis des projets full-stack utiles qui repondent a des besoins reels, avec un focus sur la clarte, la fiabilite backend et l'amelioration continue.",
          ctaWork: 'Voir mes projets',
          ctaContact: 'Me contacter',
          ctaWhatsApp: 'WhatsApp Direct',
          featured: 'Projets Phares',
          viewAll: 'Voir tous les projets',
          goals: 'Objectifs de Stage (2026 - 2028)',
          goalsSubtitle:
            "Je recherche un stage pour apprendre sur des projets concrets, contribuer activement et progresser avec une equipe exigeante.",
          goal1: 'Contribuer a des fonctionnalites frontend/backend en environnement reel.',
          goal2: 'Renforcer les bonnes pratiques: qualite, architecture, collaboration Git.',
          goal3: 'Developper une vraie rigueur d\'ingenierie logicielle orientee impact.',
          internshipTitle: 'Disponible pour un stage en 2026',
          internshipText:
            "Ouvert aux opportunites de stage pour contribuer sur de vrais produits et progresser aux cotes d'une equipe experimentee.",
          internshipCta1: 'Me contacter',
          internshipCta2: 'Telecharger CV',
          internshipCta3: 'Discuter sur WhatsApp',
          achievementsTitle: 'Realisations 2026',
          achievement1Date: 'Fevrier 2026',
          achievement1: 'Mise en production et evolution continue du projet ASAA Portal.',
          achievement2Date: 'Mars 2026',
          achievement2: 'Amelioration UX de portfolio avec SEO, schema, sitemap et FAQ.',
          achievement3Date: 'Avril 2026',
          achievement3: 'Mise en place analytics conversion (WhatsApp, CV, contact).',
          techTitle: 'Technologies que j\'utilise le plus',
          techSubtitle: 'Stack principale en pratique quotidienne',
          badge1: 'Diplome prevu: 2028',
          badge2: 'Disponible pour stage',
          badge3: 'Ouvert aux collaborations',
          availabilityNote: 'Actuellement disponible pour 2 nouveaux projets ce mois-ci',
        }
      : {
          role: 'BS Computer Science Student | Full-Stack Learner',
          summary:
            'Building practical full-stack projects that solve real community needs, with strong focus on clean UX, backend reliability, and continuous improvement.',
          ctaWork: 'View My Work',
          ctaContact: 'Get In Touch',
          ctaWhatsApp: 'WhatsApp Direct',
          featured: 'Featured Projects',
          viewAll: 'View All Projects',
          goals: 'Internship Goals (2026 - 2028)',
          goalsSubtitle:
            'I am looking for an internship to learn on real product teams, contribute meaningfully, and grow through strong engineering mentorship.',
          goal1: 'Contribute to real frontend and backend features in production workflows.',
          goal2: 'Strengthen engineering habits: code quality, architecture, and Git collaboration.',
          goal3: 'Grow as a disciplined learner with measurable impact on real projects.',
          internshipTitle: 'Available for Internship 2026',
          internshipText:
            'Open to internship opportunities where I can contribute to real product development while learning from experienced engineers.',
          internshipCta1: 'Contact Me',
          internshipCta2: 'Download CV',
          internshipCta3: 'Chat on WhatsApp',
          achievementsTitle: 'Featured Achievements 2026',
          achievement1Date: 'February 2026',
          achievement1: 'Shipped and iterated ASAA Portal in production environment.',
          achievement2Date: 'March 2026',
          achievement2: 'Upgraded portfolio UX with SEO, schema, sitemap, and FAQ.',
          achievement3Date: 'April 2026',
          achievement3: 'Implemented conversion analytics for WhatsApp, CV, and contact flow.',
          techTitle: 'Tech I Use Most',
          techSubtitle: 'Primary stack I use in day-to-day project delivery',
          badge1: 'Expected Graduation: 2028',
          badge2: 'Available for Internship',
          badge3: 'Open to Collaboration',
          availabilityNote: 'Currently available for 2 new projects this month',
        };

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ladji Moussa OUATTARA',
    url: siteUrl,
    jobTitle: 'BS Computer Science Student | Full-Stack Learner',
    email: 'mailto:ouattaralm12@gmail.com',
    telephone: '+2250574724233',
    sameAs: [
      'https://github.com/AkmelFed12',
      'https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ladji Moussa OUATTARA Portfolio',
    url: siteUrl,
    inLanguage: 'en',
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <section className="min-h-[60vh] bg-slate-50 dark:bg-slate-950 border-b border-slate-200/70 dark:border-slate-800 flex items-center justify-center py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-5 sm:mb-6 animate-slide-down">
            Ladji Moussa OUATTARA
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-slate-200 mb-6 animate-slide-up">{t.role}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {t.badge1}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {t.badge2}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {t.badge3}
            </span>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            {t.summary}
          </p>
          <p className="mb-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200">
            {t.availabilityNote}
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap stagger-item-1">
            <Link
              href={lang === 'fr' ? '/projects?lang=fr' : '/projects'}
              className="btn-primary focus-ring w-full sm:w-auto"
            >
              {t.ctaWork}
            </Link>
            <Link
              href={lang === 'fr' ? '/contact?lang=fr' : '/contact'}
              className="btn-secondary focus-ring w-full sm:w-auto"
            >
              {t.ctaContact}
            </Link>
            <TrackedWhatsAppButton
              label={t.ctaWhatsApp}
              source="hero_primary_cta"
              className="btn-accent focus-ring w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">{t.featured}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`stagger-item-${index + 1}`}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                caseStudyLink={`/projects/${project.slug}`}
                link={project.link}
                image={project.image}
                mobileImage={project.mobileImage}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={lang === 'fr' ? '/projects?lang=fr' : '/projects'}
            className="btn-secondary focus-ring w-full sm:w-auto"
          >
            {t.viewAll} →
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="surface-card p-5 sm:p-8">
          <h2 className="text-3xl font-bold mb-2">{t.goals}</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">{t.goalsSubtitle}</p>
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="surface-card-soft p-4 text-slate-700 dark:text-slate-200">{t.goal1}</li>
            <li className="surface-card-soft p-4 text-slate-700 dark:text-slate-200">{t.goal2}</li>
            <li className="surface-card-soft p-4 text-slate-700 dark:text-slate-200">{t.goal3}</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="surface-card-soft p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-100">
            {t.internshipTitle}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-5">{t.internshipText}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={lang === 'fr' ? '/contact?lang=fr' : '/contact'}
              className="btn-primary focus-ring px-5 py-2.5"
            >
              {t.internshipCta1}
            </Link>
            <a
              href="/CV_LADJI_MOUSSA_OUATTARA.pdf"
              download
              className="btn-secondary focus-ring px-5 py-2.5"
            >
              {t.internshipCta2}
            </a>
            <TrackedWhatsAppButton
              label={t.internshipCta3}
              source="internship_section_cta"
              className="btn-accent focus-ring px-5 py-2.5"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">{t.achievementsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <article className="surface-card p-5">
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{t.achievement1Date}</p>
            <p className="text-gray-700 dark:text-slate-200">{t.achievement1}</p>
          </article>
          <article className="surface-card p-5">
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{t.achievement2Date}</p>
            <p className="text-gray-700 dark:text-slate-200">{t.achievement2}</p>
          </article>
          <article className="surface-card p-5">
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{t.achievement3Date}</p>
            <p className="text-gray-700 dark:text-slate-200">{t.achievement3}</p>
          </article>
        </div>
      </section>

      <ConversionStrip lang={lang} />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h2 className="text-4xl font-bold mb-3 text-center">{t.techTitle}</h2>
        <p className="text-center text-gray-600 dark:text-slate-300 mb-10">{t.techSubtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase', 'PostgreSQL', 'Vercel'].map((tech) => (
            <div key={tech} className="surface-card-soft p-4">
              <p className="font-semibold text-gray-900 dark:text-white">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection lang={lang} />

      <NewsletterSignup />
    </div>
  );
}






