export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <div className="bg-[#f4f0e8] border-y border-[#e6dcc8] text-center py-3">
        <p className="tracking-[0.12em] sm:tracking-[0.24em] text-[#b08a3e] text-xs sm:text-lg font-semibold px-2">
          DESIGN & CREATED BY LMO WEB SERVICES
        </p>
      </div>
      <div className="bg-slate-900 dark:bg-slate-950 text-white text-center py-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
        <p className="text-slate-400 mb-4">
          © {currentYear} Ladji Moussa OUATTARA. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/AkmelFed12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}

