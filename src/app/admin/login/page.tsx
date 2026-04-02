import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isAdminAuthConfigured, isAdminAuthenticated } from '@/lib/admin-auth';
import { loginAdminAction } from './actions';

type LoginPageProps = {
  searchParams?: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const [params, authenticated] = await Promise.all([
    searchParams,
    isAdminAuthenticated(),
  ]);

  if (authenticated) {
    redirect('/admin');
  }

  const error = params?.error;
  const isConfigured = isAdminAuthConfigured();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Enter your admin password to access dashboard controls.
        </p>

        {!isConfigured && (
          <div className="mb-6 rounded-lg border border-dashed border-amber-400 bg-amber-50 dark:bg-amber-900/20 p-4 text-sm text-amber-800 dark:text-amber-300">
            Set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` in `.env.local`, then restart the
            server.
          </div>
        )}

        {error === 'invalid' && (
          <div className="mb-6 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-300">
            Invalid password. Please try again.
          </div>
        )}

        {error === 'config' && (
          <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-900/20 p-4 text-sm text-amber-700 dark:text-amber-300">
            Admin auth is not configured yet.
          </div>
        )}

        <form action={loginAdminAction} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter admin password"
            />
          </div>
          <button
            type="submit"
            disabled={!isConfigured}
            className="w-full rounded-lg bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

