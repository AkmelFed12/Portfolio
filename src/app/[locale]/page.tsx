import Image from 'next/image';
import Link from 'next/link';
import ProjectVisual from '@/components/ProjectVisual';
import { dictionary } from '@/content/dictionary';
import { localizedPath, projects, site, type Locale } from '@/content/portfolio';

export default async function LocalizedHome({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = dictionary[locale];
  const featured = projects.slice(0, 3);

  return <div>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy hero-reveal">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="hero-intro">{t.home.intro}</p>
          <ul className="hero-focus" aria-label={locale === 'en' ? 'Areas of work' : 'Domaines de projets'}>
            {t.home.focusAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>
          <div className="hero-actions">
            <Link className="button" href={localizedPath(locale, '/projects')}>{t.home.primary}<span aria-hidden="true">↗</span></Link>
            <a className="button button-quiet" href={`mailto:${site.email}`}>{t.home.secondary}<span aria-hidden="true">↗</span></a>
          </div>
          <p className="availability"><span className="status-dot" />{t.home.availability}</p>
        </div>
        <div className="hero-aside hero-reveal hero-reveal-late">
          <div className="portrait-frame">
            <Image src="/images/ladji-moussa-profile.jpeg" alt="Ladji Moussa OUATTARA" fill priority sizes="(max-width: 800px) 82vw, (max-width: 1100px) 38vw, 34vw" className="object-cover" />
          </div>
          <div className="hero-note"><span>01</span><p>{t.home.note}</p></div>
          <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
        </div>
      </div>
    </section>

    <section className="section shell">
      <div className="section-heading section-reveal">
        <div><p className="eyebrow">{t.home.selected}</p><h2>{t.home.selectedIntro}</h2></div>
        <Link className="text-link" href={localizedPath(locale, '/projects')}>{t.home.allWork} ↗</Link>
      </div>
      <div className="project-grid project-grid-reveal">
        {featured.map((project, index) => <article className={`project-card ${index === 0 ? 'project-card-featured' : ''}`} key={project.id}>
          <ProjectVisual src={project.image} alt={`${project.title} preview`} title={project.title} caption={t.home.projectCoverLabel} />
          <div className="project-card-body">
            <div className="project-card-topline"><p className="project-number">0{index + 1}</p>{project.category && <span className="project-category">{project.category}</span>}</div>
            <h3>{project.title}</h3>
            <p>{project.copy[locale].description}</p>
            {project.tech.length > 0 && <div className="tag-row">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>}
            <Link className="text-link project-card-link" href={localizedPath(locale, `/projects/${project.slug}`)}>{t.projects.details} <span aria-hidden="true">↗</span></Link>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section section-tinted"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">{t.home.approach}</p><h2>{t.home.approachIntro}</h2></div></div>
      <div className="principle-grid">{t.home.points.map(([title, text], index) => <article key={title} className="principle"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="section shell"><div className="contact-banner">
      <div><p className="eyebrow">{t.home.conversation}</p><h2>{t.home.contactTitle}</h2><p>{t.home.contactText}</p></div>
      <div className="contact-banner-actions">
        <a className="button button-light" href={`mailto:${site.email}`}>{t.home.secondary}<span aria-hidden="true">↗</span></a>
        <Link className="contact-banner-link" href={localizedPath(locale, '/contact')}>{t.home.contactCta} <span aria-hidden="true">↗</span></Link>
      </div>
    </div></section>
  </div>;
}
