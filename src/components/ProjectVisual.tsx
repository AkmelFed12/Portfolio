import Image from 'next/image';

export default function ProjectVisual({ src, alt, unavailableLabel = 'Preview unavailable' }: { src?: string; alt: string; unavailableLabel?: string }) {
  if (!src) return <div className="project-visual project-visual-empty"><span>{unavailableLabel}</span></div>;
  return <div className="project-visual"><Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" /></div>;
}
