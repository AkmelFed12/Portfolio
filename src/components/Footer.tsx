export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white text-center py-8 mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-400 mb-4">
          © {currentYear} Ladji Moussa OUATTARA. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/AkmelFed12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ladji-moussa-ouattara-8b5778298"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
