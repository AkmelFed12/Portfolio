import Image from 'next/image';

export default function ProjectVisual({ src, alt }: { src?: string; alt: string }) {
  if (!src) return <div className="project-visual project-visual-empty" aria-label={alt}><span>Preview unavailable</span></div>;
  return <div className="project-visual"><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /></div>;
}
