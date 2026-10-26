import Image from 'next/image';

export default function ProjectVisual({ src, mobileSrc, alt, title, caption = 'Selected project', sizes = '(max-width: 700px) 100vw, 50vw' }: { src?: string; mobileSrc?: string; alt: string; title?: string; caption?: string; sizes?: string }) {
  if (!src) return <div className="project-visual project-visual-empty" role="img" aria-label={`${title || alt} — ${caption}`}>
    <span className="project-cover-grid" aria-hidden="true" />
    <span className="project-cover-orbit" aria-hidden="true" />
    <div className="project-cover-copy"><span className="project-cover-label">{caption}</span><strong>{title || alt}</strong><span className="project-cover-mark" aria-hidden="true">LMO<span>®</span></span></div>
  </div>;
  if (mobileSrc) return <div className="project-visual project-device-showcase">
    <div className="project-desktop-screen"><Image src={src} alt={alt} fill sizes={sizes} quality={72} className="object-cover" /></div>
    <div className="project-mobile-device"><div className="project-mobile-screen"><Image src={mobileSrc} alt={`${alt} — mobile`} fill sizes="120px" quality={72} className="object-cover" /></div></div>
  </div>;
  return <div className="project-visual"><Image src={src} alt={alt} fill sizes={sizes} quality={78} className="object-cover" /></div>;
}
