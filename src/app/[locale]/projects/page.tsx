import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectVisual from '@/components/ProjectVisual';
import { dictionary } from '@/content/dictionary';
import { isLocale, localizedPath, projects, type Locale } from '@/content/portfolio';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value)) return {};
  const locale = value as Locale;
  return { title: dictionary[locale].projects.title, description: dictionary[locale].projects.intro };
}

export default async function LocalizedProjects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();
  const locale = value as Locale;
  const t = dictionary[locale];
  return <div><section className="page-intro"><div className="shell"><p className="eyebrow">{t.projects.eyebrow}</p><h1>{t.projects.title}</h1><p>{t.projects.intro}</p></div></section><section className="section shell"><div className="project-list">{projects.map((project) => <article className="project-row" key={project.id}><ProjectVisual src={project.image} alt={`${project.title} preview`} /><div className="project-row-body"><div className="project-row-top"><p className="project-number">0{project.id}</p><h2>{project.title}</h2></div><p>{project.copy[locale].description}</p><div className="tag-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="inline-actions"><Link className="text-link" href={localizedPath(locale, `/projects/${project.slug}`)}>{t.projects.eyebrow} ↗</Link>{project.link ? <a className="text-link" href={project.link} target="_blank" rel="noreferrer">{t.projects.visit} ↗</a> : <span className="muted">{t.projects.unavailable}</span>}{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">{t.projects.repository} ↗</a>}</div></div></article>)}</div></section></div>;
}
