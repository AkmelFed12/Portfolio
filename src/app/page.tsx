import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import FAQSection from '@/components/FAQSection';
import TrackedWhatsAppButton from '@/components/TrackedWhatsAppButton';
import ConversionStrip from '@/components/ConversionStrip';
import { getProjectsPublic } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Portfolio de Ladji Moussa OUATTARA, etudiant en informatique et developpeur full-stack.',
  openGraph: {
    title: 'Ladji Moussa OUATTARA | Portfolio',
    description:
      'Etudiant en informatique, developpeur full-stack et disponible pour des opportunites de stage en 2026.',
    images: ['/og-home.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladji Moussa OUATTARA | Portfolio',
    description:
      'Etudiant en informatique, developpeur full-stack et disponible pour des opportunites de stage en 2026.',
    images: ['/og-home.svg'],
  },
};

export default async function Home() {
  const lang = 'fr' as const;
  const projects = await getProjectsPublic();
  const featuredProjects = [...projects].sort((a, b) => {
    if (a.slug === 'afropulse') return -1;
    if (b.slug === 'afropulse') return 1;
    return 0;
  }).slice(0, 3);
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
          achievement1: 'Livraison et evolution continue de projets full-stack concrets.',
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
          role: 'Etudiant en informatique | Developpeur Full-Stack',
          summary:
            'Je construis des projets full-stack utiles, avec un focus sur une UX claire, la fiabilite backend et l amelioration continue.',
          ctaWork: 'Voir mes projets',
          ctaContact: 'Me contacter',
          ctaWhatsApp: 'WhatsApp direct',
          featured: 'Projets recents',
          viewAll: 'Voir tous les projets',
          goals: 'Objectifs de stage (2026 - 2028)',
          goalsSubtitle:
            'Je recherche un stage pour apprendre sur des produits concrets, contribuer activement et progresser avec une equipe experimentee.',
          goal1: 'Contribuer a des fonctionnalites frontend et backend en production.',
          goal2: 'Renforcer mes pratiques : qualite, architecture et collaboration Git.',
          goal3: 'Progresser avec rigueur et un impact mesurable sur des projets reels.',
          internshipTitle: 'Disponible pour un stage en 2026',
          internshipText:
            'Ouvert aux opportunites ou je peux contribuer a un vrai produit tout en apprenant aupres d ingenieurs experimentes.',
          internshipCta1: 'Me contacter',
          internshipCta2: 'Telecharger le CV',
          internshipCta3: 'Discuter sur WhatsApp',
          achievementsTitle: 'Realisations 2026',
          achievement1Date: 'Fevrier 2026',
          achievement1: 'Shipped and iterated practical full-stack projects.',
          achievement2Date: 'Mars 2026',
          achievement2: 'Upgraded portfolio UX with SEO, schema, sitemap, and FAQ.',
          achievement3Date: 'Avril 2026',
          achievement3: 'Implemented conversion analytics for WhatsApp, CV, and contact flow.',
          techTitle: 'Technologies que j utilise le plus',
          techSubtitle: 'Stack principale utilisee au quotidien',
          badge1: 'Diplome prevu : 2028',
          badge2: 'Disponible pour un stage',
          badge3: 'Ouvert aux collaborations',
          availabilityNote: 'Disponible actuellement pour 2 nouveaux projets ce mois-ci',
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
      'https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ladji Moussa OUATTARA Portfolio',
    url: siteUrl,
    inLanguage: 'fr-FR',
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
      <section className="relative overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_12%_82%,_rgba(15,124,140,0.10),_transparent_28%)]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm dark:border-cyan-900 dark:bg-slate-900/80 dark:text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Disponible pour de nouvelles opportunites
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Developpement web Full-Stack
            </p>
            <h1 className="text-balance text-5xl font-extrabold leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Ladji Moussa OUATTARA
            </h1>
            <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-700 dark:text-slate-200 sm:text-2xl">
              {t.role}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {t.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary focus-ring w-full sm:w-auto">
                {t.ctaWork}
              </Link>
              <Link href="/contact" className="btn-secondary focus-ring w-full sm:w-auto">
                {t.ctaContact}
              </Link>
              <TrackedWhatsAppButton
                label={t.ctaWhatsApp}
                source="hero_primary_cta"
                className="btn-accent focus-ring w-full sm:w-auto"
              />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-5 rounded-[2rem] border border-cyan-200/60 bg-cyan-100/20 blur-sm dark:border-cyan-900/50 dark:bg-cyan-950/10" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/images/ladji-moussa-profile.jpeg"
                alt="Portrait de Ladji Moussa OUATTARA"
                width={480}
                height={600}
                priority
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/40 bg-slate-950/85 p-4 text-white backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Actuellement</p>
                <p className="mt-1 font-semibold">Disponible pour un stage & des collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
              Developpement
            </p>
            <h2 className="mb-2 text-xl font-bold">Du besoin au produit</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Interfaces responsives, logique metier et deploiement dans une meme approche.
            </p>
          </article>
          <article className="surface-card p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
              Approche
            </p>
            <h2 className="mb-2 text-xl font-bold">Simple, utile, evolutif</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Je privilegie une experience claire, une base fiable et des ameliorations mesurables.
            </p>
          </article>
          <article className="surface-card p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
              Collaboration
            </p>
            <h2 className="mb-2 text-xl font-bold">Un echange transparent</h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Brief clair, jalons courts et communication directe du premier contact a la livraison.
            </p>
          </article>
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
                github={project.github}
                image={project.image}
                mobileImage={project.mobileImage}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
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
              href="/contact"
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

    </div>
  );
}
