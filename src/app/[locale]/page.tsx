import Image from 'next/image';
import Link from 'next/link';
import ProjectVisual from '@/components/ProjectVisual';
import { dictionary } from '@/content/dictionary';
import { localizedPath, projects, type Locale } from '@/content/portfolio';

export default async function LocalizedHome({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = dictionary[locale];
  const featured = projects.slice(0, 3);
  return <div>
    <section className="hero"><div className="shell hero-grid"><div className="hero-copy"><p className="eyebrow">{t.home.eyebrow}</p><h1>{t.home.title}</h1><p className="hero-intro">{t.home.intro}</p><div className="hero-actions"><Link className="button" href={localizedPath(locale, '/projects')}>{t.home.primary} <span aria-hidden="true">↗</span></Link><Link className="button button-quiet" href={localizedPath(locale, '/contact')}>{t.home.secondary}</Link></div><p className="availability"><span className="status-dot" />{t.home.availability}</p></div><div className="hero-aside"><div className="portrait-frame"><Image src="/images/ladji-moussa-profile.jpeg" alt="Ladji Moussa OUATTARA" fill priority sizes="(max-width: 800px) 80vw, 34vw" className="object-cover" /></div><div className="hero-note"><span>01</span><p>{locale === 'en' ? 'From idea to usable product.' : 'De l’idée au produit utilisable.'}</p></div></div></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">{t.home.selected}</p><h2>{t.home.selectedIntro}</h2></div><Link className="text-link" href={localizedPath(locale, '/projects')}>{t.home.allWork} ↗</Link></div><div className="project-grid">{featured.map((project, index) => <article className={`project-card ${index === 0 ? 'project-card-featured' : ''}`} key={project.id}><ProjectVisual src={project.image} alt={`${project.title} preview`} /><div className="project-card-body"><p className="project-number">0{index + 1}</p><h3>{project.title}</h3><p>{project.copy[locale].description}</p><div className="tag-row">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><a className="text-link" href={project.link} target="_blank" rel="noreferrer">{t.projects.visit} ↗</a></div></article>)}</div></section>
    <section className="section section-tinted"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{t.home.approach}</p><h2>{t.home.approachIntro}</h2></div></div><div className="principle-grid">{t.home.points.map(([title, text], index) => <article key={title} className="principle"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section shell"><div className="contact-banner"><div><p className="eyebrow">{locale === 'en' ? 'Open conversation' : 'Échangeons'}</p><h2>{t.home.contactTitle}</h2><p>{t.home.contactText}</p></div><Link className="button" href={localizedPath(locale, '/contact')}>{t.home.contactCta} ↗</Link></div></section>
  </div>;
}
