import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProjectVisual from '@/components/ProjectVisual';
import { dictionary } from '@/content/dictionary';
import { getProject, localizedPath, locales, type Locale } from '@/content/portfolio';

export function generateStaticParams() { return locales.flatMap((locale) => [{ locale, slug: 'lmo-quran-learning' }, { locale, slug: 'lmo-digital-academy' }, { locale, slug: 'lmo-services-canada' }, { locale, slug: 'lmo-shop-services' }, { locale, slug: 'afropulse' }]); }
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; const project = getProject(slug); return project ? { title: project.title, description: project.copy[locale].description } : {}; }

export default async function ProjectDetail({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params; const project = getProject(slug); if (!project) notFound(); const t = dictionary[locale];
  return <div><section className="page-intro"><div className="shell"><Link className="text-link" href={localizedPath(locale, '/projects')}>← {t.project.back}</Link><p className="eyebrow">{t.project.overview}</p><h1>{project.title}</h1><p>{project.copy[locale].description}</p></div></section><section className="section shell detail-grid"><div><ProjectVisual src={project.image} alt={`${project.title} preview`} />{project.mobileImage && <p className="caption">{locale === 'en' ? 'Responsive preview asset available in the source portfolio.' : 'Un visuel responsive est disponible dans les ressources du portfolio source.'}</p>}</div><div className="detail-content"><h2>{t.project.features}</h2><ul className="feature-list">{project.copy[locale].features.map((feature) => <li key={feature}>{feature}</li>)}</ul><h2>{t.project.stack}</h2><div className="tag-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="inline-actions">{project.link && <a className="button" href={project.link} target="_blank" rel="noreferrer">{t.projects.visit} ↗</a>}{project.github && <a className="button button-quiet" href={project.github} target="_blank" rel="noreferrer">{t.projects.repository} ↗</a>}</div></div></section></div>;
}
