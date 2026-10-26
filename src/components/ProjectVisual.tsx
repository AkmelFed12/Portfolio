import Image from 'next/image';

export default function ProjectVisual({ src, alt, title, caption = 'Selected project' }: { src?: string; alt: string; title?: string; caption?: string }) {
  if (!src) return <div className="project-visual project-visual-empty" role="img" aria-label={`${title || alt} — ${caption}`}>
    <span className="project-cover-grid" aria-hidden="true" />
    <span className="project-cover-orbit" aria-hidden="true" />
    <div className="project-cover-copy"><span className="project-cover-label">{caption}</span><strong>{title || alt}</strong><span className="project-cover-mark" aria-hidden="true">LMO<span>®</span></span></div>
  </div>;
  return <div className="project-visual"><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /></div>;
}
