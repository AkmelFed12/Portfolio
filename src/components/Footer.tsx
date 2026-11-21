import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-bold">Ladji Moussa OUATTARA</p>
            <p className="mt-1 text-sm text-slate-400">Developpeur full-stack • LMO SERVICES</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/projects" className="text-slate-300 transition hover:text-cyan-300">Projets</Link>
            <Link href="/services" className="text-slate-300 transition hover:text-cyan-300">Services</Link>
            <Link href="/blog" className="text-slate-300 transition hover:text-cyan-300">Blog</Link>
            <Link href="/contact" className="text-slate-300 transition hover:text-cyan-300">Contact</Link>
          <a
            href="https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {currentYear} Ladji Moussa OUATTARA. Tous droits reserves.
        </p>
      </div>
    </footer>
  );
}
