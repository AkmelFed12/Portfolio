import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectVisual from '@/components/ProjectVisual';
import { dictionary } from '@/content/dictionary';
import { getProject, getSiteUrl, localizedAlternates, localizedPath, projects, type Locale } from '@/content/portfolio';

export function generateStaticParams() {
  return (['en', 'fr'] as const).flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.copy[locale].description,
    alternates: localizedAlternates(locale, `/projects/${project.slug}`),
    openGraph: {
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      title: project.title,
      description: project.copy[locale].description,
      url: `${getSiteUrl()}/${locale}/projects/${project.slug}`,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const t = dictionary[locale];

  return (
    <div>
      <section className="page-intro">
        <div className="shell">
          <Link className="text-link" href={localizedPath(locale, '/projects')}>← {t.project.back}</Link>
          <p className="eyebrow">{t.project.overview}</p>
          <h1>{project.title}</h1>
          <p>{project.copy[locale].description}</p>
          {(project.link || project.github) && <div className="case-study-proof" aria-label={locale === 'fr' ? 'Liens du projet' : 'Project links'}>
            <span className="case-study-proof-label">{locale === 'fr' ? 'À consulter' : 'Explore'}</span>
            {project.link && <a className="button" href={project.link} target="_blank" rel="noreferrer">{t.projects.visit}<span aria-hidden="true"> ↗</span></a>}
            {project.github && <a className="button button-quiet" href={project.github} target="_blank" rel="noreferrer">{t.projects.repository}<span aria-hidden="true"> ↗</span></a>}
          </div>}
        </div>
      </section>

      <section className="section shell case-study-layout" aria-label={project.title}>
        <div className="case-study-main">
          <article className="case-study-objective" aria-labelledby="case-study-objective-title">
            <p className="eyebrow">01 / {t.project.objective}</p>
            <h2 id="case-study-objective-title">{t.project.objective}</h2>
            <p className="large-copy">{project.copy[locale].objective}</p>
          </article>

          <section className="case-study-scope" aria-labelledby="case-study-scope-title">
            <p className="eyebrow">02 / {t.project.scope}</p>
            <h2 id="case-study-scope-title">{t.project.scope}</h2>
            {project.copy[locale].features.length > 0 && (
              <ul className="feature-list">
                {project.copy[locale].features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            )}
          </section>

          {project.tech.length > 0 && (
            <section className="case-study-tech" aria-label={t.project.stack}>
              <p className="eyebrow">03 / {t.project.stack}</p>
              <div className="tag-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </section>
          )}

        </div>

        <aside className="case-study-sidebar">
          <ProjectVisual
            src={project.image}
            mobileSrc={project.mobileImage}
            alt={`${project.title} preview`}
            title={project.title}
            caption={t.home.projectCoverLabel}
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          {project.mobileImage && <p className="caption case-study-preview-note">{locale === 'en' ? 'Desktop and mobile previews' : 'Aperçus ordinateur et mobile'}</p>}
        </aside>
      </section>

      <section className="section shell">
        <div className="contact-banner case-study-contact">
          <div>
            <p className="eyebrow">{t.home.conversation}</p>
            <h2>{t.project.discuss}</h2>
          </div>
          <Link className="button button-light" href={localizedPath(locale, '/contact')}>{t.project.contactCta}<span aria-hidden="true"> ↗</span></Link>
        </div>
      </section>
    </div>
  );
}
