import { getPosts, getProjects, getTestimonials } from '@/lib/admin';
import { isDbEnabled } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import {
  createPostAction,
  updatePostAction,
  deletePostAction,
  createProjectAction,
  updateProjectAction,
  deleteProjectAction,
  createTestimonialAction,
  updateTestimonialAction,
  deleteTestimonialAction,
} from './actions';
import { logoutAdminAction } from './login/actions';

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect('/admin/login');
  }

  const posts = await getPosts();
  const projects = await getProjects();
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-slate-300">
              Manage blog posts, projects, and testimonials without editing code.
            </p>
          </div>
          <form action={logoutAdminAction}>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Logout
            </button>
          </form>
        </div>

        {!isDbEnabled && (
          <div className="mb-10 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-6 text-gray-700 dark:text-slate-200">
            <p className="font-semibold mb-2">Database not configured yet.</p>
            <p>
              Add your Neon connection string to <code className="px-1">DATABASE_URL</code> in
              <code className="px-1">.env.local</code>, then refresh this page.
            </p>
          </div>
        )}

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
          <div className="grid gap-6">
            {posts.map((post) => (
              <form
                key={post.id}
                action={updatePostAction}
                className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 space-y-4"
              >
                <input type="hidden" name="id" value={post.id} />
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="title"
                    defaultValue={post.title}
                    placeholder="Title"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <input
                    name="slug"
                    defaultValue={post.slug}
                    placeholder="Slug"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                </div>
                <textarea
                  name="excerpt"
                  defaultValue={post.excerpt}
                  placeholder="Excerpt"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <textarea
                  name="content"
                  defaultValue={post.content}
                  placeholder="Content (use new lines for paragraphs)"
                  rows={6}
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    name="category"
                    defaultValue={post.category}
                    placeholder="Category"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <input
                    name="readTime"
                    defaultValue={post.read_time}
                    placeholder="Read time"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <input
                    name="author"
                    defaultValue={post.author}
                    placeholder="Author"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="publishedAt"
                    defaultValue={post.published_at || ''}
                    placeholder="YYYY-MM-DD"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      formAction={deletePostAction}
                      className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            ))}
          </div>

          <form
            action={createPostAction}
            className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">Add New Post</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="title"
                placeholder="Title"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
              <input
                name="slug"
                placeholder="Slug (optional)"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
            </div>
            <textarea
              name="excerpt"
              placeholder="Excerpt"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <textarea
              name="content"
              placeholder="Content (use new lines for paragraphs)"
              rows={6}
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <div className="grid md:grid-cols-3 gap-4">
              <input
                name="category"
                placeholder="Category"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
              <input
                name="readTime"
                placeholder="Read time"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
              <input
                name="author"
                placeholder="Author"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
            </div>
            <input
              name="publishedAt"
              placeholder="YYYY-MM-DD"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Create Post
            </button>
          </form>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <form
                key={project.id}
                action={updateProjectAction}
                className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 space-y-4"
              >
                <input type="hidden" name="id" value={project.id} />
                <input
                  name="title"
                  defaultValue={project.title}
                  placeholder="Title"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <textarea
                  name="description"
                  defaultValue={project.description}
                  placeholder="Description"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <input
                  name="tech"
                  defaultValue={project.tech}
                  placeholder="Tech (comma separated)"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="link"
                    defaultValue={project.link || ''}
                    placeholder="Live link"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <input
                    name="github"
                    defaultValue={project.github || ''}
                    placeholder="GitHub link"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                </div>
                <input
                  name="image"
                  defaultValue={project.image || ''}
                  placeholder="Image path (e.g. /images/project.svg)"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    formAction={deleteProjectAction}
                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </form>
            ))}
          </div>

          <form
            action={createProjectAction}
            className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">Add New Project</h3>
            <input
              name="title"
              placeholder="Title"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <input
              name="tech"
              placeholder="Tech (comma separated)"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="link"
                placeholder="Live link"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
              <input
                name="github"
                placeholder="GitHub link"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
            </div>
            <input
              name="image"
              placeholder="Image path (e.g. /images/project.svg)"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Create Project
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <form
                key={testimonial.id}
                action={updateTestimonialAction}
                className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 space-y-4"
              >
                <input type="hidden" name="id" value={testimonial.id} />
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    name="name"
                    defaultValue={testimonial.name}
                    placeholder="Name"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <input
                    name="company"
                    defaultValue={testimonial.company || ''}
                    placeholder="Company"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                  <input
                    name="role"
                    defaultValue={testimonial.role}
                    placeholder="Role"
                    className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                  />
                </div>
                <textarea
                  name="quote"
                  defaultValue={testimonial.quote}
                  placeholder="Quote"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <input
                  name="rating"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue={testimonial.rating}
                  placeholder="Rating (1-5)"
                  className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Update
                  </button>
                  <button
                    formAction={deleteTestimonialAction}
                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </form>
            ))}
          </div>

          <form
            action={createTestimonialAction}
            className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold">Add New Testimonial</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
              <input
                name="company"
                placeholder="Company"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
              <input
                name="role"
                placeholder="Role"
                className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
              />
            </div>
            <textarea
              name="quote"
              placeholder="Quote"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              className="w-full px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Create Testimonial
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}


