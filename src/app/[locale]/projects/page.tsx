import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectVisual from '@/components/ProjectVisual';
import { dictionary } from '@/content/dictionary';
import { isLocale, localizedAlternates, localizedPath, projects, type Locale } from '@/content/portfolio';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  return { title: dictionary[locale].projects.title, description: dictionary[locale].projects.intro, alternates: localizedAlternates(locale, '/projects'), openGraph: { locale: locale === 'en' ? 'en_US' : 'fr_FR', title: dictionary[locale].projects.title, description: dictionary[locale].projects.intro } };
}

export default async function LocalizedProjects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const t = dictionary[locale];
  return <div><section className="page-intro"><div className="shell"><p className="eyebrow">{t.projects.eyebrow}</p><h1>{t.projects.title}</h1><p>{t.projects.intro}</p></div></section><section className="section shell"><div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.id}><ProjectVisual src={project.image} alt={`${project.title} preview`} unavailableLabel={locale === 'en' ? 'Preview unavailable' : 'Aperçu indisponible'} /><div className="project-row-body"><div className="project-row-top"><p className="project-number">{String(index + 1).padStart(2, '0')}</p><h2>{project.title}</h2></div><p>{project.copy[locale].description}</p>{project.tech.length > 0 && <div className="tag-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>}<div className="inline-actions"><Link className="text-link" href={localizedPath(locale, `/projects/${project.slug}`)}>{t.projects.details} ↗</Link>{project.link ? <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{t.projects.visit} ↗</a> : <span className="muted">{t.projects.unavailable}</span>}{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">{t.projects.repository} ↗</a>}</div></div></article>)}</div></section></div>;
}
