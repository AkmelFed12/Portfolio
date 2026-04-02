import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
            Back Home
          </Link>
          <Link href="/projects" className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
